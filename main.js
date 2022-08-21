const inputContainer = document.querySelector('input')
const rootElement = document.documentElement

const lighttheme = {
    '--background-color':'#fff',
    '--text-color':'#1a1a1a',
    '--button-background-color':'#9b8afb'
}
const darktheme = {
    '--background-color':'#1a1a1a',
    '--text-color':'#FFF',
    '--button-background-color':'#5925dc'
}

inputContainer .addEventListener('change', function(){
    const isChecked = inputContainer .checked
    isChecked ? changeTheme(darktheme) : changeTheme(lighttheme)
} )

function changeTheme(theme) {
    // alteração
    console.log(theme)
    for (let prop in theme) {
        changeProperty(prop, theme[prop])
    }
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value)
}