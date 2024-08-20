import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push("/login");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={navigateToAbout}>Login</button>
    </div>
  );
};
export default Home;
