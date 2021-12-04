import os
from datetime import datetime


# f = open('/Users/kelwen/Documents/Zettel/Fred Korematsu.md')
# print(f.read())
shouldWriteTheRest = False

files = os.listdir('/Users/kelwen/Documents/aapi/')
print(files)

for fileName in files:
    if (fileName[0] == '.' or 'test' in fileName):
        continue
    fileNameText = ('-'.join(fileName
        .replace('\'','')
        .replace('"','')
        .replace(',','')
        .split('.md')[0].split(' ')) + '.md').lower()
    print(fileName)
    
    shouldWriteTheRest = False
    with open('/Users/kelwen/Documents/aapi/' + fileName) as readFile:
        with open('/Users/kelwen/Documents/aapi/test/' + fileNameText, 'w') as writeFile:
            line = next(readFile)
            cnt = 1
            while line:
                if (shouldWriteTheRest):
                    writeFile.write(line)
                # for title
                if (line[0] == '#'):
                    writeFile.write('---\n')
                    writeFile.write('title: \'' + line.split('# ')[1].strip() + '\'\n')
                # for date
                if (line[0] == '5'):
                    dateParse = line.split('/')
                    year = dateParse[2].strip()
                    month = '05'
                    day = dateParse[1] if len(dateParse[1]) == 2 else '0' + dateParse[1]
                    writeFile.write('date: \'' + year + '-' + month + '-' + day + '\'\n')
                    line = readFile.readline()
                    shouldWriteTheRest = True

                line = readFile.readline()
                cnt += 1
        


# a = os.listdir('/Users/kelwen/Documents/aapi/')
# print(a)

