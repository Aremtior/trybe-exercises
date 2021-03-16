const estadosDoBrasil = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins',
}

function estados() {
  const selectEstado = document.getElementById('estado');
  for (const e in estadosDoBrasil) {
    const estado = document.createElement('option');
    estado.innerHTML = estadosDoBrasil[e];
    estado.value = e;
    selectEstado.appendChild(estado);
  }
}
estados();
function stopDefAction(evt) {
  evt.preventDefault();
}

document.getElementById('send-btn').addEventListener(
  'click', stopDefAction, false
  );