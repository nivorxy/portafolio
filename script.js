const proyectos = [
    {
      titulo: "Proyecto 1",
      descripcion: "Agregar la descripcion de tu proyecto 1.",
      imagen: "https://i.ibb.co/849PVqg8/3e700e92a9c14385dc73338e23459fec.webp"
    },
    {
      titulo: "Proyecto 2",
      descripcion: "Agregar la descripcion de tu proyecto 2.",
      imagen: "https://i.ibb.co/849PVqg8/3e700e92a9c14385dc73338e23459fec.webp"
    },
    {
      titulo: "Proyecto 3",
      descripcion: "Agregar la descripcion de tu proyecto 3.",
      imagen: "https://i.ibb.co/849PVqg8/3e700e92a9c14385dc73338e23459fec.webp"
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
  