import Footer from "./component/footer/footer";
import HomePage from "./screens/Home/home";

export default function App() {
  return (
    <>
    <div className="bg-[#E3E6E3]">
    <HomePage/>
    </div>
    <div className="bg-[#4a4a4a]">
    <Footer />
    </div>
    </>
  )
}