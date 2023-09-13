function enviarMensagemTelegram(mensagem) {
  var token = "Token"; // Substituir pelo Token de bot
  var chatId = "ChatID"; // Substituir pelo Chat ID
  
  var apiUrl = "https://api.telegram.org/bot" + token + "/sendMessage";
  
  var payload = {
    chat_id: chatId,
    text: mensagem,
  };
  
  var options = {
    method: "post",
    payload: payload,
  };
  
  UrlFetchApp.fetch(apiUrl, options);
}

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
  var colunas = ['B', 'C', 'O', 'N', 'D', 'E', 'F', 'G', 'I', 'H', 'J', 'M', 'P', 'Q', 'W', 'Y'];
  
  // Armazenar os valores
  var valores = {};
  
  // Pegar os valores pelas colunas
  colunas.forEach(function(coluna) {
    var valor = aba.getRange(coluna + ultimaLinha).getValue();
    valores[coluna] = valor;
  });

  // Converter a data da reunião para o formato BR
  var dataReuniao = new Date(valores['B']);
  var dataFormatada = formatarData(dataReuniao);

  // Converter a data da atualização da sétima para o formato BR
  var dataAtualizacao = new Date(valores['Q']);
  var atualizacaoFormatada = formatarData(dataAtualizacao);

  
  // Montar a mensagem de resumo
  var mensagem = "Resumo da Ata do Grupo QuarenteNA\n";
  
  // Linhas das mensagens necessárias
  mensagem += "Formato da Reunião: " + valores['W'] + "\n";
  mensagem += "Data da Reunião: " + dataFormatada + "\n";
  mensagem += "Horário da Reunião: " + valores['C'] + "\n";
  mensagem += "Coordenador(a): " + valores['O'] + "\n";
  mensagem += "Secretário(a): " + valores['N'] + "\n";
  mensagem += "Presenças: " + valores['D'] + "\n";
  mensagem += "Partilhas: " + valores['E'] + "\n";
  mensagem += "7ª Tradição: R$ " + valores['P'] + "\n";
  mensagem += "Atualizada em: " + atualizacaoFormatada + "\n";
  
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
  mensagem += "Nome(s) da(s) Conquista(s): " + valores['J'] + "\n";
  }
  if (valores['Y'] !== "") {
  mensagem += "Eleição de Encargo: " + valores['Y'] + "\n";
  }
  if (valores['M'] !== "") {
  mensagem += "Observações: " + valores['M'];
  }
  // Exibir log da mensagem montada
  Logger.log(mensagem)
  
  // Enviar a mensagem via Telegram
  enviarMensagemTelegram(mensagem);
}
