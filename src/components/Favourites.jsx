import { Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removefavAction } from "../redux/actions";

const Favourites = () => {
  const list = useSelector((state) => state.main.favourites);
  const dispatch = useDispatch();
  if (!list || list.length === 0) {
    return (
      <div>
        <h2>No favourites found</h2>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center mt-5">
      <div>
        <Button
          className="mb-4
        "
        >
          <Link className="text-light text-decoration-none" to={"/"}>
            Back to Home
          </Link>
        </Button>
        <h2>Favourites:</h2>
        <Row>
          {list.map((element, index) => {
            return (
              <Col
                className="border border-1 border-primary rounded-3 mb-2"
                key={index}
                xs={10}
              >
                <Link to={`/${element}`}>{element}</Link>
                <Button
                  className="btn-danger"
                  onClick={() => {
                    dispatch(removefavAction(element));
                  }}
                >
                  Delete
                </Button>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Favourites;
