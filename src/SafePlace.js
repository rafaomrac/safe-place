document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const matricula = document.getElementById("matricula").value;
    const senha = document.getElementById("senha").value;

    if (matricula === "0112" && senha === "senha01"){
        window.location.href = "InicialSafePlace.html";
    } else {
        alert("Matrícula ou senha incorretos.");
    }
});
/*Final SafePlacetela de Login */

/*Começo SafePlace tela Inicial */
function abrirListasPresenca() {
    ocultarTodosModais();
    document.getElementById("modalListasPresenca").style.display = "block";
}

function fecharModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}


function ocultarTodosModais() {
    const modais = document.querySelectorAll('.modal');
    modais.forEach(modal => {
        modal.style.display = 'none';
    });
}

function abrirListasPresenca() {
    ocultarTodosModais();
    document.getElementById("modalListasPresenca").style.display = "block";
}


function abrirConfiguracoes() {
    ocultarTodosModais();
    document.getElementById("modalConfiguracoes").style.display = "block";
}

function abrirSuporte() {
    ocultarTodosModais();
    document.getElementById("modalSuporte").style.display = "block";
}

function fecharModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
function atualizarDiasSemana() {
    const curso = document.getElementById("curso").value;
    const periodo = document.getElementById("periodo").value;
    const turma = document.getElementById("turma").value;

    if (curso && periodo && turma) {
        document.getElementById("diasSemana").style.display = "block";
    } else {
        document.getElementById("diasSemana").style.display = "none";
    }
}
function iniciarPrograma() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <h2>Iniciando o Programa</h2>
        <progress value="0" max="100" id="progressoInicio"></progress>
    `;
    document.body.appendChild(modal);
    let valor = 0;
    const intervalo = setInterval(() => {
        if (valor < 100) {
            valor += 10;
            document.getElementById('progressoInicio').value = valor;
        } else {
            clearInterval(intervalo);
            alert("Programa iniciado com sucesso!");
            modal.remove();
        }
    }, 300);
}

function analisarGravacoes() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'modalAnalisarGravacoes';
    
    modal.innerHTML = `
        <h2>Análise de Gravações</h2>
        <p>Selecione uma gravação para análise:</p>
        <ul id="listaGravacoes">
            <li>Gravação de Estrutura de Dados - 01/10/2024
                <button onclick="visualizarGravacao('Estrutura de Dados', '01/10/2024')">Visualizar</button>
                <button onclick="baixarGravacao('Estrutura de Dados', '01/10/2024')">Baixar</button>
            </li>
            <li>Gravação de Física - 02/10/2024
                <button onclick="visualizarGravacao('Física', '02/10/2024')">Visualizar</button>
                <button onclick="baixarGravacao('Física', '02/10/2024')">Baixar</button>
            </li>
            <li>Gravação de Backend - 03/10/2024
                <button onclick="visualizarGravacao('Backend', '03/10/2024')">Visualizar</button>
                <button onclick="baixarGravacao('Backend', '03/10/2024')">Baixar</button>
            </li>
        </ul>
        <div id="detalhesGravacao" style="display: none; margin-top: 20px;">
            <h3>Detalhes da Gravação</h3>
            <p id="descricaoGravacao"></p>
            <button onclick="simularAnaliseGravacao()">Iniciar Análise de Reconhecimento Facial</button>
            <progress value="0" max="100" id="progressoAnalise" style="width: 100%; display: none;"></progress>
        </div>
        <button onclick="fecharModal('modalAnalisarGravacoes')">Fechar</button>
    `;

    document.body.appendChild(modal);
}

function visualizarGravacao(materia, data) {
    const descricao = `Gravação da aula de ${materia} realizada em ${data}. Essa aula inclui reconhecimento facial e presença dos alunos.`;
    document.getElementById('descricaoGravacao').textContent = descricao;
    document.getElementById('detalhesGravacao').style.display = 'block';
}

function baixarGravacao(materia, data) {
    alert(`Baixando a gravação da aula de ${materia} de ${data}.`);
}

function simularAnaliseGravacao() {
    const progresso = document.getElementById('progressoAnalise');
    progresso.style.display = 'block';
    let valor = 0;
    
    const intervalo = setInterval(() => {
        if (valor < 100) {
            valor += 10;
            progresso.value = valor;
        } else {
            clearInterval(intervalo);
            alert("Análise de reconhecimento facial concluída com sucesso!");
            progresso.style.display = 'none';
            progresso.value = 0;
        }
    }, 300);
}


function enviarMensagemSuporte() {
    const mensagem = document.getElementById("mensagemUsuario").value;
    if (mensagem.trim()) {
        alert("Sua mensagem foi enviada com sucesso!");
        document.getElementById("mensagemUsuario").value = "";
    } else {
        alert("Por favor, digite uma mensagem antes de enviar.");
    }
}

function sair() {
    alert("Saindo do sistema...");
    window.location.href = "SafePlace.html"; 
}

function adicionarRosto() {
    alert("Função para Adicionar Rosto está em desenvolvimento.");
}

function removerRosto() {
    alert("Função para Remover Rosto está em desenvolvimento.");
}
