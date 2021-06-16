import './BannerTitle.css';

function BannerTitle(texts) {
  
  return (
    <div className="banner-title">
        <h1 className='purple-text'>{texts.purple}</h1>
        <h1 className='yellow-text'>{texts.yellow}</h1>
    </div>
  );
}

export default BannerTitle;
