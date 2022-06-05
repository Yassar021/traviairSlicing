import Head from "next/head"
import Fleet from "../components/fleet"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Safety from "../components/safety"
import Services from "../components/services"
import Testimoni from "../components/testimoni"


const Index = () => {
  return(
    <>
    <Head>
      <title>Travia Air</title>
    </Head>

    <Hero />
    <Services />
    <Safety />
    <Fleet />
    <Testimoni />
    <Footer />
    </>
  )
}

export default Index