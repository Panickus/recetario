// Realiza la petición a la API
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.querySelector('.card-container');

    data.categories.forEach(category => {
      const card = document.createElement('div');
      card.className = 'card col-md-4 mb-3';

      card.innerHTML = `
        <img src="${category.strCategoryThumb}" class="card-img-top" alt="${category.strCategory}">
        <div class="card-body">
          <h5 class="card-title">${category.strCategory}</h5>
          <p class="card-text">${category.strCategoryDescription}</p>
          <a href="#" class="btn btn-primary">Ver recetas</a>
        </div>
      `;

      cardContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Hubo un problema con la petición fetch:', error);
  });

  