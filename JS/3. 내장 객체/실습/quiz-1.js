'use strict';
window.onload = function(){
    enroll.addEventListener('submit', function(){

        let container = document.querySelector('#container');

        let infNode = document.createElement('infNode');

        studentinfo = document.querySelector('#userInput').innerHTML;

        let infText = document.createTextNode(studentinfo);

        infNode.appendChild(infText);

        infText.appendChild(infNode);

        let attendant =document.querySelector('attendant');

        let tr =document.querySelector('tr');

        attendant.insertBefore(attendant, tr);
    });

}