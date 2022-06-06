import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen() {
  const { id } = useParams();
  // id 는 오로직 한개
  const { search } = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const qty = search ? Number(search.split("=")[1]) : 1;

  // location 은 필수

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // console.log('cartItems', cartItems)
  // console.log('hi')
  // console.log(cart)
  // console.log(cartItems)

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
    // console.log("cart is added")
    //원래는 빈 어레이 인데 useEffect 가 마운트 되고 난 다음에 카트가 추가됨
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHanlder = () => {
    navigate("/login?redirect=/shipping");
    // ㅈㄴ 간단하네 씨빨!!!! shipping 앞에 / 만 붙이니까 login 띠 버리고 바로 shipping 으로 이동함
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant="info">
            Your cart is empty <Link to="/">go back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                    {/* fluid 글씨 작아짐, rounded 잘 모르겠음 */}
                  </Col>

                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>

                  <Col md={2}>${item.price}</Col>

                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item.product, e.value.target))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                        //배열이 0부터 시작해서 x + 1 임
                      ))}
                    </Form.Control>
                  </Col>

                  <Col>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                      //item.product 집어 넣어야 작동하네
                    >
                      <i className="fas- fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <h2>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h2>
            $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </ListGroup>

          <ListGroup.Item>
            <Button
              type="button"
              className="btn-block"
              disabled={cartItems.length === 0}
              onClick={checkoutHanlder}
            >
              Process To Checkout
            </Button>
          </ListGroup.Item>
        </Card>
      </Col>
    </Row>
  );
}

export default CartScreen;
