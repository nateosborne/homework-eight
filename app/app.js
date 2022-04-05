var homeContent = `<div class="hero"></div>

<div class="homepage">
  <div class="title">
    <h1>RED BULL F1</h1>
  </div>
</div>
<div class="hero2"></div>`;

var driversContent = `<div class="hero"></div>

<div class="content">
  <h1>DRIVERS</h1>
  <div class="products">
    <div class="product">
      <div class="prod-image"></div>
      <div class="prod-desc">
        <h4>Max Verstappen</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          fuga nihil ab maxime alias quaerat nostrum facere accusantium
          atque veniam facilis, beatae eos nobis, quod modi porro. Sit,
          ex doloremque?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          fuga nihil ab maxime alias quaerat nostrum facere accusantium
          atque veniam facilis, beatae eos nobis, quod modi porro. Sit,
          ex doloremque?
        </p>
      </div>
    </div>
  </div>
  <div class="products">
    <div class="product">
      <div class="prod-image2"></div>
      <div class="prod-desc">
        <h4>Sergio Perez</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          fuga nihil ab maxime alias quaerat nostrum facere accusantium
          atque veniam facilis, beatae eos nobis, quod modi porro. Sit,
          ex doloremque?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          fuga nihil ab maxime alias quaerat nostrum facere accusantium
          atque veniam facilis, beatae eos nobis, quod modi porro. Sit,
          ex doloremque?
        </p>
      </div>
    </div>
  </div>
</div>`;

var productsContent = ``;

var contactContent = ``;

function initListeners(){
    $("nav a").click(function(e){
        let btnID = e.currentTarget.id;
        loadPageContent(btnID);     
        // console.log("click "+ contentID);
    });
}

function loadPageContent(pageName){
    let contentID = pageName + "Content";
    $("#app").html(eval(contentID));
}

function initApp(){
    initListeners();
}

// $(document).ready(function(){
//     loadPageContent("home");
//     initApp();
// });