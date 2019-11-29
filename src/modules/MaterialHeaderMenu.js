import React from 'react';
import { View, Image, Linking, TouchableOpacity } from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';
 
class MaterialHeaderMenu extends React.PureComponent {
  constructor(props){
      super(props);
  }
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };
 
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Menu
          ref={this.setMenuRef}
        //   button={<Text onPress={this.showMenu} style={{marginRight: 20}}>Menu</Text>}
          button={
            <TouchableOpacity onPress={this.showMenu} style={{padding: 5, marginRight: 20}}>
                <Image 
                    source={require('../img/myMenuIcon.png')}
                    style={{height: 20, width: 20}}
                />
            </TouchableOpacity>
          }
        >
          <MenuItem onPress={()=>Linking.openURL(this.props.link).catch((error) => console.warn(error))}>Open in external browser</MenuItem>
          <MenuItem onPress={this.hideMenu}>Close</MenuItem>
        </Menu>
      </View>
    );
  }

}
 
export default MaterialHeaderMenu;