let excluirPerfil = document.getElementById('excluir_perfil')
let formAlert = document.getElementById('form_alert')
let divBlur = document.getElementById('blur')




excluirPerfil.addEventListener('click', () => {
    var nome = document.getElementById('nome')
    nome = nome.textContent
    formAlert.innerHTML = `
     <div class="box_alert">
         <h1>Waring!</h1>
          <p>Tem certeza que deseja excluir este perfil?</p>
          <p>Nome: ${nome}</p>
          <div>
              <button class="n" id="n" type="button">Não</button>
              <button class="s" type="submit">Sim, deletar.</button>
            </div>
           <marquee behavior="" direction="left">Após a exclusão do perfil, não será possivel logar novamente.</marquee>
      </div>
      `
    divBlur.style.cssText = `background: rgba(0, 0, 0, 0.597);
     z-index: 1;`

    let btn_not = document.getElementById('n')
    btn_not.addEventListener('click', ()=>{

        formAlert.innerHTML = ''
        divBlur.style.cssText = `background: none;
        z-index: -1;`

    })
})

