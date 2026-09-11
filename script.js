const header = document.querySelector('.site-header');
const button = document.querySelector('.menu-button');

button.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  button.setAttribute('aria-expanded', open);
  button.textContent = open ? 'Close' : 'Menu';
});

document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  header.classList.remove('open');
  button.setAttribute('aria-expanded', 'false');
  button.textContent = 'Menu';
}));

const projectModals = [
  { trigger: '.wages-choice-trigger', modal: '#wages-study-modal' },
  { trigger: '.project-choice-trigger', modal: '#nike-sync-modal' },
  { trigger: '.dst-choice-trigger', modal: '#dst-study-modal' },
  { trigger: '.sweetgreen-choice-trigger', modal: '#sweetgreen-modal' },
  { trigger: '.philips-choice-trigger', modal: '#philips-modal' },
  { trigger: '.veeva-choice-trigger', modal: '#veeva-modal' },
  { trigger: '.corcoran-choice-trigger', modal: '#corcoran-modal' },
  { trigger: '.all-projects-trigger', modal: '#all-projects-modal' },
];

projectModals.forEach(({ trigger, modal }) => {
  const projectTrigger = document.querySelector(trigger);
  const projectModal = document.querySelector(modal);
  const projectClose = projectModal?.querySelector('.modal-close');
  const modalLinks = projectModal?.querySelectorAll('a');

  if (!projectTrigger || !projectModal || !projectClose || !modalLinks) return;

  const openProjectModal = () => {
    projectModal.hidden = false;
    projectClose.focus();
  };

  const closeProjectModal = () => {
    projectModal.hidden = true;
    projectTrigger.focus();
  };

  projectTrigger.addEventListener('click', openProjectModal);
  projectClose.addEventListener('click', closeProjectModal);

  projectModal.addEventListener('click', (event) => {
    if (event.target === projectModal) {
      closeProjectModal();
    }
  });

  modalLinks.forEach((link) => link.addEventListener('click', () => {
    projectModal.hidden = true;
  }));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !projectModal.hidden) {
      closeProjectModal();
    }
  });
});
