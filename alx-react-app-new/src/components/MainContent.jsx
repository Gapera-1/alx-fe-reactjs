function MainContent() {
  const cities = ['Paris', 'Tokyo', 'New York', 'Cape Town'];

  return (
    <div
      style={{
        backgroundColor: '#f3f3f3',
        padding: '25px',
        marginTop: '15px',
        borderRadius: '6px',
        textAlign: 'center',
      }}
    >
      <h2>Our Selection</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cities.map((city) => (
          <li
            key={city}
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              margin: '5px',
              padding: '8px 15px',
              borderRadius: '20px',
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MainContent;
