import { Card, ProgressBar } from 'react-bootstrap' // ou utilisez un composant personnalisé
import { FaSun, FaPlug, FaBatteryHalf } from 'react-icons/fa'


<FaSun size={24} color="gold" />

function SolarProductionCard({ currentProduction, maxProduction }) {
  return (
    <Card>
      <Card.Header>Production Solaire</Card.Header>
      <Card.Body>
        <ProgressBar 
          now={(currentProduction / maxProduction) * 100} 
          label={`${currentProduction} kW`} 
        />
      </Card.Body>
    </Card>
  )
}
