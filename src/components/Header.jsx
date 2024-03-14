import { useSelector } from "react-redux";
const Header = () => {
  const state = useSelector((store) => store);
  console.log(state);
  return (
    <header>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Wv_logo_proposal_flying_plane_wo_text.png" />
        <h2>Uçuş Radarı</h2>
      </div>
      <h4>
        {state.isLoading
          ? "Uçuşlar Hesaplanıyor..."
          : `${state.flights.length} Uçuş Bulundu`}
      </h4>
    </header>
  );
};

export default Header;
