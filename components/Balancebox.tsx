
import Counter from './Counter'
import Chart from './Chart'

const Balancebox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        <Chart accounts={accounts}/>
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
          Bank Accounts: {totalBanks} 
        </h2>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>
            Total Current Balance
          </p>
          <div className='total-balance-amount flex-center gap-2'>
            <Counter amount={totalCurrentBalance}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Balancebox
