import ListeView from "./pages/ListeView";
import MapView from "./pages/MapView";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRadar } from "./redux/action";
import SideDetail from "./components/SideDetail";
function App() {
  const [showViews, setShowViews] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRadar());
  }, []);

  function openDetail(id) {
    setDetailId(id);
    setShowDetail(true);
  }
  return (
    <div className="light">
      <Header />
      {showDetail && (
        <SideDetail
          detailId={detailId}
          setShowDetail={setShowDetail}
        />
      )}

      <div className="buttons-view">
        <button
          className={showViews ? "active" : ""}
          onClick={() => setShowViews(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={!showViews ? "active" : ""}
          onClick={() => setShowViews(false)}
        >
          Liste Görünümü
        </button>
      </div>

      {showViews ? (
        <MapView
          setShowDetail={setShowDetail}
          openDetail={openDetail}
        />
      ) : (
        <ListeView
          setShowDetail={setShowDetail}
          openDetail={openDetail}
        />
      )}
    </div>
  );
}

export default App;
