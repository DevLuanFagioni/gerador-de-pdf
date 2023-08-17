const btn = document.querySelector('#generator');

btn.addEventListener('click', () => {
  
  // conteudo do pdf
  const content = document.querySelector('#content');

  //configuração do pdf
  const options = {
    margin: [10,10,10,10],
    filename: 'arquivo.pdf',
    html2canvas: {scale: 2},
    jsPDF: {unit: 'mm', format: 'a4', orintation: 'portrait'}
  }

  //gerar pdf
  html2pdf().set(options).from(content).save();

})