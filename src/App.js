import './dist/output.css';

function App() {
  const bgo = './Assets/bgo.jpg'
  const bgt = './Assets/BG.jpg'
  return (
    <div className="App text-center">

      <div className='bg-red-500 flex justify-around h-full items-center'>
          <img src={require('./Assets/cocklg.png')} className='h-12 invert'/>
          <h1 className='text-2xl font-bold text-white'>slimene FELLAH</h1>
          <img src={require('./Assets/cocklg.png')} className='h-12 invert'/>
      </div>
      <p className='text-black'>THIS IS BETA VERSION OF MY PORTFOLIO : <br/> THE COCKTAILS BELOW ARE NOT MINE</p>


      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 py-4  flex flex-col justify-center items-center md:px-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 ' >
          
          <div className='h-64 md:col-span-1 md:mx-auto'>
            <img className='h-2/3 rounded' src={require('./Assets/1.webp')}/>
            <div className='mt-2 p-1 rounded bg-white'>
              <h2 className='text-black'>Cocktail name</h2>
              <p className='text-gray-900'>Description</p>
            </div>
          </div>

          <div className='h-64 md:col-span-1 md:mx-auto'>
            <img className='h-2/3 rounded' src={require('./Assets/2.jpg')}/>
            <div className='mt-2 p-1 rounded bg-white'>
              <h2 className='text-black'>Cocktail name</h2>
              <p className='text-gray-900'>Description</p>
            </div>
          </div>

          <div className='h-64 md:col-span-1 md:mx-auto' >
            <img className='h-2/3 rounded' src={require('./Assets/3.jpg')}/>
            <div className='mt-2 p-1 rounded bg-white'>
              <h2 className='text-black'>Cocktail name</h2>
              <p className='text-gray-900'>Description</p>
            </div>
          </div>

          <div className='h-64 md:col-span-1 md:mx-auto'>
            <img className='h-2/3 rounded' src={require('./Assets/4.jpg')}/>
            <div className='mt-2 p-1 rounded bg-white'>
              <h2 className='text-black'>Cocktail name</h2>
              <p className='text-gray-900'>Description</p>
            </div>
          </div>

          <div className='h-64 md:col-span-1 md:mx-auto'>
            <img className='h-2/3 rounded' src={require('./Assets/5.webp')}/>
            <div className='mt-2 p-1 rounded bg-white'>
              <h2 className='text-black'>Cocktail name</h2>
              <p className='text-gray-900'>Description</p>
            </div>
          </div>

          <div className='h-64 md:col-span-1 md:mx-auto'>
            <img className='h-2/3 rounded' src={require('./Assets/6.jpg')}/>
            <div className='mt-2 p-1 rounded bg-white'>
              <h2 className='text-black'>Cocktail name</h2>
              <p className='text-gray-900'>Description</p>
            </div>
          </div>

          <div className='h-64 md:col-span-1 md:mx-auto'>
            <img className='h-2/3 rounded' src={require('./Assets/7.jfif')}/>
            <div className='mt-2 p-1 rounded bg-white'>
              <h2 className='text-black'>Cocktail name</h2>
              <p className='text-gray-900'>Description</p>
            </div>
          </div>

      </div>
        
      <div className='bg-gradient-to-r from-sky-500 to-indigo-500 p-4 flex flex-col justify-center items-center'>
        <div className='w-3/4 bg-white p-2 rounded'>
          <h1 className='text-lg font-bold'>WHO I AM :</h1>
          <h3 className='text-md mb-2'>I am slimene FELLAH
              a computer science student,
              in holidays i use to work as bartender
              and server in restaurants
              as you have seen on the top.
              I do also front end developpement,
              this website is an example of my work.
              You can contact me at any time
              via my phone or email. 
          </h3>

          <h5 className='text-gray-500'>NOTE :
            I DONT WORK ON PLACES
            WHO SERVE CHICHA OR ALCOHOLIC DRINKS.</h5>
          <button className='p-3 bg-green-400 rounded-full font-semibold text-white m-2'>
            <a target="_blank" href='https://drive.google.com/file/d/1jWViTVVy97_Ck0UPtzhoVlSN8BI_vaRY/view' className='p-3 bg-green-400 rounded-full m-4 font-semibold text-white'>
            SEE MY RESUME (CV)
            </a>
          </button>
          

          <button className='p-3 bg-green-400 rounded-full font-semibold text-white m-2'>
            <a  target="_blank" href='https://slimenfellah.github.io/myPortfolio/' >
              VISITE MY MAIN PORTFOLIO
            </a>
          </button>
        </div>

        <div className='mt-4 p-2 bg-pink-700 w-3/4 rounded-lg text-white'>
          <h1>Thank you for visiting my portfolio</h1>
        </div>
      </div>
      <div className='w-full bg-blue-400'>
        <h1>MADE BY SLIMENE FELLAH ©2022</h1> 
      </div>

    </div>
  );
}

export default App;
