function resumoDaAta() {
  // Pegar a $planilha
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  
  // Pegar a $aba específica das respostas
  var aba = planilha.getSheetByName('Form Responses 1');
  // Logger.log(aba.getName())

  // Pegar a ultima $linha
  var linha = aba.getLastRow();

  // Pegar a $coluna
  var coluna = 'D';

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
