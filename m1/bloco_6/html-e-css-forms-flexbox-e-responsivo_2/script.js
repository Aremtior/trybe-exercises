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

function dateValid() {
  const date = document.getElementById('data-inicio').value;
  console.log(document.getElementById('data-inicio').DatePickerX.init());

  // https://stackoverflow.com/questions/15491894/regex-to-validate-date-format-dd-mm-yyyy
  return date.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
}

function fieldsValid() {
  // https://stackoverflow.com/questions/8535084/is-there-any-way-to-select-all-input-elements-of-a-form-including-those-outside
  const form = document.getElementById('form-resume');
  var allFormControls = form.elements;
  for (const control of allFormControls) {
    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements
    if (control.nodeName === 'INPUT' || control.nodeName === 'SELECT' || control.nodeName === 'TEXTAREA') {
      if (control.value === '') {
        return false;
      }
    }
  }
  return true;
}

function validate() {
  if (fieldsValid()) {
    if (dateValid()) {
      return true;
    } else {
      alert('Preencha com uma data na forma dd/mm/yyyy');
    }
  } else {
    alert('O preenchimento de todos os campos é obrigatório!')
  }
  return false;
}

function resumeInformation() {
  const resume = document.createElement('div');
  resume.id = 'resume';
  const form = document.getElementById('form-resume');
  var allFormControls = form.elements;
  for (const control of allFormControls) {
    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements
    if (control.nodeName === 'INPUT' || control.nodeName === 'SELECT' || control.nodeName === 'TEXTAREA') {
      const resumeLine = document.createElement('p');
      resumeLine.innerHTML = control.value;
      resume.appendChild(resumeLine);
    }
  }
  document.body.appendChild(resume);
}

function stopDefAction(evt) {
  evt.preventDefault();
  if (validate()) {
    resumeInformation();
  }
}

function clearAll() {
  const resume = document.getElementById('resume');
  if (resume) {
    resume.remove();
  }
}

document.getElementById('data-inicio').DatePickerX.init({ format: 'dd/mm/yyyy' });
new window.JustValidate('#form-resume', {
  rules: {
    email: {
      required: true,
      email: true
    },
    checkbox: {
      required: true
    },
    name: {
      required: true,
      minLength: 3,
      maxLength: 10
    },
    cpf: {
      required: true,
      minLength: 11,
      maxLength: 11
    },
    cidade: {
      required: true,
      maxLength: 28
    },
    estado: {
      required: true
    },
    cargo: {
      required: true,
      maxLength: 40
    },
    'descricao-cargo': {
      required: true,
      maxLength: 500
    },
    'data-inicio': {
      required: true,
    },
    text: {
      required: true,
      maxLength: 1000,
    },
    radio: {
      required: true,
    },
    password: {
      required: true,
      password: true,
      minLength: 4,
      maxLength: 8
    },
    zip: {
      required: true,
      zip: true
    },
    phone: {
      phone: true
    }
  }
});

// document.getElementById('send-btn').addEventListener(
//   'click', stopDefAction, false
// );

document.getElementById('reset-btn').addEventListener(
  'click', clearAll, false
);