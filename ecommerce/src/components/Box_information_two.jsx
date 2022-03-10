import '../styles/box_information_two.scss'
export function BoxInformationTwo() {
  return (
    <div className="boxInformationTwo">
      <table className='tableBoxInformationTwo'>
        <tbody className='tableBodyBox'>
          <tr className='trTableBox'>
            <td className=''>Produtos</td>
            <td className='valueTotalProducts'>R$ 624,00</td>
          </tr>
        </tbody>
        <tbody className='tableBodyBox'>
          <tr className='trTableBox'>
            <td className='freightBox'>Frete</td>
            <td className='valueTotalFreight'>R$ 5,30</td>
          </tr>
        </tbody>
        <tbody className='tableBodyBox'>
          <tr className='discountProductsBoxInformation trTableBox'>
            <td className='discountProducts'>Desconto</td>
            <td className='valueTotalDiscount'>- R$ 30,00</td>
          </tr>
        </tbody>
        <tfoot className='tableBodyBox'>
          <tr className='paymentBoxInformation trTableBox'>
            <td className='paymentTotal'>Total</td>
            <td className='valuePayment'>R$ 600,10</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}