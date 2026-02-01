import { useEffect, useRef, useState } from 'react';
import { isActivationKey, KEYS } from '../../utils/a11yUtils';

function TimelineItem({ name, width, onNameChange, itemId, isEditing, onStartEdit, onStopEdit, start, end, backgroundColor }) {
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
        if (e.key === KEYS.ENTER && !e.shiftKey) {
            e.preventDefault();
            handleSave();
        } else if (e.key === KEYS.ESCAPE) {
            e.preventDefault();
            handleCancel();
        }
    };

    const handleItemKeyDown = (e) => {
        if (!isEditing && isActivationKey(e.key)) {
            e.preventDefault();
            handleDoubleClick();
        }
    };

    const handleInputBlur = () => {
        handleSave();
    };

    return (
        <div
            role="button"
            tabIndex={isEditing ? -1 : 0}
            aria-label={`Timeline item: ${name}. Duration: ${start} to ${end}. ${isEditing ? 'Currently editing' : 'Double-click or press Enter to edit'}`}
            aria-describedby={isOverflowing ? `tooltip-${itemId}` : undefined}
            className={`timeline-item ${isEditing ? 'editing' : ''}`}
            style={{
                width,
                backgroundColor: isEditing ? '#fff' : backgroundColor
            }}
            onDoubleClick={!isEditing ? handleDoubleClick : undefined}
            onKeyDown={!isEditing ? handleItemKeyDown : undefined}
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
                    aria-label={`Edit item name: ${name}`}
                    aria-describedby={`help-${itemId}`}
                />
            ) : (
                <span
                    ref={textRef}
                    className="timeline-item-text"
                    aria-hidden="true"
                >
                    {name}
                </span>
            )}

            <span
                id={`help-${itemId}`}
                className="sr-only"
            >
                Press Enter to save, Escape to cancel
            </span>

            {isOverflowing && (
                <span
                    id={`tooltip-${itemId}`}
                    className="sr-only"
                >
                    Full text: {name}
                </span>
            )}
        </div>
    );
}

export default TimelineItem;
