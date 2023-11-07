import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const navigate = useNavigate()
  const [filterData, setFilterData] = useState([])
  const [wordSearch, setWordSearch] = useState('')
  const handleSearch = (event) => {
    setWordSearch(event.target.value);
    const searchResult = products.filter((product) => {
      return product.name.toLowerCase().includes(wordSearch.toLowerCase())
    });
    if (wordSearch === ""){
      setFilterData([])
    }
    else{
      setFilterData(searchResult)
    }
    // if (searchResult.length > 0) {
    //   setOpenDialog(true)
    // }

    console.log(searchResult)
  }
  const handleNavigate = (event) => {
    if (event.key === "Enter"){
      navigate('/products/search', {
        state: {
          data: filterData
        }
      });
    }
    
  }
  return (
    <div
      className={` md:flex bg-white px-2 py-2 rounded-[2rem] items-center`}
    >
      
      <input
        type="text"
        placeholder="Search for gadgets"
        className="outline-none mx-2 w-full"
        value={wordSearch}
        onChange={handleSearch}
        onKeyDown={handleNavigate}
      />
      <FontAwesomeIcon icon={faSearch} className="ml-[10px]" />
    </div>
  );
};

export default SearchInput;
