const { __ } = wp.i18n;
const { Component } = wp.element;
const {URLInput} = wp.editor;

export default class SocialItems extends Component{
    
    constructor( props ){
        super( ...arguments );
    }
    
    render(){
        const { dropcap, socialBgColor, socialIconColor, socialIconFz } = this.props.attributes;
        const styles = {
            backgroundColor: socialBgColor, 
            color: socialIconColor, 
            fontSize: socialIconFz ? socialIconFz + 'px' : undefined,
        };
        
    }
}