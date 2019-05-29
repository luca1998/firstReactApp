import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//function formateName(user) {
//  return user.firstName + ' ' + user.lastName;
//}

//function getGreeting(user) {
//  if (user){
//      return <h1>Hallo {formateName(user)}!</h1>
//  }
//  return <h1>hallo Fremder.</h1>
//}

//const user = {
//  firstName: 'luca',
//  lastName: 'tschanz',
//};

//const element = <div tabIndex="0"></div>;
/*function tick(){
    const element =(
        <div>
            <h1>Hello World</h1>
            <h1>its {new Date().toLocaleTimeString()}</h1>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}*/
function date() {
    const element = (
        <div>
            <h1>Hello Luca</h1>
            <h2>today is the {new Date().toLocaleDateString()}</h2>
            <h2> and its {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

//setInterval(tick, 1000);
setInterval(date, 1000);
/*ReactDOM.render(
    element,
    document.getElementById('root')
);*/
                                                                                   
/* If you want your app to work offline and load faster, you can change
 unregister() to register() below. Note this comes with some pitfalls.
 Learn more about service workers: https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();
