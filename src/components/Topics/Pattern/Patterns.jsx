import { PatternData } from "../../../assets/asset"
import ReusableTopic from "../ReusableTopic"


const Patterns = () => {
  return (
    <ReusableTopic
      title="Pattern Problems"
      description="Mastering pattern problems enhances your ability to recognize and implement efficient algorithms. Tackle various pattern challenges to improve your problem-solving skills and boost your coding proficiency."
      data={PatternData}
    />
  )
}

export default Patterns