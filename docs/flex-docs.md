# flex container

> `flex-direction` sets how flex items are placed in the flex container
```css
flex-direction:
    row
    row-reverse
    column
    column-reverse
```
<br>

> `flex-wrap` sets whether flex items are forced onto one line or can wrap onto multiple lines
```css
flex-wrap:
    nowrap
    wrap
    wrap-reverse
```
<br>

> `flex-flow` shorthand for `flex-direction` | `flex-wrap`
```css
flex-flow:
    flex-direction
    flex-wrap
    flex-direction flex-wrap
```
<br>

> `align-content` alignment the cross-axis of the container. use with `flex-wrap: wrap`
> `justify-content` alignment the main-axis of the container.
```css
align-content: or justify-content:
    normal
    stretch
    flex-start
    center
    flex-end
    space-around
    space-between
    space-evenly
```
<br>

> `place-content` shorthand for `align-content` | `justify-content`
```css
place-content:
    align-content | justify-content       (use one value for `align-content` | `justify-content`)
```
<br>

> `align-items` alignment the cross-axis of the items.
```css
align-items:
    normal
    stretch
    flex-start
    center
    flex-end
    baseline
```
<br>

> `row-gap` creates gaps between rows items.
```
row-gap:
    normal
    size   (px, rem, %)
```
<br>

> `column-gap` creates gaps between columns items.
```
column-gap:
    normal
    size   (px, rem, %)
```
<br>

> `gap` creates gaps between rows and columns items.
```css
gap:
    normal
    size                            10px    (for row or columns)
    row-size column-size            4px 6px (first 'row' second 'column')
```

# flex items

> `flex-grow` property sets the flex grow factor of a flex item. value positive number.
```css
flex-grow:
    0
    1
    2
```
<br>

> `flex-shrink` property sets the flex shrink factor of a flex item. value positive number.
```css
flex-shrink:
    1
    0
    2
```
<br>

> `flex-basis` property sets the initial main size of a flex item. value unit-size.
```css
flex-basis:
    auto
    0
    size   (px, rem, %)
```
<br>

> `flex` shorthand for `flex-grow` | `flex-shrink` | `flex-basis`. Initial value not set.
```css
flex:
    none
    auto
    flex-grow
    flex-grow flex-shrink
    flex-grow flex-shrink flex-basis
    flex-basis
    flex-basis flex-grow
    flex-basis flex-grow flex-shrink
```
<br>

> `order` property sets the order to lay out an item in a flex container. value integer number [-n < n].
```css
order:
    0
    1
   -1
```
<br>

> `align-self` alignment the cross-axis of the item self position.
```css
align-self:
    auto
    stretch
    flex-start
    center
    flex-end
    baseline
```
