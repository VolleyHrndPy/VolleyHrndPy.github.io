// Datos
const team = [
    {
     name: "John Doe",
     img: "player1.jpg",
     country: "Paraguay",
     position: "Armador", 
     height: "1.80m"
    },
    {
     name: "Maria Lopez",
     img: "player2.jpg", 
     country: "Paraguay",
     position: "Central",
     height: "1.85m"
    },
    {
     name: "Michael Smith", 
     img: "player3.jpg",
     country: "Paraguay",
     position: "Opuesto",
     height: "1.92m"
    },
    {
     name: "Samantha Price",
     img: "player4.jpg",
     country: "Paraguay",
     position: "Punta",   
     height: "1.78m"
    },
    {
     name: "Robert Lee", 
     img: "player5.jpg",
     country: "Paraguay",
     position: "Central", 
     height: "1.90m"
    },
    {
      name: "Jessica Rodriguez",
      img: "player6.jpg",
      country: "Paraguay",
      position: "Libero",
      height: "1.68m"
    },
    {
      name: "Alexander Garcia",
      img: "player7.jpg",
      country: "Paraguay",
      position: "Punta",    
      height: "1.92m"
    },
    {
      name: "Camila Torres", 
      img: "player8.jpg",
      country: "Paraguay", 
      position: "Armador",
      height: "1.74m" 
    }
  ];
  
  // Función para generar tarjetas
  function displayCards(items){
  
    let container = document.getElementById('players');
    
    items.forEach(player => {
    
      // Crear elementos  
      let card = document.createElement('div');
      card.classList.add('playerCard');
      
      let img = document.createElement('img');
      img.src = player.img;
      img.alt = player.name;
      
      let name = document.createElement('h3');
      name.textContent = player.name;
      
      let country = document.createElement('p');
      country.textContent = player.country;
      
      let position = document.createElement('p');
      position.textContent = player.position;
      
      let height = document.createElement('p');
      height.textContent = player.height;
          
      // Asignar a tarjeta
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(country);
      card.appendChild(position);
      card.appendChild(height);
      
      // Renderizar
      container.appendChild(card);
    });
  }
  
  displayCards(team);