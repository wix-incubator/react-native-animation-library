# React Native Animation Library 

Animation library built in `JavaScript` only.
All animation created with `Animated` API and boosted with `useNativeDriver` which uses the native animation by `RCTAnimation`.

## Components

### AnimatedListView

Fade appearance `listView`. Based on `ListView` therefore all `ListView` props can be used. 


<img src="https://github.com/wix/react-native-animation-library/blob/master/Images/AnimatedListView.gif?raw=true" width="240">

####API


Props | Type | Description
------ | ----- | -----
`initialOpacity` | [Number] | Cell initial opacity, between 0-1 
`offsetY` | [Number] | Cell Y offset 
`cellAnimationDelay` |[Number]| Cell animation delay. Multiple `cell#` *  `cellAnimationDelay`
`duration` | [Number] | The animation duration in milliseconds`[Number]`


### `FlipAnimatedImage`

<img src="https://github.com/wix/react-native-animation-library/blob/master/Images/starAnimation.gif?raw=true">

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


