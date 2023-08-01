
import './App.css';

function App() {


  const getCountries = async () => {
    const url = query ? `https://restcountries.com/v3.1/name/${query}` : 'https://restcountries.com/v3.1/all'
    try {
      
      const response = await fetch(url);
      if(response.ok) {
        const data = await response.json()
        setCountries(data)
      } else {
        setError("Nie udało się pobrać danych")
      }
      
    } catch (error) {
      console.log("Nie udało się pobrać danych")
    }

  }

  return (
    <div className="App">
      <h1> sadsa</h1>
    </div>
  );
}

export default App;
