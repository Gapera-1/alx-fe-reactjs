export default function UserCard({ user }) {
  if (!user) return null;

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", width: "300px" }}>
      <img src={user.avatar_url} width="100" />
      <h2>{user.login}</h2>
      <p>{user.bio || "No bio available"}</p>

      <a href={user.html_url} target="_blank">
        View GitHub Profile
      </a>
    </div>
  );
}
