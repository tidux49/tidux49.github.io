import React, { useState } from 'react';
import './animation_depliant_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Animation_depliant = ({ anim_title, anim_text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  console.log("anim  "+anim_text);
  return (
    <div className={`expanding-bar ${isExpanded ? 'expanded' : ''}`}>
      <div className=" barre_paragraphe" onClick={toggleExpansion}>
        <div className="titre_depliant">{anim_title}</div>
        <div className={`chevron ${isExpanded ? 'rotate' : ''}`}><FontAwesomeIcon key={anim_title} icon={faCaretDown} /></div>
      </div>
      {isExpanded && (
        <div className="etendue">
          <p className="texte_paragraphe" style={{ whiteSpace: 'pre-wrap' }}>{anim_text}</p>
        </div>
      )}
    </div>
  );
};

export default Animation_depliant;
