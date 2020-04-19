
var timeContent = `
<div class="sidebar>
  <style>
  * {
  box-sizing: border-box;
}

.site-header {
  padding: 20px;
  background: #ccc;
}

nav {
  background: #777;
  color: #FFF;
}

nav ul {
  list-style:none;
  display: block;
  margin:0;
}

nav ul li {
  display: inline-block;
  width: 120px;
  padding: 10px;
}

nav ul li a {
  display: inline-block;
  padding: 10px;
  cursor:pointer;
}

nav ul li a:hover {
  background: #999;
}

.wrap {
  width: 100%;
}

#primary-content-wrap {
  position: relative;
}

.primary-content {
  width:66.66%;
  float:left;
  padding: 10px;

}

.primary-content h2 {
  font-size: 24px;
}

.sidebar {
  width:33.33%;
  float:left;
  padding: 0 10px;
}

.floating-div {
  background-color: #333;
  padding: 10px 50px;
  color:#EEE;
  font-size: 20px;
  margin-top:10px;

}

footer {
  text-align: center;
  clear:both;
  padding: 20px 60px;
  background: #CCC;
}

.sticky {
  position: fixed;
  top: 10px;
  right:18px;
  margin: 0;
  width:calc(33.33% - 25px);
}

.abs {
  position: absolute;
  bottom: 10px;
  right:10px;
  width:calc(33.33% - 20px);
}

.clearfix:after {
    content:"";
    display:block;
    clear:both;
}

footer h3 {
  font-size:24px;
}
<style>
  <div class="floating-div>
    <h1> The current time: ${ "The Thick Boi" } </h1>
  </div>
  <script>
  // variables
  var topPosition = $('.floating-div').offset().top - 10;
  var floatingDivHeight = $('.floating-div').outerHeight();
  var footerFromTop = $('footer').offset().top;
  var absPosition = footerFromTop - floatingDivHeight - 20;
  var win = $(window);
  var floatingDiv = $('.floating-div');

  win.scroll(function() {
    if (window.matchMedia('(min-width: 768px)').matches) {
      if ((win.scrollTop() > topPosition) && (win.scrollTop() < absPosition)) {
        floatingDiv.addClass('sticky');
        floatingDiv.removeClass('abs');

      } else if ((win.scrollTop() > topPosition) && (win.scrollTop() > absPosition)) {
        floatingDiv.removeClass('sticky');
        floatingDiv.addClass('abs');

      } else {
        floatingDiv.removeClass('sticky');
        floatingDiv.removeClass('abs');
      }
    }
  });
  <script>
</div>
`

module.exports = {
  timeContent: timeContent
}