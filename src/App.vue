<template>
  <header class="header">
    <div class="header--title">字體測試</div>
    <div class="header--setting">
      <label>Body Font-size：</label>
      <select v-model="commonData.bodyFontSize" class="bodyFontSize">
        <option
          v-for="fontSize in fontPX"
          v-bind:key="fontSize.id"
          :value="fontSize"
        >
          {{ fontSize }}
        </option>
      </select>
      <label>語言：</label>
      <select v-model="commonData.language" class="language">
        <option value="zh-tw">中文</option>
        <option value="us-en">英文</option>
      </select>
    </div>
  </header>
  <section>
    <div class="container">
      <div class="settingColumn">
        <div class="title">
          <h3>設定</h3>
        </div>
        <hr />
        <div class="fontColumn">
          <div class="fontSetting">
            <label for="Font-size">Font-size:</label>
            <select v-model="fontColumn1.fontSize">
              <option
                v-for="fontSize in fontEM"
                v-bind:key="fontSize.id"
                :value="fontSize"
              >
                {{ fontSize }}
              </option>
            </select>
          </div>
          <div class="fontSetting">
            <label for="Font-family Eng">Font-family (English):</label>
            <select v-model="fontColumn1.fontFamilyEnglish">
              <option
                v-for="details in fontFamilyEnglish"
                v-bind:key="details.name"
                :value="details.font"
              >
                {{ details.name }}
              </option>
            </select>
          </div>
          <div class="fontSetting">
            <label for="line height"> Line height:</label>
            <select v-model="fontColumn1.lineHeight">
              <option
                v-for="lineHeight in fontEM"
                v-bind:key="lineHeight.id"
                :value="lineHeight"
              >
                {{ lineHeight }}
              </option>
            </select>
          </div>
          <div class="fontSetting">
            <label for="Font-family Chinese">Font-family (中文):</label>
            <select v-model="fontColumn1.fontFamilyChinese">
              <option
                v-for="details in fontFamilyChinese"
                v-bind:key="details.name"
                :value="details.font"
              >
                {{ details.name }}
              </option>
            </select>
          </div>
          <hr />
          <div :style="{ fontSize: commonData.bodyFontSize }">
            <div
              class="fontContent"
              :style="{
                fontSize: fontColumn1.fontSize,
                fontFamily: `${fontColumn1.fontFamilyChinese}, ${fontColumn1.fontFamilyEnglish}`,
                lineHeight: fontColumn1.lineHeight,
              }"
              v-html="commonData.fontContent"
            ></div>
          </div>
        </div>
      </div>
      <div class="settingColumn">
        <div class="title">
          <h3>設定</h3>
        </div>
        <hr />
        <div class="fontColumn">
          <div class="fontSetting">
            <label for="Font-size">Font-size:</label>
            <select v-model="fontColumn2.fontSize">
              <option
                v-for="fontSize in fontEM"
                v-bind:key="fontSize.id"
                :value="fontSize"
              >
                {{ fontSize }}
              </option>
            </select>
          </div>
          <div class="fontSetting">
            <label for="Font-family Eng">Font-family (English):</label>
            <select v-model="fontColumn2.fontFamilyEnglish">
              <option
                v-for="details in fontFamilyEnglish"
                v-bind:key="details.name"
                :value="details.font"
              >
                {{ details.name }}
              </option>
            </select>
          </div>
          <div class="fontSetting">
            <label for="line height"> Line height:</label>
            <select v-model="fontColumn2.lineHeight">
              <option
                v-for="lineHeight in fontEM"
                v-bind:key="lineHeight.id"
                :value="lineHeight"
              >
                {{ lineHeight }}
              </option>
            </select>
          </div>
         <div class="fontSetting">
            <label for="Font-family Chinese">Font-family (中文):</label>
            <select v-model="fontColumn2.fontFamilyChinese">
              <option
                v-for="details in fontFamilyChinese"
                v-bind:key="details.name"
                :value="details.font"
              >
                {{ details.name }}
              </option>
            </select>
          </div>
          <hr />
          <div :style="{ fontSize: commonData.bodyFontSize }">
            <div
              class="fontContent"
              :style="{
                fontSize: fontColumn2.fontSize,
                fontFamily: `${fontColumn2.fontFamilyChinese}, ${fontColumn2.fontFamilyEnglish}`,
                lineHeight: fontColumn2.lineHeight,
              }"
              v-html="commonData.fontContent"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, reactive } from 'vue'
export default {
  setup () {
    const commonData = reactive({
      bodyFontSize: '10px',
      language: 'zh-tw',
      fontContent: computed(() =>
        commonData.language === 'zh-tw'
          ? fontContent.chinese
          : fontContent.english
      )
    })
    const fontColumn1 = reactive({
      fontSize: '1.6em',
      fontFamilyChinese: 'PMingLiU',
      fontFamilyEnglish: 'Arial',
      lineHeight: '1.4em'
    })
    const fontColumn2 = reactive({
      fontSize: '1.6em',
      fontFamilyChinese: 'PMingLiU',
      fontFamilyEnglish: 'Arial',
      lineHeight: '1.4em'
    })

    const fontPX = calcFontPX(1, 30)
    const fontEM = calcFontEM(1, 10)
    const fontFamilyChinese = [
      { name: '--Windows 預設字體--', font: 'PMingLiU' },
      { name: '新細明體', font: 'PMingLiU' },
      { name: '微軟正黑體', font: 'Microsoft JhengHei' },
      { name: '標楷體', font: 'DFKai-SB' },
      { name: '--MAC 預設字體--', font: 'PingFang SC' },
      { name: '蘋方-繁', font: 'PingFang SC' },
      { name: '黑體-繁', font: 'Heiti TC' },
      { name: '儷黑 Pro', font: 'LiHei Pro' },
      { name: '標楷體', font: 'BiauKai' }
    ]
    const fontFamilyEnglish = [
      { name: '--Sans-serif--', font: 'Arial' },
      { name: 'Arial', font: 'Arial' },
      { name: 'Helvetica', font: 'Helvetica' },
      { name: 'Arial Black', font: 'Arial Black' },
      { name: 'Verdana', font: 'Verdana' },
      { name: 'Tahoma', font: 'Tahoma' },
      { name: 'Impact', font: 'Impact' },
      { name: 'Trebuchet MS', font: 'Trebuchet MS' },
      { name: '--Serif--', font: 'Georgia' },
      { name: 'Georgia', font: 'Georgia' },
      { name: 'Palatino', font: 'Palatino' },
      { name: 'Times New Roman', font: 'Times New Roman' },
      { name: '--- Monospaced ---', font: '' },
      { name: 'Courier New', font: 'Courier New' },
      { name: 'Lucida Console', font: 'Lucida Console' }
    ]
    const fontContent = {
      chinese:
        '<p><a href="http://evchk.wikia.com/wiki/%E6%AF%92%E7%94%B7%E7%9A%84%E4%B8%80%E7%94%9F">毒男的一生 - 香港網絡大典 - Wikia</a></p><p>升中四了，還未試過拍拖，但毒男說：「不緊要，依家努力讀書考好會考，第時有錢你荒（慌）無女？」</p><p>結果，毒男克服了一個又一個的考試，升上大學，影畢業相時，發覺好多人都一雙一對，原來大學係撮合情侶既好地方。毒男依然一個，但他說：「不緊要，即將係我踏入社會大展拳腳既時候，亦係我幸福生活既開始！」</p><p>毒男努力工作，三年，五年，七年過去了，依然單身。但他終於達成了心願，成為高收入人仕 － 月薪達二萬零五百蚊。</p><p>毒男年過三十，開始疑惑：「點解我已經係成功人仕，但仲係無女？」更令他驚訝的是，公司不少女同事都同MK型男拍拖結婚，但那些男人可不是事業型喎，例如，Dorothy既男朋友只係中五畢業既Sales，月薪只有一萬八千蚊，比自己足足少了二千多元！點解？唔係努力讀書成為有錢人就有女既咩？</p><p>不知不覺毒男到了中年，身邊已無什麼朋友，自己渡過一個又一個既聖誕節及情人節。</p><p>毒男年老了，孤零零一個坐在公園，回想一生：「自己曾得過什麼？女人的身體是怎麼樣的？和女朋友係海邊共渡平安夜既滋味係點架？高登人不是經常留帖話：『後生時唔好浪費時間，第時有錢你荒無女咩！』我照做了，究竟什麼地方出錯？」</p>',
      english:
        '<p><a href="https://en.wikipedia.org/wiki/HTTPS">AngularJS - Wikipedia, the free encyclopedia</a></p><p>AngularJS (commonly referred to as "Angular" or "Angular.js") is an open-source web application framework mainly maintained by Google and by a community of individual as well as group developers and corporations to address many of the challenges encountered in developing single-page applications. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications.</p><p>The AngularJS library works by first reading the HTML page, which has embedded into it additional custom tag attributes. Angular interprets those attributes as directives to bind input or output parts of the page to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can be manually set within the code, or retrieved from static or dynamic JSON resources.</p><p>According to JavaScript analytics service Libscore, AngularJS is used on the websites of NBC, Walgreens, Intel, Sprint, ABC News, and approximately 8,400 other sites out of 1 million tested in July 2015.[1]</p><p>AngularJS is the frontend part of the MEAN stack, together with Node.js runtime, Express.js backend framework and MongoDB database.</p>'
    }

    return {
      commonData,
      fontColumn1,
      fontColumn2,
      fontPX,
      fontEM,
      fontFamilyChinese,
      fontFamilyEnglish,
      fontContent
    }
  }
}

function calcFontEM (min, max) {
  const array = []
  for (let i = min; i <= max; i += 0.1) {
    array.push(i.toFixed(1) + 'em')
  }
  return array
}

function calcFontPX (min, max) {
  const array = []
  for (let i = min; i <= max; i++) {
    array.push(i + 'px')
  }
  return array
}
</script>
