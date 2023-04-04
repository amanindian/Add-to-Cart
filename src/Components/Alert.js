import React from "react";

function Alert(props) {
    return (
        props.Popup && (
            <div
                style={{
                    minWidth: "100%",
                    position: "absolute",
                }}
                className={`alert alert-${props.Popup.type} alert-dismissible fade show`}
                role="alert"
            >
                {props.Popup.msg}
            </div>
        )
    );
}

export default Alert;
