
import PropTypes from 'prop-types';

export const Square = ({children, isSelected ,updateBoard, index}) =>
{
  const className= `square ${isSelected ? 'is-selected' : ''}`;
  
  const handleClick = () => 
  {
    updateBoard(index)
  }
  
  return(
    <div onClick={handleClick} className = {className}>
      {children}
    </div>
  )
}
Square.propTypes = {
    children: PropTypes.string.isRequired,
    updateBoard: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    index: PropTypes.string.isRequired
  };
  