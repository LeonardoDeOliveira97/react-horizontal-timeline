import assignLanes from "../../assignLanes";
import { getItemWidth, getLaneLeft } from "../../utils/timelineUtils";
import { generateItemColor } from "../../utils/colorUtils";
import TimelineItem from "./TimelineItem";

function Timeline({ items, editingItemId, onNameChange, onStartEdit, onStopEdit }) {
    const lanes = assignLanes(items);
    const minDate = Math.min(...items.map(i => new Date(i.start)));
    const maxDate = Math.max(...items.map(i => new Date(i.end)));

    return (
        <div>
            {lanes.map((lane, laneIndex) => {
                const left = getLaneLeft(lane, minDate, maxDate);

                return (
                    <div
                        key={laneIndex}
                        style={{
                            position: 'relative',
                            height: 40,
                            marginBottom: 12
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                left: `${left}%`,
                                display: 'flex',
                                gap: 8
                            }}
                        >
                            {lane.map(item => {
                                const { width } = getItemWidth(item);
                                const backgroundColor = generateItemColor(item.id);

                                return (
                                    <TimelineItem
                                        key={item.id}
                                        itemId={item.id}
                                        name={item.name}
                                        width={width}
                                        backgroundColor={backgroundColor}
                                        isEditing={editingItemId === item.id}
                                        onNameChange={onNameChange}
                                        onStartEdit={onStartEdit}
                                        onStopEdit={onStopEdit}
                                        start={item.start}
                                        end={item.end}
                                    />
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Timeline;