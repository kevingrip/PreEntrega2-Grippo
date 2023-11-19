import './App.css'

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartProvider } from './context/CartContext'

function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Distribuidora KHG"}/>}/>   
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/> 
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<ItemDetailContainer greeting={"Distribuidora KHG"}/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )    
}

export default App
