export const RevenueCard = ({
  amount,
  title,
  orderCount
}) => {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <div className="text-gray-700 flex flex-col justify-center">
        <div className="flex">

        {title}
        <div className="ml-1 flex justify-center flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
        </div>
        </div>

       
      </div>
      <div className="flex justify-between">
        <div>
          ₹ {amount}
        </div>
        {orderCount ? <div className="flex">
          <div className="text-blue-500 font-medium underline">
            {orderCount}order(s)
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="blue" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div> : null}
      </div>
    </div>
  )
}