import { Products } from '../components/ProductsPage'
import { Categories } from '../components/CategoriesPage/index.js'
import { ProductShow } from '../components/ProductsPage/ProductShow'
import { Navbar } from '../components/Navbar/index.js'

import { Footer } from '../components/Footer/index.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



//   return (
//     <Router>
//       <div>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );


export const App = () => {
    return (
        <div>
            <Navbar />

            <Router>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" exact>
                        <Products />
                    </Route>
                    <Route path="/categories" exact>
                        <Categories />
                    </Route>
                </Switch>
            </Router>

            <Footer />
            
        </div>
    )
}

