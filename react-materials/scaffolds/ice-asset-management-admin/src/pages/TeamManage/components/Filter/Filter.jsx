import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Select, DatePicker } from '@icedesign/base';

export default class Filter extends Component {
  static displayName = 'Filter';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Select 发生改变的时候触发的回调
   */
  handleSelectChange = (value) => {
    console.log('handleSelectChange:', value);
  };

  /**
   * DatePicker 发生改变的时候触发的回调
   */
  handleDatePickerChange = (value) => {
    console.log('handleDatePickerChange:', value);
  };

  render() {
    return (
      <IceContainer style={styles.container}>
        <Select
          size="large"
          style={{ width: '200px' }}
          onChange={this.handleSelectChange}
          defaultValue="frontend"
        >
          <Select.Option value="frontend">前端团队</Select.Option>
          <Select.Option value="backend">后端团队</Select.Option>
          <Select.Option value="business">业务团队</Select.Option>
          <Select.Option value="operation">运营团队</Select.Option>
        </Select>
        <DatePicker size="large" onChange={this.handleDatePickerChange} />
      </IceContainer>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};
