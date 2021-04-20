import './list.css';

function List({
    className = "",
    listItem,
    displayKey,
    activeIndex,
    listClass = "",
    itemClickHandler,
    itemHoverHandler
}) {
    return (
        <>
            {
                Array.isArray(listItem) && listItem.length > 0 &&
                <ul className={className}>
                    {
                        listItem.map((item, index) => {
                            const itemDesc = typeof item === "object" ? item[displayKey] : item,
                                isActive = index === activeIndex;
                            return <li
                                key={itemDesc}
                                className={`${isActive ? "active" : ""} ${listClass}`}
                                onClick={() => itemClickHandler(item)}
                                onMouseEnter={() => itemHoverHandler(index)}
                            >
                                {itemDesc}
                            </li>
                        })
                    }
                </ul>
            }
        </>
    )
}

export default List;