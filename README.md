# React Native Animation Library 
Animation library built in `JavaScript` only

## Components

### `FlipAnimatedImage`
#### API

Props | Type | Description
------ | ----- | -----
`isSelected` | [Boolean] | The selection state of the component 
`selectedImage` | [Image] | The image to show when state is selected
`unSelectedImage` |[Image]| The image to show when state is unselected
`duration` | [Object] | The animation `Bounce` duration object `{bounceOut: [Number], bounceIn: [Number]}`


#### Example
```
<TouchableOpacity 
    activeOpacity={0.7} 
    onPress={() => this.setState({starIsSelected: !this.state.starIsSelected})} 
    style={{margin: 30}}>
    
    <FlipAnimatedImage style={{justifyContent: 'center', alignItems: 'center'}}
                       isSelected={this.state.starIsSelected}
                       unSelectedImage={require('<SELECTED_IMAGE>')}
                       selectedImage={require('<UNSELECTED_IMAGE>')}
                       duration={{bounceOut: 50, bounceIn: 100}}
    />
</TouchableOpacity>
```


