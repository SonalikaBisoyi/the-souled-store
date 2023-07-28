
import React, { useState, useEffect } from 'react';
import { Box, Flex, Input, Image, Select, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
   Checkbox, Icon,Button,SimpleGrid ,Text } from '@chakra-ui/react';
import { AiOutlineCheck } from 'react-icons/ai'; 
import ProductCard from '../Components/ProductCard';
import data from '../data.json';
import { useParams, Link } from 'react-router-dom';
import PriceRangeSlider from '../Components/PriceRangeSlider';
const Bottomwear = ({ gender }) => {
  const { subcategory } = useParams();
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategory || 'ALL');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 100]);
  const [sortingOption, setSortingOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('bottomwear');
  const [isSizeAccordionOpen, setSizeAccordionOpen] = useState(false);
  const themeOptions = ['Captain America', 'X-Men','Marvel','Spider-Man','Black Panther','Iron Man','Captain Marvel',
  'Punisher','Doctor Strange','DC Comics','Batman','Superman','Wonder Woman','The Flash','Hulk','Thor','Joker',
  'Deadpool','Black Adam','Naruto','Wednesday','Harry Potter','Money Heist','Stranger Things','F.R.I.E.N.D.S',
  'Kung Fu Panda','The Simpsons','Disney','Fantastic Beasts','Star Wars','The Office','Brooklyn Nine-Nine',
  'Archie Comics','Pink Panther','Popeye','Looney Tunes','Minions','Peanuts','The Powerpuff Girls','Garfield',
  'Tom and Jerry','Courage The Cowardly Dog','Scooby Doo','Rick and Morty','SpongeBob SquarePants','We Bare Bears',
  'Johnny Bravo','The Flintstones','Sesame Street','Kolkata Knight Riders','Lucknow Super Giants',
  'Chennai Super Kings','Liverpool FC','Arsenal FC','Rajasthan Royals','Revenant','Team Vitality','PSG',
  'Manchester City','Patterns','Girl Power','Funny','Food','Animals','Quotes','Fukrey','Singapore Inspired','ISRO',
  'BGMI','Hardik Pandya'];
  const sizeOptions = ['XXS','XS','S','M','L','XL','XXL','XXXL','4-5Y','5-6Y','6-7Y','7-8Y','8-9Y','9-10Y','10-11Y',
'11-12Y','12-14Y','UK3','UK4','UK5','UK6','UK7','UK8'];
  useEffect(() => {
    setSelectedSubcategory(subcategory || '');

    // Function to filter products based on selected themes, sizes, and price range
    const filteredProductsByThemesSizesPrices = data.products.filter((product) => {
      const isThemeMatch =
        selectedThemes.length === 0 || selectedThemes.some((theme) =>product.name.includes(theme));
      const isSizeMatch =
        selectedSizes.length === 0 || selectedSizes.some((size) => product.sizes.includes(size));
      const isPriceMatch =
        product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1];

      // Additional condition to filter products by gender
      const isGenderMatch = gender === 'ALL' || product.gender === gender;

      return isThemeMatch && isSizeMatch && isPriceMatch && isGenderMatch;
    });

    // Function to filter products based on selected products
    const filteredProductsBySelectedProducts = filteredProductsByThemesSizesPrices.filter(
      (product) => !selectedProducts.includes(product.id)
    );

    // Function to filter products based on the selected subcategory (selectedSubcategory)
    const filteredProductsBySubcategory = selectedSubcategory === 'ALL'
      ? filteredProductsBySelectedProducts // Display all products when 'ALL' is selected
      : filteredProductsBySelectedProducts.filter((product) => product.subcategory === selectedSubcategory);

    // Function to handle sorting
    let sortedProducts = [...filteredProductsBySubcategory];

    switch (sortingOption) {
      case 'AtoZ':
        sortedProducts = sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'ZtoA':
        sortedProducts = sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'PriceLowToHigh':
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'PriceHighToLow':
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        // No sorting option selected, do nothing
        break;
    }

    console.log('Filtered Products:', filteredProductsBySubcategory);
    setFilteredProducts(sortedProducts);

  }, [selectedProducts, selectedThemes, selectedSizes, selectedPriceRange, sortingOption, selectedSubcategory, gender]);

  const handleProductSelection = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts((prevSelected) => prevSelected.filter((id) => id !== productId));
    } else {
      setSelectedProducts((prevSelected) => [...prevSelected, productId]);
    }
  };
  const handleSizeButtonClick = (size) => {
    const filteredProductsBySize = data.products.filter((product) => product.sizes.includes(size));
    setFilteredProducts(filteredProductsBySize);
  };
  const handleThemeCheckboxChange = (theme) => {
    if (selectedThemes.includes(theme)) {
      setSelectedThemes((prevSelectedThemes) => prevSelectedThemes.filter((t) => t !== theme));
    } else {
      setSelectedThemes((prevSelectedThemes) => [...prevSelectedThemes, theme]);
    }
  };
  console.log('Selected Category:', selectedCategory);
  console.log('Selected Subcategory:', selectedSubcategory);
  console.log('Selected Gender:', gender);

 
  return (
    <Box className="page-container" marginTop="150px">
      {/* First 20% with image */}
      <Box className="image-container">
        <Image src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-020230719222216.jpg?format=webp&w=1300&dpr=1.5" alt="Image" />
      </Box>
      <Box flex="1">
          <Flex alignItems="center" justifyContent="space-between" mb="10px">
            {/* Sort by Dropdown */}
            <Box className="sort-container">
              <Select
                size="sm"
                value={sortingOption}
                onChange={(e) => setSortingOption(e.target.value)}
              >
                <option value="">Sort by</option>
                <option value="AtoZ">Name: A to Z</option>
                <option value="ZtoA">Name: Z to A</option>
                <option value="PriceLowToHigh">Price: Low to High</option>
                <option value="PriceHighToLow">Price: High to Low</option>
              </Select>
            </Box>

            {/* Number of Products */}
            <Text fontSize="sm">Total Products: {filteredProducts.length}</Text>
          </Flex>
          </Box>
      <Flex className="columns-container">
        {/* 30% column with search bar and filter */}
        <Box className="search-filter-container" w="30%">
          {/* Add Theme Dropdown */}
          {/* Add Accordion for Theme */}
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <strong>Theme</strong>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {/* Display themes as checkboxes */}
                {themeOptions.map((theme) => (
                  <Checkbox
                    key={theme}
                    isChecked={selectedThemes.includes(theme)}
                    onChange={() => handleThemeCheckboxChange(theme)}
                  >
                    {theme}
                  </Checkbox>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowToggle>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton onClick={() => setSizeAccordionOpen(!isSizeAccordionOpen)}>
            <Box flex="1" textAlign="left">
              <strong>Size</strong>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} display={isSizeAccordionOpen ? 'block' : 'none'}>
          {/* Include small size buttons for size options */}
          <SimpleGrid minChildWidth='12px' spacing='60px'>
            <Flex alignItems="center" justify="space-between" pb="2">
              {sizeOptions.map((size) => (
                <Button
                  key={size}
                  size="xs"
                  variant="outline"
                  colorScheme="red"
                  onClick={() => handleSizeButtonClick(size)}
                >
                  {size}
                </Button>
              ))}
            </Flex>
          </SimpleGrid>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>

          {/* Prices */}
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <PriceRangeSlider />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Flex className="cards-container" flexWrap="wrap" w="70%">
          {/* Product Cards */}
          {filteredProducts.map((product) => (
        <Link key={product.id}  to={`/bottomwear/${product.subcategory}/${product.id}`}>
          <ProductCard
            product={product}
            selected={selectedProducts.includes(product.id)}
            onProductSelect={handleProductSelection}
          />
        </Link>
      ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Bottomwear;
