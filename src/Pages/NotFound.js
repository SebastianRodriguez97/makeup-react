import Alert from 'react-bootstrap/Alert';

export default function NotFound() {
    return (
        <>
            <Alert variant="warning">
                <Alert.Heading>Not Found</Alert.Heading>
                <p>
                    The page you are looking for may have been moved, deleted or possibly never existed.
                </p>
                <hr />
                <p className="mb-0">
                    404 Page Not Found.
                </p>
            </Alert>
        </>
    );
}