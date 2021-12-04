import os
from datetime import datetime


# f = open('/Users/kelwen/Documents/Zettel/Fred Korematsu.md')
# print(f.read())
shouldWriteTheRest = False

files = os.listdir('/Users/kelwen/Documents/aapi/')
print(files)

fileName = files[0]
shouldWriteTheRest = False
with open('/Users/kelwen/Documents/aapi/Fred Korematsu.md', 'r+') as readFile:
    line = next(readFile)
    cnt = 1
    while line:
        newLine = line[0]
        print(newLine)

        line = readFile.readline()
        cnt += 1
        


# a = os.listdir('/Users/kelwen/Documents/aapi/')
# print(a)

