import { useEffect, useRef, useState } from 'react';

function TimelineItem({ name, width, onNameChange, itemId, isEditing, onStartEdit, onStopEdit }) {
    const textRef = useRef(null);
    const inputRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [editValue, setEditValue] = useState(name);

    useEffect(() => {
        if (textRef.current) {
            const { scrollWidth, clientWidth } = textRef.current;
            setIsOverflowing(scrollWidth > clientWidth);
        }
    }, [name, width]);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    const handleDoubleClick = () => {
        setEditValue(name);
        onStartEdit(itemId);
    };

    const handleSave = () => {
        if (editValue.trim() && editValue !== name) {
            onNameChange(itemId, editValue.trim());
        }
        onStopEdit();
    };

    const handleCancel = () => {
        setEditValue(name);
        onStopEdit();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    };

    const handleInputBlur = () => {
        handleSave();
    };

    return (
        <div
            title={!isEditing && isOverflowing ? name : undefined}
            className={`timeline-item ${isEditing ? 'editing' : ''}`}
            style={{
                width
            }}
            onDoubleClick={handleDoubleClick}
        >
            {isEditing ? (
                <input
                    ref={inputRef}
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={handleInputBlur}
                    className="timeline-item-input"
                />
            ) : (
                <span
                    ref={textRef}
                    className="timeline-item-text"
                >
                    {name}
                </span>
            )}
        </div>
    );
}

export default TimelineItem;
