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
  
  // Pegar os valores das colunas
  colunas.forEach(function(coluna) {
    var valor = aba.getRange(coluna + ultimaLinha).getValue();
    valores[coluna] = valor;
  });
  
  // Acessar as informações usando valores['B'], valores['C'], etc...
  Logger.log(valores['D'])

  // Resumo da Ata do Grupo QuarenteNA
  // Formato da Reunião: linha W
  // Data da Reunião: linha B
  // Horário da Reunião: linha C
  // Coordenador(a): linha O
  // Secretário(a): linha N
  // Presenças: linha D
  // Partilhas: linha E
  // Visita(s): linha F
  // Ingresso(s): linha G
  // Nome(s) Ingressante(s): linha I
  // Conquista(s): linha H
  // Nome(s) da(s) Conquista(s): linha J
  
}
