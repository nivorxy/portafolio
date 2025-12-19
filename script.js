const proyectos = [
    {
      titulo: "Nivorxy Network",
      descripcion: "Dueño de Nivorxy Network",
      imagen: "https://cdn.discordapp.com/attachments/1227106034120917063/1451408494044385290/cf-flow-35oWoUJWf7QtMMZCpyyQlTxddun.png?ex=694610fe&is=6944bf7e&hm=63a41fc487775456eec71d83e0f4e88ba481e8f9314343621e4b22cf44c6e42a&"
    },
    {
      titulo: "KoraBot",
      descripcion: "Creador de KoraBot",
      imagen: "https://cdn.discordapp.com/attachments/1227106034120917063/1451408443033522321/cf-flow-36gYBosrUyGdx3SDJFZikz1vzDS.png?ex=694610f2&is=6944bf72&hm=cbde6386b7054e4c1098593d3520fb4069dfe96b743882118f23789fb99fe040&"
    },
    {
      titulo: "Nexyrs Studios",
      descripcion: "Director de Nexyrs Studios",
      imagen: "https://cdn.discordapp.com/attachments/1227106034120917063/1451408349223587980/90c24445cca684814cdaa5af4c739d9b.png?ex=694610dc&is=6944bf5c&hm=d3a3b14346264986541c7e739a9642caee415a6a12694e9429c4fd0ebb94f7e3&"
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

  

