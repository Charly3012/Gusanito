var gatito = document.getElementById('gatito');
gatito.style.visibility = 'hidden';

var te = document.getElementById('teAmo');
te.style.visibility = 'hidden';

var btnnooo = document.getElementById('btnNo');
var btnsiii = document.getElementById('btnSi');


function pulsarSi() {
    gatito.style.visibility = 'visible'
    te.style.visibility = 'visible'
    btnnooo.disabled = true;
    btnsiii.disabled = true;
    alert("Sabía que tu amor es incondicional");
    alert("Te amo preciosa, Muak");

}

function pulsarNo() {
    const contenedor = document.querySelector('.contenedor');
    const btnNo = document.getElementById('btnNo');
    const contal = contenedor.clientWidth;
    const contAncho = contenedor.clientHeight;
    const btnal = btnNo.clientWidth;
    const btnAncho = btnNo.clientHeight;

    const NuevoY = Math.floor(Math.random() * (contal - btnal));
    const NuevoX = Math.floor(Math.random() * (contAncho - btnAncho));

    btnNo.style.position = 'absolute';
    btnNo.style.left = `${NuevoX}px`;
    btnNo.style.top = `${NuevoY}px`;
}
