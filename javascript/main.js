const projectsData = [
    {
        name: 'Lista de Tarefas',
        link: 'https://gabrielnp96.github.io/lista_de_tarefas/',
        description: 'Uma lista de tarefas dinâmica, feita com javascript, HTML e Css, ela utiliza do local storage do navegador, para armazenar os dados, então mesmo que você feche o navegador os dados vão continuar lá.',
        image: './image/Captura de tela_2023-11-02_12-33-13.png'
    },
    {
        name: 'Calculadora IMC',
        link: 'https://gabrielnp96.github.io/Calculadora_IMC/',
        description: 'Uma calculadora de IMC',
        image: './image/Captura de tela_2023-11-13_04-57-37.png'
    },
];

function createProjectElement(project) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('my-projects');

    projectElement.innerHTML = `
        <h3>${project.name}</h3>
        <a href="${project.link}" target ='_blank'><img src='${project.image}' alt='imagem do projeto'></a>
        <p>${project.description}</p>
        <a class="project-link" href="${project.link}" target="_blank">Ver Projeto</a>
    `;

    return projectElement;
}

function renderProjects() {
    const projectsArea = document.querySelector('.projects-area');

    projectsData.forEach((project) => {
        const projectElement = createProjectElement(project);
        projectsArea.appendChild(projectElement);
    });
}

window.onload = renderProjects;
