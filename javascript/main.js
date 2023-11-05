const listaDeTarefas = {
    'nome' : 'Lista de Tarefas',
    'link' : 'https://gabrielnp96.github.io/lista_de_tarefas/',
    'descricao' : 'Uma lista de tarefas dinâmica, feita com javascript, HTML e Css, ela utiliza do local storage do navegador, para armazenar os dados, então mesmo que você feche o navegador os dados vão continuar lá.',
    'imagem' : './image/Captura de tela_2023-11-02_12-33-13.png'
}

const projects = document.querySelector('.projects-area')

function projectsOnHtml(projects) {
    projects.innerHTML = `<div class='my-projects'>
                        <h3>${listaDeTarefas.nome}</h3>
                        <a href="${listaDeTarefas.link}" target ='_blank'><img src='${listaDeTarefas.imagem}' alt='imagem do projeto'></a>
                        <p>${listaDeTarefas.descricao}</p>
                    </div>`
}

projectsOnHtml(projects)