console.dir(document)
console.log(document.url);
console.log(document.getElementById("conhtohElement"));

let isiTag = document.getElementById('conhtohElement').;
console.log(isiTag);

isiTag.innerText = 'ini isi tag yg baru';

let isiTag = document.getElementById('conhtohElement').;

//!membuatelementbaru
 paragrafElement =document.createElement('p');
 paragrafElement.innerText = 'ini paragraph baru';
//!menisikan element p dalam container
document.getElementById('container').appendChild(paragraphElement);