const Shop = () => {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [manufacturers, setManufacturer] = useState([]);
    // eslint-disable-next-line
    const [currentCategory, setCurrentCategory] = useState('');
    function setCategory() {
        return setCurrentCategory(params.get('product_category'));
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                // console.log(result);
                setData(result);
                const categories = result.map((product) => product.category);
                setCategories(getUnique(categories));
                const manufacturer = result.map((product) => product.make);
                setManufacturer(getUnique(manufacturer));
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

