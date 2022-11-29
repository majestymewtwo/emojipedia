import React from "react";
import Header from "./Header";
import Card from "./Card";
import emojipedia from "../emojipedia";
import Footer from "./Footer";

function createCard(emoji){
  return(
    <Card
      className='row-span-1'
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  )
}
function App() {
  return (
    <div className="bg-[#A6E3E9] relative">
      <Header className='roboto'/>
      <div className="px-8 py-14 grid grid-cols-2 gap-3 md:grid-cols-4">
        {emojipedia.map(createCard)}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
