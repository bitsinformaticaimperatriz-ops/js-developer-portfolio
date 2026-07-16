async function fetchProfileData() {
    // Retorna os dados diretamente sem precisar realizar uma requisição de rede
    return {

  "photo": "assets/img/Foto perfil.png",
  "name": "Werbert Souza",
  "job": "Desenvolvedor Frontend",
  "location": "Imperatriz - MA",
  "phone": "(98) 98124-4807",
  "email": "werbert_souza.s@hotmail.com",
  "skills": {
    "hardSkills": [
      { 
        "name": "HTML5", 
        "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" 
      },
      { 
        "name": "CSS3", 
        "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" 
      },
      { 
        "name": "JavaScript", 
        "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" 
      }
    ],
    "softSkills": [
      "Trabalho em Equipe",
      "Comunicação",
      "Resolução de Problemas",
      "Proatividade"
    ]
  },
  "languages": [
    "Português (Nativo)"
  ],
  "portfolio": [
    {
      "name": "Meu Portfólio Dinâmico",
      "url": "https://github.com/bitsinformaticaimperatriz-ops",
      "github": true
    }
  ],
  "professionalExperience": [
    {
      "name": "Desenvolvedor Frontend",
      "period": "2024 - Presente",
      "description": "Desenvolvimento de páginas web modernas utilizando HTML, CSS, JavaScript, estilização responsiva e manipulação dinâmica do DOM."
    }
  ]
}
}