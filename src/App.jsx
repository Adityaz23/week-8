import { RevenueCard } from "./components/revenuecard";

export default function App() {
  return (
    // <div style={{display:'flex',justifyContent:'space-around'}}>

    //     <div style={{backgroundColor:'red',fontFamily:'cursive'}}>Hi from the first div</div>
    //     <div style={{backgroundColor:'cyan',fontFamily:'fantasy'}}>Hi from the first div</div>
    //     <div style={{backgroundColor:'yellow',fontFamily:'sans-serif'}}>Hi from the first div</div>

    // </div>

    <>
      <div className="grid grid-cols-4">
     <RevenueCard title={"Amount pending"} amount={"1,00,000"} orderCount={13}/>
     </div>
    </>
  )
}