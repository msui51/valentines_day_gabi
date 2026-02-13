import { useState } from 'react';
import './App.css';

function App() {
  const [yes, setYes] = useState(false);
  const [otterVisible, setOtterVisible] = useState(false);

  const handleResponse = (e) => {
    e.preventDefault();
    setYes(true);
    setTimeout(() => setOtterVisible(true), 1500);
  }


  return (
    <div className='home'>
        { !yes ? (
          <div className='wrapper'>
            <div className='container'>
              <div className='content__wrapper'>
                <div className='title__wrapper'>
                  <h1 className='title'>Gabi</h1>
                  <h2 className='subtitle'>Will you be my <span className='emphasis'>Valentine</span>?</h2>
                </div>
                <div className='img__wrapper--giphy'>
                  <img className='giphy__img' src='/corgi-sticker.gif' alt='corgi sticker'></img>
                </div>
                <div className='buttons__wrapper'>
                  {/* <button className='button' onClick={handleResponse}>Yes</button>
                  <button className='button'>No</button> */}
                  <a href="#" onClick={handleResponse}>
                    <span>Yes</span>
                    <span>Fuck Yes!</span>
                    <span>Absofuckinglutely!</span>
                    <span>A million times yes!</span>
                  </a>
                  <button className='button button__no'>NO</button>
                </div>
              </div>
            </div>
          </div>
            ) : (
              <>
                <div className='emoji'>💖</div>
                <div className='emoji'>💖</div>
                <div className='emoji'>🥰</div>
                <div className='emoji'>🥰</div>
                <div className='emoji'>💗</div>
                <div className='emoji'>💗</div>
                <div className='emoji'>🦦</div>
                <div className='emoji'>🦦</div>
                <div className='emoji'>🌈</div>
                <div className='emoji'>🌈</div>
                <div className='emoji'>🌈</div>
                <div className='emoji'>🥰</div>
                <div className='emoji'>💗</div>
                <div className='emoji'>💖</div>
                <div className='img-text__wrapper'>
                  <h2 className={`text ${otterVisible ? 'visible' : ''}`}>You make me otterly happy!</h2>
                  <div className='img__wrapper'>
                    <img className={`otter__img ${otterVisible ? 'visible' : ''}`} src='/otter-huggin-4.png' alt='otter hugging'></img>
                  </div>
                </div>
              </>
            )}
      
    </div>
  );
}

export default App;
