import Header from "../components/Header";
import Leaderboard from "../components/Leaderboard";
import PointClaim from "../components/PointClaim";
import History from "../components/History";
import CreateUserForm from "../components/CreateUserFrom";

export default function Home() {
  return (
    <div className="p-4 space-y-6 max-w-5xl mx-auto">
      <Header />
      <CreateUserForm/>
      <PointClaim />
      <Leaderboard />
      <History />
    </div>
  );
}
