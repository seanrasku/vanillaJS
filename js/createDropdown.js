const index = JSON.parse(localStorage.getItem("pageIndex"));
const topicDiv = document.getElementById("topic-dropdown");

//All links:
const dom = document.createElement("a");
dom.setAttribute("id", index.dom);
dom.setAttribute("class", "topiclink");
dom.setAttribute("href", "dom.html");
dom.setAttribute("onclick", `pageClick(${index.dom})`);
dom.textContent = `${index.dom}. JavaScript and The DOM`;

const prototype = document.createElement("a");
prototype.setAttribute("id", index.prototype);
prototype.setAttribute("class", "topiclink");
prototype.setAttribute("href", "prototype.html");
prototype.setAttribute("onclick", `pageClick(${index.prototype})`);
prototype.textContent = `${index.prototype}. Prototypes`;

const engine = document.createElement("a");
engine.setAttribute("id", index.engine);
engine.setAttribute("class", "topiclink");
engine.setAttribute("href", "engine.html");
engine.setAttribute("onclick", `pageClick(${index.engine})`);
engine.textContent = `${index.engine}. The JavaScript Engine`;

const async = document.createElement("a");
async.setAttribute("id", index.async);
async.setAttribute("class", "topiclink");
async.setAttribute("href", "async_sync.html");
async.setAttribute("onclick", `pageClick(${index.async})`);
async.textContent = `${index.async}. Asynchronous vs Synchronous`;

const req = document.createElement("a");
req.setAttribute("id", index.http);
req.setAttribute("class", "topiclink");
req.setAttribute("href", "http.html");
req.setAttribute("onclick", `pageClick(${index.http})`);
req.textContent = `${index.http}. HTTP Requests and REST API`;

const events = document.createElement("a");
events.setAttribute("id", index.events);
events.setAttribute("class", "topiclink");
events.setAttribute("href", "events.html");
events.setAttribute("onclick", `pageClick(${index.events})`);
events.textContent = `${index.events}. Event Handling in JavaScript`;

const promises = document.createElement("a");
promises.setAttribute("id", index.promises);
promises.setAttribute("class", "topiclink");
promises.setAttribute("href", "promises.html");
promises.setAttribute("onclick", `pageClick(${index.promises})`);
promises.textContent = `${index.promises}. Promises and async/await`;

const test = document.createElement("a");
test.setAttribute("id", index.test);
test.setAttribute("class", "topiclink");
test.setAttribute("href", "test.html");
test.setAttribute("onclick", `pageClick(${index.test})`);
test.textContent = `${index.test}. Unit Testing`;

//append to parent

//maybe set checks to ensure the 2 objects are in sync here?
topicDiv.appendChild(dom);
topicDiv.appendChild(prototype);
topicDiv.appendChild(engine);
topicDiv.appendChild(async);
topicDiv.appendChild(req);
topicDiv.appendChild(events);

topicDiv.appendChild(promises);

topicDiv.appendChild(test);
//add one for jquery
