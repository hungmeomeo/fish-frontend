import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
  return (
    <div
      className={` md:flex bg-white px-2 py-2 rounded-[2rem] items-center`}
    >
      <FontAwesomeIcon icon={faSearch} className="ml-[10px]" />
      <input
        type="text"
        placeholder="Search for gadgets"
        className="outline-none mx-2 w-full"
      />
    </div>
  );
};

export default SearchInput;
