import React from 'react';
import { useSelector } from 'react-redux';
import { DirectoryMenu } from './Directory.styles'
import MenuItem from '../MenuItem/MenuItem';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

function Directory() {
  
  const sections = useSelector(selectDirectorySections);

  return (
    <DirectoryMenu>
        {sections.map(section => 
        <MenuItem
        key={section.id}
        title={section.title}
        imageUrl={section.imageUrl}
        size={section.size}
        linkUrl={section.linkUrl}
        />)}
    </DirectoryMenu>
  )
}

export default Directory
