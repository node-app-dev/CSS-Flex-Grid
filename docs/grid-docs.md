# grid container

> `grid-template-rows` using grid rows height size
> `grid-template-columns` using grid columns width size
> size = units size (px, rem, %)
```css
grid-template-rows: or grid-template-columns: 
    none
    auto
    units-size
    1fr                             'fr' mean 'fraction'
    fit-content(size)               content max-size = set size or min-size = content size
    repeat(length, size)            length = repeat numbers or size = repeat size
    min-content                     min-content = content minimum size
    max-content                     max-content = content maximum size
    minmax(min-size, max-size)      min-size = content minimum width or height and max-size content maximum width or height

example:
    1fr 2fr 1fr
    100px 200px 50%
    fit-content(200px) repeat(3, 1fr)
    repeat(3, max-content)

auto-fit | auto-fill                auto-fit or auto-fill use with repeat function first argument
    repeat(auto-fit, minmax(200px, auto))
    repeat(auto-fill, minmax(200px, auto))
```
<br>

> `grid-template-areas` relation grid items `grid-area`, The area name `grid-area` has to be declared.
```css
grid-template-areas:
    none
    'area name'                     'a b c' 'd e f'
    '.' is empty cell               'a . b'

example:
    'a b c'
    'd . e'
    'f g h'
```
<br>

> `grid-template` shorthand for `grid-template-columns` | `grid-template-rows` | `grid-template-areas`.
```css
grid-template:
    none
    rows / columns                  (using 'rows' or 'columns' all values)
    areas                           'a b c'
    areas rows                      'a b c' 100px
    areas / columns                 'a b c' / 1fr 1fr 1fr
    areas rows / columns            'a b c' 100px / 1fr 1fr 1fr

example:
grid-template:
  1fr 1fr 1fr /
  1fr 1fr 1fr;
grid-template:
  'a b c'
  'd e f'
  'g h i';
grid-template: 
  'a b c' 1fr
  'd e f' 1fr
  'g h i' 1fr /
  1fr 1fr 1fr;
```
<br>

> The 'rows' or 'columns' that are created without `grid-template-rows` or `grid-template-columns` are `grid-auto-rows` or `grid-auto-columns`.
```css
grid-auto-rows: or grid-auto-columns:
    auto
    unit-size
    max-content
    min-content
    minmax()
```
<br>

> `grid-auto-flow` direction rows or columns with dense.
```css
grid-auto-flow: 
    row
    column
    dense
    row dense
    column dense
```
<br>

> `grid` shorthand for (`grid-template-rows` | `grid-template-columns` | `grid-template-areas`) or  (`grid-auto-rows` | `grid-auto-columns` | `grid-auto-flow`) in a single declaration. `grid` should be used after grid property because the `grid` will replace them.
```css
grid: 
    none
    rows / columns
    areas
    areas rows
    areas / columns 
    areas rows / columns
    auto-flow dense? auto-rows / columns
    rows / auto-flow dense? auto-columns
```

> example for template like `grid-template`.
```css
grid: 
  'a b c' 1fr
  'd e f' 1fr
  'g h i' 1fr /
  1fr 1fr 1fr;
```

> example for grid-auto+
```css
grid:
    200px 1fr / auto-flow dense? 100px;
    like this:
    grid-template-rows: 200px 1fr;
    grid-auto-flow: column dense?;
    grid-auto-columns: 100px;

grid:
    auto-flow dense? 100px / 200px 1fr ;
    like this:
    grid-template-columns: 200px 1fr;
    grid-auto-flow: row dense;
    grid-auto-rows: 100px;
```
<br>

> `grid-row-gap` or `row-gap` creates gaps between rows items. `grid-row-gap` replaced by `row-gap` standard `row-gap`.
```css
row-gap:
    normal
    size   (px, rem, %)
```
<br>

> `grid-column-gap` or `columns-gap` creates gaps between columns items. `grid-column-gap` replaced by `column-gap` standard `column-gap`.
```css
column-gap:
    normal
    size   (px, rem, %)
```
<br>

> `grid-gap` or `gap` creates gaps between rows and columns items. `grid-gap` replaced by `gap` standard `gap`.
```css
gap:
    normal
    size                            10px    (for row or columns)
    row-size column-size            4px 6px (first 'row' second 'column')
```
<br>

> `align-content` alignment the cross-axis of the container.
> `justify-content` alignment the main-axis of the container.
```css
align-content: or justify-content:
    normal
    start
    center
    end
    space-around
    space-between
    space-evenly
    stretch
```
<br>

> `place-content` shorthand for `align-content` | `justify-content`.
```css
place-content:
    align-content | justify-content   (use one value for `align-content` | `justify-content`)
```
<br>

> `align-items` alignment the cross-axis of the items.
> `justify-items` alignment the main-axis of the items.
```css
align-items: or justify-items:
    normal
    stretch
    start
    center
    end
    baseline
```
<br>

> `place-items` shorthand for `align-items` | `justify-items`.
```css
place-items:
    align-items | justify-items       (use one value for `align-items` | `justify-items`)
```


# grid items

> `grid-row-start` indicates the starting position of the item row.
```css
grid-row-start:
    auto
    row-line-start-position         1 or -1 (line position numbers can be negative or positive)
    span number                     span 2  (starting from current line row position to span number)
    grid-area-name                  (using grid area name for `grid-template-areas`)
```
<br>

> `grid-row-end` indicates the ending position of the item row.
```css
grid-row-end:
    auto
    row-line-end-position           3 or -3 (line position numbers can be negative or positive)
    span number                     span 2  (ending from current line row position to span number)
    grid-area-name                  (using grid area name for 'grid-template-areas')
```
<br>

> `grid-row` shorthand for `grid-row-start` | `grid-row-end`.
```css
grid-row:
    auto
    start                           (one value for start)
    start / end
```
<br>

> `grid-column-start` indicates the starting position of the item column.
```css
grid-column-start:
    auto
    column-line-start-position      1 or -1 (line position numbers can be negative or positive)
    span number                     span 2  (starting from current line column position to span number)
    grid-area-name                  (using grid area name for `grid-template-areas`)
```

> `grid-column-end` indicates the ending position of the item column.
```css
grid-column-end:
    auto
    column-line-end-position        3 or -3 (line position numbers can be negative or positive)
    span number                     span 2  (ending from current line column position to span number)
    grid-area-name                  (using grid area name for `grid-template-areas`)
```
<br>

> `grid-column` shorthand for `grid-column-start` | `grid-column-end`.
```css
grid-column:
    auto
    start                           (one value for start)
    start / end
```
<br>

> `grid-area` shorthand for `grid-row-start` | `grid-column-start` | `grid-row-end` | `grid-column-end`.
```css
grid-area:
    auto
    area-name                       (like a, b, c and header, menu, content, footer)
    row-start / column-start / row-end / column-end
    1                               (using 1 value for `row-start`)
    1 / 2                           (using 2 value for `row-start` or 'column-start')
    1 / 2 / 3                       (using 3 value for `row-start` or `column-start` or `row-end`)
    1 / 2 / 3 / 4                   (using 4 value for `row-start` or `column-start` or `row-end` or `column-end`)

grid-area: 1 / 2 / 3 / 4
    grid-row-start: 1;
    grid-column-start: 2;
    grid-row-end: 3;
    grid-column-end: 4;
grid-area: name     
grid-area: a / b / c / d
```
<br>


> `order` property sets the order to lay out an item in a grid container. value integer number [-n < n].
```css
order:
    0
    1
   -1
```

> `align-self` alignment the cross-axis of the item self position.
> `justify-self` alignment the main-axis of the item self position.
```css
align-self: or justify-self:
    auto
    stretch
    start
    center
    end
    baseline
```
<br>

> `place-self` shorthand for `align-self` | `justify-self`.
```css
place-self:
    align-self | justify-self         (use one value for `align-self` or `justify-self`)
```
