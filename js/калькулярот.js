
function out1(){
    var result1, result2;
    var a = document.getElementById('inp').value;
    a = parseInt(a);
    result1 = a * 13 / 100;
    document.getElementById('out2').innerHTML = result1;
    result2 = a - result1;
    document.getElementById('out1').innerHTML = result2;
    document.getElementById('out3').innerHTML = "*ставка равна 13% - если сумма налоговых баз, указанных в пункте 2.1 статьи 210 настоящего Кодекса, за налоговый период составляет менее 5 миллионов рублей или равна 5 миллионам рублей.";
}
function out2(){
    var result1, result2;
    var a = document.getElementById('inp').value;
    a = parseInt(a);
    result1 = a * 1 / 1000;
    document.getElementById('out2').innerHTML = result1;
    result2 = a - result1;
    document.getElementById('out1').innerHTML = result2;
    document.getElementById('out3').innerHTML = "*ставка 0,1% в отношении жилых домов, частей жилых домов, квартир, частей квартир, комнат; объектов незавершенного строительства в случае, если проектируемым назначением таких объектов является жилой дом; хозяйственных строений или сооружений, площадь каждого из которых не превышает 50 квадратных метров и которые расположены на земельных участках для ведения личного подсобного хозяйства, огородничества, садоводства или индивидуального жилищного строительства.";
}
function out3(){
    var result1, result2;
    var a = document.getElementById('inp').value;
    a = parseInt(a);
    result1 = a * 3 / 1000;
    document.getElementById('out2').innerHTML = result1;
    result2 = a - result1;
    document.getElementById('out1').innerHTML = result2;
    document.getElementById('out3').innerHTML = "*ставка 0,3% в отношении земельных участков: отнесенных к землям сельскохозяйственного назначения или к землям в составе зон сельскохозяйственного использования в населенных пунктах и используемых для сельскохозяйственного производства; занятых жилищным фондом и объектами инженерной инфраструктуры жилищно-коммунального комплекса; не используемых в предпринимательской деятельности, приобретенных для ведения личного подсобного хозяйства, садоводства или огородничества. ";
}
function out4(){
    var result1, result2;
    var a = document.getElementById('inp').value;
    a = parseInt(a);
    result1 = a * 20 / 100;
    document.getElementById('out2').innerHTML = result1;
    result2 = a - result1;
    document.getElementById('out1').innerHTML = result2;
    document.getElementById('out3').innerHTML = "*ставка 20% взимается в отношении всех прочих товаров, не относящихся к социально значимой продукции потребляемой населением, а также к продукции, изготавливаемой в стратегических сырьевых, энергетических отраслях, специализирующихся на логистических операциях по импорту.";
}
function out5(){
    var result1, result2;
    var a = document.getElementById('inp').value;
    a = parseInt(a);
    result1 = a * 20 / 100;
    document.getElementById('out2').innerHTML = result1;
    result2 = a - result1;
    document.getElementById('out1').innerHTML = result2;
    document.getElementById('out3').innerHTML = "*налоговая ставка устанавливается в размере 20%, если иное не установлено настоящей статьей 284.";
}
function addprosent(){
    var not = document.getElementById('not');
    var more = document.getElementById('more');
    var buttonformore = document.getElementById('buttonformore');
    if(not.style.display === "none"){
        not.style.display = "inline";
        buttonformore.innerHTML = "Другая налоговая ставка";
        more.style.display = "none";
    } else{
        not.style.display = "none";
        buttonformore.innerHTML = "Скрыть другую налоговую ставку";
        more.style.display = "inline";
    }
    document.getElementById('out3').innerHTML = "Введите свою процентную ставку";
}
function out6(){
    var result1, result2;
    var a = document.getElementById('inp').value;
    var b = document.getElementById('inprosent').value;
    a = parseInt(a);
    b = parseInt(b);
    result1 = a * b / 100;
    document.getElementById('out2').innerHTML = result1;
    result2 = a - result1;
    document.getElementById('out1').innerHTML = result2;   
}