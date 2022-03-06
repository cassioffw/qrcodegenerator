function generateQrCode(){
    let input = document.querySelector('input').value;
    let API = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl=${encodeURIComponent(input)}`;
    let selectorDiv = document.querySelector('div');
    let selectorImg = document.querySelector('#QRCodeImage');
    selectorImg.src = '';
    selectorDiv.innerHTML = "Carregando...";
    setTimeout(() =>{
        selectorImg.src = API;
        selectorDiv.innerHTML= '';
    }, 2000);
}