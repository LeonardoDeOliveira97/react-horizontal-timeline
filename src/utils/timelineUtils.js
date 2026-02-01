const MIN_WIDTH_PX = 160;

export function getItemWidth(item) {
    const start = new Date(item.start);
    const end = new Date(item.end);

    const durationDays =
        (end - start) / (1000 * 60 * 60 * 24) + 1;

    const width = Math.max(durationDays * 20, MIN_WIDTH_PX);

    return { width };
}

export function getLaneLeft(lane, minDate, maxDate) {
    const firstItem = lane[0];

    const start = new Date(firstItem.start);
    const total = maxDate - minDate;

    return ((start - minDate) / total) * 100;
}