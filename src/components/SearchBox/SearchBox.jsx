// eslint-disable-next-line react/prop-types
const SearchBox = ({value, onChange}) => {
    return <input type="text" placeholder='Search...' value={value} onChange={(e) => onChange(e.target.value)} />
}

export default SearchBox
