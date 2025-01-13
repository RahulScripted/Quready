import asset from "./assets/asset"
import {Routes,Route} from 'react-router-dom'
import Contact from "./components/Contact/Contact"
import Home from "./Pages/Home"
import Navbar from "./components/Navbar/Navbar"
import Maths from './components/Topics/Maths/Maths';
import Patterns from './components/Topics/Pattern/Patterns';
import Array from "./components/Topics/Array/Array"
import String from "./components/Topics/String/String"
import Sorting from "./components/Topics/Sorting/Sorting"
import Searching from "./components/Topics/Searching/Searching"
import Matrix from "./components/Topics/Matrix/Matrix"
import Hashing from "./components/Topics/Hashing/Hashing"
import TwoPointers from "./components/Topics/Two Pointers/TwoPointers"
import PrefixSum from "./components/Topics/Prefix Sum/PrefixSum"
import Backtracking from "./components/Topics/Backtracking/Backtracking"
import LinkedList from "./components/Topics/Linked List/LinkedList"
import Trees from "./components/Topics/Trees/Trees"
import Heap from "./components/Topics/Heap/Heap"
import Stack from "./components/Topics/Stack/Stack"
import Queue from "./components/Topics/Queue/Queue"
import SlidingWindow from "./components/Topics/Sliding Window/SlidingWindow"
import BitManipulation from "./components/Topics/Bit Manipulation/BitManipulation"
import DynamicProgramming from "./components/Topics/Dynamic Programming/DynamicProgramming"
import Greedy from "./components/Topics/Greedy/Greedy"
import Graphs from "./components/Topics/Graphs/Graphs"
import Tries from "./components/Topics/Tries/Tries"
import Footer from "./components/Footer/Footer"
import ScrollToTop from "./components/Scroll To Top/ScrollToTop"
import { useEffect, useState } from "react"
import Preloader from "./components/Preloader/Preloader"
import Test from "./components/Test/Test"


function App() {
  // For Pre loader
  const [loading,setLoading] = useState(true)
  
  // Use Effect Hook
  useEffect(() =>{
    const timer = setTimeout(() => setLoading(false),3000)
    return () => clearTimeout(timer)
  },[])

  return (
    <>
      {loading? 
        ( <div className='flex items-center justify-center bg-black text-white w-full h-screen'>
            <Preloader />
          </div>
        )
        : (
          <div className="relative w-full min-h-screen z-0 px-4 py-3 md:px-12 overflow-x-hidden mb-5">

            {/* Background Image */}
            <img className="absolute top-0 left-0 w-screen -z-10" src={asset.bg} alt="bg" />

            <div className="z-10">
              <Navbar />
              <ScrollToTop />
              <Routes onNavigate={() => window.scrollTo(0,0)}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/topics/math" element={<Maths />} />
                <Route path="/topics/pattern" element={<Patterns />} />
                <Route path="/topics/array" element={<Array />} />
                <Route path="/topics/string" element={<String />} />
                <Route path="/topics/sorting" element={<Sorting />} />
                <Route path="/topics/searching" element={<Searching />} />
                <Route path="/topics/matrix" element={<Matrix />} />
                <Route path="/topics/hashing" element={<Hashing />} />
                <Route path="/topics/two_Pointers" element={<TwoPointers />} />
                <Route path="/topics/prefix_Sum" element={<PrefixSum />} />
                <Route path="/topics/backtracking" element={<Backtracking />} />
                <Route path="/topics/linkedList" element={<LinkedList />} />
                <Route path="/topics/trees" element={<Trees />} />
                <Route path="/topics/heap" element={<Heap />} />
                <Route path="/topics/stack" element={<Stack />} />
                <Route path="/topics/queue" element={<Queue />} />
                <Route path="/topics/sliding_window" element={<SlidingWindow />} />
                <Route path="/topics/bit_manipulation" element={<BitManipulation />} />
                <Route path="/topics/dynamic_programming" element={<DynamicProgramming />} />
                <Route path="/topics/greedy" element={<Greedy />} />
                <Route path="/topics/graphs" element={<Graphs />} />
                <Route path="/topics/tries" element={<Tries />} />
                <Route path="/test/:id" element={<Test />} />
              </Routes>
              <Footer />
            </div>
          </div>
        )
      }
    </>
  )
}

export default App
