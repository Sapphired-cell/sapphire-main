import '../App.css';
import sapphire from '../image/sapphire.jpg'

function Home() {
  return (
    <div>
      <div id='wrapper'>
        <div id='title'> 
          <h2>
            Sapphire Helak
          </h2>
        </div>
        <div id='about'> 		Welcome to my website, My name is Sapphire and I am an aspiring web designer, graphic designer, and programmer. I'm from the midwest and have been taught to work with urban design, as well as nature. I hope to build my skills, and after college, open a tech firm that will hopefully move world wide. Below you will find my contact as well as current skills, so feel free to look around. <br/><br/> Fun fact: I designed this exact website!</div>
        <div id='image'>
          <img src={sapphire} id='img' alt='sapphire'>

          </img>
        </div>
        <div id='about-img'> 
        <div id='about-title'>My skills are and are not limited to-</div>
        <br/> <br/> -Python programming <br/> <br/> -HTML front end design <br/> <br/> -JavaScript back end design <br/>  <br/> -React web design <br/>  <br/> -C++ programming <br/>  <br/> -Digital design e.g. Lunacy & canva <br/>  <br/>  -Surviving only off coffee
        
        </div>
        
        <div id='skills'> 
        <h1> I'm good at:</h1>
          <h3> - HTML -</h3>
          <div id='progress-bar-html'>
            <div id='progress-html'/>
          </div>
          <h3> - JavaScript -</h3>
          <div id='progress-bar-javascript'>
            <div id='progress-javascript'/>
          </div>
          <h3> - Python -</h3>
          <div id='progress-bar-python'>
            <div id='progress-python'/>
          </div>
          <h3> - C++ -</h3>
          <div id='progress-bar-cpp'>
            <div id='progress-cpp'/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
