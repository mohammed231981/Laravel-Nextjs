import { cards, posts } from "../../lib/dashboard/data";
import Card from "../../components/ui/dashboard/card";
import styles from "../../components/ui/dashboard/dashboard.module.css";


const Dashboard = () => {
  return (
    <div className="xl:pl-[270px] h-full">
      <h1 className="pl-4 font-bold text-2xl pb-2  text-zinc-700">Dasboard</h1>
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <h3 className="pl-4 font-bold  text-lg  text-zinc-700">Status</h3>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div> 
    </div>
    <div className={styles.wrapper}>
      <div className="w-full p2">
      <a href="/berichten"><h3 className="pl-4 font-bold text-lg  text-zinc-700 underline">Berichten</h3></a>
        <div className="rounded-md border-zinc-300 border-2 mr-2 ml-2">
          {posts.map((item) => (
            <div className="flex p-2">
            <Card item={item} key={item.id} />
            </div>
          ))}
        </div>
      </div> 
    </div>
    </div>
  );
};

export default Dashboard;