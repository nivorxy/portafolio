const proyectos = [
    {
      titulo: "Nivorxy Network",
      descripcion: "Dueño de Nivorxy Network",
      imagen: "https://ibb.co/xtTWCh7T"
    },
    {
      titulo: "KoraBot",
      descripcion: "Creador de KoraBot",
      imagen: "https://ibb.co/PZTmgYdc"
    },
    {
      titulo: "Nexyrs Studios",
      descripcion: "Director de Nexyrs Studios",
      imagen: "https://ibb.co/qF27yJwc"
    }
  ];
  
  const contenedor = document.getElementById("proyectos-container");
  
  proyectos.forEach(proy => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${proy.imagen || 'https://via.placeholder.com/400x200?text=Sin+imagen'}" alt="${proy.titulo}">
      <div class="card-content">
        <h3>${proy.titulo}</h3>
        <p>${proy.descripcion}</p>
      </div>
    `;
    contenedor.appendChild(card);
  });

  
