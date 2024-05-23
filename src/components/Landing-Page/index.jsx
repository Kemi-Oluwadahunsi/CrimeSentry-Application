import Hero from "./Sub-Components/Hero"
import Howitworks from "./Sub-Components/Howitworks"
import Join from "./Sub-Components/Join"
import SectionTwo from "./Sub-Components/SectionTwo"
import Testimonial from "./Sub-Components/Testimonial"
import WhyCrimeSentry from "./Sub-Components/WhyCrimeSentry"
import WorkTogether from "./Sub-Components/WorkTogether"

const index = () => {
  return (
    <div>
        <Hero />
        <SectionTwo />
        <WhyCrimeSentry />
        <Howitworks />
        <Join />
        <Testimonial />
        <WorkTogether />
    </div>
  )
}

export default index