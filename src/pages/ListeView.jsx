import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
const ListeView = ({ openDetail }) => {
  const state = useSelector((store) => store);

  const [itemOffset, setItemOffset] = useState(0);

  //! SAYFALAMA DEĞERLERİ
  // sayfa başına eleman
  const itemsPerPage = 10;
  // gösterilecek son itemi tespit
  const endOffset = itemOffset + itemsPerPage;
  // belirli aralıktaki "3.sayfda için (20 - 30)" aralığı diziden alıyor
  const currentItems = state?.flights.slice(itemOffset, endOffset);
  // toplam kaç sayfa olduğunu hesaplıyor
  const pageCount = Math.ceil(state?.flights.length / itemsPerPage);

  // sayfa
  const handlePageClick = (event) => {
    // > kaçıncı elemandan itibaren kesileceğini hesaplar
    const newOffset =
      (event.selected * itemsPerPage) % state?.flights.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="list-page">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((fly) => (
              <tr>
                <td>{fly.id}</td>
                <td>{fly.code}</td>
                <td>{fly.lat}</td>
                <td>{fly.lan}</td>
                <td>
                  <button onClick={() => openDetail(fly.id)}>
                    Detay
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="ileri >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< geri"
        renderOnZeroPageCount={null}
        className="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default ListeView;
