
import Badge from 'react-bootstrap/Badge';

export default function ProductTags({ tags }) {
    return (
        <>
            { tags.map((item, idex) => (
                <Badge key={ idex } bg="success" style={ { marginRight: '5px', textTransform: 'capitalize' } }>{ item }</Badge>
            )) }
        </>
    );
}