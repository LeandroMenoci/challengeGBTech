import { Button } from '../components/Button'
import { Navigator } from '../components/Nav';
import { BoxInformationOne } from '../components/Box_information_one';
import { BoxInformationTwo } from '../components/Box_information_two';

export function Bag() {
  return (
    <div>
      <Navigator />
      <h1>PRODUTOS</h1>
      <BoxInformationOne />
      <BoxInformationTwo />
      <Button>Seguir para o pagamento</Button>
    </div>
  )
}