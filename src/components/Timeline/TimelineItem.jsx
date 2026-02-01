import { useEffect, useRef, useState } from 'react';

function TimelineItem({ name, width }) {
    const textRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        if (textRef.current) {
            const { scrollWidth, clientWidth } = textRef.current;
            setIsOverflowing(scrollWidth > clientWidth);
        }
    }, [name, width]);

    return (
        <div
            title={isOverflowing ? name : undefined}
            className="timeline-item"
            style={{
                width
            }}
        >
            <span
                ref={textRef}
                className="timeline-item-text"
            >
                {name}
            </span>
        </div>
    );
}

export default TimelineItem;
