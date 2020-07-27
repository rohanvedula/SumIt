# SumIt!
Python-based text summarization chrome extension. Actively summarizes long news articles across the web with a single click!

## How it Works
SumIt works by extracting the text in the given webpage and sending it to a python-flask based webserver through a POST request. From there, the server uses NLTK libraries to filter out stopwords and take the frequencies to find keyword throughout the text. It then puts it back together and sends it back to the chrome extension!

## Download Instructions
The extension will e up on the Google Chrome Store shortly however to dowload and use the extension firstly download the zip file. From ther navigate to chrome://extensions turn on developer mode, and upload the file!
