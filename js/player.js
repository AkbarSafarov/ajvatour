var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const getAudioData = (e) => {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const a = new AudioContext();
  return fetch(e).then((e2) => e2.arrayBuffer()).then((e2) => a.decodeAudioData(e2)).catch((e2) => {
    console.error(e2);
  });
}, linearPath = (e, a) => {
  var _a, _b, _c;
  const { channel: t = 0, samples: v = e.length, height: h = 100, width: r = 800, top: s = 0, left: l = 0, type: i = "steps", paths: $ = [{ d: "Q", sx: 0, sy: 0, x: 50, y: 100, ex: 100, ey: 0 }], animation: o = false, animationframes: n = 10, normalize: b = true } = a;
  var a = getFramesData(e, t, o, n), e = getFilterData(a, v), w = b ? getNormalizeData(e) : e;
  let c = "";
  var p, f, g = i != "bars" ? (h + 2 * s) / 2 : h + s, m = r / v, y = $.length, u = i == "mirror" ? 2 * y : y, A = w.length;
  for (let n2 = 0; n2 < A; n2++) {
    0 < n2 && (p = c.length, f = c.charAt(p - 1), c += f == ";" || p === 0 ? " M 0 0 ;" : ";");
    let s2 = -9999, o2 = -9999;
    for (let r2 = 0; r2 < v; r2++) {
      var M = i == "bars" || r2 % 2 ? 1 : -1;
      let t2 = 1;
      for (let e2 = 0; e2 < u; e2++) {
        let a2 = e2;
        e2 >= y && (a2 = e2 - y, t2 = -1), $[a2].minshow = (_a = $[a2].minshow) != null ? _a : 0, $[a2].maxshow = (_b = $[a2].maxshow) != null ? _b : 1, $[a2].normalize = (_c = $[a2].normalize) != null ? _c : false;
        var d = $[a2].normalize ? 1 : w[n2][r2];
        if ($[a2].minshow <= w[n2][r2] && $[a2].maxshow >= w[n2][r2])
          switch ($[a2].d) {
            case "L":
              var D = r2 * m + m * $[a2].sx / 100 + l, x = g + d * $[a2].sy / 100 * (i != "bars" ? h / 2 : h) * -M * t2, k = r2 * m + m * $[a2].ex / 100 + l, z = g + d * $[a2].ey / 100 * (i != "bars" ? h / 2 : h) * -M * t2;
              D === s2 && x === o2 || (c += `M ${D} ${x} `), c += `L ${k} ${z} `, s2 = k, o2 = z;
              break;
            case "H":
              D = r2 * m + m * $[a2].sx / 100 + l, x = g + d * $[a2].y / 100 * (i != "bars" ? h / 2 : h) * -M * t2, k = r2 * m + m * $[a2].ex / 100 + l;
              D === s2 && x === o2 || (c += `M ${D} ${x} `), c += `H ${k} `, s2 = k, o2 = x;
              break;
            case "V":
              var z = r2 * m + m * $[a2].x / 100 + l, C = g + d * $[a2].sy / 100 * (i != "bars" ? h / 2 : h) * -M * t2, F = g + d * $[a2].ey / 100 * (i != "bars" ? h / 2 : h) * -M * t2;
              z === s2 && C === o2 || (c += `M ${z} ${C} `), c += `V ${F} `, s2 = z, o2 = F;
              break;
            case "C":
              var C = r2 * m + m * $[a2].sx / 100 + l, F = g - g * $[a2].sy / 100 * M, Q = r2 * m + m * $[a2].x / 100 + l, P = g + d * $[a2].y / 100 * (i != "bars" ? h : 2 * h) * -M * t2, L = r2 * m + m * $[a2].ex / 100 + l, Z = g - g * $[a2].ey / 100 * M;
              C === s2 && F === o2 || (c += `M ${C} ${F} `), c += `C ${C} ${F} ${Q} ${P} ${L} ${Z} `, s2 = L, o2 = Z;
              break;
            case "Q":
              var Q = r2 * m + m * $[a2].sx / 100 + l, P = g + d * $[a2].sy / 100 * (i != "bars" ? h / 2 : h) * -M * t2, L = r2 * m + m * $[a2].x / 100 + l, Z = g + d * $[a2].y / 100 * (i != "bars" ? h : 2 * h) * -M * t2, N = r2 * m + m * $[a2].ex / 100 + l, H = g + d * $[a2].ey / 100 * (i != "bars" ? h / 2 : h) * -M * t2;
              Q === s2 && P === o2 || (c += `M ${Q} ${P} `), c += `Q ${L} ${Z} ${N} ${H} `, s2 = N, o2 = H;
              break;
            case "A": {
              var N = r2 * m + m * $[a2].sx / 100 + l, H = g + d * $[a2].sy / 100 * (i != "bars" ? h / 2 : h) * -M * t2, V = r2 * m + m * $[a2].ex / 100 + l, B = g + d * $[a2].ey / 100 * (i != "bars" ? h / 2 : h) * -M * t2, I = (N === s2 && H === o2 || (c += `M ${N} ${H} `), $[a2].rx * m / 100), R = $[a2].ry * m / 100;
              let e3 = $[a2].sweep;
              M == -1 && (e3 = e3 == 1 ? 0 : 1), t2 == -1 && (e3 = e3 == 1 ? 0 : 1), c += `A ${I} ${R} ${$[a2].angle} ${$[a2].arc} ${e3} ${V} ${B} `, s2 = V, o2 = B;
              break;
            }
            case "Z":
              c += "Z ";
          }
      }
    }
  }
  return c;
}, getFramesData = (e, a, t, r) => {
  const s = e.getChannelData(a), o = [];
  if (t) {
    var n = e.sampleRate / r;
    for (let e2 = 0; e2 < s.length; e2 += n) {
      var h = s.slice(e2, e2 + n);
      o.push(h);
    }
  } else
    o.push(s);
  return o;
}, getFilterData = (r, a) => {
  const e = [];
  var s = r.length;
  for (let t = 0; t < s; t++) {
    var o = Math.floor(r[t].length / a);
    const h = [];
    for (let e2 = 0; e2 < a; e2++) {
      var n = o * e2;
      let a2 = 0;
      for (let e3 = 0; e3 < o; e3++)
        a2 += Math.abs(r[t][n + e3]);
      h.push(a2 / o);
    }
    e.push(h);
  }
  return e;
}, getNormalizeData = (a) => {
  const t = [];
  var r = a.length;
  for (let e = 0; e < r; e++) {
    var s = Math.max(...a[e]);
    t.push(s);
  }
  const o = Math.pow(Math.max(...t), -1), n = [];
  for (let e = 0; e < r; e++) {
    var h = a[e].map((e2) => e2 * o);
    n.push(h);
  }
  return n;
};
class AudioPathPlayer extends HTMLElement {
  constructor() {
    super();
    __publicField(this, "loadSong", () => {
      this.durationContainer.textContent = this.calculateTime(this.audio.duration);
      this.seekSlider.max = this.audio.duration;
      this.svg.unpauseAnimations();
      this.animationsvg.setAttribute("dur", "" + this.audio.duration + "s");
      if (!this.animation) {
        this.animationsvgx.setAttribute("dur", "" + this.audio.duration + "s");
      }
      this.svg.pauseAnimations();
      this.svg.setCurrentTime(0);
    });
    __publicField(this, "playPause", () => {
      if (this.audio.paused) {
        this.audio.play();
        this.svg.unpauseAnimations();
        this.path2.style.display = "block";
        this.playPathButton.setAttribute("d", this.pausePath);
        this.raf = requestAnimationFrame(this.whilePlaying);
      } else {
        this.audio.pause();
        this.svg.pauseAnimations();
        this.playPathButton.setAttribute("d", this.playPath);
        cancelAnimationFrame(this.raf);
      }
    });
    __publicField(this, "sliderInput", () => {
      this.path2.style.display = "block";
      this.currentTimeContainer.textContent = this.calculateTime(this.seekSlider.value);
      this.svg.setCurrentTime(this.seekSlider.value);
      if (!this.audio.paused) {
        cancelAnimationFrame(this.raf);
      }
    });
    __publicField(this, "sliderChange", () => {
      this.audio.currentTime = this.seekSlider.value;
      this.path2.style.display = "block";
      this.svg.setCurrentTime(this.seekSlider.value);
      if (!this.audio.paused) {
        this.raf = requestAnimationFrame(this.whilePlaying);
      }
    });
    __publicField(this, "onFinish", () => {
      this.seekSlider.value = this.seekSlider.max;
      this.svg.setCurrentTime(this.audio.duration);
      this.svg.pauseAnimations();
      this.playPathButton.setAttribute("d", this.playPath);
      cancelAnimationFrame(this.raf);
    });
    __publicField(this, "whilePlaying", () => {
      this.seekSlider.value = this.audio.currentTime;
      this.currentTimeContainer.textContent = this.calculateTime(this.seekSlider.value);
      this.svg.setCurrentTime(this.seekSlider.value);
      this.raf = requestAnimationFrame(this.whilePlaying);
    });
    __publicField(this, "svgDraw", () => {
      const path = linearPath(this.audioData, this.options);
      if (!this.animation) {
        this.path1.setAttribute("d", path);
        this.path2.setAttribute("d", path);
      } else {
        this.animationsvg.setAttribute("values", path);
      }
      this.svg.setCurrentTime(this.seekSlider.value);
    });
    __publicField(this, "calculateTime", (secs) => {
      const minutes = Math.floor(secs / 60);
      const seconds = Math.floor(secs % 60);
      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${minutes}:${returnedSeconds}`;
    });
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this.audioData = null;
    if (this.hasAttribute("wave-options")) {
      this.options = JSON.parse(this.attributes["wave-options"].value);
      this.options.width = parseInt(this.attributes["wave-width"].value);
      this.options.height = parseInt(this.attributes["wave-height"].value);
    } else {
      this.options = {
        samples: 40,
        type: "mirror",
        width: parseInt(this.attributes["wave-width"].value),
        height: parseInt(this.attributes["wave-height"].value),
        paths: [
          { d: "V", sy: 0, x: 50, ey: 100 }
        ]
      };
    }
    if (this.options.hasOwnProperty("animation")) {
      this.animation = this.options.animation;
    } else {
      this.animation = false;
    }
    this.playPath = "M8.5 8.7c0-1.7 1.2-2.4 2.6-1.5l14.4 8.3c1.4.8 1.4 2.2 0 3l-14.4 8.3c-1.4.8-2.6.2-2.6-1.5V8.7z";
    this.pausePath = "M9.2 25c0 .5.4 1 .9 1h3.6c.5 0 .9-.4.9-1V9c0-.5-.4-.9-.9-.9h-3.6c-.4-.1-.9.3-.9.9v16zm11-17c-.5 0-1 .4-1 .9V25c0 .5.4 1 1 1h3.6c.5 0 1-.4 1-1V9c0-.5-.4-.9-1-.9 0-.1-3.6-.1-3.6-.1z";
    this.playPathButton = null;
    this.svg = null;
    this.path1 = null;
    this.path2 = null;
    this.animationsvg = null;
    this.animationsvgx = null;
    this.audio = null;
    this.durationContainer = null;
    this.seekSlider = null;
    this.currentTimeContainer = null;
    this.playIconContainer = null;
    this.raf = null;
  }
  initComponent() {
    this.playPathButton = this.shadowDOM.getElementById("playPathButton");
    this.svg = this.shadowDOM.getElementById("svg");
    this.path1 = this.shadowDOM.getElementById("path1");
    this.path2 = this.shadowDOM.getElementById("path2");
    this.animationsvg = this.shadowDOM.getElementById("animationsvg");
    this.animationsvgx = this.shadowDOM.getElementById("animationsvgx");
    this.audio = this.shadowDOM.querySelector("audio");
    this.durationContainer = this.shadowDOM.getElementById("duration");
    this.seekSlider = this.shadowDOM.getElementById("seek-slider");
    this.currentTimeContainer = this.shadowDOM.getElementById("current-time");
    this.playIconContainer = this.shadowDOM.getElementById("play");
    this.svg.pauseAnimations();
    if (this.audio.readyState > 0) {
      this.loadSong();
    } else {
      this.audio.addEventListener("loadedmetadata", this.loadSong);
    }
    this.audio.addEventListener("ended", this.onFinish);
    this.seekSlider.addEventListener("input", this.sliderInput);
    this.seekSlider.addEventListener("change", this.sliderChange);
    this.playIconContainer.addEventListener("click", this.playPause);
  }
  async audioPath() {
    this.audioData = await getAudioData(this.attributes.src.value);
    this.svgDraw();
  }
  mapComponentAttributes() {
    const attributesMapping = [
      "src",
      "wave-height",
      "wave-width",
      "color",
      "wave-options",
      "wave-color",
      "wave-progress-color",
      "wave-slider"
    ];
    attributesMapping.forEach((key) => {
      if (!this.attributes[key]) {
        this.attributes[key] = { value: null };
      }
    });
  }
  connectedCallback() {
    this.mapComponentAttributes();
    this.render();
    this.initComponent();
    this.audioPath();
  }
  render() {
    this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
  }
  template() {
    let html = `
        <div part="player" class="player">
            <button id="play" part="play">
                <svg viewBox="0 0 34 34" width="34" height="34" part="button">
                    <path id="playPathButton" d="M8.5 8.7c0-1.7 1.2-2.4 2.6-1.5l14.4 8.3c1.4.8 1.4 2.2 0 3l-14.4 8.3c-1.4.8-2.6.2-2.6-1.5V8.7z"></path>
                    <!--<path fill="currentColor" d="M9.2 25c0 .5.4 1 .9 1h3.6c.5 0 .9-.4.9-1V9c0-.5-.4-.9-.9-.9h-3.6c-.4-.1-.9.3-.9.9v16zm11-17c-.5 0-1 .4-1 .9V25c0 .5.4 1 1 1h3.6c.5 0 1-.4 1-1V9c0-.5-.4-.9-1-.9 0-.1-3.6-.1-3.6-.1z"></path>-->
                </svg>
            </button>
        <div class="player-right">
        <div id="slider" part="slider">
            <svg id="svg" part="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 ${this.attributes["wave-width"].value} ${this.attributes["wave-height"].value}" width="${this.attributes["wave-width"].value}" height="${this.attributes["wave-height"].value}">
        `;
    if (!this.animation) {
      html += `
            <defs>
                <clipPath id="left-to-right-x">
                <rect x="-1" y="-100" width="${parseInt(this.attributes["wave-width"].value) + 2}" height="${parseInt(this.attributes["wave-height"].value) + 200}" >
                    <animate id="animationsvgx" attributeName="x" values="-1;${parseInt(this.attributes["wave-width"].value) + 2}" dur="99999s" fill="freeze" />   
                </rect>
                </clipPath>
                <clipPath id="left-to-right">
                <rect x="-${parseInt(this.attributes["wave-width"].value) + 2}" y="-100" width="${parseInt(this.attributes["wave-width"].value) + 2}" height="${parseInt(this.attributes["wave-height"].value) + 200}" >
                    <animate id="animationsvg" attributeName="x" values="-${parseInt(this.attributes["wave-width"].value) + 2};-1" dur="99999s" fill="freeze" />   
                </rect>
                </clipPath>    
            </defs> 
            <path id="path1" part="path1"  stroke-width="2" d="M 2.5 20 V 20.11330692276207 M 2.5 20 V 19.88669307723793 M 7.5 20 V 19.808217947101976 M 7.5 20 V 20.191782052898024 M 12.5 20 V 20.311082591480112 M 12.5 20 V 19.688917408519888 M 17.5 20 V 19.609573659780942 M 17.5 20 V 20.390426340219058 M 22.5 20 V 20.13127788836279 M 22.5 20 V 19.86872211163721 M 27.5 20 V 19.89562894215474 M 27.5 20 V 20.10437105784526 M 32.5 20 V 20.181187937917645 M 32.5 20 V 19.818812062082355 M 37.5 20 V 19.84473640152143 M 37.5 20 V 20.15526359847857 M 42.5 20 V 20.278267452913877 M 42.5 20 V 19.721732547086123 M 47.5 20 V 18.420814981891215 M 47.5 20 V 21.579185018108785 M 52.5 20 V 28.257590974597086 M 52.5 20 V 11.742409025402916 M 57.5 20 V 0.3798610327977272 M 57.5 20 V 39.62013896720227 M 62.5 20 V 40 M 62.5 20 V 0 M 67.5 20 V 3.6768702115371994 M 67.5 20 V 36.3231297884628 M 72.5 20 V 36.10931211261279 M 72.5 20 V 3.890687887387209 M 77.5 20 V 4.5583072579730874 M 77.5 20 V 35.441692742026916 M 82.5 20 V 31.49325246917989 M 82.5 20 V 8.50674753082011 M 87.5 20 V 16.20834685958065 M 87.5 20 V 23.79165314041935 M 92.5 20 V 20.628101254565678 M 92.5 20 V 19.371898745434322 M 97.5 20 V 19.72759388880931 M 97.5 20 V 20.27240611119069 M 102.5 20 V 20.255045872951655 M 102.5 20 V 19.744954127048345 M 107.5 20 V 19.87697236672155 M 107.5 20 V 20.12302763327845 M 112.5 20 V 20.30750834340396 M 112.5 20 V 19.69249165659604 M 117.5 20 V 15.394685856024793 M 117.5 20 V 24.605314143975207 M 122.5 20 V 36.15240170316824 M 122.5 20 V 3.847598296831766 M 127.5 20 V 3.7489565527475754 M 127.5 20 V 36.25104344725243 M 132.5 20 V 38.779778034232876 M 132.5 20 V 1.2202219657671236 M 137.5 20 V 3.7312115324575217 M 137.5 20 V 36.26878846754248 M 142.5 20 V 24.17340276751085 M 142.5 20 V 15.82659723248915 M 147.5 20 V 18.771943105385336 M 147.5 20 V 21.228056894614664 M 152.5 20 V 20.470168778524457 M 152.5 20 V 19.529831221475543 M 157.5 20 V 19.744920048767952 M 157.5 20 V 20.255079951232048 M 162.5 20 V 20.150214178288063 M 162.5 20 V 19.849785821711937 M 167.5 20 V 19.83920621102886 M 167.5 20 V 20.16079378897114 M 172.5 20 V 20.12281146026999 M 172.5 20 V 19.87718853973001 M 177.5 20 V 19.84909483968802 M 177.5 20 V 20.15090516031198 M 182.5 20 V 20.14237765247131 M 182.5 20 V 19.85762234752869 M 187.5 20 V 19.876957636779334 M 187.5 20 V 20.123042363220666 M 192.5 20 V 20.101350703615193 M 192.5 20 V 19.898649296384807 M 197.5 20 V 19.858330446979053 M 197.5 20 V 20.141669553020947 " clip-path="url(#left-to-right-x)"></path>
            <path id="path2" part="path2"  stroke-width="2" d="M 2.5 20 V 20.11330692276207 M 2.5 20 V 19.88669307723793 M 7.5 20 V 19.808217947101976 M 7.5 20 V 20.191782052898024 M 12.5 20 V 20.311082591480112 M 12.5 20 V 19.688917408519888 M 17.5 20 V 19.609573659780942 M 17.5 20 V 20.390426340219058 M 22.5 20 V 20.13127788836279 M 22.5 20 V 19.86872211163721 M 27.5 20 V 19.89562894215474 M 27.5 20 V 20.10437105784526 M 32.5 20 V 20.181187937917645 M 32.5 20 V 19.818812062082355 M 37.5 20 V 19.84473640152143 M 37.5 20 V 20.15526359847857 M 42.5 20 V 20.278267452913877 M 42.5 20 V 19.721732547086123 M 47.5 20 V 18.420814981891215 M 47.5 20 V 21.579185018108785 M 52.5 20 V 28.257590974597086 M 52.5 20 V 11.742409025402916 M 57.5 20 V 0.3798610327977272 M 57.5 20 V 39.62013896720227 M 62.5 20 V 40 M 62.5 20 V 0 M 67.5 20 V 3.6768702115371994 M 67.5 20 V 36.3231297884628 M 72.5 20 V 36.10931211261279 M 72.5 20 V 3.890687887387209 M 77.5 20 V 4.5583072579730874 M 77.5 20 V 35.441692742026916 M 82.5 20 V 31.49325246917989 M 82.5 20 V 8.50674753082011 M 87.5 20 V 16.20834685958065 M 87.5 20 V 23.79165314041935 M 92.5 20 V 20.628101254565678 M 92.5 20 V 19.371898745434322 M 97.5 20 V 19.72759388880931 M 97.5 20 V 20.27240611119069 M 102.5 20 V 20.255045872951655 M 102.5 20 V 19.744954127048345 M 107.5 20 V 19.87697236672155 M 107.5 20 V 20.12302763327845 M 112.5 20 V 20.30750834340396 M 112.5 20 V 19.69249165659604 M 117.5 20 V 15.394685856024793 M 117.5 20 V 24.605314143975207 M 122.5 20 V 36.15240170316824 M 122.5 20 V 3.847598296831766 M 127.5 20 V 3.7489565527475754 M 127.5 20 V 36.25104344725243 M 132.5 20 V 38.779778034232876 M 132.5 20 V 1.2202219657671236 M 137.5 20 V 3.7312115324575217 M 137.5 20 V 36.26878846754248 M 142.5 20 V 24.17340276751085 M 142.5 20 V 15.82659723248915 M 147.5 20 V 18.771943105385336 M 147.5 20 V 21.228056894614664 M 152.5 20 V 20.470168778524457 M 152.5 20 V 19.529831221475543 M 157.5 20 V 19.744920048767952 M 157.5 20 V 20.255079951232048 M 162.5 20 V 20.150214178288063 M 162.5 20 V 19.849785821711937 M 167.5 20 V 19.83920621102886 M 167.5 20 V 20.16079378897114 M 172.5 20 V 20.12281146026999 M 172.5 20 V 19.87718853973001 M 177.5 20 V 19.84909483968802 M 177.5 20 V 20.15090516031198 M 182.5 20 V 20.14237765247131 M 182.5 20 V 19.85762234752869 M 187.5 20 V 19.876957636779334 M 187.5 20 V 20.123042363220666 M 192.5 20 V 20.101350703615193 M 192.5 20 V 19.898649296384807 M 197.5 20 V 19.858330446979053 M 197.5 20 V 20.141669553020947 " clip-path="url(#left-to-right)" style="display:none;"></path>`;
    } else {
      html += `
            <path id="path1" part="path1"  stroke-width="2" style="display:none;"></path>
            <path id="path2" part="path2"  stroke-width="2" style="display:block;">
                <animate id="animationsvg" attributeName="d" dur="99999s" calcMode="linear" values="" fill="freeze"></animate>
            </path>
            `;
    }
    html += `
        </svg>
                <input type="range" part="input" id="seek-slider" max="100" value="0" step="any">
            </div>
            <div id="current-time" part="currenttime">0:00</div>
            <div id="duration" part="duration" style="display: none;">0:00</div>
        </div>
        </div>
        <audio src="${this.attributes.src.value}"></audio>
        `;
    return html;
  }
  templateCss() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    return `
            <style>
            *, :after, :before { 
                box-sizing: border-box;
                margin: 0;
            }
            :host {
                display: flex;
               
            }
            .player {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            #play {
                background: transparent;
                border: none;
                cursor:pointer;
                background: #4BA2E2;
                width: 74px;
                height: 74px;
                border-radius: 250px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 16px;
                
            }
            #play svg {
                fill: #fff;
                position:relative;
                transition: transform 0.3s;
                top: -0.5px;
            }
            #play svg:hover {
                transform: scale(1.2);
            }
            #play svg path {
                stroke-linecap: round;
                stroke-linejoin: round;
                transition: 0.2s;
            }
            #svg {
                margin: 0 10px;
                overflow: visible;
                stroke-width: 1px;
                fill: none;
            }
            #path1 {
                stroke: #D0D0D0; 
                overflow: visible;
                stroke-linecap: round;
            }
            #path2 {
                stroke: #4BA2E2;
                overflow: visible;
                stroke-linecap: round;
            }
            #slider  {
                position:relative;
            }
            #duration, #current-time {
                display: inline-block;
                position: relative;
                top:-1.1px;
                color: #9b9b9b;
                font-family: Pretendard;
                font-size: 18px;
                font-weight: 400;
                line-height: 21px;
                margin: 5px 0 0;
                font-size: 16px;
                padding-right: 12px;
                background: url("data:image/svg+xml,%3Csvg width='8' height='9' viewBox='0 0 8 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3.74864' cy='4.53709' r='3.67784' fill='%234BA2E2'/%3E%3C/svg%3E%0A") 100% 50% no-repeat;
            }
            #seek-slider {
                position: absolute;
                width: 100%;
                left: 0;
            }
            input[type=range] {
                -webkit-appearance: none; 
                width: 100%; 
                background: transparent; 
                padding: 0px;
                margin: 0px;
                border: 0px;
                height: ${parseInt(this.attributes["wave-height"].value)}px;
            }  
            input[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
            }
            input[type=range]:focus {
                outline: none; 
            }
            
            input[type=range]::-ms-track {
                width: 100%;
                cursor: pointer;
                /* Hides the slider so custom styles can be added */
                background: transparent; 
                border-color: transparent;
                color: transparent;
            }
            input[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
                position:relative; 
                /*top: -1.5px;*/
                height: 12.5px;
                width: 12.5px;
                border-radius: 50%;
                background:  ${(_j = (_i = this.attributes["wave-slider"]) == null ? void 0 : _i.value) != null ? _j : "#4fc3f7"};
                cursor: pointer;
                box-shadow: none;
                display: none;
            }
            input[type="range"]::-webkit-slider-thumb {
                transition: transform 0.3s;
            }
            input[type="range"]:active::-webkit-slider-thumb {
                transform: scale(1.5);
            }
            input[type="range"]::-moz-range-thumb {
                height: 12.5px;
                width: 12.5px;
                border-radius: 50%;
                background:  ${(_l = (_k = this.attributes["wave-slider"]) == null ? void 0 : _k.value) != null ? _l : "#4fc3f7"};
                cursor: pointer;
                box-shadow: none;
                border: 0px;

            }

            input[type="range"]:active::-moz-range-thumb {
                transform: scale(1.5);
            }  
            </style>
        `;
  }
}
window.customElements.define("wave-audio-path-player", AudioPathPlayer);