const iconPickers = document.querySelectorAll('.fontAwesomeIconPicker')

const fetchJson = async () => {
    const response = await fetch('output.json')
    const data = await response.json()
    return data
}


fetchJson()
    .then(res => {
        res.forEach(icon => {
            const option = document.createElement('option')
            option.value = icon.id
            option.innerText = icon.id
            iconPickers.forEach(p => {
                p.append(option)
            })
        })
    })