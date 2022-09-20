async function obtenerLocIP(){
    const urlIP = "http://ipwho.is/?lang=es";
    const resp = await fetch(urlIP);
    const data = await resp.json();
    let lista = document.getElementById("divIP");
    lista.innerHTML+=`
                    <h1>Datos sobre mi IP</h1>
                    <ul>
                        <li>IP: <p>"${data.ip}"</p></li>
                        <li>Tipo de IP: <p>"${data.type}"</p></li>
                        <li>País: <p>"${data.country}"</p></li>
                        <li>Provincia: <p>"${data.region}"</p></li>
                        <li>Ciudad: <p>"${data.city}"</p></li>
                        <li>Código postal: <p>"${data.postal}"</p></li>
                        <li>Código de llamada: <p>"+${data.calling_code}"</p></li>
                    </ul>`
}

obtenerLocIP();