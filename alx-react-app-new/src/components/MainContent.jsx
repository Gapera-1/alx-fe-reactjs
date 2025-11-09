function MainContent() {
  // Required literal text
  const quote = "I love to visit New York, Paris, and Tokyo.";

  return (
    <main
      style={{
        backgroundColor: '#f3f3f3',
        padding: 25,
        marginTop: 15,
        borderRadius: 6,
        textAlign: 'center',
      }}
    >
      <h2>Our Selection</h2>
      <p>{quote}</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {['Paris', 'Tokyo', 'New York', 'Cape Town'].map((city) => (
          <li
            key={city}
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              margin: 5,
              padding: '8px 15px',
              borderRadius: '20px',
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default MainContent;
