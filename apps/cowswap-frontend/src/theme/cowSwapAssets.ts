import { CHRISTMAS_THEME_ENABLED } from '@cowprotocol/common-const'

import { defaultCover } from './themeCovers/defaultCover'

export function cowSwapLogo(darkMode: boolean): string {
  // Regular Dark mode logo
  const darkModeLogo = `
  <svg width="131" height="42" viewBox="0 0 131 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.985 9.267c.504-.429 1.368-.644 2.59-.644h10.626c1.224 0 2.217-.99 2.217-2.211A2.215 2.215 0 0 0 68.2 4.2H57.758c-5.806 0-8.71 2.352-8.71 7.057v.161c0 2.306.71 4.045 2.128 5.218 1.418 1.173 3.612 1.76 6.582 1.76h10.444a2.215 2.215 0 0 0 2.217-2.213 2.215 2.215 0 0 0-2.218-2.211H57.577c-1.21 0-2.07-.214-2.58-.644-.512-.428-.767-1.072-.767-1.93v-.16c0-.885.252-1.542.756-1.971ZM89.981 4.26l-2.526 4.364h1.268c1.223 0 2.087.214 2.591.643.504.43.756 1.086.756 1.97v.162c0 .858-.255 1.5-.766 1.93-.511.429-1.37.643-2.58.643h-4.365l-2.56 4.423h6.743c2.97 0 5.164-.586 6.582-1.759 1.418-1.173 2.127-2.912 2.127-5.217v-.161c0-4.297-2.428-6.625-7.27-6.998Zm-4.515 4.363L88.028 4.2h-6.52c-5.806 0-8.71 2.352-8.71 7.057v.161c0 2.306.71 4.045 2.128 5.218 1.139.942 2.787 1.5 4.928 1.684l2.517-4.348h-1.044c-1.21 0-2.07-.214-2.58-.644-.512-.428-.767-1.072-.767-1.93v-.16c0-.885.252-1.542.756-1.971.504-.429 1.368-.644 2.59-.644M128.399 4.2c-.846 0-1.637.42-2.11 1.12l-2.507 3.713a2.549 2.549 0 0 1-4.089.179l-2.676-3.3a2.548 2.548 0 0 0-3.956 0l-2.676 3.3a2.548 2.548 0 0 1-4.088-.179L103.79 5.32a2.547 2.547 0 0 0-2.111-1.12c-2.046 0-3.255 2.287-2.1 3.97l6.262 9.121a2.549 2.549 0 0 0 4.084.155l3.13-3.89a2.549 2.549 0 0 1 3.969 0l3.13 3.89a2.549 2.549 0 0 0 4.084-.155l6.261-9.12c1.156-1.684-.053-3.971-2.1-3.971ZM53.977 37.925c2.402 0 4.65-1.36 4.65-3.924 0-2.603-1.97-3.254-4.306-4.163-1.742-.67-2.986-1.14-2.976-2.48.01-1.3 1.177-2.018 2.469-2.018 1.053 0 2.278.45 3.388 1.358l1.024-1.32c-1.32-1.053-2.862-1.637-4.403-1.627-2.383.01-4.249 1.598-4.249 3.684 0 2.402 2.096 3.293 4.154 4.058 1.856.699 3.12 1.12 3.12 2.69 0 1.33-1.149 2.124-2.852 2.124a5.047 5.047 0 0 1-3.867-1.847l-1.081 1.311a6.697 6.697 0 0 0 4.929 2.154Zm18.135-9.657-2.43 7.13h-.039l-2.201-7.13h-1.378l-2.173 7.12h-.038l-2.43-7.12h-1.618l3.311 9.532h1.465l2.153-6.948h.038l2.144 6.948h1.502l3.312-9.532h-1.618Zm10.48 0v1.407h-.038c-.795-.995-1.972-1.522-3.273-1.522-2.7 0-4.67 2.125-4.67 4.939 0 2.928 2.047 4.833 4.679 4.833 1.407 0 2.575-.613 3.35-1.637h.019V37.8h1.521v-9.542l-1.588.01Zm-3.149 8.202c-1.943 0-3.215-1.445-3.215-3.369 0-2.125 1.416-3.503 3.234-3.503 1.828 0 3.187 1.541 3.187 3.503 0 2.02-1.493 3.369-3.206 3.369ZM92 28.153c-1.293 0-2.45.527-3.245 1.522h-.038v-1.407h-1.589v13.408h1.58v-5.283h.038c.765.967 1.894 1.541 3.244 1.541 2.632 0 4.68-1.914 4.68-4.833 0-2.823-1.972-4.948-4.67-4.948Zm-.163 8.326c-1.685 0-3.178-1.35-3.178-3.368 0-1.962 1.36-3.503 3.159-3.503 1.808 0 3.225 1.378 3.225 3.503 0 1.923-1.273 3.368-3.216 3.368h.01ZM45.04 3.88c-.413-2.913-9.724-1.203-12.213-.746-.198.036-.353.065-.457.082-.072.012-.14-.048-.125-.119.143-.704.247-2.61-1.125-3.023-.878-.264-1.457.223-1.8.715-.154.22-.614 1.173-.9 1.835-.154.357-.513.88-.907.87a16.929 16.929 0 0 0-4.976-.76c-1.661 0-3.323.253-4.977.76-.394.01-.753-.513-.907-.87-.286-.662-.746-1.615-.9-1.835-.343-.492-.921-.979-1.799-.715-1.373.413-1.27 2.319-1.126 3.023.015.07-.053.131-.125.12a39.07 39.07 0 0 1-.456-.083C9.759 2.677.447.967.032 3.881c-.424 2.983 3.412 7.098 7.426 8.947.212.098.4.232.589.367.156.112.312.223.482.314.632.338 1.009 1.182.916 1.944v10.66c3.166-2.19 7.818-3.553 13.092-3.553 5.273 0 9.926 1.363 13.091 3.553v-10.66c-.092-.762.284-1.606.916-1.944.17-.09.327-.203.483-.314.189-.135.377-.27.588-.367 4.014-1.849 7.851-5.964 7.426-8.947ZM21.249 15.067c-.165.871-1.634 1.417-2.836 1.722a12.217 12.217 0 0 1-3.69.334 3.247 3.247 0 0 1-1.02-.213 3.248 3.248 0 0 1-1.463-1.176c-.52-.726-.721-1.54-.575-2.346.143-.803.614-1.498 1.36-2.01a3.276 3.276 0 0 1 1.77-.604c.325-.012.661.036 1.032.143a12.17 12.17 0 0 1 3.35 1.554c1.03.695 2.223 1.704 2.074 2.583l-.002.013Zm11.58.676a3.24 3.24 0 0 1-1.456 1.167 3.256 3.256 0 0 1-1.02.213 12.195 12.195 0 0 1-3.686-.333c-1.207-.306-2.675-.852-2.84-1.722-.15-.893 1.042-1.902 2.068-2.594a12.125 12.125 0 0 1 3.354-1.557 3.21 3.21 0 0 1 1.03-.143 3.286 3.286 0 0 1 1.78.612c.739.504 1.21 1.2 1.352 2.006.146.803-.055 1.616-.582 2.35Z" fill="#CAE9FF"/><path d="M18.396 13.633a10.726 10.726 0 0 0-2.96-1.372 1.971 1.971 0 0 0-.592-.09 1.9 1.9 0 0 0-1.02.356c-.451.309-.704.669-.782 1.107-.08.44.032.861.341 1.293.22.317.509.55.838.682.157.063.349.1.585.115a10.814 10.814 0 0 0 3.266-.294c.962-.244 1.452-.49 1.681-.637-.164-.214-.54-.609-1.357-1.16Zm12.863-1.099a1.897 1.897 0 0 0-1.03-.362 1.985 1.985 0 0 0-.59.088 10.747 10.747 0 0 0-2.965 1.376c-.815.549-1.19.942-1.354 1.157.23.147.72.393 1.686.638 1.056.261 2.154.36 3.26.293.238-.014.43-.052.586-.115.33-.131.617-.365.832-.674.315-.44.427-.861.348-1.297-.078-.442-.33-.802-.773-1.104Z" fill="#FFCF56"/><path d="M22.537 24.334c-8.614 0-15.596 3.954-15.596 8.833C6.94 38.045 13.923 42 22.537 42s15.596-3.955 15.596-8.833c0-4.879-6.983-8.833-15.596-8.833Zm-7.382 9.736c-1.335.64-2.577 0-2.816-1.453-.261-1.556 1.871-5.255 2.362-2.458.28 1.6 1.115 1.005 1.78.53.498-.355.901-.643.907.106a3.834 3.834 0 0 1-2.233 3.275Zm17.58-1.453c-.24 1.453-1.482 2.093-2.817 1.453a3.832 3.832 0 0 1-2.232-3.275c.005-.749.408-.461.906-.106.665.474 1.5 1.07 1.78-.53.49-2.797 2.623.902 2.362 2.458Z" fill="#CAE9FF"/></svg>
  `

  // Regular Light mode logo
  const lightModeLogo = `<svg width="131" height="42" viewBox="0 0 131 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M32.827 3.134c2.49-.457 11.8-2.167 12.214.747.425 2.983-3.412 7.098-7.426 8.947a3.64 3.64 0 0 0-.588.367 4.428 4.428 0 0 1-.483.314c-.632.338-1.008 1.182-.916 1.944v10.66c-3.165-2.19-7.818-3.553-13.091-3.553-5.274 0-9.926 1.363-13.092 3.553v-10.66c.093-.761-.284-1.606-.916-1.944a4.429 4.429 0 0 1-.482-.314c-.189-.135-.377-.27-.589-.367C3.444 10.98-.392 6.864.032 3.881.447.967 9.76 2.677 12.247 3.134c.198.036.353.065.456.082.072.012.14-.048.125-.119-.143-.704-.247-2.61 1.126-3.023.877-.264 1.456.223 1.8.715.153.22.613 1.173.899 1.835.154.357.513.88.907.87a16.933 16.933 0 0 1 4.977-.76c1.661 0 3.322.253 4.976.76.394.01.753-.513.907-.87.286-.662.746-1.615.9-1.835.343-.492.922-.979 1.8-.715 1.372.413 1.268 2.319 1.125 3.023-.014.07.053.131.125.12l.457-.083ZM20.56 14.936c.046-.27-.395-.954-1.772-1.883a11.476 11.476 0 0 0-3.158-1.464 2.584 2.584 0 0 0-.81-.117c-.5.019-.98.187-1.4.484-.561.383-.95.895-1.067 1.556-.12.661.068 1.273.461 1.822.292.42.684.74 1.147.925.255.102.53.147.803.164 1.166.07 2.344-.034 3.476-.314 1.617-.41 2.27-.905 2.32-1.173Zm10.552 1.323a2.54 2.54 0 0 0 1.147-.925c.394-.55.581-1.16.461-1.821-.117-.662-.505-1.174-1.066-1.557-.42-.297-.9-.466-1.4-.484a2.59 2.59 0 0 0-.811.117c-1.12.325-2.19.82-3.157 1.464-1.377.929-1.818 1.613-1.773 1.883.051.268.703.763 2.32 1.173 1.133.28 2.311.385 3.476.314.274-.017.549-.062.803-.164Z" fill="#052B65"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.94 33.167c0-4.879 6.983-8.833 15.597-8.833 8.613 0 15.596 3.954 15.596 8.833 0 4.878-6.983 8.833-15.596 8.833-8.614 0-15.596-3.955-15.596-8.833Zm5.4-.55c.238 1.453 1.48 2.093 2.815 1.453a3.834 3.834 0 0 0 2.233-3.275c-.006-.749-.409-.461-.907-.106-.665.474-1.5 1.07-1.78-.53-.49-2.797-2.623.902-2.362 2.458Zm17.578 1.453c1.335.64 2.577 0 2.816-1.453.26-1.556-1.871-5.255-2.362-2.458-.28 1.6-1.115 1.004-1.78.53-.498-.355-.9-.643-.906.106a3.833 3.833 0 0 0 2.232 3.275Z" fill="#052B65"/><path d="M54.985 9.267c.504-.429 1.367-.644 2.59-.644h10.626c1.224 0 2.217-.99 2.217-2.211A2.215 2.215 0 0 0 68.2 4.2H57.758c-5.806 0-8.71 2.353-8.71 7.058v.16c0 2.306.71 4.045 2.128 5.218 1.418 1.173 3.612 1.76 6.582 1.76h10.444c1.224 0 2.217-.99 2.217-2.212a2.215 2.215 0 0 0-2.218-2.212H57.577c-1.21 0-2.07-.214-2.58-.643-.512-.43-.767-1.073-.767-1.93v-.162c0-.884.252-1.54.756-1.97ZM89.981 4.26l-2.526 4.364h1.268c1.223 0 2.087.214 2.591.643.504.43.756 1.086.756 1.97v.162c0 .858-.255 1.5-.766 1.93-.511.429-1.37.643-2.58.643h-4.365l-2.56 4.424h6.743c2.97 0 5.164-.587 6.582-1.76 1.418-1.173 2.127-2.912 2.127-5.217v-.161c0-4.297-2.428-6.625-7.27-6.998Zm-4.515 4.363L88.028 4.2h-6.52c-5.806 0-8.71 2.353-8.71 7.058v.16c0 2.306.71 4.045 2.128 5.218 1.139.942 2.787 1.5 4.928 1.684l2.517-4.348h-1.044c-1.21 0-2.07-.214-2.58-.643-.512-.43-.767-1.073-.767-1.93v-.162c0-.884.252-1.54.756-1.97.504-.429 1.368-.644 2.59-.644M128.399 4.2c-.846 0-1.638.42-2.11 1.12l-2.507 3.713a2.549 2.549 0 0 1-4.089.179l-2.676-3.3a2.548 2.548 0 0 0-3.956 0l-2.676 3.3a2.549 2.549 0 0 1-4.089-.179L103.79 5.32a2.547 2.547 0 0 0-2.111-1.12c-2.046 0-3.255 2.287-2.1 3.971l6.262 9.12a2.549 2.549 0 0 0 4.084.155l3.13-3.89a2.549 2.549 0 0 1 3.969 0l3.13 3.89a2.549 2.549 0 0 0 4.084-.155l6.261-9.12c1.156-1.684-.053-3.971-2.1-3.971ZM53.977 37.925c2.402 0 4.65-1.36 4.65-3.924 0-2.603-1.97-3.254-4.306-4.163-1.742-.67-2.986-1.14-2.976-2.48.01-1.3 1.177-2.018 2.469-2.018 1.053 0 2.278.45 3.388 1.359l1.024-1.321c-1.32-1.053-2.862-1.637-4.403-1.627-2.383.01-4.249 1.598-4.249 3.684 0 2.403 2.096 3.293 4.154 4.058 1.856.699 3.12 1.12 3.12 2.69 0 1.33-1.149 2.124-2.852 2.124a5.046 5.046 0 0 1-3.867-1.847l-1.081 1.311a6.697 6.697 0 0 0 4.929 2.154Zm18.135-9.657-2.43 7.13h-.039l-2.201-7.13h-1.378l-2.173 7.12h-.038l-2.43-7.12h-1.618l3.311 9.532h1.465l2.153-6.948h.038l2.144 6.948h1.502l3.312-9.532h-1.618Zm10.48 0v1.407h-.038c-.795-.995-1.972-1.522-3.273-1.522-2.7 0-4.67 2.125-4.67 4.939 0 2.928 2.047 4.833 4.679 4.833 1.407 0 2.574-.613 3.35-1.637h.019V37.8h1.521v-9.54l-1.588.01Zm-3.149 8.202c-1.943 0-3.215-1.445-3.215-3.369 0-2.124 1.416-3.503 3.234-3.503 1.828 0 3.187 1.541 3.187 3.503 0 2.02-1.493 3.369-3.206 3.369ZM92 28.153c-1.293 0-2.45.527-3.245 1.522h-.038v-1.407h-1.589v13.408h1.58v-5.283h.038c.765.967 1.894 1.541 3.244 1.541 2.632 0 4.68-1.914 4.68-4.833 0-2.823-1.972-4.948-4.67-4.948Zm-.163 8.326c-1.685 0-3.178-1.349-3.178-3.368 0-1.962 1.36-3.503 3.159-3.503 1.808 0 3.225 1.378 3.225 3.503 0 1.923-1.273 3.368-3.216 3.368h.01Z" fill="#052B65"/></svg>`

  return darkMode ? darkModeLogo : lightModeLogo
}

export function cowSwapIcon(darkMode: boolean): string {
  // Regular Dark mode icon
  const darkModeIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 42"><path fill="#CAE9FF" d="M45.04 3.88c-.413-2.913-9.724-1.203-12.213-.746-.198.036-.353.065-.457.082-.072.012-.14-.048-.125-.119.143-.704.247-2.61-1.125-3.023-.878-.264-1.457.223-1.8.715-.154.22-.614 1.173-.9 1.835-.154.357-.513.88-.907.87a16.93 16.93 0 0 0-4.976-.76c-1.66 0-3.323.253-4.977.76-.394.01-.753-.513-.907-.87-.286-.662-.746-1.615-.9-1.835-.343-.492-.92-.979-1.799-.715-1.373.413-1.27 2.32-1.126 3.023.015.07-.053.131-.125.12a38.864 38.864 0 0 1-.456-.083C9.76 2.677.447.967.032 3.881c-.424 2.983 3.412 7.098 7.426 8.947.212.098.4.232.59.367.155.112.311.223.481.314.632.338 1.01 1.182.916 1.944v10.66c3.166-2.19 7.818-3.553 13.092-3.553 5.273 0 9.926 1.363 13.091 3.553v-10.66c-.092-.762.284-1.606.916-1.944.17-.09.327-.203.483-.314.19-.135.377-.27.588-.367 4.014-1.849 7.851-5.964 7.426-8.947ZM21.25 15.067c-.166.871-1.635 1.417-2.837 1.722a12.22 12.22 0 0 1-3.69.334 3.25 3.25 0 0 1-1.02-.213 3.248 3.248 0 0 1-1.463-1.176c-.52-.726-.72-1.54-.575-2.346.143-.803.614-1.498 1.36-2.01a3.275 3.275 0 0 1 1.77-.604c.325-.012.661.036 1.032.143 1.19.345 2.32.869 3.35 1.554 1.03.695 2.223 1.704 2.074 2.583l-.002.013Zm11.58.676a3.24 3.24 0 0 1-1.457 1.167c-.326.125-.67.197-1.02.213a12.2 12.2 0 0 1-3.686-.333c-1.207-.306-2.675-.852-2.84-1.722-.15-.893 1.042-1.902 2.068-2.594a12.12 12.12 0 0 1 3.354-1.557 3.206 3.206 0 0 1 1.03-.143c.64.026 1.26.239 1.78.612.74.504 1.21 1.2 1.352 2.006.146.803-.055 1.616-.582 2.35v.001Z"/><path fill="#FFCF56" d="M18.396 13.633a10.724 10.724 0 0 0-2.96-1.372 1.97 1.97 0 0 0-.591-.09 1.9 1.9 0 0 0-1.02.356c-.451.309-.704.669-.782 1.107-.08.44.032.861.34 1.293.22.317.51.55.839.682.157.063.348.1.585.115 1.097.069 2.198-.03 3.266-.294.962-.244 1.451-.49 1.68-.637-.163-.214-.54-.609-1.357-1.16Zm12.863-1.099a1.897 1.897 0 0 0-1.03-.362c-.2 0-.398.03-.59.088a10.75 10.75 0 0 0-2.965 1.376c-.814.549-1.19.942-1.354 1.157.23.147.72.393 1.686.638 1.056.261 2.154.36 3.26.293.239-.014.43-.052.587-.115a1.85 1.85 0 0 0 .831-.674c.316-.44.427-.861.348-1.297-.077-.442-.33-.802-.772-1.104Z"/><path fill="#CAE9FF" d="M22.537 24.334c-8.614 0-15.596 3.954-15.596 8.833 0 4.878 6.982 8.833 15.596 8.833s15.596-3.955 15.596-8.833c0-4.879-6.983-8.833-15.596-8.833Zm-7.382 9.736c-1.335.64-2.577 0-2.816-1.453-.26-1.556 1.871-5.255 2.362-2.458.28 1.6 1.115 1.005 1.78.53.498-.355.901-.643.907.106a3.834 3.834 0 0 1-2.233 3.275Zm17.58-1.453c-.24 1.453-1.482 2.093-2.817 1.453a3.832 3.832 0 0 1-2.232-3.275c.005-.749.408-.461.906-.106.665.474 1.5 1.07 1.78-.53.49-2.797 2.624.902 2.363 2.458Z"/></svg>
  `

  // Regular Light mode icon
  const lightModeIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 42"><path fill="#052B65" fill-rule="evenodd" d="M32.827 3.134c2.49-.457 11.8-2.167 12.214.747.425 2.983-3.412 7.098-7.426 8.947a3.631 3.631 0 0 0-.588.367c-.154.115-.315.22-.483.314-.632.338-1.008 1.182-.916 1.944v10.66c-3.165-2.19-7.818-3.553-13.09-3.553-5.275 0-9.927 1.363-13.093 3.553v-10.66c.093-.76-.284-1.606-.916-1.944a4.443 4.443 0 0 1-.482-.314c-.189-.135-.377-.27-.589-.367C3.444 10.98-.392 6.864.032 3.881.447.967 9.76 2.677 12.247 3.134c.198.036.353.065.456.082.072.012.14-.048.125-.119-.143-.704-.247-2.61 1.126-3.023.877-.264 1.456.223 1.8.715.153.22.613 1.173.9 1.835.153.357.512.88.906.87 1.612-.5 3.29-.756 4.977-.76 1.661 0 3.322.253 4.976.76.394.01.753-.513.907-.87.286-.662.746-1.615.9-1.835.343-.492.922-.979 1.8-.715 1.372.413 1.268 2.32 1.125 3.023-.014.07.053.131.125.12l.457-.083ZM20.56 14.936c.046-.27-.395-.954-1.772-1.883a11.471 11.471 0 0 0-3.158-1.464 2.583 2.583 0 0 0-.81-.117c-.5.02-.98.187-1.4.484-.56.383-.95.895-1.067 1.556-.12.661.068 1.273.461 1.822.292.42.684.74 1.147.925.255.102.53.147.803.164 1.166.07 2.344-.034 3.476-.314 1.617-.41 2.27-.905 2.32-1.173Zm10.552 1.323c.466-.188.865-.51 1.147-.925.394-.55.581-1.16.461-1.82-.117-.663-.505-1.175-1.066-1.558-.42-.297-.9-.466-1.4-.484a2.589 2.589 0 0 0-.81.117c-1.12.325-2.19.82-3.158 1.464-1.377.93-1.818 1.613-1.773 1.883.051.268.703.763 2.32 1.173 1.133.28 2.311.385 3.476.314.274-.017.55-.062.803-.164Z" clip-rule="evenodd"/><path fill="#052B65" fill-rule="evenodd" d="M6.94 33.167c0-4.879 6.982-8.833 15.596-8.833 8.613 0 15.596 3.954 15.596 8.833 0 4.878-6.982 8.833-15.595 8.833-8.614 0-15.598-3.955-15.598-8.833Zm5.4-.55c.238 1.453 1.48 2.093 2.815 1.453a3.834 3.834 0 0 0 2.232-3.275c-.006-.749-.409-.461-.907-.106-.665.474-1.5 1.07-1.78-.53-.49-2.797-2.622.902-2.361 2.458Zm17.578 1.453c1.335.64 2.577 0 2.816-1.453.26-1.556-1.872-5.255-2.363-2.458-.28 1.6-1.114 1.004-1.78.53-.498-.355-.9-.643-.905.106a3.833 3.833 0 0 0 2.232 3.275Z" clip-rule="evenodd"/></svg>`

  return darkMode ? darkModeIcon : lightModeIcon
}

// Footer cows image
// Winter Theme: Footer CoWs
export function footerImage(darkMode: boolean): string {
  if (CHRISTMAS_THEME_ENABLED) {
    throw new Error('Uncomment the code bellow')
    // return christmasCover(darkMode)
  }
  return defaultCover(darkMode)
}

// Winter Theme
export function winterThemeHat(darkMode: boolean): string {
  const darkModeHat = `<svg width="36" height="19" viewBox="0 0 36 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.95117 9.91863C26.3179 -7.63045 31.5293 6.92795 31.5293 13.2993H12.5077V11.2189C12.5077 10.5008 11.9244 9.91864 11.2049 9.91864L4.95117 9.91863Z" fill="#C8370E"/><path d="M8.85978 8.87831C8.85978 10.7454 7.34318 12.2591 5.47237 12.2591C3.60156 12.2591 2.08496 10.7454 2.08496 8.87831C2.08496 7.01117 3.60156 5.49756 5.47237 5.49756C7.34318 5.49756 8.85978 7.01117 8.85978 8.87831Z" fill="#CAE9FF"/><path d="M31.4741 11.8162C32.6466 11.7853 33.6137 12.7254 33.6137 13.8959V14.8596C33.6137 16.0086 32.6805 16.94 31.5292 16.94H12.7423C11.6053 16.94 10.6836 16.0202 10.6836 14.8854C10.6836 13.7718 11.5725 12.8609 12.6879 12.8315L31.4741 11.8162Z" fill="#CAE9FF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.4741 11.8162C32.6466 11.7853 33.6137 12.7254 33.6137 13.8959V14.8596C33.6137 16.0086 32.6805 16.94 31.5292 16.94H12.7423C11.6053 16.94 10.6836 16.0202 10.6836 14.8854C10.6836 13.8325 11.4783 12.9609 12.5077 12.8441L12.5077 11.2189C12.5077 10.5008 11.9244 9.91864 11.2049 9.91864L8.69632 9.9187C8.25669 11.2768 6.9795 12.2591 5.47237 12.2591C3.60156 12.2591 2.08496 10.7454 2.08496 8.87831C2.08496 7.01117 3.60156 5.49756 5.47237 5.49756C6.46645 5.49756 7.36047 5.92503 7.98013 6.60572C8.15407 6.79678 8.30638 7.0078 8.43322 7.23493C8.86988 6.92173 9.2988 6.62338 9.72011 6.33943C25.7556 -4.46797 30.7626 5.58573 31.445 11.8178L31.4741 11.8162ZM32.8322 10.4942C34.2008 11.0169 35.1773 12.3401 35.1773 13.896V14.8596C35.1773 16.8704 33.544 18.5005 31.5293 18.5005H12.7424C10.742 18.5005 9.12029 16.882 9.12029 14.8855C9.12029 13.5443 9.85259 12.3709 10.9443 11.7469V11.4791L9.68223 11.4791C8.80984 12.883 7.25198 13.8195 5.47231 13.8195C2.73805 13.8195 0.521484 11.6073 0.521484 8.87842C0.521484 6.14952 2.73805 3.93732 5.47231 3.93732C6.71038 3.93732 7.84129 4.39117 8.70826 5.13908C16.7699 -0.329061 22.662 -1.03734 26.8067 1.16262C30.5664 3.15823 32.2482 7.23556 32.8322 10.4942Z" fill="#07162D"/></svg>`
  const lightModeHat = `<svg width="36" height="19" viewBox="0 0 36 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.95117 9.91863C26.3179 -7.63045 31.5293 6.92795 31.5293 13.2993H12.5077V11.2189C12.5077 10.5008 11.9244 9.91864 11.2049 9.91864L4.95117 9.91863Z" fill="#C8370E"/><path d="M8.85978 8.87831C8.85978 10.7454 7.34318 12.2591 5.47237 12.2591C3.60156 12.2591 2.08496 10.7454 2.08496 8.87831C2.08496 7.01117 3.60156 5.49756 5.47237 5.49756C7.34318 5.49756 8.85978 7.01117 8.85978 8.87831Z" fill="#CAE9FF"/><path d="M31.4741 11.8162C32.6466 11.7853 33.6137 12.7254 33.6137 13.8959V14.8596C33.6137 16.0086 32.6805 16.94 31.5292 16.94H12.7423C11.6053 16.94 10.6836 16.0202 10.6836 14.8854C10.6836 13.7718 11.5725 12.8609 12.6879 12.8315L31.4741 11.8162Z" fill="#CAE9FF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.4741 11.8162C32.6466 11.7853 33.6137 12.7254 33.6137 13.8959V14.8596C33.6137 16.0086 32.6805 16.94 31.5292 16.94H12.7423C11.6053 16.94 10.6836 16.0202 10.6836 14.8854C10.6836 13.8325 11.4783 12.9609 12.5077 12.8441L12.5077 11.2189C12.5077 10.5008 11.9244 9.91864 11.2049 9.91864L8.69632 9.9187C8.25669 11.2768 6.9795 12.2591 5.47237 12.2591C3.60156 12.2591 2.08496 10.7454 2.08496 8.87831C2.08496 7.01117 3.60156 5.49756 5.47237 5.49756C6.46645 5.49756 7.36047 5.92503 7.98013 6.60572C8.15407 6.79678 8.30638 7.0078 8.43322 7.23493C8.86988 6.92173 9.2988 6.62338 9.72011 6.33943C25.7556 -4.46797 30.7626 5.58573 31.445 11.8178L31.4741 11.8162ZM32.8322 10.4942C34.2008 11.0169 35.1773 12.3401 35.1773 13.896V14.8596C35.1773 16.8704 33.544 18.5005 31.5293 18.5005H12.7424C10.742 18.5005 9.12029 16.882 9.12029 14.8855C9.12029 13.5443 9.85259 12.3709 10.9443 11.7469V11.4791L9.68223 11.4791C8.80984 12.883 7.25198 13.8195 5.47231 13.8195C2.73805 13.8195 0.521484 11.6073 0.521484 8.87842C0.521484 6.14952 2.73805 3.93732 5.47231 3.93732C6.71038 3.93732 7.84129 4.39117 8.70826 5.13908C16.7699 -0.329061 22.662 -1.03734 26.8067 1.16262C30.5664 3.15823 32.2482 7.23556 32.8322 10.4942Z" fill="#052B65"/></svg>`

  return darkMode ? darkModeHat : lightModeHat
}