// WIP FUNCTIONS START
function increaseValue() {
  let value;
  value++;
  buyNumber.innerhtml = value;
}

function decreaseValue() {
  let value;
  value--;
  buyNumber.innerhtml = value;
}

// WIP FUNCTIONS END

// WORKING FUNCTIONS START
function convertShopCard(cardObject) {
  let cardString = `<div class="card border border-success border-2">
    <img class="card-img-top" src="${cardObject.src}">
    <div class="card-body">
    <h3 class="card-title">${cardObject.title}</h3>
    ${cardObject.description}
    </div>
    </div>`;
  return cardString;
}

// Displays alert when clicked. WIP on being able to only display alert once.
function addToCart(itemNum) {
  if (itemNum == 1) {
    debugger;
    let buttonClicked = false;
    if (!buttonClicked) {
      let addAlert = `<div class="alert alert-success alert-dismissable">
    <div class="spinner-grow text-success"></div>
    This item has been added to your cart.
    <button class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
      cart1.innerHTML += addAlert;
      buttonClicked = true;
    } else {
    }
  }
  if (itemNum == 2) {
    let buttonClicked = false;
    if (!buttonClicked) {
      let addAlert = `<div class="alert alert-success alert-dismissable">
    <div class="spinner-grow text-success"></div>
    This item has been added to your cart.
    <button class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
      cart2.innerHTML += addAlert;
      buttonClicked = true;
    } else {
    }
  }
  if (itemNum == 3) {
    let buttonClicked = false;
    if (!buttonClicked) {
      let addAlert = `<div class="alert alert-success alert-dismissable">
    <div class="spinner-grow text-success"></div>
    This item has been added to your cart.
    <button class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
      cart3.innerHTML += addAlert;
      buttonClicked = true;
    } else {
    }
  }
  if (itemNum == 4) {
    let buttonClicked = false;
    if (!buttonClicked) {
      let addAlert = `<div class="alert alert-success alert-dismissable">
    <div class="spinner-grow text-success"></div>
    This item has been added to your cart.
    <button class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
      cart4.innerHTML += addAlert;
      buttonClicked = true;
    } else {
    }
  }
  if (itemNum == 5) {
    let buttonClicked = false;
    if (!buttonClicked) {
      let addAlert = `<div class="alert alert-success alert-dismissable">
    <div class="spinner-grow text-success"></div>
    This item has been added to your cart.
    <button class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
      cart5.innerHTML += addAlert;
      buttonClicked = true;
    } else {
    }
  }
  if (itemNum == 6) {
    let buttonClicked = false;
    if (!buttonClicked) {
      let addAlert = `<div class="alert alert-success alert-dismissable">
    <div class="spinner-grow text-success"></div>
    This item has been added to your cart.
    <button class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
      cart6.innerHTML += addAlert;
      buttonClicked = true;
    } else {
    }
  }
  if (itemNum == 7) {
    let buttonClicked = false;
    if (!buttonClicked) {
      let addAlert = `<div class="alert alert-success alert-dismissable">
    <div class="spinner-grow text-success"></div>
    This item has been added to your cart.
    <button class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
      cart7.innerHTML += addAlert;
      buttonClicked = true;
    } else {
    }
  }
  if (itemNum == 8) {
    let buttonClicked = false;
    if (!buttonClicked) {
      let addAlert = `<div class="alert alert-success alert-dismissable">
    <div class="spinner-grow text-success"></div>
    This item has been added to your cart.
    <button class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
      cart8.innerHTML += addAlert;
      buttonClicked = true;
    } else {
    }
  }
  if (itemNum == 9) {
    let buttonClicked = false;
    if (!buttonClicked) {
      let addAlert = `<div class="alert alert-success alert-dismissable">
    <div class="spinner-grow text-success"></div>
    This item has been added to your cart.
    <button class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
      cart9.innerHTML += addAlert;
      buttonClicked = true;
    } else {
    }
  }
  if (itemNum == 10) {
    let buttonClicked = false;
    if (!buttonClicked) {
      let addAlert = `<div class="alert alert-success alert-dismissable">
    <div class="spinner-grow text-success"></div>
    This item has been added to your cart.
    <button class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
      cart10.innerHTML += addAlert;
      buttonClicked = true;
    } else {
    }
  }
}

// WORKING FUNCTIONS END