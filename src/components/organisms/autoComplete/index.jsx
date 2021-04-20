import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './autoComplete.css';
import IconInput from '../../molecules/iconInput';
import List from '../../atoms/list';

function AutoComplete({
    id,
    type,
    iconClass,
    suggestedValues = [],
    displayKey,
    searchHandler
}) {
    const [searchTerm, updateSearchTerm] = useState(""),
        [activeIndex, setActiveIndex] = useState(),
        [showList, updateShowList] = useState(false),
        dispatch = useDispatch(),
        maxIndex = Array.isArray(suggestedValues) ? suggestedValues.length - 1 : 0;

    /**
     * to change active list item on the basis of pressed key
     * 
     * @param {HTMLSyntheticEvent} event 
     */
    function onKeyDownHandler({ keyCode }) {
        if (keyCode === 40) {
            setActiveIndex(activeIndex < maxIndex ? activeIndex + 1 : 0);
        } else if (keyCode === 38) {
            setActiveIndex(activeIndex > 0 ? activeIndex - 1 : maxIndex);
        } else if (keyCode === 13 && activeIndex >= 0) {
            itemSelected(suggestedValues[activeIndex]);
        }
    }

    /**
     * to display the selected list item in the input field
     * 
     * @param {Object/String} item 
     */
    function itemSelected(item) {
        updateShowList(false);
        updateSearchTerm(typeof item === "object" ? item[displayKey] : item);
        dispatch({ type: "CLEAR_CHARACTERS" });
    }

    /**
     * to handle change event of input field
     * 
     * @param {HTMLSyntheticEvent} event 
     */
    function onChangeHandler(event) {
        const { value } = event.target;
        updateShowList(Boolean(value));
        updateSearchTerm(value);
        searchHandler(value);
    }

    return (
        <div className="auto-complete-container">
            <IconInput
                id={id}
                name={id}
                type={type}
                value={searchTerm}
                iconClass={iconClass}
                onChangeHandler={onChangeHandler}
                onKeyDown={onKeyDownHandler}
            />
            {
                showList && suggestedValues.length > 0 &&
                <List
                    className="suggestion-list"
                    listItem={suggestedValues}
                    displayKey={displayKey}
                    listClass="suggestion-item"
                    activeIndex={activeIndex}
                    itemClickHandler={itemSelected}
                    itemHoverHandler={(index) => setActiveIndex(index)}
                />
            }
        </div>
    )
}

export default AutoComplete;