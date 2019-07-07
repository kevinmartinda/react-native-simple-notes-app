## React Native simpe Notes App  
This is a simple notes app built on top of React Native, a very popular javascript framework for building native app. 
  
## Simple React Native Notes App [Screenshots]
<p align="center">
    <img src="https://user-images.githubusercontent.com/43369306/60768885-7b70d500-a0f3-11e9-9efc-f98ca7421bc1.jpg" width=200 align="center" style="margin-right:20px"/>
    <img src="https://user-images.githubusercontent.com/43369306/60769125-52057880-a0f6-11e9-923f-abf69874c498.jpg" width=200 align="center"/>
    <img src="https://user-images.githubusercontent.com/43369306/60769143-85e09e00-a0f6-11e9-8fb8-d29d57432a9d.jpg" width=200 align="center"/>
    <img src="https://user-images.githubusercontent.com/43369306/60769196-fe475f00-a0f6-11e9-9892-35fe45361c61.jpg" width=200 align="center"/>
    <img src="https://user-images.githubusercontent.com/43369306/60769190-e7a10800-a0f6-11e9-9033-c8ac4b5b71c6.jpg" width=200 align="center"/>
</p>
  
**How to run**  
You can download the .apk file in this repository and simply install it, but you must set your IP address into 192.168.43.10 or, you can either clone this repository or download the reposity and rebuild it with a litlle setting.  
  
make sure you have react-native cli installed globaly in your machine, to install it just simply run the following command:
  
```sh
npm i -g react-native-cli
```
  
after you cloned or downloaded this repository, run the following command: 
  
```sh
cd react-native-simple-notes-app && npm i
```
  
After that, modify a few code in src/action/url. change the value of url constant to your ip address.
and to run it in debug mode justsimply type the following command in your CLI: 
  
```sh
react-native run android
```
  
You must run the backend server on your own, just click [this link](https://github.com/kevinmartinda/express-notes-api) and follw the instruction on the readme to install it on your local machine. and make sure your phone and local machine are connected on the same network.  
  
**Requirements**  
-[Node.js](https://nodejs.org/en/) V8+