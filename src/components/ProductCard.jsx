import React, { useState } from 'react';

const ProductCard = ({ product }) => {
    const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0]?.id);
    const [quantity, setQuantity] = useState(1);
    return (
        <div style={{
            display: 'flex',
            border: '1px solid lightGray',
            flexDirection: "column",
        }} key={product?.id}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '5px',
                backgroundColor: '#FFFFFF',
                borderRadius: '5px',
                height: '100%',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    alignItems: 'center',
                }}>
                    <img src={product?.product_image} alt={product?.title} style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '5px',
                    }} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        alignItems: 'center',
                        width: '100%',
                    }} >
                        <h4>{product?.title}</h4>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'start',
                            width: '100%',
                            gap: '5px',
                        }}>
                            <div>$250</div>
                            <div style={{
                                textDecoration: 'line-through',
                                color: 'gray',
                            }}>$399</div>
                        </div>
                        {product?.variants?.length ? (
                            <select value={selectedVariant} onChange={(e) => {
                                setSelectedVariant(e.target.value);
                            }}>
                                {product?.variants.map(variant => (
                                    <option key={variant?.id} value={variant.id}>{variant.title}</option>
                                ))}
                            </select>
                        ) : null}
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    gap: '1px',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '1px',
                        alignItems: 'center',
                        height: '100%',
                        width: '50%',
                    }}>
                        <button
                            onClick={() => {
                                setQuantity(
                                    quantity > 1 ? quantity - 1 : quantity
                                )
                            }}
                            style={{
                                padding: '5px',
                                height: '100%',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >-</button>
                        <div style={{
                            margin: '0px',
                            width: '10px',
                            background: 'whiteSmoke',
                            padding: '5px',
                            // height: '100%'
                        }} > {quantity}</div>
                        <button
                            onClick={() => {
                                setQuantity(
                                    quantity + 1
                                )

                            }}
                            style={{
                                padding: '5px',
                                height: '100%',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >+</button>
                    </div>
                    <button
                        onClick={() => { }}
                        style={{
                            width: '50%',
                            backgroundColor: 'black',
                            padding: '5px',
                            borderRadius: '5px',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                        }}>
                        Add +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;