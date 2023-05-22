import Footer from "./components/Footer"
import Header from "./components/Header"
import "./index.css"
import UserOpinion from "./routes/UserOpinion"
import VisitUs from "./routes/VisitUs"


export default function App() {
  return (
    <>
      <Header />
      <main >
        <VisitUs />
        <UserOpinion />
      </main>
      <Footer />
    </>
  )
}

