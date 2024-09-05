function zakat_calu(){
    //24 garrat gold
    let wg1_gr=document.getElementById('wg1').value;
    let pr1_gr=document.getElementById('pg1').value;

    let e1_pr= wg1_gr*pr1_gr;
    let es1_pr=document.getElementById('eg1');es1_pr.value=e1_pr;

    let Z1_pay=(e1_pr*2.5)/100;
    let Za1_pay=document.getElementById('zg1');Za1_pay.value=Z1_pay;
   
    //22 garrat gold
    let wg2_gr=document.getElementById('wg2').value;
    let pr2_gr=document.getElementById('pg2').value;

    let e2_pr= wg2_gr*pr2_gr;
    let es2_pr=document.getElementById('eg2');es2_pr.value=e2_pr;

    let Z2_pay=(e2_pr*2.5)/100;
    let Za2_pay=document.getElementById('zg2');Za2_pay.value=Z2_pay

    //18 garrat gold
    let wg3_gr=document.getElementById('wg3').value;
    let pr3_gr=document.getElementById('pg3').value;

    let e3_pr= wg3_gr*pr3_gr;
    let es3_pr=document.getElementById('eg3');es3_pr.value=e3_pr;

    let Z3_pay=(e3_pr*2.5)/100;
    let Za3_pay=document.getElementById('zg3');Za3_pay.value=Z3_pay

    //siver gr
    let ws1_gr=document.getElementById('ws1').value;
    let ps1_gr=document.getElementById('ps1').value;

    let esi1_pr= ws1_gr*ps1_gr;
    let ess1_pr=document.getElementById('es1');ess1_pr.value=esi1_pr;

    let Zs1_pay=(esi1_pr*2.5)/100;
    let Zas1_pay=document.getElementById('zs1');Zas1_pay.value=Zs1_pay

// cash in hand
  let ec1_pr=document.getElementById('ec1').value;
  let zc1_pay=(ec1_pr*2.5)/100;
  let zcp1_pay=document.getElementById('zc1');zcp1_pay.value= zc1_pay;

  // cash in bank saving
  let ec2_pr=document.getElementById('ec2').value;
  let zc2_pay=(ec2_pr*2.5)/100;
  let zcp2_pay=document.getElementById('zc2');zcp2_pay.value= zc2_pay;

  // cash in bank current
  let ec3_pr=document.getElementById('ec3').value;
  let zc3_pay=(ec3_pr*2.5)/100;
  let zcp3_pay=document.getElementById('zc3');zcp3_pay.value= zc3_pay;
}
//gold calcuclator
document.getElementById('wg1').addEventListener('input',zakat_calu);
document.getElementById('pg1').addEventListener('input',zakat_calu);
document.getElementById('eg1').addEventListener('input',zakat_calu);

document.getElementById('wg2').addEventListener('input',zakat_calu);
document.getElementById('pg2').addEventListener('input',zakat_calu);
document.getElementById('eg2').addEventListener('input',zakat_calu);

document.getElementById('wg3').addEventListener('input',zakat_calu);
document.getElementById('pg3').addEventListener('input',zakat_calu);
document.getElementById('eg3').addEventListener('input',zakat_calu);

// siver calculator
document.getElementById('ws1').addEventListener('input',zakat_calu);
document.getElementById('ps1').addEventListener('input',zakat_calu);
document.getElementById('es1').addEventListener('input',zakat_calu);

// cash in hand 
document.getElementById('ec1').addEventListener('input',zakat_calu);

// cash in bank saving
document.getElementById('ec2').addEventListener('input',zakat_calu);

//cash in bank current saving
document.getElementById('ec3').addEventListener('input',zakat_calu);