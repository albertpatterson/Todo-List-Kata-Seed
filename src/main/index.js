feature = {};

feature.appendMessage = function(message, parent) {
  const p = document.createElement('p');
  p.innerText = message;
  parent.appendChild(p);
};

feature.appendMessage('Hello world!', document.body);