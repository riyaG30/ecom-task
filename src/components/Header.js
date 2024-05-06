import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, ButtonGroup, Button, Menu, MenuItem, InputBase, IconButton } from '@mui/material'; // Keep these imports for potential layout needs
import SearchIcon from '@mui/icons-material/Search';
const Header = ({ categories, onSearchChange, onCategoryChange, initialCategory = 'All' }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
    setAnchorEl(null);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <AppBar position="static" className="bg-blue-700"> 
      <Toolbar className="flex justify-between items-center"> {/* Flexbox for layout */}
        <Typography variant="h6" noWrap component="div" className="mr-2 text-white">
          Riya Store
        </Typography>
        <div className="flex items-center">
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={handleOpenMenu} className="focus:outline-none">  {/* Button styling */}
              {selectedCategory}
            </Button>
            <Menu
              id="category-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              MenuListProps={{ 'aria-labelledby': 'category-menu-button' }}
            >
              <MenuItem key="All" onClick={() => handleCategoryClick('All')}>
                All
              </MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} onClick={() => handleCategoryClick(category)}>
                  {category}
                </MenuItem>
              ))}
            </Menu>
            <IconButton className="ml-2 text-white">  {/* IconButton styling */}
              <SearchIcon />
            </IconButton>
            <InputBase
              className="flex-grow text-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md pl-2"  
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </ButtonGroup>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;