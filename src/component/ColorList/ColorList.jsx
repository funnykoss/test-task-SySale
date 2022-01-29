import React, { useEffect} from "react";
import List from "../ColorAdvancer/List";
import colors from '../../JSON/colors.json'

const ColorList = props => {
     useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleClick(event) {
    if (event.currentTarget !== event.target) {
      props.onClose();
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      props.onClose();
    }
  }
    return (
        <>
            <List colors={ colors} onClick={handleClick}/>
        </>
    )
}


export default ColorList