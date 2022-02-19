import { Artists } from "../components/Artists";
import { Banner } from "../components/Banner";
import { Galery } from "../components/Galery";
import { Header } from "../components/Header";
import { Metrics } from "../components/Metrics";
import { Populars } from "../components/Populars";

export default function Home() {
  return (
    <>
      <main className="main">
        <section className="container">
          <Header />
          <Banner />
          <Galery />
        </section>
      </main>
    
      <section className="container">
        <Metrics />
        <Populars />
        <Artists />
      </section>
    </>
  )
}
