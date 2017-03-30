# React Flexbox Grid

http://flexboxgrid.com/ ported to react components.

## Installation

```
npm install react-flexboxgrid --save
```

## Usage

```react
<Grid fluid>
  <Row>
    <Col xs={12} md={6}>
      Grid Column!
    </Col>
    <Col xs={12} md={6}>
      Grid Column!
    </Col>
  </Row>
</Grid>
```

## Grid Props

* `fluid` *(bool)* : responsive grid or not
* `nodeName` *(string)* : the element's node name (default `'div'`)

All other props applied directly to the grid element.


## Row Props

* `xsHAlign` *(string)* *(CSS `?-xs`)* : horizontal alignment : `'start'`, `'center'`, or `'end'`
* `smHAlign` *(string)* *(CSS `?-sm`)* : horizontal alignment : `'start'`, `'center'`, or `'end'`
* `mdHAlign` *(string)* *(CSS `?-md`)* : horizontal alignment : `'start'`, `'center'`, or `'end'`
* `lgHAlign` *(string)* *(CSS `?-lg`)* : horizontal alignment : `'start'`, `'center'`, or `'end'`
* `xsVAlign` *(string)* *(CSS `?-xs`)* : vertical alignment : `'top', `'middle'`, or `'bottom'`
* `smVAlign` *(string)* *(CSS `?-sm`)* : vertical alignment : `'top'`, `'middle'`, or `'bottom'`
* `mdVAlign` *(string)* *(CSS `?-md`)* : vertical alignment : `'top'`, `'middle'`, or `'bottom'`
* `lgVAlign` *(string)* *(CSS `?-lg`)* : vertical alignment : `'top'`, `'middle'`, or `'bottom'`
* `xsDistribution` *(string)* *(CSS `?-xs`)* : distribution : `'around'`, or `'between'`
* `smDistribution` *(string)* *(CSS `?-sm`)* : distribution : `'around'`, or `'between'`
* `mdDistribution` *(string)* *(CSS `?-md`)* : distribution : `'around'`, or `'between'`
* `lgDistribution` *(string)* *(CSS `?-lg`)* : distribution : `'around'`, or `'between'`
* `reverse` *(bool)* *(CSS `reverse`)* : reverse ordering of all columns
* `nodeName` *(string)* : the element's node name (default `'div'`)

All other props applied directly to the grid element.


## Col Props

* `xs` *(number|bool)* *(CSS `col-xs`, `col-xs-?`)* : the column size : `1`...`12`, or `true`
* `sm` *(number|bool)* *(CSS `col-sm`, `col-sm-?`)* : the column size : `1`...`12`, or `true`
* `md` *(number|bool)* *(CSS `col-md`, `col-md-?`)* : the column size : `1`...`12`, or `true`
* `lg` *(number|bool)* *(CSS `col-lg`, `col-lg-?`)* : the column size : `1`...`12`, or `true`
* `xsOffset` *(number)* *(CSS `col-xs-offset-?`)* : offset column : `1`...`12`
* `smOffset` *(number)* *(CSS `col-sm-offset-?`)* : offset column : `1`...`12`
* `mdOffset` *(number)* *(CSS `col-md-offset-?`)* : offset column : `1`...`12`
* `lgOffset` *(number)* *(CSS `col-lg-offset-?`)* : offset column : `1`...`12`
* `xsReorder` *(string)* *(CSS `?-xs`)* : reorder column : `'first'`, or `'last'`
* `smReorder` *(string)* *(CSS `?-sm`)* : reorder column : `'first'`, or `'last'`
* `mdReorder` *(string)* *(CSS `?-md`)* : reorder column : `'first'`, or `'last'`
* `lgReorder` *(string)* *(CSS `?-lg`)* : reorder column : `'first'`, or `'last'`
* `reverse` *(bool)* *(CSS `reverse`)* : reverse ordering for this column
* `nodeName` *(string)* : the element's node name (default `'div'`)

All other props applied directly to the grid element.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## License

The MIT License
