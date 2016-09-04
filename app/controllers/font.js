angular
  .module('app')
  .controller('Font', font);

function font() {
  this.chinese_font = [
    { name: '--- Windows 預設字體 ---', url: 'PMingLiU'} ,
    { name: '新細明體', url: 'PMingLiU'} ,
    { name: '微軟正黑體', url: 'Microsoft JhengHei'} ,
    { name: '標楷體', url: 'DFKai-SB'} ,
    { name: '--- MAC 預設字體 ---', url: 'PingFang SC'} ,
    { name: '蘋方-繁', url: 'PingFang SC'} ,
    { name: '黑體-繁', url: 'Heiti TC'} ,
    { name: '儷黑 Pro', url: 'LiHei Pro'} ,
    { name: '標楷體', url: 'BiauKai'}
  ];
  this.chinese = this.chinese_font[0];
  this.english_font = [
    { name: '--- Sans-serif ---', url: 'Arial'} ,
    { name: 'Arial', url: 'Arial'} ,
    { name: 'Helvetica', url: 'Helvetica'} ,
    { name: 'Arial Black', url: 'Arial Black'} ,
    { name: 'Verdana', url: 'Verdana'} ,
    { name: 'Tahoma', url: 'Tahoma'} ,
    { name: 'Impact', url: 'Impact'} ,
    { name: 'Trebuchet MS', url: 'Trebuchet MS'} ,
    { name: '--- Serif ---', url: 'Georgia'} ,
    { name: 'Georgia', url: 'Georgia'} ,
    { name: 'Palatino', url: 'Palatino'} ,
    { name: 'Times New Roman', url: 'Times New Roman'} ,
    { name: '--- Monospaced ---', url: 'Courier New'} ,
    { name: 'Lucida Console', url: 'Lucida Console'} ,
    { name: 'Courier New', url: 'Courier New'} ,
   ];
  this.english = this.english_font[0];
  this.tabs = [{
    title: '中文',
    url: 'chinese.html'
  }, {
    title: '英文',
    url: 'english.html'
  }];
  this.currentTab = 'chinese.html';
  this.onClickTab = function (tab) {
    this.currentTab = tab.url;
  }
  this.isActiveTab = function(tabUrl) {
    return tabUrl == this.currentTab;
  }
}
