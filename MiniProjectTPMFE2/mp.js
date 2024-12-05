const skilladd = document.getElementById('skillsadd');
const tambah = document.getElementById('tambah');
const skillsList = document.getElementById('skillslist');

// Add skill
tambah.addEventListener('click', () => {
  const skillText = skilladd.value.trim();
  if (skillText === '') return;

  const skillItem = document.createElement('div');
  skillItem.classList.add('skill-item');

  const skillName = document.createElement('span');
  skillName.textContent = skillText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '×';
  deleteBtn.addEventListener('click', () => {
    skillItem.remove();
  });

  skillItem.appendChild(skillName);
  skillItem.appendChild(deleteBtn);
  skillsList.appendChild(skillItem);

  skilladd.value = '';
});