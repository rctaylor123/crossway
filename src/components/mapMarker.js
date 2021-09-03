import React from "react"

import Container from "react-bootstrap/Container";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChurch } from '@fortawesome/free-solid-svg-icons';

const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <div>5454 County Road 126</div>
        <div>Celina, TX 75009</div>
      </Popover.Body>
    </Popover>
  );

const MapMarker = () => {
  return (
    <header>
      <div className="map-marker">
        <Container>
        <OverlayTrigger show={true} placement="top" overlay={popover}>
            <span>
                <FontAwesomeIcon icon={faChurch} color="green" size="lg" />
            </span>
        </OverlayTrigger>
        </Container>
      </div>
    </header>
  )
}

export default MapMarker;