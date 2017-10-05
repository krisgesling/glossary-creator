const input = document.getElementById('input');
const glossary = document.getElementById('glossary');

input.oninput = () => outputGlossary(input.value);

function outputGlossary(text) {
  var wordArr = text.toLowerCase()
                    .replace(/[\n,\."]/g, ' ')
                    .split(' ')
                    .sort();
  var uniqWordArr = wordArr.filter((e,i) => wordArr.indexOf(e) == i);
  glossary.innerHTML = '<h3>Glossary</h3>'
                     + splitArrayIntoPara(uniqWordArr);
}

function splitArrayIntoPara(arr) {
  var str = arr.map((i) => '<p>'+i+'</p>')
               .join('');
  return str;
}
