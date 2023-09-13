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
  
  // Pegar os valores nas colunas
  colunas.forEach(function(coluna) {
    var valor = aba.getRange(coluna + ultimaLinha).getValue();
    valores[coluna] = valor;
  });

  // Converter a data da reunião para o formato BR
  var dataReuniao = new Date(valores['B']);
  var dataFormatada = formatarData(dataReuniao);

  // Verificar se alguns valores são null e definir como "0"
  var valorVisita = valores['F'] === null ? "0" : valores['F'];
  var valorIngresso = valores['G'] === null ? "0" : valores['G'];
  var valorNomeIngressante = valores['I'] === null ? "0" : valores['I'];
  var valorConquista = valores['H'] === null ? "0" : valores['H'];
  var valorNomeConquista = valores['J'] === null ? "0" : valores['J'];
  
  // Mensagem de resumo
  var mensagem = "Resumo da Ata do Grupo QuarenteNA\n" +
                 "Formato da Reunião: " + valores['W'] + "\n" +
                 "Data da Reunião: " + dataFormatada + "\n" +
                 "Coordenador(a): " + valores['O'] + "\n" +
                 "Secretário(a): " + valores['N'] + "\n" +
                 "Presenças: " + valores['D'] + "\n" +
                 "Partilhas: " + valores['E'] + "\n" +
                 "Visita(s): " + valorVisita + "\n" + // Exibe "0" se for null
                 "Ingresso(s): " + valorIngresso + "\n" + // Exibe "0" se for null
                 "Nome(s) Ingressante(s): " + valorNomeIngressante + "\n" + // Exibe "0" se for null
                 "Conquista(s): " + valorConquista + "\n" + // Exibe "0" se for null
                 "Nome(s) da(s) Conquista(s): " + valorNomeConquista; // Exibe "0" se for null;

  Logger.log(mensagem)

}
