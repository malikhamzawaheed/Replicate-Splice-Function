function customSplice(array, start, deleteCount, ...itemsToAdd) {
    if (start < 0) {
        start = array.length + start;
        if (start < 0) start = 0;
    }
    start = Math.min(start, array.length);
    if (deleteCount === undefined) {
        deleteCount = array.length - start;
    } else {
        deleteCount = Math.min(deleteCount, array.length - start);
    }

    const removedItems = array.slice(start, start + deleteCount);
    const before = array.slice(0, start);
    const after = array.slice(start + deleteCount);

    const newArray = [...before, ...itemsToAdd, ...after];
    array.length = 0;
    newArray.forEach(item => array.push(item));

    return removedItems;
}

document.getElementById('applyButton').addEventListener('click', () => {
    const arrayInput = document.getElementById('arrayInput').value.split(',').map(item => item.trim());
    const startIndex = parseInt(document.getElementById('startIndex').value, 10);
    const deleteCount = parseInt(document.getElementById('deleteCount').value, 10);
    const itemsToAdd = document.getElementById('itemsToAdd').value.split(',').map(item => item.trim()).filter(Boolean);

    const originalArray = [...arrayInput];
    const removedItems = customSplice(arrayInput, startIndex, deleteCount, ...itemsToAdd);

    document.getElementById('originalArray').textContent = `[${originalArray.join(', ')}]`;
    document.getElementById('modifiedArray').textContent = `[${arrayInput.join(', ')}]`;
    document.getElementById('removedItems').textContent = `[${removedItems.join(', ')}]`;
});
