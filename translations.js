// ═══════════════════════════════════════════════════════════
// TRANSLATIONS.JS
// Todos os textos do site em inglês (en) e português (pt).
//
// Como editar um texto:
//   1. Encontre a chave (ex: heroLead)
//   2. Edite o valor dentro de en: ou pt:
//   3. Salve o arquivo — o site atualiza automaticamente
//
// Como adicionar uma nova chave:
//   1. Adicione a chave nos dois idiomas (en e pt)
//   2. No HTML, use:  data-translate="suaChave"
// ═══════════════════════════════════════════════════════════

const translations = {
  en: {
    // NAVBAR
    navAbout:          'About',
    navProjects:       'Projects',
    navSkills:         'Skills',
    navCertifications: 'Learning',
    navExperience:     'Experience',
    navContact:        'Contact',
    downloadCv:        'Download CV',

    // HERO
    heroEyebrow:  "Hi, I'm Leonardo Rodrigues",
    heroTitle:    'ServiceNow Developer',
    heroSubtitle: 'ITSM & Process Automation',
    heroLead:     'Transitioning from business operations into the ServiceNow ecosystem. I build practical ITSM solutions using Flow Designer, App Engine Studio and Service Catalog, supported by a solid background in ERP, business processes and operational routines.',
    viewProjects: 'View Projects',
    contactMe:    'Contact Me',

    // ABOUT
    aboutTitle: 'About Me',
    aboutText1: 'I started my professional journey in the industrial sector, working with production processes, machine operation and quality control, developing operational discipline, attention to detail and a continuous improvement mindset. Later, I transitioned into commercial operations and customer-facing roles, gaining experience with ERP systems (TOTVS), CRM routines, internal reporting and operational indicators.',
    aboutText2: "Today my focus is the ServiceNow platform. I'm studying for the Certified System Administrator (CSA) exam and developing hands-on projects with ITSM, Flow Designer, App Engine Studio, Service Catalog and Service Portal, while strengthening my JavaScript fundamentals. My goal is a first opportunity as a Junior ServiceNow Developer, Admin, Support or Consultant.",

    // PROJECTS
    projectsTitle:     'Projects',
    projectsSub:       'Hands-on ServiceNow projects covering Service Portal, Record Producer, Flow Designer automation, REST integrations, and operational analytics.',
    viewDetails:       'View Details',
    viewDocumentation: 'View Documentation',
    statusDevelopment: 'In development',
    statusCompleted:   'Completed',
    statusCompleted2:  'Completed',
    problemLabel:      'Problem',
    solutionLabel:     'Solution',
    impactLabel:       'Impact',

    // Project 1
    projectTitle:   'Toy Store Service Portal',
    projectProblem: 'Internal toy requests were handled by email with no tracking, no approval trail and no visibility into request status.',
    projectSolution:'A custom ServiceNow portal with Record Producer, branded Service Portal interface, Flow Designer automation, critical priority email notifications, analytics dashboard and role-based access control.',
    projectImpact:  'Eliminated manual email-based requests, all items now tracked end-to-end with automated notifications and operational visibility.',

    // Project 2
    project2Title:   'Instance-to-Instance (I2I) Incident Integration',
    project2Problem: 'Organizations often need to synchronize incidents between different ServiceNow instances. Manual communication can create duplicated work, inconsistent data, and limited visibility across environments.',
    project2Solution:'Developed a practical ServiceNow Instance-to-Instance (I2I) integration lab using REST API and Async Business Rules to automatically synchronize incidents between two instances. The project also implements Journal Fields synchronization, HTTP error handling, and anti-loop logic to ensure reliable communication.',
    project2Impact:  'Created an automated incident synchronization workflow while gaining hands-on experience with real-world integration challenges, REST troubleshooting, and asynchronous processing in the ServiceNow platform.',

    // SKILLS
    skillsTitle:       'Skills',
    technologyTitle:   'Technology',
    businessDataTitle: 'Business & Operations',
    skillProcess:      'Process improvement',
    skillSalesOps:     'Business operations',

    // CERTIFICATIONS
    certificationsTitle:    'Certifications & Learning',
    certificationsSub:      'Continuous learning focused on the ServiceNow ecosystem.',
    csaProgress:            'Certified System Administrator (CSA) — In progress',
    currentlyLearningTitle: 'Currently Learning',
    focusTitle:             'Current Focus',
    focus1:                 'Building practical ServiceNow projects',
    focus2:                 'Documenting flows and solutions',
    focus3:                 'Preparing a professional portfolio',

    // EXPERIENCE
    experienceTitle: 'Experience',
    experience1Title: 'Commercial Assistant — Operations & Data',
    experience1Text:  'Worked with ERP (TOTVS) to register orders, support invoicing and stock control. Automated recurring reports in Excel and acted as a bridge between Sales, Logistics and Billing, building an end-to-end view of the process.',
    experience2Title: 'Administrative Intern — Processes',
    experience2Text:  'Provided cross-functional support to Facilities, IT, HR and Procurement. Helped organize internal processes and improve operational flows.',
    experience3Title: 'Technical Sales — Operations & Systems',
    experience3Text:  'Daily use of CRM, ERP and internal performance systems. Responsible for sales reports and stock control. Recognized for consistent results in national catalog sales.',

    // CONTACT
    contactTitle: 'Get in Touch',
    contactSub:   'Open to opportunities as ServiceNow Developer Jr., Admin, Support or Consultant.',

    // FOOTER
    footerText: 'Built with HTML, CSS and JavaScript.',

    // MODAL — Project 1
    modalIntro:    'Custom ServiceNow project simulating an internal request portal for a toy store operation. Connects Service Portal, Record Producer, Flow Designer and Platform Analytics to organize requests, automate notifications and improve operational visibility.',
    modalIncludes: 'The project includes:',
    modalItem1:    'Custom Service Portal experience',
    modalItem2:    'Record Producer for toy requests',
    modalItem3:    'Mobile request preview',
    modalItem4:    'Flow Designer automation',
    modalItem5:    'Critical priority email notification',
    modalItem6:    'Operational dashboard and analytics',
    modalItem7:    'Service Portal menu configuration',
    modalItem8:    'Roles and access control',
    modalItem9:    'ServiceNow Studio application structure',
    gallery1:      '1. Project Overview',
    gallery2:      '2. Portal Experience',
    gallery3:      '3. Record Producer / Request Form',
    gallery4:      '4. Flow Automation',
    gallery5:      '5. Critical Priority Notification',
    gallery6:      '6. Operational Dashboard & Analytics',
    gallery7:      '7. Portal Menu Configuration',
    gallery8:      '8. Roles & Security',
    gallery9:      '9. ServiceNow Studio Structure',

    // MODAL — Project 2
    modal2Intro:   'Hands-on integration lab connecting two ServiceNow instances using REST API and Async Business Rules to enable real-time incident synchronization, notes sync, and automated status handling.',
    modal2Item1:   'RESTMessageV2 outbound integration setup',
    modal2Item2:   'Async Business Rules for non-blocking payload dispatch',
    modal2Item3:   'Bi-directional Journal Fields (Work Notes/Comments) sync',
    modal2Item4:   'Anti-loop logic & loop prevention headers',
    modal2Item5:   'Application Log & HTTP status code error handling',
    gallery2_1:    '1. Incident List Synchronization View',
    gallery2_2:    '2. Synced Incident Details & Notes',
    gallery2_3:    '3. REST Execution Logs & Diagnostics',
  },

  pt: {
    // NAVBAR
    navAbout:          'Sobre',
    navProjects:       'Projetos',
    navSkills:         'Competências',
    navCertifications: 'Estudos',
    navExperience:     'Experiência',
    navContact:        'Contato',
    downloadCv:        'Baixar CV',

    // HERO
    heroEyebrow:  'Olá, eu sou Leonardo Rodrigues',
    heroTitle:    'Desenvolvedor ServiceNow',
    heroSubtitle: 'ITSM & Automação de Processos',
    heroLead:     'Estou migrando da área de operações para o ecossistema ServiceNow. Desenvolvo soluções práticas utilizando Flow Designer, App Engine Studio e Service Catalog, com base sólida em ERP, processos de negócio e rotinas operacionais.',
    viewProjects: 'Ver Projetos',
    contactMe:    'Entrar em Contato',

    // ABOUT
    aboutTitle: 'Sobre Mim',
    aboutText1: 'Iniciei minha trajetória no setor industrial, atuando com processos produtivos, operação de máquinas e controle de qualidade, desenvolvendo disciplina operacional, atenção aos detalhes e mentalidade de melhoria contínua. Mais tarde, migrei para operações comerciais, adquirindo experiência com ERP (TOTVS), CRM, relatórios internos e indicadores operacionais.',
    aboutText2: 'Hoje meu foco é a plataforma ServiceNow. Estudo para a certificação CSA e desenvolvo projetos práticos com ITSM, Flow Designer, App Engine Studio, Service Catalog e Service Portal, enquanto aprofundo meus fundamentos em JavaScript. Meu objetivo é uma primeira oportunidade como Desenvolvedor, Admin, Suporte ou Consultor ServiceNow.',

    // PROJECTS
    projectsTitle:     'Projetos',
    projectsSub:       'Projetos práticos em ServiceNow com foco em Service Portal, Record Producer, automação com Flow Designer, integrações REST e análise operacional.',
    viewDetails:       'Ver Detalhes',
    viewDocumentation: 'Ver Documentação',
    statusDevelopment: 'Em desenvolvimento',
    statusCompleted:   'Concluído',
    statusCompleted2:  'Concluído',
    problemLabel:      'Problema',
    solutionLabel:     'Solução',
    impactLabel:       'Impacto',

    // Project 1
    projectTitle:   'Toy Store Service Portal',
    projectProblem: 'As solicitações internas eram feitas por e-mail, sem rastreamento, sem trilha de aprovação e sem visibilidade do status.',
    projectSolution:'Um portal customizado no ServiceNow com Record Producer, interface personalizada no Service Portal, automação com Flow Designer, notificação por e-mail para prioridades críticas, dashboard analítico e controle de acesso por perfis.',
    projectImpact:  'Eliminou as solicitações manuais por e-mail, todos os itens agora são rastreados de ponta a ponta com notificações automáticas e visibilidade operacional.',

    // Project 2
    project2Title:   'Integração de Incidentes Instance-to-Instance (I2I)',
    project2Problem: 'Organizações frequentemente precisam sincronizar incidentes entre diferentes instâncias do ServiceNow. A comunicação manual pode gerar trabalho duplicado, inconsistência nos dados e baixa visibilidade entre os ambientes.',
    project2Solution:'Desenvolvimento de um laboratório prático de integração Instance-to-Instance (I2I) no ServiceNow utilizando REST API e Async Business Rules para sincronizar automaticamente incidentes entre duas instâncias. O projeto inclui sincronização de Journal Fields, tratamento de erros HTTP e lógica anti-loop.',
    project2Impact:  'Criação de um fluxo automatizado de sincronização de incidentes com ganho de experiência prática em desafios reais de integração, solução de problemas em REST e processamento assíncrono na plataforma ServiceNow.',

    // SKILLS
    skillsTitle:       'Competências',
    technologyTitle:   'Tecnologia',
    businessDataTitle: 'Negócios & Operações',
    skillProcess:      'Melhoria de processos',
    skillSalesOps:     'Operações comerciais',

    // CERTIFICATIONS
    certificationsTitle:    'Certificações e Estudos',
    certificationsSub:      'Aprendizado contínuo focado no ecossistema ServiceNow.',
    csaProgress:            'Certified System Administrator (CSA) — Em andamento',
    currentlyLearningTitle: 'Estudando Atualmente',
    focusTitle:             'Foco Atual',
    focus1:                 'Construção de projetos práticos em ServiceNow',
    focus2:                 'Documentação de fluxos e soluções',
    focus3:                 'Preparação de um portfólio profissional',

    // EXPERIENCE
    experienceTitle:  'Experiência',
    experience1Title: 'Assistente Comercial — Operações & Dados',
    experience1Text:  'Atuação com ERP (TOTVS) para cadastro de pedidos, suporte ao faturamento e controle de estoque. Automatização de relatórios recorrentes em Excel e atuação como ponte entre Vendas, Logística e Faturamento.',
    experience2Title: 'Estagiário Administrativo — Processos',
    experience2Text:  'Suporte multifuncional para Facilities, TI, RH e Compras. Apoio na organização de processos internos e melhoria de fluxos operacionais.',
    experience3Title: 'Vendas Técnicas — Operações & Sistemas',
    experience3Text:  'Uso diário de CRM, ERP e sistemas internos de performance. Responsável por relatórios de vendas e controle de estoque. Reconhecido por resultados consistentes em vendas de catálogo nacional.',

    // CONTACT
    contactTitle: 'Entre em Contato',
    contactSub:   'Disponível para oportunidades como ServiceNow Developer Jr., Admin, Suporte ou Consultor.',

    // FOOTER
    footerText: 'Desenvolvido com HTML, CSS e JavaScript.',

    // MODAL — Project 1
    modalIntro:    'Projeto em ServiceNow que simula um portal interno de solicitações para uma loja de brinquedos. Conecta Service Portal, Record Producer, Flow Designer e Platform Analytics para organizar solicitações, automatizar notificações e melhorar a visibilidade operacional.',
    modalIncludes: 'O projeto includes:',
    modalItem1:    'Experiência customizada no Service Portal',
    modalItem2:    'Record Producer para solicitações de brinquedos',
    modalItem3:    'Pré-visualização da solicitação em mobile',
    modalItem4:    'Automação com Flow Designer',
    modalItem5:    'Notificação por e-mail para prioridade crítica',
    modalItem6:    'Dashboard operacional e analytics',
    modalItem7:    'Configuração de menu do Service Portal',
    modalItem8:    'Papéis e controle de acesso',
    modalItem9:    'Estrutura da aplicação no ServiceNow Studio',
    gallery1:      '1. Visão Geral do Projeto',
    gallery2:      '2. Experiência do Portal',
    gallery3:      '3. Record Producer / Formulário',
    gallery4:      '4. Automação do Fluxo',
    gallery5:      '5. Notificação de Prioridade Crítica',
    gallery6:      '6. Dashboard Operacional & Analytics',
    gallery7:      '7. Configuração do Menu do Portal',
    gallery8:      '8. Papéis & Segurança',
    gallery9:      '9. Estrutura no ServiceNow Studio',

    // MODAL — Project 2
    modal2Intro:   'Laboratório prático de integração conectando duas instâncias ServiceNow via REST API e Async Business Rules para sincronização de incidentes em tempo real, notas e tratamento de status.',
    modal2Item1:   'Configuração de integração outbound com RESTMessageV2',
    modal2Item2:   'Async Business Rules para envio assíncrono sem travar a interface',
    modal2Item3:   'Sincronização bidirecional de Journal Fields (Work Notes e Comentários)',
    modal2Item4:   'Lógica anti-loop e controle de cabeçalhos',
    modal2Item5:   'Tratamento de erros e logs de aplicação com códigos HTTP',
    gallery2_1:    '1. Visão Geral da Lista de Incidentes Sincronizados',
    gallery2_2:    '2. Detalhes do Incidente e Histórico de Notas',
    gallery2_3:    '3. Logs de Execução REST e Diagnósticos',
  }
};