function formatarData(data) {
  var diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  
  var diaSemana = diasDaSemana[data.getDay()];
  var dia = ("0" + data.getDate()).slice(-2);
  var mes = ("0" + (data.getMonth() + 1)).slice(-2);
  var ano = data.getFullYear();
  
  return diaSemana + " " + dia + "/" + mes + "/" + ano;
}

function resumoDaAta() {
  // Pegar a planilha
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  
  // Pegar a aba específica das respostas
  var aba = planilha.getSheetByName('Form Responses 1');
  
  // Pegar a última linha
  var ultimaLinha = aba.getLastRow();
  
  // Definir as colunas de interesse
  var colunas = ['B', 'C', 'O', 'N', 'D', 'E', 'F', 'G', 'I', 'H', 'J', 'W'];
  
  // Inicializar um objeto para armazenar os valores
  var valores = {};
  
  // Iterar pelas colunas e pegar os valores
  colunas.forEach(function(coluna) {
    var valor = aba.getRange(coluna + ultimaLinha).getValue();
    valores[coluna] = valor;
  });

  // Converter a data da reunião para o formato desejado
  var dataReuniao = new Date(valores['B']);
  var dataFormatada = formatarData(dataReuniao);

  
  // Inicializar a mensagem de resumo
  var mensagem = "Resumo da Ata do Grupo QuarenteNA\n";
  
  // Adicionar as linhas da mensagem, verificando se os valores são strings vazias
  mensagem += "Formato da Reunião: " + (valores['W'] || "0") + "\n";
  mensagem += "Data da Reunião: " + dataFormatada + "\n";
  mensagem += "Coordenador(a): " + valores['O'] + "\n";
  mensagem += "Secretário(a): " + valores['N'] + "\n";
  mensagem += "Presenças: " + valores['D'] + "\n";
  mensagem += "Partilhas: " + valores['E'] + "\n";
  
  // Adicionar as linhas apenas se os valores não forem strings vazias
  if (valores['F'] !== "") {
    mensagem += "Visita(s): " + valores['F'] + "\n";
  }
  if (valores['G'] !== "") {
    mensagem += "Ingresso(s): " + valores['G'] + "\n";
  }
  if (valores['I'] !== "") {
  mensagem += "Nome(s) Ingressante(s): " + valores['I'] + "\n";
  }
  if (valores['H'] !== "") {
    mensagem += "Conquista(s): " + valores['H'] + "\n";
  }
  if (valores['J'] !== "") {
  mensagem += "Nome(s) da(s) Conquista(s): " + valores['J'];
  }
    Logger.log(mensagem)
}
