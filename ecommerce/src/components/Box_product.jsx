import lorealProfessional from '../assets/images/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png'
import '../styles/box_product.scss'

export function BoxProduct() {
  return (
    <div className="boxProduct">
      <img src={lorealProfessional} alt="" className='imageBoxProduct' />
      <p className='titleProduct'>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</p>
      <p className='valueProduct'>R$ 225,90</p>
    </div>
  )
}