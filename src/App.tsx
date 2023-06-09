import { AiOutlineClose } from "react-icons/ai";
import Form from "./components/Form";
import CreditCard from "./components/CreditCard";
import CheckOutDetails from "./components/CheckOutDetails";

function App(): JSX.Element {
  return (
    <div className="md:overflow-hidden w-full h-screen px-4 bg-left  bg-no-repeat  md:bg-[url(../public/assets/bg.jpg)]">
      <div className="wrapper grid grid-cols-12">
        <div className="close-btn mb-4">
          <AiOutlineClose className="text-xl" />
        </div>
        <div className="col-span-12 md:col-span-8">
          <Form />
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="checkout">
            <span className="blu"></span>
            <CreditCard />
            <CheckOutDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
