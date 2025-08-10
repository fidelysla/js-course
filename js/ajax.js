// AJAX


// XMLHttpRequest
(() => {
    console.clear

    // P1: Instanciar el objet XMLHttpRequest
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById('xhr'),
        $fragment = document.createDocumentFragment();

    // P2: Asignarle axhr los eventos de la peticion
    xhr.addEventListener('readystatechange', e => { 

        if (xhr.readyState !== 4) return;

        // console.log(xhr);

        if (xhr.status >= 200 && xhr.status < 300) {
            // console.log('exito');

            let json = JSON.parse(xhr.responseText)
            
            json.forEach(el => {

                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li)

            });

            $xhr.appendChild($fragment)

        } else {
            console.log('error');
            let message = xhr.statusText || 'Ocurrió un error'
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`
        }

        // console.log("Este mensage cargara de cualquier forma");
        
    })

    // P3: Abrir la petición (endpoint)
    // url_api = 'https://jsonplaceholder.typecode.com/users'
    url_api = 'assets/users.json'
    xhr.open('GET', url_api)

    // P4: Enviar la petición
    xhr.send();
    
})();

// API FETCH
(() => {
    console.clear

    const $fetch = document.getElementById('fetch'),
        $fragment = document.createDocumentFragment();
    
    // url_api = 'https://jsonplaceholder.typecode.com/users'
    url_api = 'assets/users.json'
    
    fetch(url_api)
        .then(res => {
            // console.log(res);
            return res.ok ? res.json() : Promise.reject(res)
            // return res.text()
            // return res.blob()
        })
        .then(json => {
            // console.log(json);
            json.forEach(el => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li)
            });

            $fetch.appendChild($fragment)
        } )
        .catch(err => {
            let message = err.statusText || 'Ocurrió un error'
            $fetch.innerHTML = `Error ${err.status}: ${message}`
        })
        .finally(() => {
            // console.log("Este mensage se ejecutara independientemente de la Promesa Fetch");
        } )

})();


// API FETCH + ASYNC AWAIT
(() => {

    const $fetchAsync = document.getElementById('fetch-async'),
        $fragment = document.createDocumentFragment();
    
    // url_api = 'https://jsonplaceholder.typecode.com/users'
    url_api = 'assets/users.json'

    function figure(data) {
        data.forEach(el => {
            const $li = document.createElement('li');
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li)
        });
        // $fetchAsync.appendChild($fragment)
        
        return $fragment
    }
    
    async function getData() {
        
        try {

            let res = await fetch(url_api);
            
            if (!res.ok) throw { status: res.status, statusText: res.statusText };
            
            let json = await res.json();

            $fetchAsync.appendChild(figure(json))

        } catch (err) {
            console.log("Estoy en el catch", err);

            let message = err.statusText || 'Ocurrió un error'
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`

        } finally {
            // console.log("Este mensage se ejecutara independientemente del try-catch");
        }

    }

    getData()
    
})();


// LIBRERÍA AXIOS
(() => {
    
    const $axios = document.getElementById('axios'),
        $fragment = document.createDocumentFragment();
    
    // url_api = 'https://jsonplaceholder.typecode.com/users'
    url_api = 'assets/users.json'

    function figure(data) {

        data.forEach(el => {
            const $li = document.createElement('li');
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li)
        });

        return $fragment
    }

    axios.get(url_api)
        .then(res => {
            let json = res.data;
            $axios.appendChild(figure(json))
        })
        .catch(err => {
            // console.log(err.response);
            let message = err.response.statusText || 'Ocurrió un error'
            $axios.innerHTML = `Error ${err.response.status}: ${message}`
        })
        .finally(() => {
            // console.log("Este mensage se ejecutara independientemente del try-catch");
        })

})();

    
// LIBRERÍA AXIOS + ASYNC-AWAIT
(() => {
    
    const $axiosAsync = document.getElementById('axios-async'),
        $fragment = document.createDocumentFragment();
    
    // url_api = 'https://jsonplaceholder.typecode.com/users'
    url_api = 'assets/users.json'

    function figure(data) {

        data.forEach(el => {
            const $li = document.createElement('li');
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li)
        });

        return $fragment
    }

    async function getData() {
        try {

            let res = await axios.get(url_api);
            let json = await res.data;

            $axiosAsync.appendChild(figure(json))

        } catch (err) {
            
            let message = err.response.statusText || 'Ocurrió un error'
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`
        } finally {
            // console.log('Finally Ejecutado');
        }

    }

    getData()

})();

