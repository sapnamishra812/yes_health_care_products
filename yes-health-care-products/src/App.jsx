import { useState } from "react";
import Header from "./component/layouts/header/Header";
import "./App.css";
import Footer from "./component/layouts/footer/Footer";
import Mainlayout from "./component/Mainlayout";
function App() {
  const [count, setCount] = useState(0);
  const cardData = [
    {
      image:
        "https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Card 1",
      description: "Description for card 1.",
    },
    {
      image:
        "https://images.pexels.com/photos/161688/medical-tablets-pills-drug-161688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Card 2",
      description: "Description for card 2.",
    },
    {
      image: "https://images.pexels.com/photos/4047000/pexels-photo-4047000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Card 3",
      description: "Description for card 3.",
    },
    {
      image: "https://images.pexels.com/photos/1151298/pexels-photo-1151298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Card 4",
      description: "Description for card 3.",
    },
    {
      image: "https://images.pexels.com/photos/3786119/pexels-photo-3786119.jpeg",
      title: "Card 5",
      description: "Description for card 3.",
    },
    {
      image: "https://images.pexels.com/photos/3683116/pexels-photo-3683116.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Card 6",
      description: "Description for card 3.",
    },{
      image: "https://images.pexels.com/photos/3683116/pexels-photo-3683116.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Card 6",
      description: "Description for card 3.",
    },{
      image: "https://images.pexels.com/photos/3683116/pexels-photo-3683116.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Card 6",
      description: "Description for card 3.",
    },{
      image: "https://images.pexels.com/photos/3683116/pexels-photo-3683116.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Card 6",
      description: "Description for card 3.",
    },
    // Add more items as needed
  ];
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4">
          <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-8">
              <h1 className="text-3xl font-bold mb-8">
                Horizontal Scrollable Cards
              </h1>
              <Mainlayout data={cardData} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
