const button = document.querySelector("button")
button.addEventListener("click", () => {
    fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content Type': 'application/json',
        },
        body: JSON.stringify({
            items: [
                {id: 1, quantify: 3},
                {id: 2, quantify: 1}
            ]
        })
    }).then(res => {
        if(res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
    }).then(({ url }) => {
        window.location = url
    }).catch(e => {
        console.error(e.error)
    })
})