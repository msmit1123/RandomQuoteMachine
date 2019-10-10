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

class ToggleSwitch extends React.Component{

    handleChange = (event) => {this.props.onChange(event)}

    render(){
        return (
            <div className="switch-toggle-container">
                <input type="checkbox" id="switch1" checked={this.props.checked} onChange={this.handleChange} />
                <label className="switch-toggle" htmlFor="switch1"></label>
            </div>
        )
    }
}


/**
 *  Define component PropTypes
*/
ToggleSwitch.propTypes = {
    children: PropTypes.node,
}


/**
 *  Export the component
 */
export default ToggleSwitch



