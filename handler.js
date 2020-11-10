const data = require('./util')
const fs = require('fs')

const icons = []

data.forEach(item => {
    let icon = {}

    if (item.attributes.membership.free.length < 1) { return }
    else if (item.type !== 'icon') { return }

    item.attributes.membership.free.forEach(iconType => {
        icon.id = item.attributes.id
        icon.type = iconType
    })

    icons.push(icon)
})

const out = JSON.stringify(icons, null, 2)

fs.writeFile('output.json', out, err => {
    if (err) throw err
    console.log('Written data to file')
})