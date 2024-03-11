class Service {
  constructor(name, profile) {
    this.name = name;
    this.profile = profile;
    this.element = null;
  }

  render() {
    const listItem = document.createElement('li');
    listItem.className = 'service-item';
    listItem.innerHTML = `
      <span>${this.name} - ${this.profile}</span>
      <button type="button" class="remove-button">Remover</button>
      <button type="button" class="edit-button">Editar</button>
    `;

    const removeButton = listItem.querySelector('.remove-button');
    removeButton.addEventListener('click', () => this.remove());

    const editButton = listItem.querySelector('.edit-button');
    editButton.addEventListener('click', () => this.edit());

    this.element = listItem;
    return listItem;
  }

  remove() {
    const serviceList = document.getElementById('service-list');
    serviceList.removeChild(this.element);
  }

  edit() {
    const newName = prompt('Digite o novo Serviço:');
    const newProfile = prompt('Digite o Profissional:');

    if (newName && newProfile) {
      this.name = newName;
      this.profile = newProfile;

      const spanElement = this.element.querySelector('span');
      spanElement.textContent = `${this.name} - ${this.profile}`;
    }
  }
}

function addService() {
  const serviceName = document.getElementById('service-name').value;
  const profile = document.getElementById('profile').value;

  if (serviceName && profile) {
    const serviceList = document.getElementById('service-list');

    if (!serviceExists(serviceName)) {
      const service = new Service(serviceName, profile);
      const listItem = service.render();

      serviceList.appendChild(listItem);

      document.getElementById('service-name').value = '';
      document.getElementById('profile').value = '';
    } else {
      alert('Este serviço já existe na lista.');
    }
  }
}

function serviceExists(serviceName) {
  const serviceItems = document.querySelectorAll('.service-item span');
  for (const item of serviceItems) {
    if (item.textContent.includes(serviceName)) {
      return true;
    }
  }
  return false;
}
