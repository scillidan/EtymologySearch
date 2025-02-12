# Etymology Search

A React-based web application that allows users to input a sentence and highlights the etymology origin of each word <br> (What language the given word originated from). <br>
The app fetches data from a custom Flask API I built, which scrapes etymology information from <a href="www.etymonline.com">etymonline.com<a>.

![Alt text](thumbnail.png?raw=true "Title")


**Features**:

- Input a sentence and see the etymology of each word highlighted.

- Fetches data from a custom Flask API.

- Clean and responsive UI built with React.

Live Website: <a href = "https://wordorgins.netlify.app/">wordOrgins.netlify.app<a>
<br>
Link to Flask API Repo: <a href = "https://github.com/FerdiaMT/Flask_EtymologyScraper">Flask_EtymologyScraper<a>

**How To Use**

To use the webApp , type a sentance in english into the text box and press "color words".<br>
The sentance can be any length, I recommend about 10 - 20 words to see some variation in color.<br>
When the button is clicked the React App fetches from the flask API and retrieves the language the word originated from.<br>
The words will then be colored in accordingly.<br>
