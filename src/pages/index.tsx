import { Banner } from "../components/Banner";
import { Galery } from "../components/Galery";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Banner />
      <Galery />
    </main>
  )
}
