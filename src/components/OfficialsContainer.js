import React from "react";
import { Official } from "./Official";
import { connect } from "react-redux";
const OfficialsContainer = ({ officials }) => {
    return (
        <div className="officials-container" id="results" name="results">
            {officials.map((official, i) => {
                return <Official official={official} key={"official_" + i} />;
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        officials: state.officials
    };
};

export default connect(mapStateToProps)(OfficialsContainer);
