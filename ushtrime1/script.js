let items = [
    { emri: "Fanta", kategoria: "Pije e Gazuar", sasia: 20, qmimi: 1.2 },
    { emri: "Buke", kategoria: "Furre", sasia: 35, qmimi: 0.8 },
    { emri: "Molla", kategoria: "Fruta", sasia: 50, qmimi: 0.5 }
  ];
  
  window.onload = renderCards;
  
  function renderCards() {
    const container = document.getElementById("inventoryCards");
    container.innerHTML = "";
  
    items.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";
  
      card.innerHTML = `
        <div class="card shadow-sm border-0 h-100">
          <div class="card-body">
            <h5 class="card-title">${item.emri}</h5>
            <p class="card-text mb-1"><strong>Kategoria:</strong> ${item.kategoria}</p>
            <p class="card-text mb-1"><strong>Sasia:</strong> ${item.sasia}</p>
            <p class="card-text mb-3"><strong>Qmimi:</strong> €${item.qmimi.toFixed(2)}</p>
            <button class="btn btn-outline-danger btn-sm w-100" onclick="confirmDelete(${index})">Delete</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  function addItem() {
    let emri = document.getElementById("inputEmri").value.trim();
    let kategoria = document.getElementById("inputKategoria").value.trim();
    let sasia = parseInt(document.getElementById("inputSasia").value);
    let qmimi = parseFloat(document.getElementById("inputQmimi").value);
  
    if (!emri || !kategoria || isNaN(sasia) || isNaN(qmimi)) {
      alert("Please fill in all fields correctly.");
      return;
    }
  
    items.push({ emri, kategoria, sasia, qmimi });
    renderCards();
  
    
    document.getElementById("inputEmri").value = '';
    document.getElementById("inputKategoria").value = '';
    document.getElementById("inputSasia").value = '';
    document.getElementById("inputQmimi").value = '';
  }
  
  function confirmDelete(index) {
    if (confirm("Are you sure you want to delete this item?")) {
      items.splice(index, 1);
      renderCards();
    }
  }

  
  