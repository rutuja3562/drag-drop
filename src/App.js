import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const slides = [
    { url:  "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_flavoured-milk_460-250522.jpg", title: "1" },
    { url: "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_tbcd_snacking-store_460-250522.jpg", title: "2" },
    { url: "https://www.bigbasket.com/media/uploads/banner_images/hpc_cmc_cold-pressed_460_140622.jpg", title: "3" },
    { url: "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m__bcd_tasties-origins_460-250522.jpg", title: "4" },
    { url: "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_GM-duper-deals_460-250522.jpg", title: "5" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div className="container">
      <div style={containerStyles}>
        <Carousel slides={slides} />
      </div>
    </div>
  );
}

export default App;
