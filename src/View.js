const View = {
 render({minutes, seconds}){
    document.body.innerHTML = `<p>Próxima revisão em</p>
    <span>${minutes}:${seconds}</span>`
 },

}

export {View}