import assignLanes from "../../assignLanes";
import { getItemWidth, getLaneLeft } from "../../utils/timelineUtils";
import TimelineItem from "./TimelineItem";

function Timeline({ items }) {
    const lanes = assignLanes(items);
    const minDate = Math.min(...items.map(i => new Date(i.start)));
    const maxDate = Math.max(...items.map(i => new Date(i.end)));

    console.log(lanes);

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

                                return (
                                    <TimelineItem
                                        key={item.id}
                                        name={item.name}
                                        width={width}
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