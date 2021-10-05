
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import useServices from '../useServices/useServices';

const Services = () => {
    const [services, setServices] = useServices();

    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {

                    services.map(service => <Service key={service.id} service={service}></Service>)
                }

            </Row>
        </Container>
    );
};

export default Services;