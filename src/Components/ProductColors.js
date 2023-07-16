import { GridColors } from "../Styles/General.styles";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function ProductColors({ colors }) {
    return (
        <>
            <GridColors>
                {
                    colors.map((item, index) => (
                        <OverlayTrigger
                            key={ index }
                            placement="bottom"
                            overlay={ <Tooltip id="button-tooltip-2">{ item.colour_name }</Tooltip> }
                        >
                            <div className="" style={ { backgroundColor: item.hex_value } }>
                            </div>
                        </OverlayTrigger>
                    ))
                }
            </GridColors>
        </>
    );
}