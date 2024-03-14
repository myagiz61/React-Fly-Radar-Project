import React from "react";
import { useState, useEffect } from "react";
import { detailOpt } from "../helpers/constants";
import axios from "axios";

const SideDetail = ({ detailId, setShowDetail }) => {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    setDetail(null);
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        detailOpt
      )
      .then((res) => setDetail(res.data));
  }, []);

  return (
    <div className="detail">
      <div className="detail-inner">
        <p className="close">
          <span onClick={() => setShowDetail(false)}>X</span>
        </p>
        {!detail ? (
          <p className="load">Yükleniyor...</p>
        ) : (
          <>
            <h2>{detail.aircraft.model?.text}</h2>
            <h2>{detail.aircraft.model?.code}</h2>
            <p>Kuyruk No: {detail.aircraft?.registratio}</p>
            <img src={detail.aircraft?.images?.large[0]?.src} />
            <p>Şirket:{detail.airline?.short} </p>
            <p>
              Kalkış:
              <a href={detail.airport.origin?.website}>
                {detail.airport.origin?.name}
              </a>
            </p>
            <p>
              Hedef:
              <a href={detail.airport.destination?.website}>
                {detail.airport.destination?.name}
              </a>
            </p>
            <p>
              Durum{" "}
              <span
                className="status"
                style={{ background: detail.status.icon }}
              >
                {detail.status.text}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;
