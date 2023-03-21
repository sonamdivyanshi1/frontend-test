class SellPriceCalculatorClass {
  constructor() {
    this.itemArray = {};
    this.lastIndex = 0;

    this.finalArray = [];
    this.totalCost = 0;
    this.gstArray = [0, 5, 12, 18];

    this.table = document.getElementById("sellEachtable");
    this.finalTable = document.getElementById("sellFinalTable");

    this.sellPriceEachFinaltableContainer = document.getElementById(
      "sellPriceEachFinaltableContainer"
    );
    this.submitBtn = document.getElementById("sellEachSubmitBtn");

    this.editing = {
      isEditing: false,
      index: 0,
      row: `<th></th>`,
    };

    this.inputFields = {
      itemName: document.getElementById("sellEachitemName"),
      itemPrice: document.getElementById("sellEachitemPrice"),
      itemSP: document.getElementById("sellEachitemSP"),
      itemNumber: document.getElementById("sellEachitemNum"),
    };

    document
      .getElementById("sellPriceEachform")
      .addEventListener("submit", this.addItem.bind(this));
  }

  addItem(event) {
    event.preventDefault();
    const itemName = event.target["itemName"].value;
    const itemPrice = Number(event.target["itemPrice"].value);
    const itemSP = Number(event.target["itemSP"].value);
    const itemNumber= Number(event.target["itemNumber"].value);


    let temp = {
      itemName: itemName,
      itemPrice: itemPrice,
      itemSP: itemSP,
      itemNumber: itemNumber,
    };

    let l;

    if (this.editing.isEditing) {
      l = this.editing.index;
      this.itemArray[this.editing.index] = temp;
    } else {
      l = this.lastIndex;
      this.itemArray[this.lastIndex] = temp;
      this.lastIndex++;
    }

    let editBtn = `<td class="editBtnBox">
          <button value="${l}" onclick="sellPriceEach.editRow(this)"><i class="fa-solid fa-pen-to-square fa-sm"
                  style="color: rgb(35, 35, 130);"></i></button>
          <button value="${l}" onclick="sellPriceEach.deleteRow(this)"><i class="fa-solid fa-trash-can fa-sm"
                  style="color: rgb(172, 27, 27);"></i></button>
      </td>`;

    let tr = document.createElement("tr");

    tr.innerHTML = `<td>${itemName}</td><td>${itemPrice}</td><td>${itemSP}</td><td>${itemNumber}</td>${editBtn}`;

    if (this.editing.isEditing) {
      this.editing.row.innerHTML = tr.innerHTML;
      this.editing = {
        isEditing: false,
        index: 0,
        row: `<th></th>`,
      };
      this.submitBtn.innerHTML = "Add Item";
    } else {
      this.table.appendChild(tr);
    }

    event.target["itemName"].value = "";
    event.target["itemPrice"].value = "";
    event.target["itemSP"].value="";
    event.target["itemNumber"].value="";
  }

  editRow(button) {
    let rowIndex = button.value;
    console.log(rowIndex);
    this.inputFields.itemName.value = this.itemArray[rowIndex].itemName;
    this.inputFields.itemPrice.value = this.itemArray[rowIndex].itemPrice;
    this.inputFields.itemSP.value = this.itemArray[rowIndex].itemSP;
    this.inputFields.itemNumber.value = this.itemArray[rowIndex].itemNumber;

    this.editing = {
      isEditing: true,
      index: Number(rowIndex),
      row: button.parentNode.parentNode,
    };

    this.submitBtn.innerHTML = "Edit Item";
  }

  deleteRow(button) {
    let rowIndex = button.value;

    this.totalCost -= this.itemArray[rowIndex].itemTotalPrice;

    delete this.itemArray[rowIndex];

    let row = button.parentNode.parentNode;

    // remove the row from the table
    row.remove();
  }
}

let sellPriceEach = new SellPriceCalculatorClass();





/*
  sellPriceCalculator(event) {
    event.preventDefault();

    const profitType = event.target["profitType"].value;
    const profitValue = Number(event.target["profitValue"].value);

    let profitAmount;
    let profitPercent;

    let totalSellingPrice = 0;

    if (profitType === "%") {
      profitAmount = (this.totalCost * profitValue) / 100;
      profitPercent = profitValue;
    } else {
      profitPercent =
        Math.round((profitValue / this.totalCost) * 100 * 100) / 100;
      profitAmount = profitValue;
    }

    // Made table ready for new data

    this.finalArray = [];

    this.finalTable.innerHTML = ``;

    this.sellPriceEachFinaltableContainer.style.display = "block";

    // ********************************************

    Object.values(this.itemArray).forEach((item) => {
      let percentageWeightage =
        Math.round((item.itemTotalPrice / this.totalCost) * 100 * 100) / 100;

      let itemSellingPrice =
        Math.round(
          ((percentageWeightage * profitAmount) / 100 + item.itemTotalPrice) *
            100
        ) / 100;

      totalSellingPrice += itemSellingPrice;

      let item2 = {
        itemName: item.itemName,
        itemPrice: item.itemPrice,
        gst: item.gst,
        itemTotalPrice: item.itemTotalPrice,
        itemWeightage: percentageWeightage,
        itemSellingPrice: itemSellingPrice,
      };

      let tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item2.itemName}</td>
        <td>${item2.itemPrice}</td>
        <td>${item2.gst}%</td>
        <td>${item2.itemTotalPrice}</td>
        <td>${item2.itemWeightage}%</td>
        <td>${item2.itemSellingPrice}</td>
      `;

      this.finalTable.appendChild(tr);

      this.finalArray.push(item2);

      this.sellPriceEachFinaltableContainer.children[1].innerHTML = `
      Overall Cost: <span style="font-weight: 400; margin-left: 6px">${this.totalCost}</span>
    `;
      this.sellPriceEachFinaltableContainer.children[2].innerHTML = `
      Overall Selling Price: <span style="font-weight: 400; margin-left: 6px">${totalSellingPrice}</span>
    `;
    });
  }
*/
  // ********************** Edit inputed methods ****************
/*
  editRow(button) {
    let rowIndex = button.value;

    this.inputFields.itemName.value = this.itemArray[rowIndex].itemName;
    this.inputFields.itemPrice.value = this.itemArray[rowIndex].itemPrice;
    this.inputFields.itemSP.value = this.itemArray[rowIndex].itemSP;
    this.inputFields.itemNumber.value = this.itemArray[rowIndex].itemNumber;
    this.editing = {
      isEditing: true,
      index: Number(rowIndex),
      row: button.parentNode.parentNode,
    };

    this.submitBtn.innerHTML = "Edit Row";
  }

  deleteRow(button) {
    let rowIndex = button.value;

    this.totalCost -= this.itemArray[rowIndex].itemTotalPrice;

    delete this.itemArray[rowIndex];

    let row = button.parentNode.parentNode;

    // remove the row from the table
    row.remove();
  }
}

let sellPriceEach = new SellPriceCalculatorClass();
/*
// *************************************** sell Price Products ********************************
// *************************************** sell Price Products ********************************
// *************************************** sell Price Products ********************************

class SellPriceProductCalculatorClass {
  constructor() {
    this.itemArray = {};
    this.lastIndex = 0;

    this.finalArray = [];
    this.totalCost = 0;
    this.gstArray = [0, 5, 12, 18];

    this.table = document.getElementById("sellProducttable");
    this.finalTable = document.getElementById("sellProductFinalTable");

    this.sellPriceProductFinaltableContainer = document.getElementById(
      "sellPriceProductFinaltableContainer"
    );

    this.submitBtn = document.getElementById("sellProductSubmitBtn");

    this.editing = {
      isEditing: false,
      index: 0,
      row: `<th></th>`,
    };

    this.inputFields = {
      itemName: document.getElementById("sellProductItemName"),
      itemPrice: document.getElementById("sellProductItemPrice"),
    };

    document
      .getElementById("sellPriceProductform")
      .addEventListener("submit", this.addItem.bind(this));

    document
      .getElementById("SellPriceProductProfitform")
      .addEventListener("submit", this.sellPriceCalculator.bind(this));
  }

  addItem(event) {
    event.preventDefault();
    const itemName = event.target["itemName"].value;
    const itemPrice = Number(event.target["itemPrice"].value);
    let gst;

    if (this.editing.isEditing) {
      gst = this.itemArray[this.editing.index].gst;
    } else {
      let gstIndex = Math.floor(Math.random() * 4);
      gst = this.gstArray[gstIndex];
    }

    let itemCost =
      Math.round((itemPrice + (itemPrice * gst) / 100) * 100) / 100;

    this.totalCost += this.editing.isEditing
      ? itemCost - this.itemArray[this.editing.index].itemTotalPrice
      : itemCost;

    let temp = {
      itemName: itemName,
      itemPrice: itemPrice,
      gst: gst,
      itemTotalPrice: itemCost,
    };

    let l;

    if (this.editing.isEditing) {
      l = this.editing.index;
      this.itemArray[this.editing.index] = temp;
    } else {
      l = this.lastIndex;
      this.itemArray[this.lastIndex] = temp;
      this.lastIndex++;
    }

    let editBtn = `<td class="editBtnBox">
          <button value="${l}" onclick="sellPriceProduct.editRow(this)"><i class="fa-solid fa-pen-to-square fa-sm"
                  style="color: rgb(35, 35, 130);"></i></button>
          <button value="${l}" onclick="sellPriceProduct.deleteRow(this)"><i class="fa-solid fa-trash-can fa-sm"
                  style="color: rgb(172, 27, 27);"></i></button>
      </td>`;

    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${itemName}</td><td>${itemPrice}</td>${editBtn}`;

    if (this.editing.isEditing) {
      this.editing.row.innerHTML = tr.innerHTML;
      this.editing = {
        isEditing: false,
        index: 0,
        row: `<th></th>`,
      };
      this.submitBtn.innerHTML = "Add Item";
    } else {
      this.table.appendChild(tr);
    }

    event.target["itemName"].value = "";
    event.target["itemPrice"].value = "";
  }

  sellPriceCalculator(event) {
    event.preventDefault();

    const productName = event.target["productName"].value;
    const productCount = Number(event.target["productCount"].value);

    const profitType = event.target["profitType"].value;
    const profitValue = Number(event.target["profitValue"].value);

    let profitAmount;
    let profitPercent;

    if (profitType === "%") {
      profitAmount = (this.totalCost * profitValue) / 100;
      profitPercent = profitValue;
    } else {
      profitPercent =
        Math.round((profitValue / this.totalCost) * 100 * 100) / 100;
      profitAmount = profitValue;
    }
    // Made table ready for new data

    this.finalArray = [];

    this.finalTable.innerHTML = ``;

    this.sellPriceProductFinaltableContainer.style.display = "block";

    // ********************************************

    Object.values(this.itemArray).forEach((item) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${item.itemName}</td>
      <td>${item.itemPrice}</td>
      <td>${item.gst}%</td>
      <td>${item.itemTotalPrice}</td>
      `;

      this.finalTable.appendChild(tr);

      this.finalArray.push(item);
    });

    this.sellPriceProductFinaltableContainer.children[1].innerHTML = `
    Overall Cost: <span style="font-weight: 400; margin-left: 6px">${this.totalCost}</span>
    `;

    let sellingPrice =
      Math.round(((this.totalCost + profitAmount) / productCount) * 100) / 100;

    this.sellPriceProductFinaltableContainer.children[2].innerHTML = `
    ${productName} Selling Price: <span style="font-weight: 400; margin-left: 6px">${sellingPrice}</span>
    `;

    this.sellPriceProductFinaltableContainer.children[3].innerHTML = `
    Overall Selling Price: <span style="font-weight: 400; margin-left: 6px">${
      this.totalCost + profitAmount
    }</span>
    `;
  }

  editRow(button) {
    let rowIndex = button.value;

    this.inputFields.itemName.value = this.itemArray[rowIndex].itemName;
    this.inputFields.itemPrice.value = this.itemArray[rowIndex].itemPrice;

    this.editing = {
      isEditing: true,
      index: Number(rowIndex),
      row: button.parentNode.parentNode,
    };

    this.submitBtn.innerHTML = "Edit Row";
  }

  deleteRow(button) {
    let rowIndex = button.value;

    this.totalCost -= this.itemArray[rowIndex].itemTotalPrice;

    delete this.itemArray[rowIndex];

    let row = button.parentNode.parentNode;

    // remove the row from the table
    row.remove();
  }
}

let sellPriceProduct = new SellPriceProductCalculatorClass();

// *************************************** sell Price Individual ********************************
// *************************************** sell Price Individual ********************************
// *************************************** sell Price Individual ********************************

class SellPriceIndividualCalculatorClass {
  constructor() {
    this.itemArray = {};
    this.lastIndex = 0;

    this.finalArray = [];
    this.totalCost = 0;
    this.totalProfit = 0;
    this.gstArray = [0, 5, 12, 18];

    this.table = document.getElementById("sellIndividualtable");
    this.finalTable = document.getElementById("sellIndividualFinalTable");

    this.sellPriceIndividualFinaltableContainer = document.getElementById(
      "sellPriceIndividualFinaltableContainer"
    );

    this.submitBtn = document.getElementById("sellIndividualSubmitBtn");

    this.editing = {
      isEditing: false,
      index: 0,
      row: `<th></th>`,
    };

    this.inputFields = {
      itemName: document.getElementById("sellIndividualItemName"),
      itemPrice: document.getElementById("sellIndividualItemPrice"),
      profitValue: document.getElementById("sellIndividualProfitMargin"),
      profitType: document.getElementById("sellIndividualProfitMarginType"),
    };

    document
      .getElementById("sellPriceIndividualform")
      .addEventListener("submit", this.addItem.bind(this));

    document
      .getElementById("SellPriceIndividualProfitform")
      .addEventListener("submit", this.sellPriceCalculator.bind(this));
  }

  addItem(event) {
    event.preventDefault();
    const itemName = event.target["itemName"].value;
    const itemPrice = Number(event.target["itemPrice"].value);

    const profitType = event.target["profitType"].value;
    const profitValue = Number(event.target["profitValue"].value);

    let gst;

    if (this.editing.isEditing) {
      gst = this.itemArray[this.editing.index].gst;
    } else {
      let gstIndex = Math.floor(Math.random() * 4);
      gst = this.gstArray[gstIndex];
    }

    let itemCost =
      Math.round((itemPrice + (itemPrice * gst) / 100) * 100) / 100;

    let profitAmount;
    let profitPercent;

    if (profitType === "%") {
      profitAmount = (itemCost * profitValue) / 100;
      profitPercent = profitValue;
    } else {
      profitPercent = Math.round((profitValue / itemCost) * 100 * 100) / 100;
      profitAmount = profitValue;
    }

    this.totalCost += this.editing.isEditing
      ? itemCost - this.itemArray[this.editing.index].itemTotalPrice
      : itemCost;

    this.totalProfit += this.editing.isEditing
      ? profitAmount - this.itemArray[this.editing.index].itemProfitPrice
      : profitAmount;

    let temp = {
      itemName: itemName,
      itemPrice: itemPrice,
      profitType: profitType,
      profitValue: profitValue,
      gst: gst,
      itemTotalPrice: itemCost,
      itemProfitPrice: profitAmount,
      itemProfitPercent: profitPercent,
      itemSellingPrice: itemCost + profitAmount,
    };

    console.log(temp);

    let l;

    if (this.editing.isEditing) {
      l = this.editing.index;
      this.itemArray[this.editing.index] = temp;
    } else {
      l = this.lastIndex;
      this.itemArray[this.lastIndex] = temp;
      this.lastIndex++;
    }

    let editBtn = `<td class="editBtnBox">
          <button value="${l}" onclick="sellPriceIndividual.editRow(this)"><i class="fa-solid fa-pen-to-square fa-sm"
                  style="color: rgb(35, 35, 130);"></i></button>
          <button value="${l}" onclick="sellPriceIndividual.deleteRow(this)"><i class="fa-solid fa-trash-can fa-sm"
                  style="color: rgb(172, 27, 27);"></i></button>
      </td>`;

    let profitTd;
    if (profitType === "%") {
      profitTd = `<td>${profitPercent}%</td>`;
    } else {
      profitTd = `<td>&#x20B9; ${profitAmount}</td>`;
    }

    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${itemName}</td>
      <td>${itemPrice}</td>
      ${profitTd}
      ${editBtn}`;

    if (this.editing.isEditing) {
      this.editing.row.innerHTML = tr.innerHTML;
      this.editing = {
        isEditing: false,
        index: 0,
        row: `<th></th>`,
      };
      this.submitBtn.innerHTML = "Add Item";
    } else {
      this.table.appendChild(tr);
    }

    event.target["itemName"].value = "";
    event.target["itemPrice"].value = "";
    event.target["profitValue"].value = "";
  }

  sellPriceCalculator(event) {
    event.preventDefault();

    // Made table ready for new data

    this.finalArray = [];

    this.finalTable.innerHTML = ``;

    this.sellPriceIndividualFinaltableContainer.style.display = "block";

    // ********************************************

    // let temp = {
    //   itemName: itemName,
    //   itemPrice: itemPrice,
    //   profitType: profitType,
    //   profitValue: profitValue,
    //   gst: gst,
    //   itemTotalPrice: itemCost,
    //   itemProfitPrice: profitAmount,
    //   itemProfitPercent: profitPercent,
    //   itemSellingPrice: itemCost + profitAmount,
    // };

    Object.values(this.itemArray).forEach((item) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${item.itemName}</td>
      <td>${item.itemPrice}</td>
      <td>${item.gst}%</td>
      <td>${item.itemTotalPrice}</td>
      <td>${item.itemProfitPercent}%</td>
      <td>&#x20B9; ${item.itemProfitPrice}</td>
      <td>${item.itemSellingPrice}</td>
      `;

      this.finalTable.appendChild(tr);

      this.finalArray.push(item);
    });

    this.sellPriceIndividualFinaltableContainer.children[1].innerHTML = `
    Overall Cost: <span style="font-weight: 400; margin-left: 6px">${this.totalCost}</span>
    `;

    this.sellPriceIndividualFinaltableContainer.children[2].innerHTML = `
    Overall Profit: <span style="font-weight: 400; margin-left: 6px">${this.totalProfit}</span>
    `;
  }

  editRow(button) {
    let rowIndex = button.value;

    this.inputFields.itemName.value = this.itemArray[rowIndex].itemName;
    this.inputFields.itemPrice.value = this.itemArray[rowIndex].itemPrice;
    this.inputFields.profitValue.value = this.itemArray[rowIndex].profitValue;
    this.inputFields.profitType.value = this.itemArray[rowIndex].profitType;

    this.editing = {
      isEditing: true,
      index: Number(rowIndex),
      row: button.parentNode.parentNode,
    };

    this.submitBtn.innerHTML = "Edit Row";
  }

  deleteRow(button) {
    let rowIndex = button.value;

    this.totalCost -= this.itemArray[rowIndex].itemTotalPrice;
    this.totalProfit -= this.itemArray[rowIndex].itemProfitPrice;

    delete this.itemArray[rowIndex];

    let row = button.parentNode.parentNode;

    // remove the row from the table
    row.remove();
  }
}

let sellPriceIndividual = new SellPriceIndividualCalculatorClass();
*/