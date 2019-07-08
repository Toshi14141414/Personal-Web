import React from 'react';

const ToolBoxPopOver = ({
    id,
    top,
    bottom,
    left,
    right,
    description,
    comment,
    onClick }) => {
    return (
        <div
            id={id}
            className={`${"c-toolbox-popover"+id%5}`}
            style={{
                bottom: bottom,
                top: top,
                left: left,
                right: right
            }}
        >
            <button
                className="c-toolbox-popover__close"
                onClick={onClick}
            >
                
            </button>
            <div className={`${"c-toolbox-popover__text"+id%5}`}>
                <p className="c-toolbox-popover__description"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
                {comment &&
                    <div className="c-toolbox-popover__footer">
                        <div className="c-toolbox-popover__avatar">

                        </div>
                        <span
                            className="c-toolbox-popover__comment"
                            dangerouslySetInnerHTML={{ __html: comment }}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default ToolBoxPopOver;