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
  
  // Mensagem de resumo
  var mensagem = "Resumo da Ata do Grupo QuarenteNA\n" +
                 "Formato da Reunião: " + valores['W'] + "\n" +
                 "Data da Reunião: " + valores['B'] + "\n" +
                 "Horário da Reunião: " + valores['C'] + "\n" +
                 "Coordenador(a): " + valores['O'] + "\n" +
                 "Secretário(a): " + valores['N'] + "\n" +
                 "Presenças: " + valores['D'] + "\n" +
                 "Partilhas: " + valores['E'] + "\n" +
                 "Visita(s): " + valores['F'] + "\n" +
                 "Ingresso(s): " + valores['G'] + "\n" +
                 "Nome(s) Ingressante(s): " + valores['I'] + "\n" +
                 "Conquista(s): " + valores['H'] + "\n" +
                 "Nome(s) da(s) Conquista(s): " + valores['J']; 
  
  Logger.log(mensagem)

}
