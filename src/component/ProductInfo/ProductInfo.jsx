const ProductInfo = ({ cards }) => {
    return (
        <>
        {cards.map(({ id, img, title, description, price }) => (
                    
                    <li key={id}>
                        <img src={img} alt={title} />
                        <p>{title}</p>
                        <p>{ description}</p>
                        <p>{price}</p>
                    </li>
                )
                )}  
        </>
    )
}

export default ProductInfo