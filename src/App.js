import Nav from "./components/nav";
import Hero from "./components/hero";
import Card from "./components/card";
import Test from "./components/text";
import data from "./data";


function App() {
  const cardList = data.map((item) => {
    return <Card
      key={item.id}
      item={item}
    />;
  })


  return (
    <div className="min-w-scren min-h-screen bg-black">
      <Nav />
      <Hero />
      <div className="flex w-[550px] mx-auto bg-white overflow-x-scroll px-2 pb-5">
        {cardList}
      </div>
    </div>
  );
}

export default App;
