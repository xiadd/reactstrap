/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu } from 'reactstrap';
import DropdownExample from '../examples/Dropdown';
import DropdownSizingExample from '../examples/DropdownSizing';
import CustomDropdownExample from '../examples/CustomDropdown';
import DropdownUncontrolledExample from '../examples/DropdownUncontrolled';

const DropdownExampleSource = require('!!raw!../examples/Dropdown');
const CustomDropdownExampleSource = require('!!raw!../examples/CustomDropdown');
const DropdownUncontrolledExampleSource = require('!!raw!../examples/DropdownUncontrolled');

export default class DropdownPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggleExample2 = this.toggle.bind(this);
    this.state = {
      example2: false
    };
  }

  toggle() {
    this.setState({
      example2: !this.state.example2
    });
  }

  render() {
    return (
      <div>
        <Helmet title="Dropdowns" />
        <h3>Dropdowns</h3>
        <p>
          The <code>Dropdown</code> component is used to pass the <code>isOpen</code> &amp; <code>toggle</code> props via context to the following components: <code>DropdownToggle</code>, <code>DropdownMenu</code>. The <code>DropdownToggle</code> uses the <code>Button</code> component internally, meaning it also accepts all the props the <Link to="/components/buttons/">Button component</Link> accepts.
        </p>
        <div className="docs-example">
          <DropdownExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {DropdownExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Dropdown.propTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  // For Dropdown usage inside a Nav
  nav: PropTypes.bool,
  // For Dropdown usage inside a Navbar (disables popper)
  inNavbar: PropTypes.bool,
  tag: PropTypes.string, // default: 'div' unless nav=true, then 'li'
  toggle: PropTypes.func
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool,
  // For DropdownToggle usage inside a Nav
  nav: PropTypes.bool,
  // Defaults to Button component
  tag: PropTypes.any
};

DropdownMenu.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  flip: PropTypes.bool, // default: true,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

DropdownItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.bool // default: true
};`}
          </PrismCode>
        </pre>
        <h3>Alignment</h3>
        <p>To align the <code>DropdownMenu</code> to the right, add a <code>right</code> prop to <code>Dropdown</code>.</p>
        <div className="docs-example">
          <div style={{ display: 'inline-block' }}>
            <Dropdown isOpen={this.state.example2} toggle={this.toggleExample2}>
              <DropdownToggle caret>
                This dropdown's menu is right-aligned
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  <DropdownToggle caret>
    This dropdown's menu is right-aligned
  </DropdownToggle>
  <DropdownMenu right>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</Dropdown>`}
          </PrismCode>
        </pre>
        <h3>Menu Headers</h3>
        <pre>
          <PrismCode className="language-jsx">
{'<DropdownItem header>Header</DropdownItem>'}
          </PrismCode>
        </pre>
        <h3>Menu Dividers</h3>
        <pre>
          <PrismCode className="language-jsx">
{'<DropdownItem divider/>'}
          </PrismCode>
        </pre>
        <h3>Menu Items</h3>
        <pre>
          <PrismCode className="language-jsx">
{'<DropdownItem>Action</DropdownItem>'}
          </PrismCode>
        </pre>
        <h3>Disabled Menu Items</h3>
        <pre>
          <PrismCode className="language-jsx">
{'<DropdownItem disabled>Action</DropdownItem>'}
          </PrismCode>
        </pre>
        <h3>Sizing</h3>
        <div className="docs-example">
          <div>
            <DropdownSizingExample group size="lg" />
            <DropdownSizingExample className="mt-1" />
            <DropdownSizingExample className="mt-1" group size="sm" />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Dropdown group isOpen={this.state.dropdownOpen} size="lg" toggle={this.toggle}>
  <DropdownToggle caret>
    Dropdown
  </DropdownToggle>
  <DropdownMenu>
    ...
  </DropdownMenu>
</Dropdown>

<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  <DropdownToggle caret>
    Dropdown
  </DropdownToggle>
  <DropdownMenu>
    ...
  </DropdownMenu>
</Dropdown>

<Dropdown group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
  <DropdownToggle caret>
    Dropdown
  </DropdownToggle>
  <DropdownMenu>
    ...
  </DropdownMenu>
</Dropdown>`}
          </PrismCode>
        </pre>
        <h4>Custom Dropdown</h4>
        <div className="docs-example">
          <CustomDropdownExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CustomDropdownExampleSource}
          </PrismCode>
        </pre>

        <h3>Uncontrolled Dropdown</h3>
        <p>
          For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledDropdown</code> does not require <code>isOpen</code> nor <code>toggle</code> props to work. For the <code>ButtonDropdown</code> flavor, an uncontrolled component have been made as well; <code>UncontrolledButtonDropdown</code>.
        </p>
        <div className="docs-example">
          <DropdownUncontrolledExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {DropdownUncontrolledExampleSource}
          </PrismCode>
        </pre>
        <h3>Drop direction variations</h3>
        <div className="docs-example">
          <Row>
            <Col>
              <Dropdown direction="up" isOpen={this.state.ddDropup} toggle={() => { this.setState({ ddDropup: !this.state.ddDropup }); }}>
                <DropdownToggle caret>
                  Dropup
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown direction="left" isOpen={this.state.ddDropleft} toggle={() => { this.setState({ ddDropleft: !this.state.ddDropleft }); }}>
                <DropdownToggle caret>
                  Dropleft
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown direction="right" isOpen={this.state.ddDropright} toggle={() => { this.setState({ ddDropright: !this.state.ddDropright }); }}>
                <DropdownToggle caret>
                  Dropright
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Dropdown direction="up" isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret>
    Dropup
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</Dropdown>

<Dropdown direction="left" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
  <DropdownToggle caret>
    Dropleft
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</Dropdown>

<Dropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
  <DropdownToggle caret>
    Dropright
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</Dropdown>`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
