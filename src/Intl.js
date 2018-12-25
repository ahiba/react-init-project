import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import { addLocaleData, IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import zh from 'react-intl/locale-data/zh';
import zh_CN from './locales/zh-CN';
import en_US from './locales/en-USA';
import en from 'react-intl/locale-data/en';

addLocaleData([...zh, ...en]);

class Inter extends Component {
  render() {
    const { locale, localeMessage, children } = this.props;
    return (
      <LocaleProvider>
        <IntlProvider key={locale} locale={locale} messages={localeMessage}>
          {children}
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

function chooseLocale(val) {
  const _val = val || navigator.language.split('_')[0];
  console.log('当前的_val', _val);
  switch (_val) {
    case 'en':
      return en_US;
    case 'zh':
      return zh_CN;
    default:
      return en_US;
  }
}

const mapStateToProps = (state, ownProps) => ({
  locale: state.my ? state.my.language : 'zh',
  localeMessage: chooseLocale(state.my.language),
});

const Intl = connect(mapStateToProps)(Inter);

export default Intl;
