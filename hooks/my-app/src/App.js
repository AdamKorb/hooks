// komponenta je obyčejná funkce
// komponenta má stejný název jako je název souboru
// komponenta obsahuje return
// na konci souboru musí být řádek s exportem
// v return musí něco být
// return dokáže vrátit jen jeden tag

import Example from "./components/Example"

const App = () =>{
    return(
        <div className="changer">
            <Example/>
        </div>
    )
}

export default App
