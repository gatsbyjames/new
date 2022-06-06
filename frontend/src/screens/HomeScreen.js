import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

function HomeScreen() {
  // const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());

    // async function fetchProduct() {
    //   const { data } = await axios.get('/api/products/')
    //   setProducts(data)
    // }

    // //////////
    // // then 대신에 const { data } 이렇게 해버리면 된다
    // // http:127.0.0.1:8000 지우고 package.json 에 proxy 설정해주면됨
    // // 서버 껏다 다시 켜줘야됨
    // //////////

    // fetchProduct()
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Product</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
