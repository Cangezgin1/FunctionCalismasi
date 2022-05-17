function İşle(){
    var sayi1=Number(document.getElementById('ilksayı').value);
    var sayi2=Number(document.getElementById('ikincisayı').value);
    var toplamı=sayi1+sayi2;
    var çarpma=sayi1*sayi2;
    var bölme=sayi1/sayi2;
    console.log("Toplamı;");
    console.log(toplamı);
    console.log("Çarpımı;");
    console.log(çarpma);
    console.log("Bölme;");
    console.log(bölme);
}
function Cagırma(){
    İşle();
}
