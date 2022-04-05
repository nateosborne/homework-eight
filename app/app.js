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

var aboutContent = `<div class="hero"></div>

<div class="about-content">
  <div class="about-product">
    <div class="about-desc">
      <h1>ABOUT</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
        eum amet culpa, voluptatibus nesciunt tempore odio quidem enim
        tempora nam beatae ducimus rerum libero excepturi nobis ipsum
        animi. Soluta, ducimus. Itaque quae corrupti assumenda
        cupiditate fugiat iste possimus aspernatur dignissimos, dolor
        quia molestias voluptas laborum neque, ut, sunt maxime nisi?
        Nisi laudantium aut ea maiores vel, quisquam amet est porro? Ab
        consequatur nulla consectetur fugit nam, quia ratione rem ut
        mollitia laborum cumque dicta dolor natus vel culpa assumenda
        qui optio aspernatur, fugiat sed, inventore saepe placeat
        voluptatum. Voluptatem, repellendus. Laborum, veniam voluptatum?
        Qui at ad ea aliquam accusamus atque cumque eius vero voluptatum
        cum. Quae quasi ipsa eveniet non totam earum alias qui unde
        dolor similique, illo maxime suscipit. Molestiae, nesciunt esse
        ex omnis nemo vero modi sed vel maiores assumenda labore est?
        Ullam eaque dolore, provident enim saepe placeat. Esse animi
        nulla non! Placeat voluptatibus ea illo tempore. Saepe vel
        temporibus dicta. Aliquam architecto excepturi eveniet alias
        doloribus doloremque! Ad et, cumque dolorum delectus quis nisi
        aut laboriosam ratione, consequatur cum numquam distinctio
        accusamus exercitationem! Non, placeat! Dolor. Eius ipsa
        praesentium odit minima! Molestiae, error cupiditate? Ullam rem
        veritatis deserunt, nulla aliquam minima. Corrupti dolores rerum
        dolor exercitationem facere velit ut obcaecati quibusdam
        dignissimos, a reprehenderit voluptatibus consequuntur.
        Consequatur adipisci animi, voluptatum nisi deserunt fuga sit,
        possimus aperiam recusandae ducimus eius sequi itaque quaerat
        quia esse expedita doloremque non aut quae provident impedit
        architecto labore dolores. A, iste. Amet eaque aspernatur
        voluptatem labore ipsa fuga repellat, ducimus exercitationem
        minima laudantium id commodi excepturi temporibus. Repellat
        vitae aliquam aspernatur maiores, ratione cum doloremque harum
        quaerat nostrum labore, reprehenderit possimus. Facere, ratione
        atque beatae, culpa impedit id temporibus neque, voluptate
        placeat voluptatum dignissimos quia dicta fugiat veniam nostrum
        a quo. Veniam ratione dolore, tenetur quam dolor ab architecto
        repudiandae molestiae!
      </p>
    </div>
  </div>
</div>`;

var contactContent = `<div class="hero"></div>

<div class="header">
  <h1>CONTACT</h1>
</div>
<div class="inputs">
  <form>
    <input type="text" id="name" name="name" placeholder="Name" /><br />
    <input type="text" id="email" name="email" placeholder="Email" />
    <br />
    <input
      type="text"
      id="msg"
      name="msg"
      class="msg"
      placeholder="Message..."
    />
  </form>
</div>
<div class="submit">
  <p>SUBMIT</p>
</div>`;

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

$(document).ready(function(){
    loadPageContent("home");
    initApp();
});