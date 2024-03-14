export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.812898",
    bl_lng: "27.59446",
    tr_lat: "41.582989",
    tr_lng: "44.816771",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key":
      "c974f7db8amshbfee62640b69369p126f80jsn08900929acdb",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOpt = {
  headers: {
    "X-RapidAPI-Key":
      "c974f7db8amshbfee62640b69369p126f80jsn08900929acdb",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
