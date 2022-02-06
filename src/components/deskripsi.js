function Deskripsi(props) {
  const { name, category, isDiscount } = props;
  const benefits = [
    "Tidak kusut terkena air",
    "Bahan lebih halus",
    "Cocok untuk dibawa kemana saja",
  ];

  function TambahCart(e) {
    console.log("Ditambahkan " + e);
  }

  return (
    <div className="Deskripsi">
      <p className="Category">{category}</p>
      <h1 className="Title">{name}</h1>
      <p className="Price">IDR 10.499.999</p>
      <p className="Discount">
        {isDiscount ? "Diskon 50% Off" : "Belum ada diskon"}
      </p>
      <p className="Info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <ul className="List-benefits">
        {benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
      <button onClick={TambahCart.bind(this, name)} className="Btn">
        Add to Cart
      </button>
    </div>
  );
}

export default Deskripsi;
