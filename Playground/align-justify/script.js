const display = document.getElementsByName('display')
    , items = document.getElementsByClassName('items')
    , checkbox = selectorContainer.querySelectorAll('input[type=checkbox]')
    , flex = document.getElementsByClassName('flex');


// display
displayContainer.addEventListener('change', function () {
    display.forEach(name => {
        if (name.checked) {
            container.style.display = name.value;
            if (name.value === 'flex') {
                Array.from(flex).forEach(option => {
                    option.innerText = 'flex-' + option.innerText;
                    option.value = 'flex-' + option.value;
                });
            } else {
                Array.from(flex).forEach(option => {
                    option.innerText = option.innerText.replace('flex-', '');
                    option.value = option.value.replace('flex-', '');
                });
            }
        }
    });
});


//  content-checked  content-selector
contentChecked(alignContentCheckbox, alignContentSelector);
contentSelector(alignContentSelector, alignContentCheckbox);

contentChecked(justifyContentCheckbox, justifyContentSelector);
contentSelector(justifyContentSelector, justifyContentCheckbox);

//  items-checked  items-selector
contentChecked(alignItemsCheckbox, alignItemsSelector);
contentSelector(alignItemsSelector, alignItemsCheckbox);

contentChecked(justifyItemsCheckbox, justifyItemsSelector);
contentSelector(justifyItemsSelector, justifyItemsCheckbox);


// Container

// content checked
function contentChecked(checkbox, selector) {
    checkbox.addEventListener('change', () => {
        setContentValue(checkbox, selector);
    });
}
// content selector
function contentSelector(selector, checkbox) {
    selector.addEventListener('change', () => {
        setContentValue(checkbox, selector);
    });
}

// set content value
function setContentValue(checkbox, selector) {
    if (checkbox.checked) {
        container.style[checkbox.value] = selector.value;
    } else {
        container.style[checkbox.value] = null;
    }
}


// Items

itemChecked(itemACheckbox, alignSelfSelectorA, justifySelfSelectorA);
itemChecked(itemBCheckbox, alignSelfSelectorB, justifySelfSelectorB);
itemChecked(itemCCheckbox, alignSelfSelectorC, justifySelfSelectorC);
itemChecked(itemDCheckbox, alignSelfSelectorD, justifySelfSelectorD);

itemSelector(alignSelfSelectorA, itemACheckbox);
itemSelector(justifySelfSelectorA, itemACheckbox);
itemSelector(alignSelfSelectorB, itemBCheckbox);
itemSelector(justifySelfSelectorB, itemBCheckbox);
itemSelector(alignSelfSelectorC, itemCCheckbox);
itemSelector(justifySelfSelectorC, itemCCheckbox);
itemSelector(alignSelfSelectorD, itemDCheckbox);
itemSelector(justifySelfSelectorD, itemDCheckbox);

function itemChecked(itemCheckbox, alignSelector, justifySelector) {
    itemCheckbox.addEventListener('change', () => {
        setItemValue(itemCheckbox, alignSelector, justifySelector);
    });
}

function itemSelector(selector, itemCheckbox) {
    selector.addEventListener('change', () => {
        setItemValue(itemCheckbox, selector);
    });
}

function setItemValue(itemCheckbox, alignSelector, justifySelector) {
    Array.from(items).forEach(item => {
        if (itemCheckbox.checked && item.innerText.toLowerCase() === itemCheckbox.value) {
            item.style[alignSelector.name] = alignSelector.value;
            item.style[justifySelector?.name] = justifySelector?.value;
        } else if (!itemCheckbox.checkbox && item.innerText.toLowerCase() === itemCheckbox.value) {
            item.style[alignSelector.name] = null;
            item.style[justifySelector?.name] = null;
        }
    });
}


selectorContainer.addEventListener('change', function (event) {
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            container.style.gridTemplate = `'a b' 'c d'`;
            Array.from(items).forEach(item => {
                item.style.flex = '0 150px';
            });
            break;
        } else {
            container.style.gridTemplate = 'none';
            Array.from(items).forEach(item => {
                item.style.flexBasis = 1;
            });
        }
    }
});

