/**
 * Import Node Modules
 */
import React from 'react'
import { PropTypes } from 'prop-types';

/**
 * Import other Dependencies
 */
//CSS
import './styles.scss'

class Button extends React.Component{
   handleClick = () => {this.props.onClick()}

    render(){
        return (
            <div className="button" onClick={this.handleClick}>
                {this.props.children}
            </div>
        )
    }
}


/**
 *  Define component PropTypes
*/
Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
}


/**
 *  Export the component
 */
export default Button



