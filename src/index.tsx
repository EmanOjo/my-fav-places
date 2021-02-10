import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FavPlaces from "./components"


function Header() {
  return (
    <header className="AppHeader">
        <h1>
          Emmanuel's Favourite Places
        </h1>
    </header >
  );
}


const Footer = () => (
  <div className="footer">
    <p>Bottom of page</p>
  </div>
);


function App() {
  return (
    <div>
        < Header />
        <FavPlaces
          name="Wat Kong Run"
          location="Wat in Pa O Don Chai, Thailand"
          about="Better known to foreigners as the White Temple, is a privately owned art exhibit in the style of a Buddhist temple in Chiang Rai Province, Thailand."
          googlemaps="https://www.google.com/maps/search/wat+kong+run/@51.5464521,-0.1529109,14z/data=!3m1!4b1"
          image="https://static.wixstatic.com/media/b1c3cd_651089b71464421b86270b1537c48a9f~mv2.png/v1/fill/w_740,h_267,al_c,q_90,usm_0.66_1.00_0.01/b1c3cd_651089b71464421b86270b1537c48a9f~mv2.webp"
            />
          
          <FavPlaces
          name="Big Pink"
          location="Miami, USA"
          about="Better known to foreigners as the White Temple, is a privately owned art exhibit in the style of a Buddhist temple in Chiang Rai Province, Thailand."
          googlemaps="https://www.google.co.uk/maps/place/Big+Pink/@25.7708228,-80.1358436,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b4f226dbf45f:0x714f0032e621db3a!8m2!3d25.7708228!4d-80.1336549"
          image="https://images1.miaminewtimes.com/imager/u/original/8510008/readers_big_pink_2_credit_myles_restaurant_group.jpg"
            />

          <FavPlaces
          name="Northern Lights"
          location="Tromso, Norway"
          about="Better known to foreigners as the White Temple, is a privately owned art exhibit in the style of a Buddhist temple in Chiang Rai Province, Thailand."
          googlemaps="hhttps://www.google.co.uk/maps/place/Troms%C3%B8,+Norway/@69.6650252,18.6375882,10z/data=!3m1!4b1!4m5!3m4!1s0x45c4c4526c3b71fd:0x23dca858e6ebed3!8m2!3d69.6492047!4d18.9553239"
          image="https://i.pinimg.com/originals/78/03/ac/7803ac74911f776159f29bf916446a3c.jpg"
            />
    </div>
  );
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Footer />,
document.getElementById('footer')
);

// ReactDOM.render(
//   < />,
// document.getElementById('favs')
// );