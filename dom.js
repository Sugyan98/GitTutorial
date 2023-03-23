// // Examine the Document Object

// // console.dir(document);
// // console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.title);
// // document.title = 123;
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.all);
// // console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// // console.log(document.forms[0]);
// // console.log(document.links);
// // console.log(document.images);

// // GETELEMENTSBYID

// // console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = 'Goodbye';
// // console.log(headerTitle.innerText);
// // headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';
// // header.style.borderBottom = 'solid 3px #000';
// document.getElementById('title').style.fontWeight = 'bold';

// // GETELEMENTSBYCLASSNAME
// // var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].textContent = 'Hello 2';
// // items[1].style.fontWeight = 'bold';
// // items[1].style.backgroundColor = 'yellow';
// // items[2].style.backgroundColor = 'green';

// // for (var i = 0; i < items.length; i++){
// //     items[i].style.fontWeight = 'bold';
// // }

// //  GETELEMENTSBYTAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// li[2].style.backgroundColor = 'green';

// for (var i = 0; i < li.length; i++){
//     li[i].style.fontWeight = 'bold';
// }

// //  QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';

// // QUERYSELECTORALL
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var list = document.querySelectorAll('.list-group-item');
// list [1].style.color= 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

// TRAVERSING THE DOM
var itemList = document.querySelector('#items');
// // parentNode
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.parentNode.parentNode)

// // parentElement
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstChild
// console.log(itemList.firstChild);
// //  firstELementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// // lastChild
// console.log(itemList.lastChild);
// //  lastELementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'magenta';

// createElement

// create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1)

const newChild = document.createElement('li');

newChild.className = 'list-group-item';
const newChildText = document.createTextNode('Item 0');
newChild.appendChild(newChildText);

var container2 = document.querySelector('#items');
var li = document.querySelector('li');

container2.insertBefore(newChild, li);

