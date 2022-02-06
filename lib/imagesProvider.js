// Load the required clients and packages
require('dotenv').config();
const { CognitoIdentityClient } = require("@aws-sdk/client-cognito-identity");
const {
  fromCognitoIdentityPool,
} = require("@aws-sdk/credential-provider-cognito-identity");
const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3");

// Initialize the Amazon Cognito credentials provider
const REGION = "na-east-1";
const s3 = new S3Client({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: `na-east-1:${process.env.AWS_IDENTITY_POOL_ID}`,
  }),
});

// A utility function to create HTML.
function getHtml(template) {
  return template.join("\n");
}
// Make the getHTML function available to the browser
window.getHTML = getHtml;

// List the photo albums that exist in the bucket
var albumBucketName = "BUCKET_NAME"; //BUCKET_NAME

// Show the photos that exist in an album
const viewAlbum = async (albumName) => {
  try {
    var albumPhotosKey = encodeURIComponent(albumName) + "/";
    const data = await s3.send(
      new ListObjectsCommand({
        Prefix: albumPhotosKey,
        Bucket: albumBucketName,
      })
    );
    var href = "https://s3." + REGION + ".amazonaws.com/";
    var bucketUrl = href + albumBucketName + "/";
    var photos = data.Contents.map(function (photo) {
      var photoKey = photo.Key;
      var photoUrl = bucketUrl + encodeURIComponent(photoKey);
      return getHtml([
        "<span>",
        "<div>",
        "<br/>",
        '<img style="width:128px;height:128px;" src="' + photoUrl + '"/>',
        "</div>",
        "<div>",
        "<span>",
        photoKey.replace(albumPhotosKey, ""),
        "</span>",
        "</div>",
        "</span>",
      ]);
    });
    var message = photos.length
      ? "<p>The following photos are present.</p>"
      : "<p>There are no photos in this album.</p>";
    var htmlTemplate = [
      "<div>",
      '<button onclick="listAlbums()">',
      "Back To albums",
      "</button>",
      "</div>",
      "<h2>",
      "Album: " + albumName,
      "</h2>",
      message,
      "<div>",
      getHtml(photos),
      "</div>",
      "<h2>",
      "End of album: " + albumName,
      "</h2>",
      "<div>",
      '<button onclick="listAlbums()">',
      "Back To albums",
      "</button>",
      "</div>",
    ];
    document.getElementById("viewer").innerHTML = getHtml(htmlTemplate);
    document
      .getElementsByTagName("img")[0]
      .setAttribute("style", "display:none;");
  } catch (err) {
    return alert("There was an error viewing your album: " + err.message);
  }
};

// Make the viewAlbum function available to the browser
window.viewAlbum = viewAlbum;