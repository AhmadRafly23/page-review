function Review() {
  const users = [
    {
      id: 1,
      name: "Rara Shintia",
      review: "Harganya murah tapi kualitas tidak kaleng-kaleng",
      img: "https://images.pexels.com/photos/1458332/pexels-photo-1458332.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 2,
      name: "Mayudi Ayunda",
      review: "Barang diterima dengan cepat. Dan kualitas mantap",
      img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 3,
      name: "Zahra Alexander",
      review: "Barang keren dan cocok untuk dibawa kemana saja",
      img: "https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];

  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <div className="Item">
              <img src={user.img} />
              <div className="User">
                <h3>{user.name}</h3>
                <p>{user.review}</p>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default Review;
