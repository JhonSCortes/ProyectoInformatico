import './RightBackgroundComponent.css';

// This component purpose is to be displayed in the right side of the authentication pages.
const RightBackgroundComponent = (props) => {
  return (
    <div className="right-side-component">
      <img className='image-background' src='/Group_9.png' alt='languages_frameworks_background'/>
      <div className='right-text-div'>
        <span className='right-title'> NAMANYAJUGABELAJAR.IO </span>
        <span className='right-text'> Belajar secara online semakin mudah - tetep belajar walaupun pake kuota dari Kemendikbud hehe~ </span>
      </div>
    </div>
  )
}

export default RightBackgroundComponent;
