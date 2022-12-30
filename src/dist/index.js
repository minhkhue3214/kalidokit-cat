// import Live2DCubismCore from './live2dcubismcore.min.js';
// window.Live2DCubismCore = Live2DCubismCore
// console.log("run here",window.Live2DCubismCore)
// import { EventEmitter } from "./EventEmitter";

// var test = undefined
var __pow = Math.pow;
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("@pixi/utils"), require("@pixi/math"), require("@pixi/core"), require("@pixi/display")) : typeof define === "function" && define.amd ? define(["exports", "@pixi/utils", "@pixi/math", "@pixi/core", "@pixi/display"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory((global.PIXI = global.PIXI || {}, global.PIXI.live2d = global.PIXI.live2d || {}), global.PIXI.utils, global.PIXI, global.PIXI, global.PIXI));
})(this, function(exports2, utils, math, core, display) {
  "use strict";
  /**
 * Live2D Cubism Core
 * (C) 2019 Live2D Inc. All rights reserved.
 *
 * This file is licensed pursuant to the license agreement below.
 * This file corresponds to the "Redistributable Code" in the agreement.
 * https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_en.html
 */
var Live2DCubismCore;!function(Live2DCubismCore){var _scriptDir,_csm=function(){function _csm(){}return _csm.getVersion=function(){return _em.ccall("csmGetVersion","number",[],[])},_csm.getLatestMocVersion=function(){return _em.ccall("csmGetLatestMocVersion","number",[],[])},_csm.getMocVersion=function(moc,mocSize){return _em.ccall("csmGetMocVersion","number",["number","number"],[moc,mocSize])},_csm.getSizeofModel=function(moc){return _em.ccall("csmGetSizeofModel","number",["number"],[moc])},_csm.reviveMocInPlace=function(memory,mocSize){return _em.ccall("csmReviveMocInPlace","number",["number","number"],[memory,mocSize])},_csm.initializeModelInPlace=function(moc,memory,modelSize){return _em.ccall("csmInitializeModelInPlace","number",["number","number","number"],[moc,memory,modelSize])},_csm.getParameterCount=function(model){return _em.ccall("csmGetParameterCount","number",["number"],[model])},_csm.getParameterIds=function(model){return _em.ccall("csmGetParameterIds","number",["number"],[model])},_csm.getParameterMinimumValues=function(model){return _em.ccall("csmGetParameterMinimumValues","number",["number"],[model])},_csm.getParameterTypes=function(model){return _em.ccall("csmGetParameterTypes","number",["number"],[model])},_csm.getParameterMaximumValues=function(model){return _em.ccall("csmGetParameterMaximumValues","number",["number"],[model])},_csm.getParameterDefaultValues=function(model){return _em.ccall("csmGetParameterDefaultValues","number",["number"],[model])},_csm.getParameterValues=function(model){return _em.ccall("csmGetParameterValues","number",["number"],[model])},_csm.getParameterKeyCounts=function(model){return _em.ccall("csmGetParameterKeyCounts","number",["number"],[model])},_csm.getParameterKeyValues=function(model){return _em.ccall("csmGetParameterKeyValues","number",["number"],[model])},_csm.getPartCount=function(model){return _em.ccall("csmGetPartCount","number",["number"],[model])},_csm.getPartIds=function(model){return _em.ccall("csmGetPartIds","number",["number"],[model])},_csm.getPartOpacities=function(model){return _em.ccall("csmGetPartOpacities","number",["number"],[model])},_csm.getPartParentPartIndices=function(model){return _em.ccall("csmGetPartParentPartIndices","number",["number"],[model])},_csm.getDrawableCount=function(model){return _em.ccall("csmGetDrawableCount","number",["number"],[model])},_csm.getDrawableIds=function(model){return _em.ccall("csmGetDrawableIds","number",["number"],[model])},_csm.getDrawableConstantFlags=function(model){return _em.ccall("csmGetDrawableConstantFlags","number",["number"],[model])},_csm.getDrawableDynamicFlags=function(model){return _em.ccall("csmGetDrawableDynamicFlags","number",["number"],[model])},_csm.getDrawableTextureIndices=function(model){return _em.ccall("csmGetDrawableTextureIndices","number",["number"],[model])},_csm.getDrawableDrawOrders=function(model){return _em.ccall("csmGetDrawableDrawOrders","number",["number"],[model])},_csm.getDrawableRenderOrders=function(model){return _em.ccall("csmGetDrawableRenderOrders","number",["number"],[model])},_csm.getDrawableOpacities=function(model){return _em.ccall("csmGetDrawableOpacities","number",["number"],[model])},_csm.getDrawableMaskCounts=function(model){return _em.ccall("csmGetDrawableMaskCounts","number",["number"],[model])},_csm.getDrawableMasks=function(model){return _em.ccall("csmGetDrawableMasks","number",["number"],[model])},_csm.getDrawableVertexCounts=function(model){return _em.ccall("csmGetDrawableVertexCounts","number",["number"],[model])},_csm.getDrawableVertexPositions=function(model){return _em.ccall("csmGetDrawableVertexPositions","number",["number"],[model])},_csm.getDrawableVertexUvs=function(model){return _em.ccall("csmGetDrawableVertexUvs","number",["number"],[model])},_csm.getDrawableIndexCounts=function(model){return _em.ccall("csmGetDrawableIndexCounts","number",["number"],[model])},_csm.getDrawableIndices=function(model){return _em.ccall("csmGetDrawableIndices","number",["number"],[model])},_csm.getDrawableMultiplyColors=function(model){return _em.ccall("csmGetDrawableMultiplyColors","number",["number"],[model])},_csm.getDrawableScreenColors=function(model){return _em.ccall("csmGetDrawableScreenColors","number",["number"],[model])},_csm.getDrawableParentPartIndices=function(model){return _em.ccall("csmGetDrawableParentPartIndices","number",["number"],[model])},_csm.mallocMoc=function(mocSize){return _em.ccall("csmMallocMoc","number",["number"],[mocSize])},_csm.mallocModelAndInitialize=function(moc){return _em.ccall("csmMallocModelAndInitialize","number",["number"],[moc])},_csm.malloc=function(size){return _em.ccall("csmMalloc","number",["number"],[size])},_csm.setLogFunction=function(handler){_em.ccall("csmSetLogFunction",null,["number"],[handler])},_csm.updateModel=function(model){_em.ccall("csmUpdateModel",null,["number"],[model])},_csm.readCanvasInfo=function(model,outSizeInPixels,outOriginInPixels,outPixelsPerUnit){_em.ccall("csmReadCanvasInfo",null,["number","number","number","number"],[model,outSizeInPixels,outOriginInPixels,outPixelsPerUnit])},_csm.resetDrawableDynamicFlags=function(model){_em.ccall("csmResetDrawableDynamicFlags",null,["number"],[model])},_csm.free=function(memory){_em.ccall("csmFree",null,["number"],[memory])},_csm}(),Version=(Live2DCubismCore.AlignofMoc=64,Live2DCubismCore.AlignofModel=16,Live2DCubismCore.MocVersion_Unknown=0,Live2DCubismCore.MocVersion_30=1,Live2DCubismCore.MocVersion_33=2,Live2DCubismCore.MocVersion_40=3,Live2DCubismCore.MocVersion_42=4,Live2DCubismCore.ParameterType_Normal=0,Live2DCubismCore.ParameterType_BlendShape=1,function(){function Version(){}return Version.csmGetVersion=function(){return _csm.getVersion()},Version.csmGetLatestMocVersion=function(){return _csm.getLatestMocVersion()},Version.csmGetMocVersion=function(moc,mocBytes){return _csm.getMocVersion(moc._ptr,mocBytes.byteLength)},Version}()),Version=(Live2DCubismCore.Version=Version,function(){function Logging(){}return Logging.csmSetLogFunction=function(handler){Logging.logFunction=handler;handler=_em.addFunction(Logging.wrapLogFunction,"vi");_csm.setLogFunction(handler)},Logging.csmGetLogFunction=function(){return Logging.logFunction},Logging.wrapLogFunction=function(messagePtr){messagePtr=_em.UTF8ToString(messagePtr);Logging.logFunction(messagePtr)},Logging}()),Version=(Live2DCubismCore.Logging=Version,function(){function Moc(mocBytes){var memory=_csm.mallocMoc(mocBytes.byteLength);memory&&(new Uint8Array(_em.HEAPU8.buffer,memory,mocBytes.byteLength).set(new Uint8Array(mocBytes)),this._ptr=_csm.reviveMocInPlace(memory,mocBytes.byteLength),this._ptr||_csm.free(memory))}return Moc.fromArrayBuffer=function(buffer){if(!buffer)return null;buffer=new Moc(buffer);return buffer._ptr?buffer:null},Moc.prototype._release=function(){_csm.free(this._ptr),this._ptr=0},Moc}()),Version=(Live2DCubismCore.Moc=Version,function(){function Model(moc){this._ptr=_csm.mallocModelAndInitialize(moc._ptr),this._ptr&&(this.parameters=new Parameters(this._ptr),this.parts=new Parts(this._ptr),this.drawables=new Drawables(this._ptr),this.canvasinfo=new CanvasInfo(this._ptr))}return Model.fromMoc=function(moc){moc=new Model(moc);return moc._ptr?moc:null},Model.prototype.update=function(){_csm.updateModel(this._ptr)},Model.prototype.release=function(){_csm.free(this._ptr),this._ptr=0},Model}()),CanvasInfo=(Live2DCubismCore.Model=Version,function(modelPtr){var _canvasSize_data,_canvasSize_dataPtr,_canvasSize_nDataBytes,_canvasOrigin_dataPtr,_canvasOrigin_nDataBytes,_canvasPPU_nDataBytes,_canvasPPU_dataPtr;modelPtr&&(_canvasSize_nDataBytes=(_canvasSize_data=new Float32Array(2)).length*_canvasSize_data.BYTES_PER_ELEMENT,_canvasSize_dataPtr=_csm.malloc(_canvasSize_nDataBytes),(_canvasSize_dataPtr=new Uint8Array(_em.HEAPU8.buffer,_canvasSize_dataPtr,_canvasSize_nDataBytes)).set(new Uint8Array(_canvasSize_data.buffer)),_canvasOrigin_nDataBytes=(_canvasSize_nDataBytes=new Float32Array(2)).length*_canvasSize_nDataBytes.BYTES_PER_ELEMENT,_canvasOrigin_dataPtr=_csm.malloc(_canvasOrigin_nDataBytes),(_canvasOrigin_dataPtr=new Uint8Array(_em.HEAPU8.buffer,_canvasOrigin_dataPtr,_canvasOrigin_nDataBytes)).set(new Uint8Array(_canvasSize_nDataBytes.buffer)),_canvasPPU_nDataBytes=(_canvasOrigin_nDataBytes=new Float32Array(1)).length*_canvasOrigin_nDataBytes.BYTES_PER_ELEMENT,_canvasPPU_dataPtr=_csm.malloc(_canvasPPU_nDataBytes),(_canvasPPU_dataPtr=new Uint8Array(_em.HEAPU8.buffer,_canvasPPU_dataPtr,_canvasPPU_nDataBytes)).set(new Uint8Array(_canvasOrigin_nDataBytes.buffer)),_csm.readCanvasInfo(modelPtr,_canvasSize_dataPtr.byteOffset,_canvasOrigin_dataPtr.byteOffset,_canvasPPU_dataPtr.byteOffset),_canvasSize_data=new Float32Array(_canvasSize_dataPtr.buffer,_canvasSize_dataPtr.byteOffset,_canvasSize_dataPtr.length),_canvasSize_nDataBytes=new Float32Array(_canvasOrigin_dataPtr.buffer,_canvasOrigin_dataPtr.byteOffset,_canvasOrigin_dataPtr.length),_canvasOrigin_nDataBytes=new Float32Array(_canvasPPU_dataPtr.buffer,_canvasPPU_dataPtr.byteOffset,_canvasPPU_dataPtr.length),this.CanvasWidth=_canvasSize_data[0],this.CanvasHeight=_canvasSize_data[1],this.CanvasOriginX=_canvasSize_nDataBytes[0],this.CanvasOriginY=_canvasSize_nDataBytes[1],this.PixelsPerUnit=_canvasOrigin_nDataBytes[0],_csm.free(_canvasSize_dataPtr.byteOffset),_csm.free(_canvasOrigin_dataPtr.byteOffset),_csm.free(_canvasPPU_dataPtr.byteOffset))}),Parameters=(Live2DCubismCore.CanvasInfo=CanvasInfo,function(modelPtr){this.count=_csm.getParameterCount(modelPtr),length=_csm.getParameterCount(modelPtr),this.ids=new Array(length);for(var length,length2,_ids=new Uint32Array(_em.HEAPU32.buffer,_csm.getParameterIds(modelPtr),length),i=0;i<_ids.length;i++)this.ids[i]=_em.UTF8ToString(_ids[i]);length=_csm.getParameterCount(modelPtr),this.minimumValues=new Float32Array(_em.HEAPF32.buffer,_csm.getParameterMinimumValues(modelPtr),length),length=_csm.getParameterCount(modelPtr),this.types=new Int32Array(_em.HEAP32.buffer,_csm.getParameterTypes(modelPtr),length),length=_csm.getParameterCount(modelPtr),this.maximumValues=new Float32Array(_em.HEAPF32.buffer,_csm.getParameterMaximumValues(modelPtr),length),length=_csm.getParameterCount(modelPtr),this.defaultValues=new Float32Array(_em.HEAPF32.buffer,_csm.getParameterDefaultValues(modelPtr),length),length=_csm.getParameterCount(modelPtr),this.values=new Float32Array(_em.HEAPF32.buffer,_csm.getParameterValues(modelPtr),length),length=_csm.getParameterCount(modelPtr),this.keyCounts=new Int32Array(_em.HEAP32.buffer,_csm.getParameterKeyCounts(modelPtr),length),length=_csm.getParameterCount(modelPtr),length2=new Int32Array(_em.HEAP32.buffer,_csm.getParameterKeyCounts(modelPtr),length),this.keyValues=new Array(length);for(var _keyValues=new Uint32Array(_em.HEAPU32.buffer,_csm.getParameterKeyValues(modelPtr),length),i=0;i<_keyValues.length;i++)this.keyValues[i]=new Float32Array(_em.HEAPF32.buffer,_keyValues[i],length2[i])}),Parts=(Live2DCubismCore.Parameters=Parameters,function(modelPtr){this.count=_csm.getPartCount(modelPtr),length=_csm.getPartCount(modelPtr),this.ids=new Array(length);for(var length,_ids=new Uint32Array(_em.HEAPU32.buffer,_csm.getPartIds(modelPtr),length),i=0;i<_ids.length;i++)this.ids[i]=_em.UTF8ToString(_ids[i]);length=_csm.getPartCount(modelPtr),this.opacities=new Float32Array(_em.HEAPF32.buffer,_csm.getPartOpacities(modelPtr),length),length=_csm.getPartCount(modelPtr),this.parentIndices=new Int32Array(_em.HEAP32.buffer,_csm.getPartParentPartIndices(modelPtr),length)}),Drawables=(Live2DCubismCore.Parts=Parts,function(){function Drawables(modelPtr){this._modelPtr=modelPtr;for(var length,length2=null,_ids=(this.count=_csm.getDrawableCount(modelPtr),length=_csm.getDrawableCount(modelPtr),this.ids=new Array(length),new Uint32Array(_em.HEAPU32.buffer,_csm.getDrawableIds(modelPtr),length)),i=0;i<_ids.length;i++)this.ids[i]=_em.UTF8ToString(_ids[i]);length=_csm.getDrawableCount(modelPtr),this.constantFlags=new Uint8Array(_em.HEAPU8.buffer,_csm.getDrawableConstantFlags(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.dynamicFlags=new Uint8Array(_em.HEAPU8.buffer,_csm.getDrawableDynamicFlags(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.textureIndices=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableTextureIndices(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.drawOrders=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableDrawOrders(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.renderOrders=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableRenderOrders(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.opacities=new Float32Array(_em.HEAPF32.buffer,_csm.getDrawableOpacities(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.maskCounts=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableMaskCounts(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.vertexCounts=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableVertexCounts(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.indexCounts=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableIndexCounts(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.multiplyColors=new Float32Array(_em.HEAPF32.buffer,_csm.getDrawableMultiplyColors(modelPtr),4*length),length=_csm.getDrawableCount(modelPtr),this.screenColors=new Float32Array(_em.HEAPF32.buffer,_csm.getDrawableScreenColors(modelPtr),4*length),length=_csm.getDrawableCount(modelPtr),this.parentPartIndices=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableParentPartIndices(modelPtr),length),length=_csm.getDrawableCount(modelPtr),length2=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableMaskCounts(modelPtr),length),this.masks=new Array(length);for(var _masks=new Uint32Array(_em.HEAPU32.buffer,_csm.getDrawableMasks(modelPtr),length),i=0;i<_masks.length;i++)this.masks[i]=new Int32Array(_em.HEAP32.buffer,_masks[i],length2[i]);length=_csm.getDrawableCount(modelPtr),length2=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableVertexCounts(modelPtr),length),this.vertexPositions=new Array(length);for(var _vertexPositions=new Uint32Array(_em.HEAPU32.buffer,_csm.getDrawableVertexPositions(modelPtr),length),i=0;i<_vertexPositions.length;i++)this.vertexPositions[i]=new Float32Array(_em.HEAPF32.buffer,_vertexPositions[i],2*length2[i]);length=_csm.getDrawableCount(modelPtr),length2=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableVertexCounts(modelPtr),length),this.vertexUvs=new Array(length);for(var _vertexUvs=new Uint32Array(_em.HEAPU32.buffer,_csm.getDrawableVertexUvs(modelPtr),length),i=0;i<_vertexUvs.length;i++)this.vertexUvs[i]=new Float32Array(_em.HEAPF32.buffer,_vertexUvs[i],2*length2[i]);length=_csm.getDrawableCount(modelPtr),length2=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableIndexCounts(modelPtr),length),this.indices=new Array(length);for(var _indices=new Uint32Array(_em.HEAPU32.buffer,_csm.getDrawableIndices(modelPtr),length),i=0;i<_indices.length;i++)this.indices[i]=new Uint16Array(_em.HEAPU16.buffer,_indices[i],length2[i])}return Drawables.prototype.resetDynamicFlags=function(){_csm.resetDrawableDynamicFlags(this._modelPtr)},Drawables}()),Version=(Live2DCubismCore.Drawables=Drawables,function(){function Utils(){}return Utils.hasBlendAdditiveBit=function(bitfield){return 1==(1&bitfield)},Utils.hasBlendMultiplicativeBit=function(bitfield){return 2==(2&bitfield)},Utils.hasIsDoubleSidedBit=function(bitfield){return 4==(4&bitfield)},Utils.hasIsInvertedMaskBit=function(bitfield){return 8==(8&bitfield)},Utils.hasIsVisibleBit=function(bitfield){return 1==(1&bitfield)},Utils.hasVisibilityDidChangeBit=function(bitfield){return 2==(2&bitfield)},Utils.hasOpacityDidChangeBit=function(bitfield){return 4==(4&bitfield)},Utils.hasDrawOrderDidChangeBit=function(bitfield){return 8==(8&bitfield)},Utils.hasRenderOrderDidChangeBit=function(bitfield){return 16==(16&bitfield)},Utils.hasVertexPositionsDidChangeBit=function(bitfield){return 32==(32&bitfield)},Utils.hasBlendColorDidChangeBit=function(bitfield){return 64==(64&bitfield)},Utils}()),_em_module=(Live2DCubismCore.Utils=Version,_scriptDir="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(_em_module){_em_module=_em_module||{};var b,m,e={};for(m in b=b||(void 0!==_em_module?_em_module:{}))b.hasOwnProperty(m)&&(e[m]=b[m]);var w,z,A,v,x,r=!1,n="object"==typeof window,q="function"==typeof importScripts,r="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node&&!n&&!q,t=!n&&!r&&!q,u="",G=(r?(u=__dirname+"/",v=function(a,c){var d=B(a);return d||(z=z||require("fs"),a=(A=A||require("path")).normalize(a),d=z.readFileSync(a)),c?d:d.toString()},x=function(a){return assert((a=(a=v(a,!0)).buffer?a:new Uint8Array(a)).buffer),a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){throw a}),process.on("unhandledRejection",C),b.inspect=function(){return"[Emscripten Module object]"}):t?("undefined"!=typeof read&&(v=function(a){var c=B(a);return c?D(c):read(a)}),x=function(a){var c;if(!(c=B(a))){if("function"==typeof readbuffer)return new Uint8Array(readbuffer(a));assert("object"==typeof(c=read(a,"binary")))}return c},"undefined"!=typeof print&&((console="undefined"==typeof console?{}:console).log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(n||q)&&(q?u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==(u=_scriptDir||u).indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",v=function(a){try{var c=new XMLHttpRequest;return c.open("GET",a,!1),c.send(null),c.responseText}catch(d){if(a=B(a))return D(a);throw d}},q&&(x=function(a){try{var c=new XMLHttpRequest;return c.open("GET",a,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}catch(d){if(a=B(a))return a;throw d}}),w=function(a){var c=E,d=F,f=new XMLHttpRequest;f.open("GET",c,!0),f.responseType="arraybuffer",f.onload=function(){var g;200==f.status||0==f.status&&f.response?d(f.response):(g=B(c))?d(g.buffer):a()},f.onerror=a,f.send(null)}),b.print||console.log.bind(console)),H=b.printErr||console.warn.bind(console);for(m in e)e.hasOwnProperty(m)&&(b[m]=e[m]);var e=null,I=Array(1),J=0,K=!1;function assert(a,c){a||C("Assertion failed: "+c)}var buffer,N,M,O,L="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function ca(a,c,d){var f=c+d;for(d=c;a[d]&&!(f<=d);)++d;if(16<d-c&&a.subarray&&L)return L.decode(a.subarray(c,d));for(f="";c<d;){var h,p,g=a[c++];128&g?(h=63&a[c++],192==(224&g)?f+=String.fromCharCode((31&g)<<6|h):(p=63&a[c++],(g=224==(240&g)?(15&g)<<12|h<<6|p:(7&g)<<18|h<<12|p<<6|63&a[c++])<65536?f+=String.fromCharCode(g):(g-=65536,f+=String.fromCharCode(55296|g>>10,56320|1023&g)))):f+=String.fromCharCode(g)}return f}function da(a,c){return a?ca(M,a,c):""}function ea(a){return 0<a%16777216&&(a+=16777216-a%16777216),a}function fa(a){buffer=a,b.HEAP8=N=new Int8Array(a),b.HEAP16=new Int16Array(a),b.HEAP32=O=new Int32Array(a),b.HEAPU8=M=new Uint8Array(a),b.HEAPU16=new Uint16Array(a),b.HEAPU32=new Uint32Array(a),b.HEAPF32=new Float32Array(a),b.HEAPF64=new Float64Array(a)}function P(a){for(;0<a.length;){var d,c=a.shift();"function"==typeof c?c():"number"==typeof(d=c.C)?void 0===c.w?b.dynCall_v(d):b.dynCall_vi(d,c.w):d(void 0===c.w?null:c.w)}}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le"),n=b.TOTAL_MEMORY||16777216,n=(buffer=b.buffer||new ArrayBuffer(n)).byteLength,fa(buffer),O[1052]=5247296;var ia=[],ja=[],ka=[],la=[],Q=(Math.imul&&-5===Math.imul(4294967295,5)||(Math.imul=function(a,c){var d=65535&a,f=65535&c;return d*f+((a>>>16)*f+d*(c>>>16)<<16)|0}),Math.clz32||(Math.clz32=function(a){var c=32,d=a>>16;return d&&(c-=16,a=d),(d=a>>8)&&(c-=8,a=d),(d=a>>4)&&(c-=4,a=d),(d=a>>2)&&(c-=2,a=d),a>>1?c-2:c-a}),Math.trunc||(Math.trunc=function(a){return a<0?Math.ceil(a):Math.floor(a)}),0),S=null,T=null;function C(a){throw b.onAbort&&b.onAbort(a),G(a),H(a),K=!0,"abort("+a+"). Build with -s ASSERTIONS=1 for more info."}b.preloadedImages={},b.preloadedAudios={};var E=null,U="data:application/octet-stream;base64,";function na(a){return a.replace(/\b__Z[\w\d_]+/g,function(a){return a==a?a:a+" ["+a+"]"})}function oa(){var a=Error();if(!a.stack){try{throw Error(0)}catch(c){a=c}if(!a.stack)return"(no stack trace available)"}return a.stack.toString()}var V=[null,[],[]];function W(a,c){var d=V[a];0===c||10===c?((1===a?G:H)(ca(d,0)),d.length=0):d.push(c)}function pa(a,c,d,f){try{for(var g=0,h=0;h<d;h++){for(var p=O[c+8*h>>2],k=O[c+(8*h+4)>>2],y=0;y<k;y++)W(a,M[p+y]);g+=k}return O[f>>2]=g,0}catch(R){return"undefined"!=typeof FS&&R instanceof FS.A||C(R),R.B}}function qa(){return N.length}function ra(a){try{var c=new ArrayBuffer(a);if(c.byteLength==a)return new Int8Array(c).set(N),sa(c),fa(c),1}catch(d){}}var ta=!(E="data:application/octet-stream;base64,AAAAAAAAAAARAAoAERERAAAAAAUAAAAAAAAJAAAAAAsAAAAAAAAAABEADwoREREDCgcAARMJCwsAAAkGCwAACwAGEQAAABEREQAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAARAAoKERERAAoAAAIACQsAAAAJAAsAAAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAA0AAAAEDQAAAAAJDgAAAAAADgAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAPAAAAAA8AAAAACRAAAAAAABAAABAAABIAAAASEhIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAABISEgAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAAAAAAAoAAAAACgAAAAAJCwAAAAAACwAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAwAAAAACQwAAAAAAAwAAAwAADAxMjM0NTY3ODlBQkNERUYFAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAgAAABgKAAAABAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAK/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBbiBlcnJvciBvY2N1cnJlZCBpbiB0aGUgaW50ZXJwb2xhdGlvbiBmb3IgYmxlbmQgc2hhcGVzLiBDb21iaW5hdGlvbkNvdW50IGlzICVkLgBbQ1NNXSBbRV1XYXJwRGVmb3JtZXI6OlRyYW5zZm9ybVRhcmdldCgpIGVycm9yLiBbJWRdIHAwMT0oJS40ZiAsICUuNGYpCgBbQ1NNXSBbRV1Jbml0aWFsaXplRGVmb3JtZXJzKCk6IFVua25vd24gRGVmb3JtZXIgVHlwZS4KAExpdmUyRCBDdWJpc20gU0RLIENvcmUgVmVyc2lvbiAlZC4lZC4lZABNT0MzAFtDU01dIFtFXWNzbVJldml2ZU1vY0luUGxhY2UgaXMgZmFpbGVkLiBDb3JydXB0ZWQgIG1vYzMgZmlsZS4KAFtDU01dIFtFXWNzbVJldml2ZU1vY0luUGxhY2UgaXMgZmFpbGVkLiBUaGUgQ29yZSB1bnN1cHBvcnQgbGF0ZXIgdGhhbiBtb2MzIHZlcjpbJWRdLiBUaGlzIG1vYzMgdmVyIGlzIFslZF0uCgBbQ1NNXSBbRV1jc21HZXRNb2NWZXJzaW9uIGlzIGZhaWxlZC4gQ29ycnVwdGVkIG1vYzMgZmlsZS4KAFtDU01dIFtFXSVzOiAlcwoAY3NtR2V0TW9jVmVyc2lvbgAiYWRkcmVzcyIgaXMgbnVsbC4AY3NtUmV2aXZlTW9jSW5QbGFjZQAiYWRkcmVzcyIgYWxpZ25tZW50IGlzIGludmFsaWQuACJzaXplIiBpcyBpbnZhbGlkLgBjc21SZWFkQ2FudmFzSW5mbwAibW9kZWwiIGlzIGludmFsaWQuACJvdXRTaXplSW5QaXhlbHMiIGlzIG51bGwuACJvdXRPcmlnaW5JblBpeGVscyIgaXMgbnVsbC4AIm91dFBpeGVsc1BlclVuaXQiIGlzIG51bGwuAGNzbUdldFNpemVvZk1vZGVsACJtb2MiIGlzIGludmFsaWQuAGNzbUluaXRpYWxpemVNb2RlbEluUGxhY2UAInNpemUiIGlzIGludmFsaWQAY3NtVXBkYXRlTW9kZWwAY3NtR2V0UGFyYW1ldGVyQ291bnQAY3NtR2V0UGFyYW1ldGVySWRzAGNzbUdldFBhcmFtZXRlclR5cGVzAGNzbUdldFBhcmFtZXRlck1pbmltdW1WYWx1ZXMAY3NtR2V0UGFyYW1ldGVyTWF4aW11bVZhbHVlcwBjc21HZXRQYXJhbWV0ZXJEZWZhdWx0VmFsdWVzAGNzbUdldFBhcmFtZXRlclZhbHVlcwBjc21HZXRQYXJ0Q291bnQAY3NtR2V0UGFydElkcwBjc21HZXRQYXJ0T3BhY2l0aWVzAGNzbUdldFBhcnRQYXJlbnRQYXJ0SW5kaWNlcwBjc21HZXREcmF3YWJsZUNvdW50AGNzbUdldERyYXdhYmxlSWRzAGNzbUdldERyYXdhYmxlQ29uc3RhbnRGbGFncwBjc21HZXREcmF3YWJsZUR5bmFtaWNGbGFncwBjc21HZXREcmF3YWJsZVRleHR1cmVJbmRpY2VzAGNzbUdldERyYXdhYmxlRHJhd09yZGVycwBjc21HZXREcmF3YWJsZVJlbmRlck9yZGVycwBjc21HZXREcmF3YWJsZU9wYWNpdGllcwBjc21HZXREcmF3YWJsZU1hc2tDb3VudHMAY3NtR2V0RHJhd2FibGVNYXNrcwBjc21HZXREcmF3YWJsZVZlcnRleENvdW50cwBjc21HZXREcmF3YWJsZVZlcnRleFBvc2l0aW9ucwBjc21HZXREcmF3YWJsZVZlcnRleFV2cwBjc21HZXREcmF3YWJsZUluZGV4Q291bnRzAGNzbUdldERyYXdhYmxlSW5kaWNlcwBjc21HZXREcmF3YWJsZU11bHRpcGx5Q29sb3JzAGNzbUdldERyYXdhYmxlU2NyZWVuQ29sb3JzAGNzbUdldERyYXdhYmxlUGFyZW50UGFydEluZGljZXMAY3NtUmVzZXREcmF3YWJsZUR5bmFtaWNGbGFncwBjc21HZXRQYXJhbWV0ZXJLZXlDb3VudHMAY3NtR2V0UGFyYW1ldGVyS2V5VmFsdWVzAFtDU01dIFtXXVJvdGF0aW9uRGVmb3JtZXI6IE5vdCBmb3VuZCB0cmFuc2Zvcm1lZCBEaXJlY3Rpb24uCgBbQ1NNXSBbRV1VcGRhdGVEZWZvcm1lckhpZXJhcmNoeSgpOiBVbmtub3duIERlZm9ybWVyIFR5cGUuCgAlcwoALSsgICAwWDB4AChudWxsKQAtMFgrMFggMFgtMHgrMHggMHgAaW5mAElORgBuYW4ATkFOAC4=");function D(a){for(var c=[],d=0;d<a.length;d++){var f=a[d];255<f&&(ta&&assert(!1,"Character code "+f+" ("+String.fromCharCode(f)+")  at offset "+d+" not in 0x00-0xFF."),f&=255),c.push(String.fromCharCode(f))}return c.join("")}var ua="function"==typeof atob?atob:function(a){var c="",d=0;a=a.replace(/[^A-Za-z0-9\+\/=]/g,"");do{var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++)),g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++)),h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++)),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++)),f=f<<2|g>>4,g=(15&g)<<4|h>>2,k=(3&h)<<6|p}while(c+=String.fromCharCode(f),64!==h&&(c+=String.fromCharCode(g)),64!==p&&(c+=String.fromCharCode(k)),d<a.length);return c};function B(a){if(String.prototype.startsWith?a.startsWith(U):0===a.indexOf(U)){if(a=a.slice(U.length),"boolean"==typeof r&&r){try{var c=Buffer.from(a,"base64")}catch(h){c=new Buffer(a,"base64")}var d=new Uint8Array(c.buffer,c.byteOffset,c.byteLength)}else try{for(var f=ua(a),g=new Uint8Array(f.length),c=0;c<f.length;++c)g[c]=f.charCodeAt(c);d=g}catch(h){throw Error("Converting base64 string to bytes failed.")}return d}}var F,Ca,Y,q=function(global,env,buffer){var a=new global.Int8Array(buffer),b=new global.Int16Array(buffer),c=new global.Int32Array(buffer),d=new global.Uint8Array(buffer),e=new global.Uint16Array(buffer),f=new global.Float32Array(buffer),g=new global.Float64Array(buffer),h=0|env.v,q=global.Math.floor,r=global.Math.pow,s=global.Math.cos,t=global.Math.sin,u=global.Math.atan2,v=global.Math.imul,w=global.Math.clz32,x=env.a,y=env.b,z=env.c,A=env.d,B=env.e,C=env.f,D=env.g,E=env.h,F=env.i,G=env.j,H=env.k,I=env.l,J=env.m,S=4416;function ea(a){var b,d,g,h,i,j,n,o,p,q,r,s,t,u,v,w,x,y,k=0,l=0,m=0|c[500+(a|=0)>>2];if(!((0|m)<=0)){n=0|c[a+504>>2],o=0|c[a+444>>2],d=0|c[a+536>>2],l=0;do{if(g=0|c[n+(24*l|0)+12>>2],h=0|c[o+(c[n+(24*l|0)+4>>2]<<2)>>2],i=0|c[o+(c[n+(24*l|0)+8>>2]<<2)>>2],j=0|c[n+(24*l|0)+16>>2],a=0|c[n+(24*l|0)+20>>2],b=+f[d+(l<<2)>>2],0<(0|g))for(k=0;x=+f[j+(k<<2)>>2],s=+f[j+((p=1|k)<<2)>>2],w=(0|e[a+(k<<1)>>1])<<1&65534,v=+f[(y=h+(w<<2)|0)>>2],r=+f[(w=h+((1|w)<<2)|0)>>2],p=(0|e[a+(p<<1)>>1])<<1&65534,u=+f[(t=i+(p<<2)|0)>>2],q=+f[(p=i+((1|p)<<2)|0)>>2],f[y>>2]=v+x*(u-v)*b,f[w>>2]=r+x*(q-r)*b,f[t>>2]=u+s*(v-u)*b,f[p>>2]=q+s*(r-q)*b,(0|(k=k+2|0))<(0|g););}while((0|(l=l+1|0))!=(0|m))}}function fa(a){var b=0|c[(a|=0)>>2];(0|d[4+b>>0])<4||ga(a,0|c[a+596>>2],0|c[a+600>>2],0|c[984+b>>2],0|c[a+152>>2],0|c[796+b>>2])}function ga(a,b,d,e,g,h){a|=0,e|=0,g|=0,h|=0;var l,o,p,q,r,s,t,u,w,i=0,j=0,k=0,m=0,n=0,v=S;if(S=S+16|0,u=v+8|0,t=v,s=(d|=0)+(12*(b|=0)|0)|0,(0|b)<=0)S=v;else{do{b=0|c[d>>2],o=0|c[g+(b<<2)>>2],q=(b=0|c[h+(b<<2)>>2])<<1,n=0|c[d+4>>2],i=0|c[d+8>>2],p=0|c[1028+(0|c[a>>2])>>2],r=i+(48*n|0)|0;a:do{if(0<(0|n)){if((0|b)<=0)for(;;)if(3<=(b=0|c[i+8>>2])>>>0&&(c[u>>2]=b,ia(0,784,u)),r>>>0<=(i=i+48|0)>>>0)break a;do{j=e+(c[i+4>>2]<<2)|0,b=0|c[i+8>>2];b:do{if(0|b)switch(n=p+(c[j+(c[i+12>>2]<<2)>>2]<<2)|0,0|b){case 1:for(j=i+20|0,b=i+44|0,k=0;f[(m=o+(k<<2)|0)>>2]=+f[m>>2]+ +f[b>>2]*(+f[n+(k<<2)>>2]*+f[j>>2]),(0|(k=k+1|0))!=(0|q););break;case 2:for(j=p+(c[j+(c[i+16>>2]<<2)>>2]<<2)|0,k=i+20|0,l=i+24|0,b=i+44|0,m=0;f[(w=o+(m<<2)|0)>>2]=+f[w>>2]+ +f[b>>2]*(+f[n+(m<<2)>>2]*+f[k>>2]+ +f[j+(m<<2)>>2]*+f[l>>2]),(0|(m=m+1|0))!=(0|q););break;default:c[t>>2]=b,ia(0,784,t);break b}}while(0)}while((i=i+48|0)>>>0<r>>>0)}}while(0)}while((d=d+12|0)>>>0<s>>>0);S=v}}function ha(a){var b=0|c[(a|=0)>>2];(0|d[4+b>>0])<4||ga(a,0|c[a+604>>2],0|c[a+608>>2],0|c[1024+b>>2],0|c[a+444>>2],0|c[892+b>>2])}function ia(a,b,d){a|=0,b|=0,d|=0;var e,f,g=S;S=S+272|0,a=g+16|0,f=g,(e=0|c[904])&&(c[f>>2]=d,_b(a,b,f),Z[1&e](a)),S=g}function ma(b,d,e){e|=0;var m,f=0,g=0,h=0,i=0,j=0,k=0,l=0,n=0,o=0,p=0,o=0|a[4+(b|=0)>>0];if(c[(d|=0)>>2]=628,p=0|c[(n=b+704|0)>>2],0<(0|(j=0|c[p>>2]))){for(f=0|c[b+1048>>2],g=0|c[b+720>>2],i=h=0;i=(1<<c[f+(c[g+(h<<2)>>2]<<2)>>2])+i|0,(0|(h=h+1|0))!=(0|j););f=i<<2}else f=0;if(c[d+4>>2]=12*j,c[d+8>>2]=c[p>>2]<<2,c[d+12>>2]=c[p>>2]<<2,c[d+16>>2]=c[p>>2]<<2,c[d+20>>2]=c[p>>2]<<2,c[d+24>>2]=c[p>>2]<<2,c[d+28>>2]=f,c[d+32>>2]=c[p>>2]<<2,c[d+36>>2]=f,c[d+40>>2]=f,c[d+44>>2]=c[(m=p+4|0)>>2]<<5,c[d+48>>2]=c[m>>2]<<2,c[d+52>>2]=c[m>>2]<<2,c[d+56>>2]=c[m>>2]<<2,c[d+60>>2]=c[m>>2]<<4,c[d+64>>2]=c[m>>2]<<4,0<(0|(l=0|c[(m=p+8|0)>>2]))){for(g=0|c[b+796>>2],h=0|c[b+1048>>2],i=0|c[b+780>>2],f=k=j=0;f=(15+(c[g+(j<<2)>>2]<<3)&-16)+f|0,k=(1<<c[h+(c[i+(j<<2)>>2]<<2)>>2])+k|0,(0|(j=j+1|0))!=(0|l););g=k<<2}else f=g=0;if(c[d+68>>2]=24*l,c[d+72>>2]=c[m>>2]<<2,c[d+76>>2]=c[m>>2]<<2,c[d+80>>2]=c[m>>2]<<2,c[d+84>>2]=f,c[d+88>>2]=c[m>>2]<<4,c[d+92>>2]=c[m>>2]<<4,c[d+96>>2]=c[m>>2]<<2,c[d+100>>2]=g,c[d+104>>2]=c[m>>2]<<2,c[d+108>>2]=g,c[d+112>>2]=g,c[d+116>>2]=g,c[d+120>>2]=g,c[d+124>>2]=g,c[d+128>>2]=g,c[d+132>>2]=g,c[d+136>>2]=g,c[d+140>>2]=g,c[d+144>>2]=c[m>>2]<<2,c[d+148>>2]=c[m>>2]<<2,c[d+152>>2]=c[m>>2]<<2,c[d+156>>2]=c[m>>2]<<2,c[d+160>>2]=c[m>>2]<<2,c[d+164>>2]=c[m>>2]<<2,0<(0|(j=0|c[(k=p+12|0)>>2]))){for(f=0|c[b+1048>>2],g=0|c[b+812>>2],i=h=0;i=(1<<c[f+(c[g+(h<<2)>>2]<<2)>>2])+i|0,(0|(h=h+1|0))!=(0|j););f=i<<2}else f=0;if(c[d+168>>2]=12*j,c[d+172>>2]=c[k>>2]<<2,c[d+176>>2]=c[k>>2]<<2,c[d+180>>2]=c[k>>2]<<2,c[d+184>>2]=c[k>>2]<<2,c[d+188>>2]=c[k>>2]<<2,c[d+192>>2]=c[k>>2]<<2,c[d+196>>2]=c[k>>2]<<2,c[d+200>>2]=c[k>>2]<<2,c[d+204>>2]=c[k>>2]<<4,c[d+208>>2]=c[k>>2]<<4,c[d+212>>2]=c[k>>2]<<2,c[d+216>>2]=f,c[d+220>>2]=c[k>>2]<<2,c[d+224>>2]=f,c[d+228>>2]=f,c[d+232>>2]=f,c[d+236>>2]=f,c[d+240>>2]=f,c[d+244>>2]=f,c[d+248>>2]=f,c[d+252>>2]=f,c[d+256>>2]=f,c[d+260>>2]=f,c[d+264>>2]=f,c[d+268>>2]=f,c[d+272>>2]=c[k>>2]<<2,c[d+276>>2]=c[k>>2]<<2,c[d+280>>2]=c[k>>2]<<2,c[d+284>>2]=c[k>>2]<<2,c[d+288>>2]=c[k>>2]<<2,c[d+292>>2]=c[k>>2]<<2,0<(0|(l=0|c[(m=p+16|0)>>2]))){for(g=0|c[b+892>>2],h=0|c[b+1048>>2],i=0|c[b+852>>2],f=k=j=0;f=(15+(c[g+(j<<2)>>2]<<3)&-16)+f|0,k=(1<<c[h+(c[i+(j<<2)>>2]<<2)>>2])+k|0,(0|(j=j+1|0))!=(0|l););g=k<<2}else f=g=0;if(c[d+296>>2]=20*l,c[d+300>>2]=c[m>>2]<<2,c[d+304>>2]=c[m>>2],c[d+308>>2]=c[m>>2]<<2,c[d+312>>2]=c[m>>2]<<2,c[d+316>>2]=c[m>>2]<<2,c[d+320>>2]=f,c[d+324>>2]=c[m>>2]<<2,c[d+328>>2]=c[m>>2]<<4,c[d+332>>2]=c[m>>2]<<4,c[d+336>>2]=c[m>>2]<<2,c[d+340>>2]=c[m>>2]<<2,c[d+344>>2]=c[m>>2]<<2,c[d+348>>2]=c[m>>2]<<4,c[d+352>>2]=c[m>>2]<<4,c[d+356>>2]=c[m>>2]<<2,c[d+360>>2]=g,c[d+364>>2]=c[m>>2]<<2,c[d+368>>2]=g,c[d+372>>2]=g,c[d+376>>2]=g,c[d+380>>2]=g,c[d+384>>2]=g,c[d+388>>2]=g,c[d+392>>2]=g,c[d+396>>2]=g,c[d+400>>2]=g,c[d+404>>2]=g,c[d+408>>2]=c[m>>2]<<2,c[d+412>>2]=c[m>>2]<<2,c[d+416>>2]=c[m>>2]<<2,c[d+420>>2]=c[m>>2]<<2,c[d+424>>2]=c[m>>2]<<2,c[d+428>>2]=c[m>>2]<<2,n=0|c[n>>2],c[d+432>>2]=52*(0|c[(g=n+20|0)>>2]),f=(m=3<(255&o))?0:c[g>>2]<<2,c[d+436>>2]=f,c[d+440>>2]=c[g>>2]<<2,c[d+444>>2]=28*(0|c[n+52>>2]),0<(0|(j=0|c[p+48>>2]))){for(f=0|c[b+1048>>2],i=h=g=0;h=(o=0|c[f+(g<<2)>>2])+h|0,i=(1<<o)+i|0,(0|(g=g+1|0))!=(0|j););g=h<<2,f=i<<2}else f=g=0;if(c[d+448>>2]=36*j,c[d+452>>2]=g,c[d+456>>2]=f,c[d+460>>2]=f,c[d+488>>2]=28*(0|c[(g=p+72|0)>>2]),0<(0|(g=0|c[g>>2]))){for(h=0|c[b+1152>>2],i=0|c[b+1160>>2],f=0|c[b+1164>>2],l=k=j=0;k=(0|k)<(0|(o=0|c[h+(j<<2)>>2]))?o:k,l=(0|(o=(0|c[i+(j<<2)>>2])-(0|c[f+(j<<2)>>2])|0))<(0|l)?l:o+1|0,(0|(j=j+1|0))!=(0|g););g=k<<2,f=l<<2}else f=g=0;if(c[d+492>>2]=c[p+76>>2]<<4,c[d+496>>2]=f,c[d+500>>2]=g,c[d+504>>2]=f,0<(0|(j=0|c[(k=p+80|0)>>2]))){for(f=0|c[b+1048>>2],g=0|c[b+1188>>2],i=h=0;i=(1<<c[f+(c[g+(h<<2)>>2]<<2)>>2])+i|0,(0|(h=h+1|0))!=(0|j););f=i<<2}else f=0;if(c[d+508>>2]=24*j,c[d+512>>2]=c[k>>2]<<2,c[d+516>>2]=c[k>>2]<<2,c[d+520>>2]=f,c[d+524>>2]=c[k>>2]<<2,c[d+528>>2]=f,c[d+532>>2]=f,m){if(c[d+464>>2]=20*(0|c[n+120>>2]),c[d+468>>2]=28*(0|c[n+100>>2]),0<(0|(i=0|c[p+104>>2]))){for(f=0|c[b+1080>>2],h=g=0;h=(0|c[f+(g<<2)>>2])+h|0,(0|(g=g+1|0))!=(0|i););f=h<<2}else f=0;c[d+472>>2]=48*i,c[d+476>>2]=f,c[d+480>>2]=12*(0|c[n+108>>2]),c[d+484>>2]=12*(0|c[n+112>>2]),f=g=c[d+540>>2]=0}else{if(0<(0|(m=0|c[(n=p+20|0)>>2]))){k=0|c[b+948>>2],l=0|c[b+952>>2],i=0|c[b+1036>>2],f=j=0;do{if(b=0|c[l+(j<<2)>>2],h=(g=i+(c[k+(j<<2)>>2]<<2)|0)+(b<<2)|0,0<(0|b))for(;f=(0|c[g>>2])+f|0,(g=g+4|0)>>>0<h>>>0;);}while((0|(j=j+1|0))!=(0|m))}else f=0;c[d+540>>2]=m<<2,g=f<<2,f=c[n>>2]<<2}for(c[d+536>>2]=f,c[d+544>>2]=g,g=f=0;g=(b=15+(0|c[(p=d+(f<<2)|0)>>2])&-16)+(c[p>>2]=g)|0,137!=(0|(f=f+1|0)););c[e>>2]=g}function na(b,e,g){b|=0,e|=0,g|=0;var C,D,G,J,M,V,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,E=0,F=0,H=0,I=0,K=0,L=0,N=0,O=0,P=0,Q=0,R=0,T=0,U=0,W=0,X=0,Y=0,Z=0,_=S;if(S=S+560|0,H=_+552|0,h=(p=_)+556|0,Vc(0|p,0,548),ma(b,p,h),g>>>0<(h=0|c[h>>2])>>>0)return S=_,(Z=0)|Z;if(Vc(0|e,0,0|h),Z=e+(0|c[p>>2])|0,c[(D=Z+8|0)>>2]=e+(0|c[p+4>>2]),c[Z+40>>2]=e+(0|c[p+8>>2]),c[Z+44>>2]=e+(0|c[p+12>>2]),c[Z+48>>2]=e+(0|c[p+16>>2]),c[(E=Z+52|0)>>2]=e+(0|c[p+20>>2]),c[(F=Z+16|0)>>2]=e+(0|c[p+24>>2]),c[Z+24>>2]=e+(0|c[p+28>>2]),c[Z+28>>2]=e+(0|c[p+32>>2]),c[Z+32>>2]=e+(0|c[p+36>>2]),c[Z+36>>2]=e+(0|c[p+40>>2]),j=0|c[(Y=b+704|0)>>2],c[(G=Z+308|0)>>2]=e+(0|c[p+44>>2]),c[Z+312>>2]=e+(0|c[p+48>>2]),c[Z+316>>2]=e+(0|c[p+52>>2]),c[Z+320>>2]=e+(0|c[p+56>>2]),c[Z+324>>2]=e+(0|c[p+60>>2]),c[Z+328>>2]=e+(0|c[p+64>>2]),c[(L=Z+60|0)>>2]=e+(0|c[p+68>>2]),c[Z+144>>2]=e+(0|c[p+72>>2]),c[Z+148>>2]=e+(0|c[p+76>>2]),h=e+(0|c[p+80>>2])|0,c[(k=Z+152|0)>>2]=h,0<(0|(j=0|c[j+8>>2]))&&(l=e+(0|c[p+84>>2])|0,m=b+796|0,c[h>>2]=l,1!=(0|j)))for(h=0,i=1,g=l;g=g+(15+(c[(0|c[m>>2])+(h<<2)>>2]<<3)&-16)|0,c[(0|c[k>>2])+(i<<2)>>2]=g,!((0|j)<=(0|(h=i+1|0)));)W=i,i=h,h=W;if(c[Z+156>>2]=e+(0|c[p+88>>2]),c[Z+160>>2]=e+(0|c[p+92>>2]),c[(I=Z+68|0)>>2]=e+(0|c[p+96>>2]),c[Z+76>>2]=e+(0|c[p+100>>2]),c[Z+80>>2]=e+(0|c[p+104>>2]),c[Z+84>>2]=e+(0|c[p+108>>2]),c[Z+88>>2]=e+(0|c[p+112>>2]),c[Z+92>>2]=e+(0|c[p+116>>2]),c[Z+96>>2]=e+(0|c[p+120>>2]),c[Z+100>>2]=e+(0|c[p+124>>2]),c[Z+104>>2]=e+(0|c[p+128>>2]),c[Z+108>>2]=e+(0|c[p+132>>2]),c[Z+112>>2]=e+(0|c[p+136>>2]),c[Z+116>>2]=e+(0|c[p+140>>2]),c[Z+120>>2]=e+(0|c[p+144>>2]),c[Z+124>>2]=e+(0|c[p+148>>2]),c[Z+128>>2]=e+(0|c[p+152>>2]),c[Z+132>>2]=e+(0|c[p+156>>2]),c[Z+136>>2]=e+(0|c[p+160>>2]),c[Z+140>>2]=e+(0|c[p+164>>2]),c[(J=Z+168|0)>>2]=e+(0|c[p+168>>2]),c[Z+264>>2]=e+(0|c[p+172>>2]),c[Z+268>>2]=e+(0|c[p+176>>2]),c[Z+272>>2]=e+(0|c[p+180>>2]),c[Z+276>>2]=e+(0|c[p+184>>2]),c[Z+280>>2]=e+(0|c[p+188>>2]),c[Z+284>>2]=e+(0|c[p+192>>2]),c[Z+288>>2]=e+(0|c[p+196>>2]),c[Z+292>>2]=e+(0|c[p+200>>2]),c[Z+296>>2]=e+(0|c[p+204>>2]),c[Z+300>>2]=e+(0|c[p+208>>2]),c[(K=Z+176|0)>>2]=e+(0|c[p+212>>2]),c[Z+184>>2]=e+(0|c[p+216>>2]),c[Z+188>>2]=e+(0|c[p+220>>2]),c[Z+192>>2]=e+(0|c[p+224>>2]),c[Z+196>>2]=e+(0|c[p+228>>2]),c[Z+200>>2]=e+(0|c[p+232>>2]),c[Z+204>>2]=e+(0|c[p+236>>2]),c[Z+208>>2]=e+(0|c[p+240>>2]),c[Z+212>>2]=e+(0|c[p+244>>2]),c[Z+216>>2]=e+(0|c[p+248>>2]),c[Z+220>>2]=e+(0|c[p+252>>2]),c[Z+224>>2]=e+(0|c[p+256>>2]),c[Z+228>>2]=e+(0|c[p+260>>2]),c[Z+232>>2]=e+(0|c[p+264>>2]),c[Z+236>>2]=e+(0|c[p+268>>2]),c[Z+240>>2]=e+(0|c[p+272>>2]),c[Z+244>>2]=e+(0|c[p+276>>2]),c[Z+248>>2]=e+(0|c[p+280>>2]),c[Z+252>>2]=e+(0|c[p+284>>2]),c[Z+256>>2]=e+(0|c[p+288>>2]),c[Z+260>>2]=e+(0|c[p+292>>2]),j=0|c[Y>>2],c[(O=Z+336|0)>>2]=e+(0|c[p+296>>2]),c[Z+424>>2]=e+(0|c[p+300>>2]),c[Z+432>>2]=e+(0|c[p+304>>2]),c[Z+436>>2]=e+(0|c[p+308>>2]),c[Z+440>>2]=e+(0|c[p+312>>2]),h=e+(0|c[p+316>>2])|0,c[(k=Z+444|0)>>2]=h,0<(0|(j=0|c[j+16>>2]))&&(n=e+(0|c[p+320>>2])|0,o=b+892|0,c[h>>2]=n,1!=(0|j)))for(h=0,i=1,g=n;g=g+(15+(c[(0|c[o>>2])+(h<<2)>>2]<<3)&-16)|0,c[(0|c[k>>2])+(i<<2)>>2]=g,!((0|j)<=(0|(h=i+1|0)));)W=i,i=h,h=W;if(c[Z+448>>2]=e+(0|c[p+324>>2]),c[(P=Z+452|0)>>2]=e+(0|c[p+328>>2]),c[(Q=Z+456|0)>>2]=e+(0|c[p+332>>2]),c[Z+460>>2]=e+(0|c[p+336>>2]),c[Z+464>>2]=e+(0|c[p+340>>2]),c[Z+468>>2]=e+(0|c[p+344>>2]),c[Z+472>>2]=e+(0|c[p+348>>2]),c[Z+476>>2]=e+(0|c[p+352>>2]),c[(N=Z+344|0)>>2]=e+(0|c[p+356>>2]),c[Z+352>>2]=e+(0|c[p+360>>2]),c[Z+356>>2]=e+(0|c[p+364>>2]),c[Z+360>>2]=e+(0|c[p+368>>2]),c[Z+364>>2]=e+(0|c[p+372>>2]),c[Z+368>>2]=e+(0|c[p+376>>2]),c[Z+372>>2]=e+(0|c[p+380>>2]),c[Z+376>>2]=e+(0|c[p+384>>2]),c[Z+380>>2]=e+(0|c[p+388>>2]),c[Z+384>>2]=e+(0|c[p+392>>2]),c[Z+388>>2]=e+(0|c[p+396>>2]),c[Z+392>>2]=e+(0|c[p+400>>2]),c[Z+396>>2]=e+(0|c[p+404>>2]),c[Z+400>>2]=e+(0|c[p+408>>2]),c[Z+404>>2]=e+(0|c[p+412>>2]),c[Z+408>>2]=e+(0|c[p+416>>2]),c[Z+412>>2]=e+(0|c[p+420>>2]),c[Z+416>>2]=e+(0|c[p+424>>2]),c[Z+420>>2]=e+(0|c[p+428>>2]),A=0|c[p+436>>2],C=0|c[p+440>>2],c[(W=Z+544|0)>>2]=e+(0|c[p+432>>2]),c[(B=Z+548|0)>>2]=e+A,c[(A=Z+552|0)>>2]=e+C,c[(C=Z+560|0)>>2]=e+(0|c[p+444>>2]),h=0|c[Y>>2],j=e+(0|c[p+448>>2])|0,c[(U=Z+568|0)>>2]=j,0<(0|(h=0|c[h+48>>2])))for(g=0|c[b+1048>>2],k=e+(0|c[p+452>>2])|0,m=e+((l=0)|c[p+456>>2])|0,o=e+(0|c[p+460>>2])|0;c[j+(36*l|0)>>2]=k,c[j+(36*l|0)+16>>2]=m,c[j+(36*l|0)+20>>2]=o,n=1<<(i=0|c[g+(l<<2)>>2]),(0|(l=l+1|0))!=(0|h);)k=k+(i<<2)|0,m=m+(n<<2)|0,o=o+(n<<2)|0;if(h=0|c[Y>>2],i=e+(0|c[p+488>>2])|0,c[(M=Z+484|0)>>2]=i,0<(0|(h=0|c[h+72>>2])))for(g=0|c[b+1152>>2],k=e+((j=0)|c[p+492>>2])|0;k=(c[i+(28*j|0)+12>>2]=k)+(c[g+(j<<2)>>2]<<4)|0,(0|(j=j+1|0))!=(0|h););if(c[Z+488>>2]=e+(0|c[p+496>>2]),c[Z+492>>2]=e+(0|c[p+500>>2]),c[Z+496>>2]=e+(0|c[p+504>>2]),c[(R=Z+504|0)>>2]=e+(0|c[p+508>>2]),c[Z+536>>2]=e+(0|c[p+512>>2]),c[(T=Z+512|0)>>2]=e+(0|c[p+516>>2]),c[Z+520>>2]=e+(0|c[p+520>>2]),c[Z+524>>2]=e+(0|c[p+524>>2]),c[Z+528>>2]=e+(0|c[p+528>>2]),c[Z+532>>2]=e+(0|c[p+532>>2]),z=3<(0|d[(V=b+4|0)>>0])){if(c[Z+576>>2]=e+(0|c[p+464>>2]),c[Z+584>>2]=e+(0|c[p+468>>2]),h=0|c[p+476>>2],j=0|c[Y>>2],l=e+(0|c[p+472>>2])|0,c[Z+592>>2]=l,0<(0|(j=0|c[j+104>>2])))for(k=0|c[b+1080>>2],h=e+h|0,g=0;c[l+(48*g|0)+40>>2]=h,(0|(i=g+1|0))!=(0|j);)h=h+(c[k+(g<<2)>>2]<<2)|0,g=i;c[Z+600>>2]=e+(0|c[p+480>>2]),c[Z+608>>2]=e+(0|c[p+484>>2]),g=0|c[Y>>2],h=0|c[g+20>>2]}else if(g=0|c[p+536>>2],i=0|c[p+544>>2],c[Z+616>>2]=e+(0|c[p+540>>2]),c[(p=Z+612|0)>>2]=e+g,g=0|c[Y>>2],0<(0|(h=0|c[g+20>>2])))for(m=b+948|0,n=b+952|0,l=b+1036|0,k=e+i|(o=0);;){if(h=0|c[(0|c[m>>2])+(o<<2)>>2],i=(y=0|c[(0|c[n>>2])+(o<<2)>>2])+h|0,0<(0|y)){for(g=0|c[l>>2],j=0;j=(0|c[g+(h<<2)>>2])+j|0,(0|(h=h+1|0))<(0|i););h=(0|c[p>>2])+(o<<2)|0,j?(g=k,i=j):X=27}else h=(0|c[p>>2])+(o<<2)|0,X=27;if(27==(0|X)&&(i=g=X=0),c[h>>2]=g,g=0|c[Y>>2],(0|(h=0|c[g+20>>2]))<=(0|(o=o+1|0)))break;k=k+(i<<2)|0}c[Z>>2]=b,c[Z+620>>2]=1,c[Z+624>>2]=1&a[20+(0|c[b+708>>2])>>0],k=(c[Z+540>>2]=h)+-1|0;a:do{if(0<(0|h)){if(e=0|c[W>>2],q=0|c[b+928>>2],s=0|c[b+924>>2],u=0|c[b+936>>2],v=0|c[b+932>>2],w=0|c[b+940>>2],x=0|c[b+952>>2],y=b+948|0,p=0|c[A>>2],o=Z+584|0,n=b+956|0,!z)for(;;){if(c[e+(52*k|0)>>2]=0,c[e+(52*k|0)+4>>2]=c[(i=q+(k<<2)|0)>>2],c[e+(52*k|0)+8>>2]=c[(A=s+(k<<2)|0)>>2],f[e+(52*k|0)+12>>2]=+f[A>>2]-+f[i>>2],c[e+(52*k|0)+16>>2]=c[u+(k<<2)>>2],c[e+(52*k|0)+44>>2]=c[(i=v+(k<<2)|0)>>2],t=+r(.10000000149011612,0|c[w+(k<<2)>>2]),f[e+(52*k|0)+20>>2]=t,f[e+(52*k|0)+24>>2]=1.5*t,A=0|c[x+(k<<2)>>2],j=(c[e+(52*k|0)+32>>2]=A)?(0|c[C>>2])+(28*(0|c[(0|c[y>>2])+(k<<2)>>2])|0)|0:0,c[e+(52*k|0)+28>>2]=j,c[e+(52*k|0)+48>>2]=1,c[p+(k<<2)>>2]=c[i>>2],!(0<(0|k)))break a;k=k+-1|0}for(l=0|c[b+944>>2],m=0|c[b+960>>2];c[e+(52*k|0)>>2]=c[l+(k<<2)>>2],c[e+(52*k|0)+4>>2]=c[(j=q+(k<<2)|0)>>2],c[e+(52*k|0)+8>>2]=c[(A=s+(k<<2)|0)>>2],f[e+(52*k|0)+12>>2]=+f[A>>2]-+f[j>>2],c[e+(52*k|0)+16>>2]=c[u+(k<<2)>>2],c[e+(52*k|0)+44>>2]=c[(j=v+(k<<2)|0)>>2],t=+r(.10000000149011612,0|c[w+(k<<2)>>2]),f[e+(52*k|0)+20>>2]=t,f[e+(52*k|0)+24>>2]=1.5*t,A=0|c[x+(k<<2)>>2],i=(c[e+(52*k|0)+32>>2]=A)?(0|c[C>>2])+(28*(0|c[(0|c[y>>2])+(k<<2)>>2])|0)|0:0,c[e+(52*k|0)+28>>2]=i,A=0|c[m+(k<<2)>>2],i=(c[e+(52*k|0)+40>>2]=A)?(0|c[o>>2])+(28*(0|c[(0|c[n>>2])+(k<<2)>>2])|0)|0:0,c[e+(52*k|0)+36>>2]=i,c[e+(52*k|0)+48>>2]=1,c[p+(k<<2)>>2]=c[j>>2],0<(0|k);)k=k+-1|0}}while(0);if(z?(c[B>>2]=c[b+944>>2],l=g,m=b):(Vc(0|c[B>>2],0,h<<2|0),m=0|c[Z>>2],l=0|c[m+704>>2]),h=0|c[l+52>>2],0<(0|(c[Z+556>>2]=h)))for(g=0|c[C>>2],i=0|c[m+1036>>2],j=0|c[m+1132>>2],k=0|c[m+1032>>2];c[g+(28*(h=(B=h)+-1|0)|0)>>2]=c[i+(h<<2)>>2],c[g+(28*h|0)+4>>2]=j+(c[k+(h<<2)>>2]<<2),c[g+(28*h|0)+8>>2]=0,f[g+(28*h|0)+12>>2]=0,c[g+(28*h|0)+16>>2]=0,c[g+(28*h|0)+20>>2]=1,(c[g+(28*h|0)+24>>2]=1)<(0|B););if(h=0|c[l+48>>2],0<(0|(c[Z+564>>2]=h))){n=m+1048|0,o=m+1040|0,m=m+1044|0;do{if(l=h,g=0|c[U>>2],i=0|c[(0|c[n>>2])+((h=h+-1|0)<<2)>>2],0<(0|(c[g+(36*h|0)+4>>2]=i)))for(j=g+(36*h|0)|0,k=0;c[(0|c[j>>2])+(k<<2)>>2]=(0|c[C>>2])+(28*(0|c[(0|c[o>>2])+((0|c[(0|c[m>>2])+(h<<2)>>2])+k<<2)>>2])|0),(0|(k=k+1|0))!=(0|i););}while(c[g+(36*h|0)+8>>2]=1<<i,c[g+(36*h|0)+24>>2]=1,(c[g+(36*h|0)+28>>2]=1)<(0|l));q=0|c[Z>>2],l=0|c[q+704>>2]}else q=m;if(g=0|c[l>>2],0<(0|(c[(e=Z+4|0)>>2]=g))){for(j=0|c[D>>2],o=0|c[U>>2],p=0|c[q+720>>2],k=0|c[q+740>>2],m=0|c[q+736>>2],n=0|c[q+732>>2],h=0|c[E>>2],i=g;c[j+(12*(i=(E=i)+-1|0)|0)>>2]=o+(36*(0|c[p+(i<<2)>>2])|0),c[j+(12*i|0)+4>>2]=c[k+(i<<2)>>2],c[j+(12*i|0)+8>>2]=c[m+(i<<2)>>2],f[h+(i<<2)>>2]=0==(0|c[n+(i<<2)>>2])?0:1,1<(0|E););for(i=0|c[F>>2],h=0;E=0|c[o+(36*(0|c[p+((g=(F=g)+-1|0)<<2)>>2])|0)+8>>2],h=(c[i+(g<<2)>>2]=E)+h|0,1<(0|F););g=0|c[e>>2]}else h=0;if(c[Z+20>>2]=h,c[Z+12>>2]=g,h=0|c[l+4>>2],0<(0|(c[Z+304>>2]=h))){m=q+752|0,o=q+764|0,n=q+768|0,l=q+772|0,p=q+776|0,k=q+760|0;do{switch(j=h,g=0|c[G>>2],c[g+((h=h+-1|0)<<5)>>2]=(0|c[U>>2])+(36*(0|c[(0|c[m>>2])+(h<<2)>>2])|0),c[g+(h<<5)+4>>2]=c[(0|c[o>>2])+(h<<2)>>2],c[g+(h<<5)+8>>2]=c[(0|c[n>>2])+(h<<2)>>2],F=0|c[(0|c[l>>2])+(h<<2)>>2],c[g+(h<<5)+12>>2]=F,i=0|c[(0|c[p>>2])+(h<<2)>>2],c[g+(h<<5)+16>>2]=i,c[g+(h<<5)+28>>2]=c[(0|c[k>>2])+(h<<2)>>2],0|F){case 0:c[(0|c[L>>2])+(24*i|0)+20>>2]=h,c[g+(h<<5)+20>>2]=2,c[g+(h<<5)+24>>2]=2;break;case 1:c[(0|c[J>>2])+(12*i|0)+8>>2]=h,c[g+(h<<5)+20>>2]=3,c[g+(h<<5)+24>>2]=3;break;default:ia(0,937,H)}}while(1<(0|j));B=0|c[Z>>2],z=0|c[B+704>>2]}else z=l,B=q;if(i=0|c[z+8>>2],h=(c[(e=Z+56|0)>>2]=i)+-1|0,p=0<(0|i))if(j=0|c[L>>2],k=0|c[U>>2],l=0|c[B+780>>2],m=0|c[B+800>>2],n=0|c[B+804>>2],o=0|c[B+796>>2],1<(0|d[B+4>>0]))for(g=0|c[B+808>>2];c[j+(24*h|0)>>2]=k+(36*(0|c[l+(h<<2)>>2])|0),c[j+(24*h|0)+4>>2]=c[m+(h<<2)>>2],c[j+(24*h|0)+8>>2]=c[n+(h<<2)>>2],c[j+(24*h|0)+16>>2]=c[o+(h<<2)>>2],c[j+(24*h|0)+12>>2]=c[g+(h<<2)>>2],0<(0|h);)h=h+-1|0;else for(;c[j+(24*h|0)>>2]=k+(36*(0|c[l+(h<<2)>>2])|0),c[j+(24*h|0)+4>>2]=c[m+(h<<2)>>2],c[j+(24*h|0)+8>>2]=c[n+(h<<2)>>2],c[j+(24*h|0)+16>>2]=c[o+(h<<2)>>2],(c[j+(24*h|0)+12>>2]=0)<(0|h);)h=h+-1|0;if(g=0|c[z+12>>2],0<(0|(c[(n=Z+164|0)>>2]=g)))for(h=0|c[J>>2],j=0|c[U>>2],k=0|c[B+812>>2],l=0|c[B+828>>2],m=g;c[h+(12*(m=(H=m)+-1|0)|0)>>2]=j+(36*(0|c[k+(m<<2)>>2])|0),c[h+(12*m|0)+4>>2]=c[l+(m<<2)>>2],1<(0|H););if(p){for(j=0|c[L>>2],g=0|c[I>>2],h=0;I=0|c[8+(0|c[j+(24*(i=(L=i)+-1|0)|0)>>2])>>2],h=(c[g+(i<<2)>>2]=I)+h|0,1<(0|L););i=0|c[e>>2],g=0|c[n>>2]}else h=0;if(c[Z+72>>2]=h,c[Z+64>>2]=i,0<(0|g)){for(j=0|c[J>>2],i=0|c[K>>2],h=0;K=0|c[8+(0|c[j+(12*(g=(L=g)+-1|0)|0)>>2])>>2],h=(c[i+(g<<2)>>2]=K)+h|0,1<(0|L););g=0|c[n>>2]}else h=0;if(c[Z+180>>2]=h,c[Z+172>>2]=g,A=B+704|0,h=0|c[z+16>>2],0<(0|(c[(p=Z+332|0)>>2]=h))){for(g=0|c[O>>2],n=0|c[U>>2],o=0|c[B+852>>2],i=0|c[B+876>>2],j=0|c[B+880>>2],k=0|c[B+892>>2],l=0|c[B+872>>2],m=h;c[g+(20*(m=(O=m)+-1|0)|0)>>2]=n+(36*(0|c[o+(m<<2)>>2])|0),c[g+(20*m|0)+4>>2]=c[i+(m<<2)>>2],c[g+(20*m|0)+8>>2]=c[j+(m<<2)>>2],c[g+(20*m|0)+16>>2]=c[k+(m<<2)>>2],c[g+(20*m|0)+12>>2]=c[l+(m<<2)>>2],1<(0|O););for(g=0|c[N>>2],i=0;N=0|c[n+(36*(0|c[o+((h=(O=h)+-1|0)<<2)>>2])|0)+8>>2],i=(c[g+(h<<2)>>2]=N)+i|0,1<(0|O););if(h=0|c[p>>2],c[Z+348>>2]=i,0<(0|(c[Z+340>>2]=h)))for(j=0|c[P>>2],g=0|c[Q>>2],i=h<<2;f[j+((i=(Q=i)+-4|0)<<2)>>2]=1,f[j+((O=Q+-3|0)<<2)>>2]=1,f[j+((P=Q+-2|0)<<2)>>2]=1,f[j+((Q=Q+-1|0)<<2)>>2]=1,f[g+(i<<2)>>2]=0,f[g+(O<<2)>>2]=0,!(((f[g+(P<<2)>>2]=0)|h)<=(f[g+(Q<<2)>>2]=1));)h=h+-1|0}else c[Z+348>>2]=0,c[Z+340>>2]=h;if(y=0|c[z+72>>2],0<(0|(c[Z+480>>2]=y))){h=0|c[M>>2],g=0|c[B+1152>>2],i=0|c[B+1156>>2],j=0|c[B+1160>>2],k=0|c[B+1164>>2],l=0|c[B+1148>>2],s=B+1172|0,v=B+1168|0,u=B+1176|0,w=0;do{if(m=0|c[g+(w<<2)>>2],c[h+(28*w|0)+4>>2]=m,c[h+(28*w|0)>>2]=c[i+(w<<2)>>2],Q=0|c[j+(w<<2)>>2],c[h+(28*w|0)+16>>2]=Q,n=0|c[k+(w<<2)>>2],c[h+(28*w|0)+20>>2]=n,c[h+(28*w|0)+24>>2]=Q+1-n,n=(c[h+(28*w|0)+8>>2]=0)|c[l+(w<<2)>>2],0<(0|m))for(o=0|c[h+(28*w|0)+12>>2],p=0|c[s>>2],e=0|c[v>>2],q=0|c[u>>2],x=0;c[o+(x<<4)+4>>2]=c[p+((Q=x+n|0)<<2)>>2],c[o+(x<<4)>>2]=c[e+(Q<<2)>>2],c[o+(x<<4)+8>>2]=c[q+(Q<<2)>>2],(0|(x=x+1|(c[o+(x<<4)+12>>2]=0)))!=(0|m););}while((0|(w=w+1|0))!=(0|y))}g=0|c[z+80>>2],c[(e=Z+500|0)>>2]=g;do{if(0<(0|g)){for(n=0|c[R>>2],o=0|c[U>>2],p=0|c[B+1188>>2],h=0|c[B+1200>>2],i=0|c[B+1204>>2],j=0|c[B+1212>>2],k=0|c[B+1216>>2],l=0|c[B+1208>>2],m=0|c[B+1220>>2];c[n+(24*(g=(U=g)+-1|0)|0)>>2]=o+(36*(0|c[p+(g<<2)>>2])|0),c[n+(24*g|0)+4>>2]=c[h+(g<<2)>>2],c[n+(24*g|0)+8>>2]=c[i+(g<<2)>>2],c[n+(24*g|0)+12>>2]=c[j+(g<<2)>>2],R=0|c[l+(g<<2)>>2],c[n+(24*g|0)+16>>2]=k+(R<<2),c[n+(24*g|0)+20>>2]=m+(R<<1),1<(0|U););if((0|(g=0|c[e>>2]))<=0){h=0;break}for(i=0|c[T>>2],h=0;T=0|c[o+(36*(0|c[p+((g=(U=g)+-1|0)<<2)>>2])|0)+8>>2],h=(c[i+(g<<2)>>2]=T)+h|0,1<(0|U););g=0|c[e>>2]}else h=0}while(0);c[Z+516>>2]=h,c[Z+508>>2]=g;do{if(3<(0|d[V>>0])){if((255&(h=0|a[B+4>>0]))<4)break;if(g=0|c[z+120>>2],0<(0|(c[Z+572>>2]=g)))for(o=0|c[Z+576>>2],i=0|c[W>>2],j=0|c[B+1112>>2],k=0|c[B+1124>>2],l=0|c[B+1116>>2],m=0|c[B+1128>>2],n=0|c[B+1120>>2];c[o+(20*(g=(X=g)+-1|0)|0)>>2]=i+(52*(0|c[j+(g<<2)>>2])|0),W=0|c[l+(g<<2)>>2],c[o+(20*g|0)+4>>2]=k+(W<<2),c[o+(20*g|0)+8>>2]=m+(W<<2),c[o+(20*g|0)+12>>2]=c[n+(g<<2)>>2],1<(0|X););if(g=0|c[z+100>>2],0<(0|(c[Z+580>>2]=g)))for(i=0|c[Z+584>>2],j=0|c[B+1056>>2],k=0|c[B+1132>>2],l=0|c[B+1052>>2],m=0|c[B+1060>>2];c[i+(28*(g=(X=g)+-1|0)|0)>>2]=c[j+(g<<2)>>2],c[i+(28*g|0)+4>>2]=k+(c[l+(g<<2)>>2]<<2),c[i+(28*g|0)+8>>2]=c[m+(g<<2)>>2],c[i+(28*g|0)+12>>2]=0,f[i+(28*g|0)+16>>2]=0,c[i+(28*g|0)+20>>2]=1,(c[i+(28*g|0)+24>>2]=1)<(0|X););if(g=0|c[z+104>>2],0<(0|(c[Z+588>>2]=g))){p=Z+592|0,q=Z+584|0,o=B+1064|0,s=B+1068|0,m=B+1080|0,e=Z+576|0,n=B+1108|0,l=B+1076|0;do{if(k=g,h=0|c[p>>2],c[h+(48*(g=g+-1|0)|0)>>2]=(0|c[q>>2])+(28*(0|c[(0|c[o>>2])+(g<<2)>>2])|0),c[h+(48*g|0)+4>>2]=c[(0|c[s>>2])+(g<<2)>>2],c[h+(48*g|0)+8>>2]=0,c[h+(48*g|0)+28>>2]=1,c[h+(48*g|0)+32>>2]=1,j=0|c[(0|c[m>>2])+(g<<2)>>2],0<(0|(c[h+(48*g|0)+36>>2]=j)))for(h=h+(48*g|0)+40|0,i=0;c[(0|c[h>>2])+(i<<2)>>2]=(0|c[e>>2])+(20*(0|c[(0|c[n>>2])+((0|c[(0|c[l>>2])+(g<<2)>>2])+i<<2)>>2])|0),(0|(i=i+1|0))!=(0|j););}while(1<(0|k));o=0|c[Z>>2],h=0|a[o+4>>0]}else o=B;if(n=0|c[Y>>2],g=0|c[n+108>>2],(255&h)<4)break;if(0<(0|(c[Z+596>>2]=g)))for(i=0|c[Z+600>>2],j=0|c[b+1084>>2],k=0|c[b+1092>>2],l=0|c[Z+592>>2],m=0|c[b+1088>>2],h=g;c[i+(12*(h=(Y=h)+-1|0)|0)>>2]=c[j+(h<<2)>>2],c[i+(12*h|0)+4>>2]=c[k+(h<<2)>>2],c[i+(12*h|0)+8>>2]=l+(48*(0|c[m+(h<<2)>>2])|0),1<(0|Y););if(h=0|c[n+112>>2],0<(0|(c[Z+604>>2]=h)))for(i=0|c[Z+608>>2],j=0|c[b+1096>>2],k=0|c[b+1104>>2],l=0|c[Z+592>>2],g=0|c[b+1100>>2];c[i+(12*(h=(b=h)+-1|0)|0)>>2]=c[j+(h<<2)>>2],c[i+(12*h|0)+4>>2]=c[k+(h<<2)>>2],c[i+(12*h|0)+8>>2]=l+(48*(0|c[g+(h<<2)>>2])|0),1<(0|b););if(i=0|c[o+1132>>2],j=0|c[20+(0|c[o+704>>2])>>2],k=Z+612|0,c[Z+616>>2]=c[o+972>>2],h=0|c[o+964>>2],c[k>>2]=h,(0|j)<=0)break;if(c[h>>2]=i+(c[c[(g=o+968|0)>>2]>>2]<<2),1==(0|j))break;for(h=1;c[(0|c[k>>2])+(h<<2)>>2]=i+(c[(0|c[g>>2])+(h<<2)>>2]<<2),(0|(h=h+1|0))!=(0|j););}else{if((0|c[z+20>>2])<=0)break;y=B+948|0,z=B+952|0,v=Z+612|0,w=B+1032|0,x=B+1036|0,q=B+1132|0,s=Z+616|0,u=0;do{if(h=0|c[(0|c[y>>2])+(u<<2)>>2],p=(b=0|c[(0|c[z>>2])+(u<<2)>>2])+h|0,e=0|c[(0|c[v>>2])+(u<<2)>>2],0<(0|b)){n=0|c[w>>2],o=0|c[x>>2],m=h,h=0;do{if(g=0|c[n+(m<<2)>>2],l=(b=0|c[o+(m<<2)>>2])+g|0,0<(0|b)){k=0|c[q>>2];do{t=+f[k+(g<<2)>>2],i=e+(h<<2)|0;b:do{if(0<(0|h))for(j=e;;){if(+f[j>>2]==t)break b;if(i>>>0<=(j=j+4|0)>>>0){X=146;break}}else X=146}while(0)}while(146==(0|X)&&(X=0,f[i>>2]=t,h=h+1|0),(0|(g=g+1|0))<(0|l))}}while((0|(m=m+1|0))<(0|p))}else h=0;!function(a,b){a|=0;var h,j,k,m,d=0,e=0,f=0,g=0,i=0,l=0;S=(m=S)+208|0,f=(b|=0)<<2,c[(i=k=(j=m)+192|0)>>2]=1,c[i+4>>2]=0;a:do{if(0|f){for(c[j+4>>2]=4,d=b=c[j>>2]=4,e=2;(c[j+(e<<2)>>2]=b=b+4+d|0)>>>0<f>>>0;)i=d,d=b,e=e+1|0,b=i;if(a>>>0<(g=a+f+-4|0)>>>0){h=g,i=4+k|0,d=a,e=b=1;do{do{if(3!=(3&b|0)){if((0|c[j+((f=e+-1|0)<<2)>>2])>>>0<(h-d|0)>>>0?xc(d,e,j):zc(d,b,0|c[i>>2],e,0,j),1==(0|e)){Ac(k,1),e=0;break}Ac(k,f),e=1;break}}while(xc(d,e,j),yc(k,2),e=e+2|0,0)}while(b=1|c[k>>2],c[k>>2]=b,(d=d+4|0)>>>0<g>>>0);f=0|c[(g=i)>>2]}else g=4+k|0,f=0,d=a,e=b=1;for(zc(d,b,f,e,0,j),f=4+k|0;;){if(1==(0|e)&1==(0|b)){if(!(0|c[f>>2]))break a;l=21}else(0|e)<2?l=21:(Ac(k,2),a=e+-2|0,c[k>>2]=7^c[k>>2],yc(k,1),zc(d+(0-(0|c[j+(a<<2)>>2]))+-4|0,0|c[k>>2],0|c[g>>2],e+-1|0,1,j),Ac(k,1),b=1|c[k>>2],zc(d=d+-4|0,c[k>>2]=b,0|c[g>>2],a,1,j),e=a);21==(0|l)&&(yc(k,a=(l=0)|Bc(k)),b=0|c[k>>2],d=d+-4|0,e=a+e|0)}}}while(0);S=m}(e,h),c[(0|c[s>>2])+(u<<2)>>2]=h,u=u+1|0}while((0|u)<(0|c[20+(0|c[A>>2])>>2]))}}while(0);return Gb(Z),S=_,0|Z}function oa(a,b){return 0|((a=+f[(a|=0)>>2])<(b=+f[(b|=0)>>2])?-1:b<a&1)}function pa(b){var d=0|a[4+(b|=0)>>0];c[b+704>>2]=b+(0|c[b+64>>2]),c[b+708>>2]=b+(0|c[b+68>>2]),c[b+712>>2]=b+(0|c[b+72>>2]),c[b+716>>2]=b+(0|c[b+76>>2]),c[b+720>>2]=b+(0|c[b+80>>2]),c[b+724>>2]=b+(0|c[b+84>>2]),c[b+728>>2]=b+(0|c[b+88>>2]),c[b+732>>2]=b+(0|c[b+92>>2]),c[b+736>>2]=b+(0|c[b+96>>2]),c[b+740>>2]=b+(0|c[b+100>>2]),c[b+744>>2]=b+(0|c[b+104>>2]),c[b+748>>2]=b+(0|c[b+108>>2]),c[b+752>>2]=b+(0|c[b+112>>2]),c[b+756>>2]=b+(0|c[b+116>>2]),c[b+760>>2]=b+(0|c[b+120>>2]),c[b+764>>2]=b+(0|c[b+124>>2]),c[b+768>>2]=b+(0|c[b+128>>2]),c[b+772>>2]=b+(0|c[b+132>>2]),c[b+776>>2]=b+(0|c[b+136>>2]),c[b+780>>2]=b+(0|c[b+140>>2]),c[b+784>>2]=b+(0|c[b+144>>2]),c[b+788>>2]=b+(0|c[b+148>>2]),c[b+796>>2]=b+(0|c[b+152>>2]),c[b+800>>2]=b+(0|c[b+156>>2]),c[b+804>>2]=b+(0|c[b+160>>2]),c[b+812>>2]=b+(0|c[b+164>>2]),c[b+816>>2]=b+(0|c[b+168>>2]),c[b+820>>2]=b+(0|c[b+172>>2]),c[b+828>>2]=b+(0|c[b+176>>2]),c[b+832>>2]=b+(0|c[b+180>>2]),c[b+836>>2]=b+(0|c[b+184>>2]),c[b+840>>2]=b+(0|c[b+188>>2]),c[b+844>>2]=b+(0|c[b+192>>2]),c[b+848>>2]=b+(0|c[b+196>>2]),c[b+852>>2]=b+(0|c[b+200>>2]),c[b+856>>2]=b+(0|c[b+204>>2]),c[b+860>>2]=b+(0|c[b+208>>2]),c[b+868>>2]=b+(0|c[b+212>>2]),c[b+872>>2]=b+(0|c[b+216>>2]),c[b+876>>2]=b+(0|c[b+220>>2]),c[b+880>>2]=b+(0|c[b+224>>2]),c[b+884>>2]=b+(0|c[b+228>>2]),c[b+888>>2]=b+(0|c[b+232>>2]),c[b+892>>2]=b+(0|c[b+236>>2]),c[b+896>>2]=b+(0|c[b+240>>2]),c[b+900>>2]=b+(0|c[b+244>>2]),c[b+904>>2]=b+(0|c[b+248>>2]),c[b+908>>2]=b+(0|c[b+252>>2]),c[b+912>>2]=b+(0|c[b+256>>2]),c[b+916>>2]=b+(0|c[b+260>>2]),c[b+920>>2]=b+(0|c[b+264>>2]),c[b+924>>2]=b+(0|c[b+268>>2]),c[b+928>>2]=b+(0|c[b+272>>2]),c[b+932>>2]=b+(0|c[b+276>>2]),c[b+936>>2]=b+(0|c[b+280>>2]),c[b+940>>2]=b+(0|c[b+284>>2]),c[b+948>>2]=b+(0|c[b+288>>2]),c[b+952>>2]=b+(0|c[b+292>>2]),c[b+976>>2]=b+(0|c[b+296>>2]),c[b+980>>2]=b+(0|c[b+300>>2]),c[b+984>>2]=b+(0|c[b+304>>2]),c[b+988>>2]=b+(0|c[b+308>>2]),c[b+992>>2]=b+(0|c[b+312>>2]),c[b+996>>2]=b+(0|c[b+316>>2]),c[b+1e3>>2]=b+(0|c[b+320>>2]),c[b+1004>>2]=b+(0|c[b+324>>2]),c[b+1008>>2]=b+(0|c[b+328>>2]),c[b+1012>>2]=b+(0|c[b+332>>2]),c[b+1016>>2]=b+(0|c[b+336>>2]),c[b+1020>>2]=b+(0|c[b+340>>2]),c[b+1024>>2]=b+(0|c[b+344>>2]),c[b+1028>>2]=b+(0|c[b+348>>2]),c[b+1040>>2]=b+(0|c[b+352>>2]),c[b+1044>>2]=b+(0|c[b+356>>2]),c[b+1048>>2]=b+(0|c[b+360>>2]),c[b+1032>>2]=b+(0|c[b+364>>2]),c[b+1036>>2]=b+(0|c[b+368>>2]),c[b+1132>>2]=b+(0|c[b+372>>2]),c[b+1136>>2]=b+(0|c[b+376>>2]),c[b+1140>>2]=b+(0|c[b+380>>2]),c[b+1144>>2]=b+(0|c[b+384>>2]),c[b+1148>>2]=b+(0|c[b+388>>2]),c[b+1152>>2]=b+(0|c[b+392>>2]),c[b+1156>>2]=b+(0|c[b+396>>2]),c[b+1160>>2]=b+(0|c[b+400>>2]),c[b+1164>>2]=b+(0|c[b+404>>2]),c[b+1168>>2]=b+(0|c[b+408>>2]),c[b+1172>>2]=b+(0|c[b+412>>2]),c[b+1176>>2]=b+(0|c[b+416>>2]),c[b+1180>>2]=b+(0|c[b+420>>2]),c[b+1184>>2]=b+(0|c[b+424>>2]),c[b+1188>>2]=b+(0|c[b+428>>2]),c[b+1192>>2]=b+(0|c[b+432>>2]),c[b+1196>>2]=b+(0|c[b+436>>2]),c[b+1200>>2]=b+(0|c[b+440>>2]),c[b+1204>>2]=b+(0|c[b+444>>2]),c[b+1208>>2]=b+(0|c[b+448>>2]),c[b+1212>>2]=b+(0|c[b+452>>2]),c[b+1216>>2]=b+(0|c[b+456>>2]),c[b+1220>>2]=b+(0|c[b+460>>2]),c[b+1224>>2]=b+(0|c[b+464>>2]),(255&d)<=1||(c[b+808>>2]=b+(0|c[b+468>>2]),(255&d)<=3||(c[b+964>>2]=b+(0|c[b+472>>2]),c[b+968>>2]=b+(0|c[b+476>>2]),c[b+972>>2]=b+(0|c[b+480>>2]),c[b+792>>2]=b+(0|c[b+484>>2]),c[b+824>>2]=b+(0|c[b+488>>2]),c[b+864>>2]=b+(0|c[b+492>>2]),c[b+1228>>2]=b+(0|c[b+496>>2]),c[b+1232>>2]=b+(0|c[b+500>>2]),c[b+1236>>2]=b+(0|c[b+504>>2]),c[b+1240>>2]=b+(0|c[b+508>>2]),c[b+1244>>2]=b+(0|c[b+512>>2]),c[b+1248>>2]=b+(0|c[b+516>>2]),c[b+944>>2]=b+(0|c[b+520>>2]),c[b+956>>2]=b+(0|c[b+524>>2]),c[b+960>>2]=b+(0|c[b+528>>2]),c[b+1052>>2]=b+(0|c[b+532>>2]),c[b+1056>>2]=b+(0|c[b+536>>2]),c[b+1060>>2]=b+(0|c[b+540>>2]),c[b+1064>>2]=b+(0|c[b+544>>2]),c[b+1068>>2]=b+(0|c[b+548>>2]),c[b+1072>>2]=b+(0|c[b+552>>2]),c[b+1076>>2]=b+(0|c[b+556>>2]),c[b+1080>>2]=b+(0|c[b+560>>2]),c[b+1084>>2]=b+(0|c[b+564>>2]),c[b+1088>>2]=b+(0|c[b+568>>2]),c[b+1092>>2]=b+(0|c[b+572>>2]),c[b+1096>>2]=b+(0|c[b+576>>2]),c[b+1100>>2]=b+(0|c[b+580>>2]),c[b+1104>>2]=b+(0|c[b+584>>2]),c[b+1108>>2]=b+(0|c[b+588>>2]),c[b+1112>>2]=b+(0|c[b+592>>2]),c[b+1116>>2]=b+(0|c[b+596>>2]),c[b+1120>>2]=b+(0|c[b+600>>2]),c[b+1124>>2]=b+(0|c[b+604>>2]),c[b+1128>>2]=b+(0|c[b+608>>2])))}function qa(d){d|=0;var n,o,p,e=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,q=0,r=0,s=0,t=S;if(S=S+32|0,g=t+24|0,c[(s=t)>>2]=4,c[s+4>>2]=2,c[s+8>>2]=2,function(a,b){var d,e;S=(a=S)+272|0,d=a+16|0,c[(e=a)>>2]=b|=0,_b(d,993,e),function(a){var b,d;S=(b=S)+16|0,c[(d=b)>>2]=a|=0,function(a,b,d){S=(b=S)+16|0,c[(a=b)>>2]=d|=0,$b(496,2518,a),S=b}(0,0,d),S=b}(d),S=a}(0,s),0|uc(d))return ia(0,1038,t+16|0),S=t,(s=0)|s;if(4<(255&(e=0|a[(h=d+4|0)>>0])))return c[g>>2]=4,c[g+4>>2]=255&e,ia(0,1101,g),S=t,(s=0)|s;if(0|a[(e=d+5|0)>>0]?(pb(h,1),qb(d+64|0,4,160),a[e>>0]=0,pa(d),e=0|a[h>>0],qb(0|c[(g=d+704|0)>>2],4,32),pb(0|c[(s=d+708|0)>>2],4),pb(4+(0|c[s>>2])|0,4),pb(8+(0|c[s>>2])|0,4),pb(12+(0|c[s>>2])|0,4),pb(16+(0|c[s>>2])|0,4),pb(20+(0|c[s>>2])|0,1),qb(0|c[d+720>>2],4,0|c[c[g>>2]>>2]),qb(0|c[d+724>>2],4,0|c[c[g>>2]>>2]),qb(0|c[d+728>>2],4,0|c[c[g>>2]>>2]),qb(0|c[d+732>>2],4,0|c[c[g>>2]>>2]),qb(0|c[d+736>>2],4,0|c[c[g>>2]>>2]),qb(0|c[d+740>>2],4,0|c[c[g>>2]>>2]),qb(0|c[d+752>>2],4,0|c[4+(0|c[g>>2])>>2]),qb(0|c[d+756>>2],4,0|c[4+(0|c[g>>2])>>2]),qb(0|c[d+760>>2],4,0|c[4+(0|c[g>>2])>>2]),qb(0|c[d+764>>2],4,0|c[4+(0|c[g>>2])>>2]),qb(0|c[d+768>>2],4,0|c[4+(0|c[g>>2])>>2]),qb(0|c[d+772>>2],4,0|c[4+(0|c[g>>2])>>2]),qb(0|c[d+776>>2],4,0|c[4+(0|c[g>>2])>>2]),qb(0|c[d+780>>2],4,0|c[8+(0|c[g>>2])>>2]),qb(0|c[d+784>>2],4,0|c[8+(0|c[g>>2])>>2]),qb(0|c[d+788>>2],4,0|c[8+(0|c[g>>2])>>2]),qb(0|c[d+796>>2],4,0|c[8+(0|c[g>>2])>>2]),qb(0|c[d+800>>2],4,0|c[8+(0|c[g>>2])>>2]),qb(0|c[d+804>>2],4,0|c[8+(0|c[g>>2])>>2]),qb(0|c[d+812>>2],4,0|c[12+(0|c[g>>2])>>2]),qb(0|c[d+816>>2],4,0|c[12+(0|c[g>>2])>>2]),qb(0|c[d+820>>2],4,0|c[12+(0|c[g>>2])>>2]),qb(0|c[d+828>>2],4,0|c[12+(0|c[g>>2])>>2]),qb(0|c[d+852>>2],4,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+856>>2],4,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+860>>2],4,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+868>>2],4,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+872>>2],4,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+876>>2],4,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+880>>2],4,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+884>>2],4,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+888>>2],1,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+892>>2],4,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+896>>2],4,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+900>>2],4,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+904>>2],4,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+908>>2],4,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+912>>2],4,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+924>>2],4,0|c[20+(0|c[g>>2])>>2]),qb(0|c[d+928>>2],4,0|c[20+(0|c[g>>2])>>2]),qb(0|c[d+932>>2],4,0|c[20+(0|c[g>>2])>>2]),qb(0|c[d+936>>2],4,0|c[20+(0|c[g>>2])>>2]),qb(0|c[d+940>>2],4,0|c[20+(0|c[g>>2])>>2]),qb(0|c[d+948>>2],4,0|c[20+(0|c[g>>2])>>2]),qb(0|c[d+952>>2],4,0|c[20+(0|c[g>>2])>>2]),qb(0|c[d+976>>2],4,0|c[24+(0|c[g>>2])>>2]),qb(0|c[d+980>>2],4,0|c[28+(0|c[g>>2])>>2]),qb(0|c[d+984>>2],4,0|c[28+(0|c[g>>2])>>2]),qb(0|c[d+988>>2],4,0|c[32+(0|c[g>>2])>>2]),qb(0|c[d+992>>2],4,0|c[32+(0|c[g>>2])>>2]),qb(0|c[d+996>>2],4,0|c[32+(0|c[g>>2])>>2]),qb(0|c[d+1e3>>2],4,0|c[32+(0|c[g>>2])>>2]),qb(0|c[d+1004>>2],4,0|c[32+(0|c[g>>2])>>2]),qb(0|c[d+1008>>2],4,0|c[32+(0|c[g>>2])>>2]),qb(0|c[d+1012>>2],4,0|c[32+(0|c[g>>2])>>2]),qb(0|c[d+1016>>2],4,0|c[36+(0|c[g>>2])>>2]),qb(0|c[d+1020>>2],4,0|c[36+(0|c[g>>2])>>2]),qb(0|c[d+1024>>2],4,0|c[36+(0|c[g>>2])>>2]),qb(0|c[d+1028>>2],4,0|c[40+(0|c[g>>2])>>2]),qb(0|c[d+1040>>2],4,0|c[44+(0|c[g>>2])>>2]),qb(0|c[d+1044>>2],4,0|c[48+(0|c[g>>2])>>2]),qb(0|c[d+1048>>2],4,0|c[48+(0|c[g>>2])>>2]),qb(0|c[d+1032>>2],4,0|c[52+(0|c[g>>2])>>2]),qb(0|c[d+1036>>2],4,0|c[52+(0|c[g>>2])>>2]),qb(0|c[d+1132>>2],4,0|c[56+(0|c[g>>2])>>2]),qb(0|c[d+1136>>2],4,0|c[60+(0|c[g>>2])>>2]),qb(0|c[d+1140>>2],2,0|c[64+(0|c[g>>2])>>2]),qb(0|c[d+1144>>2],4,0|c[68+(0|c[g>>2])>>2]),qb(0|c[d+1148>>2],4,0|c[72+(0|c[g>>2])>>2]),qb(0|c[d+1152>>2],4,0|c[72+(0|c[g>>2])>>2]),qb(0|c[d+1156>>2],4,0|c[72+(0|c[g>>2])>>2]),qb(0|c[d+1160>>2],4,0|c[72+(0|c[g>>2])>>2]),qb(0|c[d+1164>>2],4,0|c[72+(0|c[g>>2])>>2]),qb(0|c[d+1168>>2],4,0|c[76+(0|c[g>>2])>>2]),qb(0|c[d+1172>>2],4,0|c[76+(0|c[g>>2])>>2]),qb(0|c[d+1176>>2],4,0|c[76+(0|c[g>>2])>>2]),qb(0|c[d+1188>>2],4,0|c[80+(0|c[g>>2])>>2]),qb(0|c[d+1192>>2],4,0|c[80+(0|c[g>>2])>>2]),qb(0|c[d+1196>>2],4,0|c[80+(0|c[g>>2])>>2]),qb(0|c[d+1200>>2],4,0|c[80+(0|c[g>>2])>>2]),qb(0|c[d+1204>>2],4,0|c[80+(0|c[g>>2])>>2]),qb(0|c[d+1208>>2],4,0|c[80+(0|c[g>>2])>>2]),qb(0|c[d+1212>>2],4,0|c[80+(0|c[g>>2])>>2]),qb(0|c[d+1216>>2],4,0|c[84+(0|c[g>>2])>>2]),qb(0|c[d+1220>>2],2,0|c[84+(0|c[g>>2])>>2]),qb(0|c[d+1224>>2],4,0|c[88+(0|c[g>>2])>>2]),1<(255&e)&&(qb(0|c[d+808>>2],4,0|c[8+(0|c[g>>2])>>2]),3<(255&e))&&(qb(0|c[d+968>>2],4,0|c[20+(0|c[g>>2])>>2]),qb(0|c[d+972>>2],4,0|c[20+(0|c[g>>2])>>2]),qb(0|c[d+792>>2],4,0|c[8+(0|c[g>>2])>>2]),qb(0|c[d+824>>2],4,0|c[12+(0|c[g>>2])>>2]),qb(0|c[d+864>>2],4,0|c[16+(0|c[g>>2])>>2]),qb(0|c[d+1228>>2],4,0|c[92+(0|c[g>>2])>>2]),qb(0|c[d+1232>>2],4,0|c[92+(0|c[g>>2])>>2]),qb(0|c[d+1236>>2],4,0|c[92+(0|c[g>>2])>>2]),qb(0|c[d+1240>>2],4,0|c[96+(0|c[g>>2])>>2]),qb(0|c[d+1244>>2],4,0|c[96+(0|c[g>>2])>>2]),qb(0|c[d+1248>>2],4,0|c[96+(0|c[g>>2])>>2]),qb(0|c[d+944>>2],4,0|c[20+(0|c[g>>2])>>2]),qb(0|c[d+956>>2],4,0|c[20+(0|c[g>>2])>>2]),qb(0|c[d+960>>2],4,0|c[20+(0|c[g>>2])>>2]),qb(0|c[d+1052>>2],4,0|c[100+(0|c[g>>2])>>2]),qb(0|c[d+1056>>2],4,0|c[100+(0|c[g>>2])>>2]),qb(0|c[d+1060>>2],4,0|c[100+(0|c[g>>2])>>2]),qb(0|c[d+1064>>2],4,0|c[104+(0|c[g>>2])>>2]),qb(0|c[d+1068>>2],4,0|c[104+(0|c[g>>2])>>2]),qb(0|c[d+1072>>2],4,0|c[104+(0|c[g>>2])>>2]),qb(0|c[d+1076>>2],4,0|c[104+(0|c[g>>2])>>2]),qb(0|c[d+1080>>2],4,0|c[104+(0|c[g>>2])>>2]),qb(0|c[d+1084>>2],4,0|c[108+(0|c[g>>2])>>2]),qb(0|c[d+1088>>2],4,0|c[108+(0|c[g>>2])>>2]),qb(0|c[d+1092>>2],4,0|c[108+(0|c[g>>2])>>2]),qb(0|c[d+1096>>2],4,0|c[112+(0|c[g>>2])>>2]),qb(0|c[d+1100>>2],4,0|c[112+(0|c[g>>2])>>2]),qb(0|c[d+1104>>2],4,0|c[112+(0|c[g>>2])>>2]),qb(0|c[d+1108>>2],4,0|c[116+(0|c[g>>2])>>2]),qb(0|c[d+1112>>2],4,0|c[120+(0|c[g>>2])>>2]),qb(0|c[d+1116>>2],4,0|c[120+(0|c[g>>2])>>2]),qb(0|c[d+1120>>2],4,0|c[120+(0|c[g>>2])>>2]),qb(0|c[d+1124>>2],4,0|c[124+(0|c[g>>2])>>2]),qb(0|c[d+1128>>2],4,0|c[124+(0|c[g>>2])>>2]))):(pa(d),g=d+704|0),0|c[905]||(c[905]=1),e=0|c[g>>2],0<(0|c[e>>2]))for(h=d+716|0,i=d+712|0,j=0;c[(0|c[i>>2])+(j<<2)>>2]=(0|c[h>>2])+(j<<6),e=0|c[g>>2],(0|(j=j+1|0))<(0|c[e>>2]););if(0<(0|c[e+4>>2]))for(h=d+748|0,i=d+744|0,j=0;c[(0|c[i>>2])+(j<<2)>>2]=(0|c[h>>2])+(j<<6),e=0|c[g>>2],(0|(j=j+1|0))<(0|c[e+4>>2]););if(0<(0|c[e+16>>2]))for(k=d+848|0,l=d+832|0,r=d+1136|0,p=d+896|0,q=d+836|0,m=d+1140|0,n=d+900|0,o=d+840|0,h=d+1144|0,i=d+908|0,j=d+844|0,s=0;c[(0|c[l>>2])+(s<<2)>>2]=(0|c[k>>2])+(s<<6),c[(0|c[q>>2])+(s<<2)>>2]=(0|c[r>>2])+(c[(0|c[p>>2])+(s<<2)>>2]<<2),c[(0|c[o>>2])+(s<<2)>>2]=(0|c[m>>2])+(c[(0|c[n>>2])+(s<<2)>>2]<<1),c[(0|c[j>>2])+(s<<2)>>2]=(0|c[h>>2])+(c[(0|c[i>>2])+(s<<2)>>2]<<2),e=0|c[g>>2],(0|(s=s+1|0))<(0|c[e+16>>2]););if(0<(0|c[e+20>>2]))for(h=d+920|0,i=d+916|0,j=0;c[(0|c[i>>2])+(j<<2)>>2]=(0|c[h>>2])+(j<<6),e=0|c[g>>2],(0|(j=j+1|0))<(0|c[e+20>>2]););if(0<(0|c[e+80>>2]))for(h=d+1184|0,i=d+1180|0,j=0;c[(0|c[i>>2])+(j<<2)>>2]=(0|c[h>>2])+(j<<6),e=0|c[g>>2],(0|(j=j+1|0))<(0|c[e+80>>2]););if(!(1&a[20+(0|c[d+708>>2])>>0]||(0|(m=0|c[e+16>>2]))<=0)){e=0|c[d+1140>>2],g=0|c[d+900>>2],h=0|c[d+904>>2],j=0;do{if(i=e+(c[g+(j<<2)>>2]<<1)|0,l=(s=0|c[h+(j<<2)>>2])-1|0,1<(0|s))for(k=0;r=0|b[(q=i+(k<<1)|0)>>1],b[q>>1]=0|b[(s=i+(k+2<<1)|0)>>1],b[s>>1]=r,(0|(k=k+3|0))<(0|l););}while((0|(j=j+1|0))!=(0|m));g=0|c[d+1136>>2],h=0|c[d+896>>2],i=0|c[d+892>>2],k=0;do{if(j=(e=g+(c[h+(k<<2)>>2]<<2)|0)+((s=0|c[i+(k<<2)>>2])<<1<<2)|0,0<(0|s))for(e=e+4|0;f[e>>2]=1-+f[e>>2],(e=e+8|0)>>>0<j>>>0;);}while((0|(k=k+1|0))!=(0|m))}return S=t,0|d}function ra(a){var b=S;return S=S+16|0,0|uc(a|=0)?(ia(0,1210,b),S=b,(a=0)|a):(a=0|d[a+4>>0],S=b,0|a)}function ta(a){var j,k,l,m,b=0,e=0,f=0,g=0,h=0,i=0,e=64+(a|=0)|0,b=a+144|0;if(xa(e,0|c[a+88>>2],0|c[a+148>>2],0|c[b>>2]),za(e,0|c[a+92>>2],0|c[a+152>>2],0|c[796+(0|c[a>>2])>>2],2,0|c[b>>2]),!((0|d[4+(0|c[a>>2])>>0])<4||(xa(e,0|c[a+96>>2],0|c[(m=a+120|0)>>2],0|c[b>>2]),xa(e,0|c[a+100>>2],0|c[(f=a+124|0)>>2],0|c[b>>2]),xa(e,0|c[a+104>>2],0|c[(g=a+128|0)>>2],0|c[b>>2]),xa(e,0|c[a+108>>2],0|c[(j=a+132|0)>>2],0|c[b>>2]),xa(e,0|c[a+112>>2],0|c[(k=a+136|0)>>2],0|c[b>>2]),xa(e,0|c[a+116>>2],0|c[(l=a+140|0)>>2],0|c[b>>2]),b=0|c[a+156>>2],e=0|c[m>>2],f=0|c[f>>2],g=0|c[g>>2],(0|(m=0|c[a+56>>2]))<=0))){for(i=h=0;c[b+(h<<2)>>2]=c[e+(i<<2)>>2],c[b+((1|h)<<2)>>2]=c[f+(i<<2)>>2],c[b+((2|h)<<2)>>2]=c[g+(i<<2)>>2],(0|(i=i+1|0))!=(0|m);)h=h+4|0;for(i=0|c[a+160>>2],h=0|c[j>>2],g=0|c[k>>2],b=0|c[l>>2],f=e=0;c[i+(e<<2)>>2]=c[h+(f<<2)>>2],c[i+((1|e)<<2)>>2]=c[g+(f<<2)>>2],c[i+((2|e)<<2)>>2]=c[b+(f<<2)>>2],(0|(f=f+1|0))!=(0|m);)e=e+4|0}}function ua(a){var j,k,l,m,b=0,e=0,f=0,g=0,h=0,i=0,e=172+(a|=0)|0,b=a+264|0;if(xa(e,0|c[a+196>>2],0|c[a+268>>2],0|c[b>>2]),xa(e,0|c[a+200>>2],0|c[a+284>>2],0|c[b>>2]),xa(e,0|c[a+204>>2],0|c[a+276>>2],0|c[b>>2]),xa(e,0|c[a+208>>2],0|c[a+280>>2],0|c[b>>2]),xa(e,0|c[a+212>>2],0|c[a+272>>2],0|c[b>>2]),!((0|d[4+(0|c[a>>2])>>0])<4||(xa(e,0|c[a+216>>2],0|c[(m=a+240|0)>>2],0|c[b>>2]),xa(e,0|c[a+220>>2],0|c[(f=a+244|0)>>2],0|c[b>>2]),xa(e,0|c[a+224>>2],0|c[(g=a+248|0)>>2],0|c[b>>2]),xa(e,0|c[a+228>>2],0|c[(j=a+252|0)>>2],0|c[b>>2]),xa(e,0|c[a+232>>2],0|c[(k=a+256|0)>>2],0|c[b>>2]),xa(e,0|c[a+236>>2],0|c[(l=a+260|0)>>2],0|c[b>>2]),b=0|c[a+296>>2],e=0|c[m>>2],f=0|c[f>>2],g=0|c[g>>2],(0|(m=0|c[a+164>>2]))<=0))){for(i=h=0;c[b+(h<<2)>>2]=c[e+(i<<2)>>2],c[b+((1|h)<<2)>>2]=c[f+(i<<2)>>2],c[b+((2|h)<<2)>>2]=c[g+(i<<2)>>2],(0|(i=i+1|0))!=(0|m);)h=h+4|0;for(i=0|c[a+300>>2],h=0|c[j>>2],g=0|c[k>>2],b=0|c[l>>2],f=e=0;c[i+(e<<2)>>2]=c[h+(f<<2)>>2],c[i+((1|e)<<2)>>2]=c[g+(f<<2)>>2],c[i+((2|e)<<2)>>2]=c[b+(f<<2)>>2],(0|(f=f+1|0))!=(0|m);)e=e+4|0}}function va(a){var j,k,l,m,b=0,e=0,f=0,g=0,h=0,i=0,e=340+(a|=0)|0,b=a+424|0;if(xa(e,0|c[a+364>>2],0|c[a+448>>2],0|c[b>>2]),ya(e,0|c[a+368>>2],0|c[a+440>>2],0|c[b>>2]),za(e,0|c[a+372>>2],0|c[a+444>>2],0|c[892+(0|c[a>>2])>>2],2,0|c[b>>2]),!((0|d[4+(0|c[a>>2])>>0])<4||(xa(e,0|c[a+376>>2],0|c[(m=a+400|0)>>2],0|c[b>>2]),xa(e,0|c[a+380>>2],0|c[(f=a+404|0)>>2],0|c[b>>2]),xa(e,0|c[a+384>>2],0|c[(g=a+408|0)>>2],0|c[b>>2]),xa(e,0|c[a+388>>2],0|c[(j=a+412|0)>>2],0|c[b>>2]),xa(e,0|c[a+392>>2],0|c[(k=a+416|0)>>2],0|c[b>>2]),xa(e,0|c[a+396>>2],0|c[(l=a+420|0)>>2],0|c[b>>2]),b=0|c[a+452>>2],e=0|c[m>>2],f=0|c[f>>2],g=0|c[g>>2],(0|(m=0|c[a+332>>2]))<=0))){for(i=h=0;c[b+(h<<2)>>2]=c[e+(i<<2)>>2],c[b+((1|h)<<2)>>2]=c[f+(i<<2)>>2],c[b+((2|h)<<2)>>2]=c[g+(i<<2)>>2],(0|(i=i+1|0))!=(0|m);)h=h+4|0;for(i=0|c[a+456>>2],h=0|c[j>>2],g=0|c[k>>2],b=0|c[l>>2],f=e=0;c[i+(e<<2)>>2]=c[h+(f<<2)>>2],c[i+((1|e)<<2)>>2]=c[g+(f<<2)>>2],c[i+((2|e)<<2)>>2]=c[b+(f<<2)>>2],(0|(f=f+1|0))!=(0|m);)e=e+4|0}}function xa(a,b,d,e){b|=0,d|=0,e|=0;var m,n,o,g=0,h=0,i=0,j=0,k=0,l=0;if(0<(0|(g=0|c[8+(a|=0)>>2])))for(h=0|c[a+20>>2],i=0|c[a+12>>2],j=0;f[i+(j<<2)>>2]=+f[b+(j<<2)>>2]*+f[h+(j<<2)>>2],(0|(j=j+1|0))!=(0|g););if(!((0|(n=0|c[a>>2]))<=0))if(l=a+16|0,o=0|c[a+4>>2],m=a+12|0,e)for(b=j=0;;){if(0|c[e>>2]){if(h=(a=0|c[(0|c[l>>2])+(b<<2)>>2])+j|0,0<(0|a))for(g=0|c[m>>2],i=j,k=0;k+=+f[g+(i<<2)>>2],(0|(i=i+1|0))<(0|h););else k=0;f[d+(b<<2)>>2]=k}if((0|(g=b+1|0))==(0|n))break;e=e+4|0,j=(0|c[o+(b<<2)>>2])+j|0,b=g}else for(j=0|c[l>>2],a=b=0;;){if(h=(l=0|c[j+(a<<2)>>2])+b|0,0<(0|l))for(g=0|c[m>>2],i=b,k=0;k+=+f[g+(i<<2)>>2],(0|(i=i+1|0))<(0|h););else k=0;if(f[d+(a<<2)>>2]=k,(0|(g=a+1|0))==(0|n))break;b=(0|c[o+(a<<2)>>2])+b|0,a=g}}function ya(a,b,d,e){b|=0,d|=0,e|=0;var m,n,g=0,h=0,i=0,j=0,k=0,l=0;if(0<(0|(g=0|c[8+(a|=0)>>2])))for(h=0|c[a+20>>2],i=0|c[a+12>>2],j=0;f[i+(j<<2)>>2]=+f[b+(j<<2)>>2]*+f[h+(j<<2)>>2],(0|(j=j+1|0))!=(0|g););if(!((0|(g=0|c[a>>2]))<=0))if(l=a+16|0,m=0|c[a+4>>2],n=a+12|0,e)for(b=j=0;;){if(0|c[e>>2]){if(h=(i=0|c[(0|c[l>>2])+(b<<2)>>2])+j|0,0<(0|i))for(g=0|c[n>>2],i=j,k=0;k+=+f[g+(i<<2)>>2],(0|(i=i+1|0))<(0|h););else k=0;c[d+(b<<2)>>2]=~~(k+.0010000000474974513),g=0|c[a>>2]}if(!((0|(h=b+1|0))<(0|g)))break;e=e+4|0,j=(0|c[m+(b<<2)>>2])+j|0,b=h}else for(j=0|c[l>>2],e=b=0;;){if(h=(l=0|c[j+(e<<2)>>2])+b|0,0<(0|l))for(g=0|c[n>>2],i=b,k=0;k+=+f[g+(i<<2)>>2],(0|(i=i+1|0))<(0|h););else k=0;if(c[d+(e<<2)>>2]=~~(k+.0010000000474974513),!((0|(g=e+1|0))<(0|c[a>>2])))break;b=(0|c[m+(e<<2)>>2])+b|0,e=g}}function za(a,b,d,e,g,h){b|=0,d|=0,e|=0,g|=0,h|=0;var r,s,u,w,x,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,t=0|c[(a|=0)>>2];if(!((0|t)<=0))if(w=a+16|0,u=0|c[a+4>>2],s=a+20|0,r=g<<2,h)for(p=o=0;;){if(0|c[h>>2]&&(l=0|c[d+(p<<2)>>2],a=0|c[e+(p<<2)>>2],n=0|v(a,g),m=(i=0|c[(0|c[w>>2])+(p<<2)>>2])+o|0,(k=0<(0|n))&&Vc(0|l,0,0|v(r,a)),0<(0|i)&&(q=0|c[s>>2],k))){i=o;do{for(a=0|c[b+(i<<2)>>2],j=+f[q+(i<<2)>>2],k=0;f[(x=l+(k<<2)|0)>>2]=+f[x>>2]+j*+f[a+(k<<2)>>2],(0|(k=k+1|0))!=(0|n););}while((0|(i=i+1|0))<(0|m))}if((0|(a=p+1|0))==(0|t))break;h=h+4|0,o=(0|c[u+(p<<2)>>2])+o|0,p=a}else for(o=n=0;;){if(k=0|c[d+(o<<2)>>2],a=0|c[e+(o<<2)>>2],m=0|v(a,g),l=(h=0|c[(0|c[w>>2])+(o<<2)>>2])+n|0,(i=0<(0|m))&&Vc(0|k,0,0|v(r,a)),0<(0|h)&&(p=0|c[s>>2],i)){h=n;do{for(a=0|c[b+(h<<2)>>2],j=+f[p+(h<<2)>>2],i=0;f[(q=k+(i<<2)|0)>>2]=+f[q>>2]+j*+f[a+(i<<2)>>2],(0|(i=i+1|0))!=(0|m););}while((0|(h=h+1|0))<(0|l))}if((0|(a=o+1|0))==(0|t))break;n=(0|c[u+(o<<2)>>2])+n|0,o=a}}function Ha(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|function(a){a|=0;var b,e,d=S;return S=S+560|0,b=(e=d)+548|0,Vc(0|e,0,548),ma(a,e,b),S=d,0|c[b>>2]}(a),S=d,0|b):(c[b>>2]=1515,c[b+4>>2]=1533,ia(0,1269,b),S=d,(b=0)|b)}function Ia(a,b,d){b|=0,d|=0;var e,g,f=0,h=0,i=S;return S=S+32|0,h=i+24|0,g=i+16|0,f=i+8|0,e=i,(a|=0)?b?((f=b)+15&-16|0)!=(0|f)?(c[g>>2]=1551,c[4+g>>2]=1342,ia(0,1269,g),S=i,(h=0)|h):(b=0|na(a,b,d))?(S=i,0|b):(c[h>>2]=1551,c[h+4>>2]=1577,ia(0,1269,h),S=i,(h=0)|h):(c[f>>2]=1551,c[f+4>>2]=1303,ia(0,1269,f),S=i,(h=0)|h):(c[e>>2]=1551,c[e+4>>2]=1533,ia(0,1269,e),S=i,(h=0)|h)}function ob(a,b,c,d){if(c=+c,d=+d,(b=+u(b=+b,a=+a)-+u(+d,+c))<-3.1415927410125732)for(;(b+=6.2831854820251465)<-3.1415927410125732;);if(3.1415927410125732<b)for(;3.1415927410125732<(b+=-6.2831854820251465););return+b}function pb(b,c){var d;if(!((c=(b|=0)+(c|=0)+-1|0)>>>0<=b>>>0))for(;d=0|a[b>>0],a[b>>0]=0|a[c>>0],b=b+1|0,a[c>>0]=d,b>>>0<(c=c+-1|0)>>>0;);}function qb(b,c,d){b|=0,c|=0;var g,e=0,f=0;if(d|=0)do{if(d=d+-1|0,(f=b)>>>0<(e=(b=b+c|0)-1|0)>>>0)for(;g=0|a[f>>0],a[f>>0]=0|a[e>>0],f=f+1|0,a[e>>0]=g,f>>>0<(e=e+-1|0)>>>0;);}while(0!=(0|d))}function xb(a){var s,l,o,b=0,e=0,g=0,h=0,i=0,j=0,k=0,n=0,p=0,q=0,r=0,t=0,u=0,v=0,m=(b=0|c[(l=336+(a|=0)|0)>>2])+(20*(n=0|c[(o=a+332|0)>>2])|0)|0,p=a+424|0,i=0|c[a+48>>2],j=0|c[a+316>>2],k=0|c[a+308>>2];if(0<(0|n))for(n=0|c[p>>2],g=0|c[a+448>>2],h=0|c[a+444>>2];0|c[n>>2]&&(-1!=(0|(e=0|c[b+4>>2]))&&(f[g>>2]=+f[i+(e<<2)>>2]*+f[g>>2]),-1!=(0|(e=0|c[b+8>>2]))&&(f[g>>2]=+f[j+(e<<2)>>2]*+f[g>>2],r=0|c[h>>2],$[3&c[k+(e<<5)+24>>2]](a,e,r,r,0|c[b+16>>2]))),!(m>>>0<=(b=b+20|0)>>>0);)n=n+4|0,g=g+4|0,h=h+4|0;if(!((0|d[4+(0|c[a>>2])>>0])<4||(k=(b=0|c[l>>2])+(20*(r=0|c[o>>2])|0)|0,i=0|c[a+324>>2],j=0|c[a+328>>2],(0|r)<=0)))for(h=0|c[p>>2],e=b,g=0|c[a+452>>2],b=0|c[a+456>>2];0|c[h>>2]&&-1!=(0|(q=0|c[e+8>>2]))&&(t=+f[g>>2]*+f[(o=i+((p=q<<2)<<2)|0)>>2],f[g>>2]=t,u=+f[(r=g+4|0)>>2]*+f[4+o>>2],f[r>>2]=u,v=+f[(a=g+8|0)>>2]*+f[8+o>>2],f[g>>2]=t<0?0:1<t?1:t,f[r>>2]=u<0?0:1<u?1:u,f[a>>2]=v<0?0:1<v?1:v,f[g+12>>2]=1,v=+f[b>>2],u=+f[(p=j+(p<<2)|0)>>2],f[b>>2]=u=v+u-v*u,v=+f[(a=b+4|0)>>2],t=+f[p+4>>2],f[a>>2]=t=v+t-v*t,s=(v=+f[(r=b+8|0)>>2])+(s=+f[p+8>>2])-v*s,f[b>>2]=u<0?0:1<u?1:u,f[a>>2]=t<0?0:1<t?1:t,f[r>>2]=s<0?0:1<s?1:s,f[b+12>>2]=1),!(k>>>0<=(e=e+20|0)>>>0);)h=h+4|0,g=g+16|0,b=b+16|0}function yb(a){var e,b=0|c[332+(a|=0)>>2];0|c[a+428>>2]&&(Uc(0|c[a+460>>2],0|c[a+436>>2],0|(e=b<<2)),Uc(0|c[a+464>>2],0|c[a+440>>2],0|e),Uc(0|c[a+468>>2],0|c[a+448>>2],0|e),(0|d[4+(0|c[a>>2])>>0])<=3||(Uc(0|c[a+472>>2],0|c[a+452>>2],0|(e=b<<4)),Uc(0|c[a+476>>2],0|c[a+456>>2],0|e)))}function zb(b){var j,k,m,n,o,p,q,r,s,t,y,d=0,e=0,g=0,h=0,i=0,l=0,u=0,v=0,x=0,e=0|a[4+(0|c[(b|=0)>>2])>>0],w=0|c[b+332>>2],d=b+428|0;if(0|c[b+620>>2]){if(!(((c[d>>2]=0)|w)<=0))for(h=b+424|0,i=b+432|0,d=b+448|0,e=0;g=0!=(0|c[(0|c[h>>2])+(e<<2)>>2])&&0!=+f[(0|c[d>>2])+(e<<2)>>2]?127:126,a[(0|c[i>>2])+e>>0]=g,(0|(e=e+1|0))!=(0|w););}else if(0|c[d>>2]){if(!(((c[d>>2]=0)|w)<=0))if(m=b+424|0,p=b+432|0,o=b+448|0,r=b+468|0,n=b+440|0,q=b+464|0,t=b+436|0,s=b+460|0,j=b+452|0,l=b+472|0,k=b+456|0,i=b+476|0,(255&e)<=3)for(d=0;l=0==(0|c[(0|c[m>>2])+(d<<2)>>2]),x=+f[(0|c[o>>2])+(d<<2)>>2],v=(0|c[p>>2])+d|0,u=(1&a[v>>0])==(u=0!=x&(1^l)&1)<<24>>24?u:2|u,u=x!=+f[(0|c[r>>2])+(d<<2)>>2]?4|u:u,u=(0|c[(0|c[n>>2])+(d<<2)>>2])==(0|c[(0|c[q>>2])+(d<<2)>>2])?u:8|u,u=(0|c[(0|c[t>>2])+(d<<2)>>2])==(0|c[(0|c[s>>2])+(d<<2)>>2])?u:16|u,a[v>>0]=l?u:32|u,(0|(d=d+1|0))!=(0|w););else for(h=g=0;y=0==(0|c[(0|c[m>>2])+(g<<2)>>2]),x=+f[(0|c[o>>2])+(g<<2)>>2],e=(0|c[p>>2])+g|0,d=(1&a[e>>0])==(d=0!=x&(1^y)&1)<<24>>24?d:2|d,d=x!=+f[(0|c[r>>2])+(g<<2)>>2]?4|d:d,d=(0|c[(0|c[n>>2])+(g<<2)>>2])==(0|c[(0|c[q>>2])+(g<<2)>>2])?d:8|d,d=(0|c[(0|c[t>>2])+(g<<2)>>2])==(0|c[(0|c[s>>2])+(g<<2)>>2])?d:16|d,d=y?d:32|d,y=(0|c[j>>2])+(h<<2)|0,b=(0|c[l>>2])+(h<<2)|0,+f[y>>2]==+f[b>>2]&&+f[4+y>>2]==+f[b+4>>2]&&+f[8+y>>2]==+f[b+8>>2]&&+f[12+y>>2]==+f[b+12>>2]&&(u=(0|c[k>>2])+(h<<2)|0,v=(0|c[i>>2])+(h<<2)|0,+f[u>>2]==+f[v>>2])&&+f[u+4>>2]==+f[v+4>>2]&&+f[u+8>>2]==+f[v+8>>2]&&+f[u+12>>2]==+f[v+12>>2]||(d|=64),a[e>>0]=d,(0|(g=g+1|0))!=(0|w);)h=h+4|0}else if(!((0|w)<=0))for(g=b+424|0,h=b+432|0,d=b+448|0,e=0;0!=(0|c[(0|c[g>>2])+(e<<2)>>2])&&0!=+f[(0|c[d>>2])+(e<<2)>>2]?(v=(0|c[h>>2])+e|0,a[v>>0]=1|a[v>>0]):(v=(0|c[h>>2])+e|0,a[v>>0]=-2&a[v>>0]),(0|(e=e+1|0))!=(0|w););}function Bb(a){var C,D,E,F,G,A,B,b=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,H=0,I=0,J=0,K=0,k=0|c[(A=60+(a|=0)|0)>>2],b=0|c[a>>2],l=0|c[b+784>>2],m=0|c[(B=a+56|0)>>2],n=0|c[b+1028>>2];if(0<(0|m)){for(s=a+80|0,v=a+92|0,u=a+88|0,w=a+84|0,t=b+984|0,h=b+980|0,j=i=0;;){if(g=0|c[k+(24*i|0)>>2],15==(0|(z=0!=(0|c[(b=g+24|0)>>2])||0|c[g+28>>2]?15:z))&&(c[((z=0)|c[s>>2])+(i<<2)>>2]=c[(r=g+12|0)>>2],0|c[b>>2])&&(o=0|c[l+(i<<2)>>2],x=(p=0|c[g+16>>2])+((H=0|c[r>>2])<<2)|0,0<(0|H)))for(b=p,e=(0|c[u>>2])+(j<<2)|0,f=(0|c[v>>2])+(j<<2)|0;H=(0|c[b>>2])+o|0,c[f>>2]=n+(c[(0|c[t>>2])+(H<<2)>>2]<<2),c[e>>2]=c[(0|c[h>>2])+(H<<2)>>2],!(x>>>0<=(b=b+4|0)>>>0);)e=e+4|0,f=f+4|0;if(0|c[g+28>>2]&&(y=(q=0|c[g+20>>2])+((H=0|c[g+12>>2])<<2)|0,0<(0|H)))for(b=(0|c[w>>2])+(j<<2)|0,e=q;c[b>>2]=c[e>>2],!(y>>>0<=(e=e+4|0)>>>0);)b=b+4|0;if((0|(i=i+1|0))==(0|m))break;j=(0|c[g+8>>2])+j|0}b=0|c[a>>2]}if(!((0|d[b+4>>0])<4||(G=0|c[A>>2],H=0|c[b+792>>2],(0|(A=0|c[B>>2]))<=0)))for(D=a+96|0,C=a+100|0,B=a+104|0,F=a+108|0,E=a+112|0,z=a+116|0,x=b+1228|0,v=b+1232|0,u=b+1236|0,y=b+1240|0,w=b+1244|0,k=b+1248|0,m=l=0;;){if(b=0|c[G+(24*l|0)>>2],0|c[b+24>>2]&&(I=0|c[H+(l<<2)>>2],K=(J=0|c[b+16>>2])+((a=0|c[b+12>>2])<<2)|0,0<(0|a)))for(e=0|c[x>>2],f=0|c[v>>2],g=0|c[u>>2],h=0|c[y>>2],i=0|c[w>>2],j=0|c[k>>2],n=J,o=(0|c[B>>2])+(m<<2)|0,p=(0|c[C>>2])+(m<<2)|0,q=(0|c[D>>2])+(m<<2)|0,r=(0|c[z>>2])+(m<<2)|0,s=(0|c[E>>2])+(m<<2)|0,t=(0|c[F>>2])+(m<<2)|0;a=(0|c[n>>2])+I|0,c[q>>2]=c[e+(a<<2)>>2],c[p>>2]=c[f+(a<<2)>>2],c[o>>2]=c[g+(a<<2)>>2],c[t>>2]=c[h+(a<<2)>>2],c[s>>2]=c[i+(a<<2)>>2],c[r>>2]=c[j+(a<<2)>>2],!(K>>>0<=(n=n+4|0)>>>0);)o=o+4|0,p=p+4|0,q=q+4|0,r=r+4|0,s=s+4|0,t=t+4|0;if((0|(l=l+1|0))==(0|A))break;m=(0|c[b+8>>2])+m|0}}function Cb(a){var H,I,J,K,L,Q,b=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,M=0,N=0,O=0,P=0,T=0,U=0,V=0,W=0,S=0|c[168+(a|=0)>>2],R=0|c[a>>2],r=0|c[816+R>>2];if(0<(0|(s=0|c[(Q=a+164|0)>>2])))for(A=a+188|0,w=a+200|0,E=a+204|0,G=a+208|0,K=a+212|0,B=a+196|0,L=a+192|0,v=992+R|0,D=996+R|0,F=1e3+R|0,J=1004+R|0,C=988+R|0,H=1008+R|0,x=a+288|0,I=1012+R|0,y=a+292|0,O=N=0;;){if(t=0|c[S+(12*N|0)>>2],14==(0|(P=0!=(0|c[(b=t+24|0)>>2])||0|c[t+28>>2]?14:P))&&(c[((P=0)|c[A>>2])+(N<<2)>>2]=c[(z=t+12|0)>>2],0|c[b>>2])){if(b=0|c[r+(N<<2)>>2],k=(e=0|c[t+16>>2])+((q=0|c[z>>2])<<2)|0,0<(0|q))for(f=0|c[v>>2],g=0|c[D>>2],h=0|c[F>>2],i=0|c[J>>2],j=0|c[C>>2],l=(0|c[w>>2])+(O<<2)|0,m=e,n=(0|c[B>>2])+(O<<2)|0,o=(0|c[E>>2])+(O<<2)|0,p=(0|c[G>>2])+(O<<2)|0,q=(0|c[K>>2])+(O<<2)|0;W=(0|c[m>>2])+b|0,c[l>>2]=c[f+(W<<2)>>2],c[o>>2]=c[g+(W<<2)>>2],c[p>>2]=c[h+(W<<2)>>2],c[q>>2]=c[i+(W<<2)>>2],c[n>>2]=c[j+(W<<2)>>2],!(k>>>0<=(m=m+4|0)>>>0);)l=l+4|0,n=n+4|0,o=o+4|0,p=p+4|0,q=q+4|0;W=(0|c[e>>2])+b|0,c[(0|c[x>>2])+(N<<2)>>2]=c[(0|c[H>>2])+(W<<2)>>2],c[(0|c[y>>2])+(N<<2)>>2]=c[(0|c[I>>2])+(W<<2)>>2]}if(0|c[t+28>>2]&&(M=(u=0|c[t+20>>2])+((W=0|c[t+12>>2])<<2)|0,0<(0|W)))for(b=(0|c[L>>2])+(O<<2)|0,e=u;c[b>>2]=c[e>>2],!(M>>>0<=(e=e+4|0)>>>0);)b=b+4|0;if((0|(N=N+1|0))==(0|s))break;O=(0|c[t+8>>2])+O|0}if(!((0|d[4+R>>0])<4||(G=0|c[824+R>>2],(0|(A=0|c[Q>>2]))<=0)))for(D=a+216|0,C=a+220|0,B=a+224|0,F=a+228|0,E=a+232|0,z=a+236|0,x=1228+R|0,v=1232+R|0,u=1236+R|0,y=1240+R|0,w=1244+R|0,k=1248+R|0,m=l=0;;){if(j=0|c[S+(12*l|0)>>2],0|c[j+24>>2]&&(U=0|c[G+(l<<2)>>2],V=(T=0|c[j+16>>2])+((W=0|c[j+12>>2])<<2)|0,0<(0|W)))for(b=0|c[x>>2],e=0|c[v>>2],f=0|c[u>>2],g=0|c[y>>2],h=0|c[w>>2],i=0|c[k>>2],n=T,o=(0|c[B>>2])+(m<<2)|0,p=(0|c[C>>2])+(m<<2)|0,q=(0|c[D>>2])+(m<<2)|0,r=(0|c[z>>2])+(m<<2)|0,s=(0|c[E>>2])+(m<<2)|0,t=(0|c[F>>2])+(m<<2)|0;W=(0|c[n>>2])+U|0,c[q>>2]=c[b+(W<<2)>>2],c[p>>2]=c[e+(W<<2)>>2],c[o>>2]=c[f+(W<<2)>>2],c[t>>2]=c[g+(W<<2)>>2],c[s>>2]=c[h+(W<<2)>>2],c[r>>2]=c[i+(W<<2)>>2],!(V>>>0<=(n=n+4|0)>>>0);)o=o+4|0,p=p+4|0,q=q+4|0,r=r+4|0,s=s+4|0,t=t+4|0;if((0|(l=l+1|0))==(0|A))break;m=(0|c[j+8>>2])+m|0}}function Db(a){var F,G,D,E,b=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,H=0,I=0,J=0,K=0,l=0|c[(D=336+(a|=0)|0)>>2],b=0|c[a>>2],m=0|c[b+856>>2],n=0|c[(E=a+332|0)>>2],o=0|c[b+1028>>2];if(0<(0|n)){for(t=a+356|0,y=a+372|0,w=a+364|0,u=a+368|0,z=a+360|0,v=b+1024|0,x=b+1016|0,i=b+1020|0,k=j=0;;){if(h=0|c[l+(20*j|0)>>2],15==(0|(C=0!=(0|c[(b=h+24|0)>>2])||0|c[h+28>>2]?15:C))&&(c[((C=0)|c[t>>2])+(j<<2)>>2]=c[(s=h+12|0)>>2],0|c[b>>2])&&(p=0|c[m+(j<<2)>>2],A=(q=0|c[h+16>>2])+((H=0|c[s>>2])<<2)|0,0<(0|H)))for(b=(0|c[u>>2])+(k<<2)|0,e=q,f=(0|c[w>>2])+(k<<2)|0,g=(0|c[y>>2])+(k<<2)|0;H=(0|c[e>>2])+p|0,c[g>>2]=o+(c[(0|c[v>>2])+(H<<2)>>2]<<2),c[f>>2]=c[(0|c[x>>2])+(H<<2)>>2],c[b>>2]=c[(0|c[i>>2])+(H<<2)>>2],!(A>>>0<=(e=e+4|0)>>>0);)b=b+4|0,f=f+4|0,g=g+4|0;if(0|c[h+28>>2]&&(B=(r=0|c[h+20>>2])+((H=0|c[h+12>>2])<<2)|0,0<(0|H)))for(b=(0|c[z>>2])+(k<<2)|0,e=r;c[b>>2]=c[e>>2],!(B>>>0<=(e=e+4|0)>>>0);)b=b+4|0;if((0|(j=j+1|0))==(0|n))break;k=(0|c[h+8>>2])+k|0}b=0|c[a>>2]}if(!((0|d[b+4>>0])<4||(G=0|c[D>>2],H=0|c[b+864>>2],(0|(A=0|c[E>>2]))<=0)))for(D=a+376|0,C=a+380|0,B=a+384|0,F=a+388|0,E=a+392|0,z=a+396|0,x=b+1228|0,v=b+1232|0,u=b+1236|0,y=b+1240|0,w=b+1244|0,k=b+1248|0,m=l=0;;){if(b=0|c[G+(20*l|0)>>2],0|c[b+24>>2]&&(I=0|c[H+(l<<2)>>2],K=(J=0|c[b+16>>2])+((a=0|c[b+12>>2])<<2)|0,0<(0|a)))for(e=0|c[x>>2],f=0|c[v>>2],g=0|c[u>>2],h=0|c[y>>2],i=0|c[w>>2],j=0|c[k>>2],n=J,o=(0|c[B>>2])+(m<<2)|0,p=(0|c[C>>2])+(m<<2)|0,q=(0|c[D>>2])+(m<<2)|0,r=(0|c[z>>2])+(m<<2)|0,s=(0|c[E>>2])+(m<<2)|0,t=(0|c[F>>2])+(m<<2)|0;a=(0|c[n>>2])+I|0,c[q>>2]=c[e+(a<<2)>>2],c[p>>2]=c[f+(a<<2)>>2],c[o>>2]=c[g+(a<<2)>>2],c[t>>2]=c[h+(a<<2)>>2],c[s>>2]=c[i+(a<<2)>>2],c[r>>2]=c[j+(a<<2)>>2],!(K>>>0<=(n=n+4|0)>>>0);)o=o+4|0,p=p+4|0,q=q+4|0,r=r+4|0,s=s+4|0,t=t+4|0;if((0|(l=l+1|0))==(0|A))break;m=(0|c[b+8>>2])+m|0}}function Gb(a){var d,e,g,b=0;if(yb(a|=0),function(a){var e,g,b=0,d=0,h=0,j=0,k=0,i=(b=0|c[(a|=0)+4>>2])+(52*(h=0|c[a>>2])|0)|0;if(!((0|h)<=0))for(h=0|c[a+12>>2];d=+f[h>>2],a=b+4|0,d=(g=0==(0|c[b+16>>2]))?(k=+f[a>>2],j=+f[b+8>>2],d<k?k:j<d?j:d):(k=+f[b+12>>2],(j=+f[a>>2])+k*((d=(d-j)/k)-(0|~~+q(+d)))),a=b+48|0,+f[(e=b+44|0)>>2]!=d?(c[a>>2]=1,f[e>>2]=d):c[a>>2]=0,g&&(f[h>>2]=d),!(i>>>0<=(b=b+52|0)>>>0);)h=h+4|0}(a+540|0),function(a){var n,b=0,d=0,e=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,o=0,p=0,q=0,r=0,t=0,u=0,s=(b=0|c[(a|=0)+544>>2])+(52*(n=0|c[a+540>>2])|0)|0;if(!((0|n)<=0)){n=0==(0|c[a+620>>2]);do{a:do{if(0==(0|c[b>>2])&&(o=+f[b+44>>2],p=+f[b+20>>2],q=+f[b+24>>2],t=(r=0|c[b+28>>2])+(28*(l=0|c[b+32>>2])|0)|0,0<(0|l))){if(!n)for(l=r;;){h=0|c[l>>2];do{if(1<=(0|h)){if(g=0|c[l+4>>2],d=(e=+f[g>>2])-p,1==(0|h)){h=!(o<p+e)|!(d<o),d=a=0,m=41;break}if(o<d){g=l+16|0,i=1,d=a=0,m=43;break}if(o<p+e)d=a=h=0,m=41;else{for(a=1;!(o<p+(d=+f[g+(a<<2)>>2]));){if(!((0|(a=a+1|0))<(0|h))){m=40;break}e=d}if(40==(0|m)){g=l+16|0,a=h+-(i=1)|0,d=0,m=43;break}d=d-p<o?h=0:(a=a+-1|0,(d-=e)<q?h=0:(h=0,(o-e)/d)),m=41}}else d=a=h=0,m=41}while(0);if(41==(0|m)&&(h|(m=0)==(0|c[(g=l+16|0)>>2])?(i=1&h,m=43):(c[l+24>>2]=1,c[l+20>>2]=1,k=l+8|0,j=l+12|0,h=0)),43==(0|m)&&(e=+f[(j=l+12|(m=0))>>2],h=1&((0|c[(k=l+8|0)>>2])!=(0|a)|(u=e!=d)&(0==d|0==e)),c[l+24>>2]=1&u,c[l+20>>2]=h,h=i),f[j>>2]=d,c[k>>2]=a,c[g>>2]=h,t>>>0<=(l=l+28|0)>>>0)break a}if(!(0|c[b+48>>2]))for(a=r;;)if(c[a+24>>2]=0,t>>>(c[a+20>>2]=0)<=(a=a+28|0)>>>0)break a;l=r;do{h=0|c[l>>2];do{if(1<=(0|h)){if(g=0|c[l+4>>2],d=(e=+f[g>>2])-p,1==(0|h)){h=!(o<p+e)|!(d<o),d=a=0,m=24;break}if(o<d){g=l+16|0,i=1,d=a=0,m=26;break}if(o<p+e)d=a=h=0,m=24;else{for(a=1;!(o<p+(d=+f[g+(a<<2)>>2]));){if(!((0|(a=a+1|0))<(0|h))){m=21;break}e=d}if(21==(0|m)){g=l+16|0,a=h+-(i=1)|0,d=0,m=26;break}d=d-p<o?h=0:(a=a+-1|0,(d-=e)<q?h=0:(h=0,(o-e)/d)),m=24}}else d=a=h=0,m=24}while(0)}while(24==(0|m)&&(h|(m=0)==(0|c[(g=l+16|0)>>2])?(i=1&h,m=26):(c[l+24>>2]=1,c[l+20>>2]=1,k=l+8|0,j=l+12|0,h=0)),26==(0|m)&&(e=+f[(j=l+12|(m=0))>>2],h=1&((0|c[(k=l+8|0)>>2])!=(0|a)|(u=e!=d)&(0==d|0==e)),c[l+24>>2]=1&u,c[l+20>>2]=h,h=i),f[j>>2]=d,c[k>>2]=a,c[g>>2]=h,(l=l+28|0)>>>0<t>>>0)}}while(0)}while((b=b+52|0)>>>0<s>>>0)}}(a),Nb(a),function(a){var l,o,y,z,p,b=0,d=0,e=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,q=0,r=0,s=0,u=0,w=0,x=0,t=(b=0|c[(a|=0)+568>>2])+(36*(p=0|c[a+564>>2])|0)|0;if(!((0|p)<=0)){p=0==(0|c[a+620>>2]);do{o=0|c[b+4>>2];a:do{if(0<(0|o))for(i=0|c[b>>2],e=a=d=j=0;;){if(g=0|c[i+(j<<2)>>2],0|c[g+16>>2]){e=1,a=d=0;break a}if(e=e||0|c[g+24>>2],a=a||0|c[g+20>>2],d=d+(0!=+f[g+12>>2]&1)|0,(0|o)<=(0|(j=j+1|0))){i=d,x=11;break}}else e=a=i=0,x=11}while(0);b:do{if(11==(0|x))if(d=p?a:1,(x=0)!=((a=p?e:1)|d|0)&&(c[b+12>>2]=w=1<<i,q=0|c[b>>2],r=0|c[b+16>>2],s=0|c[b+20>>2],u=r+(w<<2)|0,31!=(0|i))){for(Vc(0|r,0,((e=r+4|0)>>>0<u>>>0?u:e)+~r+4&-4|0),e=s+(w<<2)|0,g=s;f[g>>2]=1,(g=g+4|0)>>>0<e>>>0;);if(1<=(0|o)){if(!i)for(i=0,k=1;;){if(g=0|c[q+(i<<2)>>2],j=0|v(0|c[g+8>>2],k),0==(h=+f[g+12>>2]))for(e=0;c[(n=r+(e<<2)|0)>>2]=(0|c[n>>2])+j,(0|(e=e+1|0))!=(0|w););else c[r>>2]=(0|c[r>>2])+j,f[s>>2]=(1-h)*+f[s>>2];if(k=0|v(0|c[g>>2],k),(0|(i=i+1|0))==(0|o)){e=0;break b}}m=0,n=e=1;do{if(l=0|c[q+(m<<2)>>2],g=0|c[8+l>>2],k=0|v(g,n),0==(h=+f[(j=12+l|0)>>2]))for(g=0;c[(j=r+(g<<2)|0)>>2]=(0|c[j>>2])+k,(0|(g=g+1|0))!=(0|w););else{for(i=0|v(g+1|0,n),c[r>>2]=(0|c[r>>2])+k,f[s>>2]=(1-h)*+f[s>>2],g=1;h=+f[j>>2],c[(y=r+(g<<2)|0)>>2]=((z=0!=(g&e|0))?i:k)+(0|c[y>>2]),f[(y=s+(g<<2)|0)>>2]=(z?h:1-h)*+f[y>>2],(0|(g=g+1|0))!=(0|w););e<<=1}}while(n=0|v(0|c[l>>2],n),(0|(m=m+1|0))!=(0|o));e=0}else e=0}else e=0}while(0)}while(c[b+28>>2]=a,c[b+24>>2]=d,c[b+32>>2]=e,(b=b+36|0)>>>0<t>>>0)}}(a),Ob(a),e=0|c[a+4>>2],d=(b=0|c[a+52>>2])+(e<<2)|0,0<(0|e))for(;g=+f[b>>2],f[b>>2]=g<0?0:1<g?1:g,(b=b+4|0)>>>0<d>>>0;);!function(a,b,d){d|=0;var e=0,f=(b|=0)+(12*(a|=0)|0)|0;if(!((0|a)<=0))for(e=d;;){do{if(0|c[b+8>>2]){if(-1!=(0|(a=0|c[b+4>>2]))&&0==(0|c[d+(a<<2)>>2])){a=0;break}a=0==(0|c[32+(0|c[b>>2])>>2])}else a=0}while(0);if(c[e>>2]=1&a,f>>>0<=(b=b+12|0)>>>0)break;e=e+4|0}}(e,0|c[a+8>>2],0|c[a+40>>2]),function(a){var e,f,i,q,r,b=0,d=0,g=0,h=0,k=0,l=0,o=0,p=0,s=0,t=0,u=0,j=0|c[8+(a|=0)>>2],b=0|c[a>>2],m=0|c[b+724>>2],n=0|c[a+4>>2];if(!((0|n)<=0))for(q=a+28|0,r=a+36|0,i=a+32|0,f=b+976|0,h=g=0;;){if(e=0|c[j+(12*g|0)>>2],6==(0|(u=0!=(0|c[(a=24+e|0)>>2])||0|c[28+e>>2]?6:u))&&(c[((u=0)|c[q>>2])+(g<<2)>>2]=c[(p=12+e|0)>>2],0|c[a>>2])&&(o=0|c[m+(g<<2)>>2],s=(k=0|c[16+e>>2])+((d=0|c[p>>2])<<2)|0,0<(0|d)))for(a=0|c[f>>2],b=(0|c[r>>2])+(h<<2)|0,d=k;c[b>>2]=c[a+((0|c[d>>2])+o<<2)>>2],!(s>>>0<=(d=d+4|0)>>>0);)b=b+4|0;if(0|c[28+e>>2]&&(t=(l=0|c[20+e>>2])+((d=0|c[12+e>>2])<<2)|0,0<(0|d)))for(a=(0|c[i>>2])+(h<<2)|0,b=l;c[a>>2]=c[b>>2],!(t>>>0<=(b=b+4|0)>>>0);)a=a+4|0;if((0|(g=g+1|0))==(0|n))break;h=(0|c[8+e>>2])+h|0}}(a),function(a){ya(12+(a|=0)|0,0|c[36+a>>2],0|c[44+a>>2],0|c[40+a>>2])}(a),function(a){var d,f,g,h,i,j,k,b=0,e=0;if(S=(k=S)+16|0,j=k,i=(b=0|c[308+(a|=0)>>2])+((e=0|c[a+304>>2])<<5)|0,f=0|c[a+40>>2],g=0|c[a+312>>2],h=0|c[a+144>>2],d=0|c[a+264>>2],(0|e)<=0)S=k;else{for(e=g;;){do{if(0|c[b+28>>2]){if(-1!=(0|(a=0|c[b+4>>2]))&&0==(0|c[f+(a<<2)>>2])){a=0;break}if(-1!=(0|(a=0|c[b+8>>2]))&&0==(0|c[g+(a<<2)>>2])){a=0;break}a=0==(0|c[32+(0|c[b>>2])>>2])}else a=0}while(0);switch(a&=1,c[e>>2]=a,0|c[b+12>>2]){case 0:c[h+(c[b+16>>2]<<2)>>2]=a;break;case 1:c[d+(c[b+16>>2]<<2)>>2]=a;break;default:ia(0,2458,j)}if(i>>>0<=(b=b+32|0)>>>0)break;e=e+4|0}S=k}}(a),Bb(a),Cb(a),ta(a),ua(a),function(a){var b=0,d=0,g=(b=0|c[(a|=0)+336>>2])+(20*(d=0|c[a+332>>2])|0)|0,e=0|c[a+40>>2],f=0|c[a+312>>2];if(!((0|d)<=0))for(d=0|c[a+424>>2];;){do{if(0|c[b+12>>2]){if(-1!=(0|(a=0|c[b+4>>2]))&&0==(0|c[e+(a<<2)>>2])){a=0;break}if(-1!=(0|(a=0|c[b+8>>2]))&&0==(0|c[f+(a<<2)>>2])){a=0;break}a=0==(0|c[32+(0|c[b>>2])>>2])}else a=0}while(0);if(c[d>>2]=1&a,g>>>0<=(b=b+20|0)>>>0)break;d=d+4|0}}(a),Db(a),va(a),function(a){var e,f,i,q,r,b=0,d=0,g=0,h=0,k=0,l=0,o=0,p=0,s=0,t=0,u=0,j=0|c[504+(a|=0)>>2],b=0|c[a>>2],m=0|c[b+1192>>2],n=0|c[a+500>>2];if(!((0|n)<=0))for(q=a+524|0,r=a+532|0,i=a+528|0,f=b+1224|0,h=g=0;;){if(e=0|c[j+(24*g|0)>>2],6==(0|(u=0!=(0|c[(a=24+e|0)>>2])||0|c[28+e>>2]?6:u))&&(c[((u=0)|c[q>>2])+(g<<2)>>2]=c[(p=12+e|0)>>2],0|c[a>>2])&&(o=0|c[m+(g<<2)>>2],s=(k=0|c[16+e>>2])+((d=0|c[p>>2])<<2)|0,0<(0|d)))for(a=0|c[f>>2],b=(0|c[r>>2])+(h<<2)|0,d=k;c[b>>2]=c[a+((0|c[d>>2])+o<<2)>>2],!(s>>>0<=(d=d+4|0)>>>0);)b=b+4|0;if(0|c[28+e>>2]&&(t=(l=0|c[20+e>>2])+((d=0|c[12+e>>2])<<2)|0,0<(0|d)))for(a=(0|c[i>>2])+(h<<2)|0,b=l;c[a>>2]=c[b>>2],!(t>>>0<=(b=b+4|0)>>>0);)a=a+4|0;if((0|(g=g+1|0))==(0|n))break;h=(0|c[8+e>>2])+h|0}}(a),function(a){xa(508+(a|=0)|0,0|c[532+a>>2],0|c[536+a>>2],0)}(a),fa(a),ha(a),function(a){var b=0,d=0,g=0,h=0,j=0,i=(b=0|c[8+(a|=0)>>2])+(12*(j=0|c[a+4>>2])|0)|0,e=0|c[a+48>>2];if(!((0|j)<=0))for(j=0|c[a+40>>2],d=e,a=0|c[a+52>>2];0|c[j>>2]&&(g=+f[a>>2],f[d>>2]=g,-1!=(0|(h=0|c[b+4>>2])))&&(f[d>>2]=g*+f[e+(h<<2)>>2]),!(i>>>0<=(b=b+12|0)>>>0);)j=j+4|0,d=d+4|0,a=a+4|0}(a),function(a){var d=0,e=0,f=0,b=0|c[304+(a|=0)>>2];if(!((0|b)<=0))for(d=0|c[312+a>>2],e=0|c[308+a>>2],f=0;0|c[d>>2]&&_[3&c[e+20>>2]](a,f),(0|(f=f+1|0))!=(0|b);)d=d+4|0,e=e+32|0}(a),xb(a),ea(a),function(a){var g,j,b=0,d=0,e=0,h=0,i=0;if(!(0|c[(a|=0)+624>>2]||(g=(b=0|c[a+336>>2])+(20*(h=0|c[a+332>>2])|0)|0,(0|h)<=0)))for(h=0|c[a+424>>2],a=0|c[a+444>>2];;){if(0|c[h>>2]&&(e=0|c[a>>2],i=(d=0|c[b+16>>2])<<1,0<(0|d)))for(d=1;f[(j=e+(d<<2)|0)>>2]=-+f[j>>2],(0|(d=d+2|0))<(0|i););if(g>>>0<=(b=b+20|0)>>>0)break;h=h+4|0,a=a+4|0}}(a),function(a){var n,r,b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,o=0,p=0,q=0|c[(a|=0)+480>>2],j=(r=0|c[a+484>>2])+(28*q|0)|0,b=0|c[a+440>>2],d=0|c[a+44>>2],e=0|c[a+40>>2],f=0|c[a+424>>2];if(!((0|q)<=0)){k=r;do{if(0<(0|(g=0|c[k+4>>2])))for(h=0|c[k+12>>2],i=k+20|0,l=0;p=0|c[h+(l<<4)+4>>2],o=1==(0|c[h+(l<<4)>>2]),c[h+(l<<4)+12>>2]=c[(0==(0|c[(o?e:f)+(p<<2)>>2])?i:(o?d:b)+(p<<2)|0)>>2],(0|(l=l+1|0))!=(0|g););}while((k=k+28|0)>>>0<j>>>0);n=0|c[a+436>>2],o=a+488|0,p=a+492|0,l=a+496|0,m=0;do{if(0<(0|c[(a=r+(28*m|0)+24|0)>>2])){for(b=0|c[o>>2],e=0;c[b+(e<<2)>>2]=-1,(0|(e=e+1|0))<(0|(d=0|c[a>>2])););if(0<(0|d))for(b=0|c[l>>2],d=0;c[b+(d<<2)>>2]=-1,(0|(d=d+1|0))<(0|c[a>>2]););}if(0<(0|c[(k=r+(28*m|0)+4|0)>>2])){for(j=0|c[p>>2],d=0;c[j+(d<<2)>>2]=-1,(0|(d=d+1|0))<(0|(b=0|c[k>>2])););if(0<(0|b))for(e=0|c[r+(28*m|0)+12>>2],g=r+(28*m|0)+20|0,f=0|c[l>>2],i=0;d=(0|c[e+(i<<4)+12>>2])-(0|c[g>>2])|0,b=-1==(0|(b=0|c[(h=f+(d<<2)|0)>>2]))?(0|c[o>>2])+(d<<2)|0:j+(b<<2)|0,c[b>>2]=i,(0|(i=(c[h>>2]=i)+1|0))<(0|c[k>>2]););}if(0<(0|(b=0|c[a>>2]))){i=0|c[o>>2],j=r+(28*m|0)+12|0,d=(h=0)|c[r+(28*m|0)+8>>2];do{if(-1!=(0|(e=0|c[i+(h<<2)>>2]))){for(f=0|c[j>>2],g=0|c[p>>2];d=(b=1==(0|c[f+(e<<4)>>2])?(b=0|c[f+(e<<4)+8>>2],c[r+(28*b|0)+8>>2]=d,0|c[r+(28*b|0)>>2]):(c[n+(c[f+(e<<4)+4>>2]<<2)>>2]=d,1))+d|0,!((0|(e=0|c[g+((k=e)<<2)>>2]))<=(0|k)|-1==(0|e)););b=0|c[a>>2]}}while((0|(h=h+1|0))<(0|b))}}while((0|(m=m+1|0))!=(0|q))}}(a),zb(a),c[a+620>>2]=0}function Nb(a){var l,s,b=0,e=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,t=0,u=0;if(!((0|d[4+(0|c[(a|=0)>>2])>>0])<4||(s=(b=0|c[a+544>>2])+(52*(l=0|c[a+540>>2])|0)|0,(0|l)<=0))){l=0==(0|c[a+620>>2]);do{a:do{if(1==(0|c[b>>2])&&(q=+f[b+44>>2],t=(r=0|c[b+36>>2])+(28*(k=0|c[b+40>>2])|0)|0,0<(0|k))){if(!l)for(j=r;;){g=0|c[j>>2];do{if(2<=(0|g)&&(o=0|c[j+4>>2],!(q<=(p=+f[o>>2])))){for(h=1,i=p;;){if(a=h+1|0,q<(e=+f[o+(h<<2)>>2])){k=25;break}if(!((0|a)<(0|g))){k=26;break}h=a,i=e}if(25==(0|k)){a=h+-1|0,e=(q-i)/(e-i);break}if(26==(0|k)){a=g+-1|0,e=0;break}}else e=a=0}while(0);if(i=+f[(h=j+16|0)>>2],g=1&((0|c[(k=j+12|0)>>2])!=(0|a)|(u=i!=e)&(0==e|0==i)),c[j+24>>2]=1&u,c[j+20>>2]=g,f[h>>2]=e,c[k>>2]=a,t>>>0<=(j=j+28|0)>>>0)break a}if(!(0|c[b+48>>2]))for(a=r;;)if(c[a+24>>2]=0,t>>>(c[a+20>>2]=0)<=(a=a+28|0)>>>0)break a;j=r;do{g=0|c[j>>2];do{if(2<=(0|g)&&(m=0|c[j+4>>2],!(q<=(n=+f[m>>2])))){for(h=1,i=n;;){if(a=h+1|0,q<(e=+f[m+(h<<2)>>2])){k=17;break}if(!((0|a)<(0|g))){k=18;break}h=a,i=e}if(17==(0|k)){a=h+-1|0,e=(q-i)/(e-i);break}if(18==(0|k)){a=g+-1|0,e=0;break}}else e=a=0}while(0)}while(i=+f[(k=j+16|0)>>2],h=1&((0|c[(u=j+12|0)>>2])!=(0|a)|(g=i!=e)&(0==e|0==i)),c[j+24>>2]=1&g,c[j+20>>2]=h,f[k>>2]=e,c[u>>2]=a,(j=j+28|0)>>>0<t>>>0)}}while(0)}while((b=b+52|0)>>>0<s>>>0)}}function Ob(a){var q,r,s,t,b=0,e=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;if(!((0|d[4+(0|c[(a|=0)>>2])>>0])<4||(t=(b=0|c[a+592>>2])+(48*(s=0|c[a+588>>2])|0)|0,(0|s)<=0))){s=0==(0|c[a+620>>2]);do{if(a=0|c[b>>2],g=s?0|c[a+24>>2]:1,(l=s?0|c[a+20>>2]:1)|g){k=0|c[a+12>>2],e=+f[a+16>>2],j=(0|k)==(0|(a=0|c[a+8>>2]));do{if(0!=e){if(i=k+1|0,j){e=(g=a=c[b+8>>2]=1)-e,j=11;break}a=(0|i)==(0|a)?1:2,j=10;break}}while(a=1&(1^j),j=10,0);10==(0|j)&&(j=0,c[b+8>>2]=a,g?(i=k,a=l,j=11):(i=k,a=l,g=0)),11==(0|j)&&(f[b+20>>2]=1-e,f[b+24>>2]=e),a?(c[b+12>>2]=i,c[b+16>>2]=i+1):a=0}else a=l;q=0|c[b+36>>2];a:do{if(0<(0|q)){if(r=0|c[b+40>>2],!s)for(p=0,e=1;;){o=0|c[r+(p<<2)>>2],j=0|c[o+4>>2],k=0|c[o+8>>2],l=0|c[o+12>>2],n=+f[44+(0|c[o>>2])>>2];do{if(1<=(0|l)){if(1==(0|l)){h=+f[k>>2];break}if(n<=(h=+f[j>>2])){h=+f[k>>2];break}for(i=1;;){if(n<(m=+f[j+(i<<2)>>2])){j=40;break}if(!((0|(i=i+1|0))<(0|l))){j=41;break}h=m}if(40==(0|j)){h=(1-(h=(n-h)/(m-h)))*+f[k+(i+-1<<2)>>2]+h*+f[k+(i<<2)>>2];break}if(41==(0|j)){h=+f[k+(l+-1<<2)>>2];break}}else h=1}while(0);if(e=e<(f[o+16>>2]=h)?e:h,(0|(p=p+1|0))==(0|q))break a}p=0,e=1;do{if(o=0|c[r+(p<<2)>>2],i=0|c[o>>2],0|c[i+48>>2]){j=0|c[o+4>>2],k=0|c[o+8>>2],l=0|c[o+12>>2],n=+f[i+44>>2];do{if(1<=(0|l)){if(1==(0|l)){h=+f[k>>2];break}if(n<=(h=+f[j>>2])){h=+f[k>>2];break}for(i=1;;){if(n<(m=+f[j+(i<<2)>>2])){j=28;break}if(!((0|(i=i+1|0))<(0|l))){j=27;break}h=m}if(27==(0|j)){h=+f[k+(l+-1<<2)>>2];break}if(28==(0|j)){h=(1-(h=(n-h)/(m-h)))*+f[k+(i+-1<<2)>>2]+h*+f[k+(i<<2)>>2];break}}else h=1}while(0);f[o+16>>2]=h}else h=+f[o+16>>2]}while(e=e<h?e:h,(0|(p=p+1|0))!=(0|q))}else e=1}while(0)}while(f[b+44>>2]=e,c[b+28>>2]=a,c[b+32>>2]=g,(b=b+48|0)>>>0<t>>>0)}}function _b(b,d,e){b|=0,d|=0,e|=0;var f,i,j,h=0,g=S;S=S+144|0,Uc(0|(i=g),640,144),c[i+48>>2]=h=(h=-2-b|0)>>>0<256?h:256,c[(f=i+20|0)>>2]=b,j=(c[i+44>>2]=b)+h|0,c[(b=i+16|0)>>2]=j,c[i+28>>2]=j,$b(i,d,e),0|h&&(j=0|c[f>>2],a[j+(((0|j)==(0|c[b>>2]))<<31>>31)>>0]=0),S=g}function $b(a,b,c){cc(a|=0,b|=0,c|=0)}function ac(b,e,f,g,h,i){b|=0,e=+e,f|=0,g|=0,h|=0,i|=0;var C,B,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,w=0,x=0,y=0,A=0,D=0,E=0,F=0,G=0,H=S;S=S+560|0,m=H+32|0,E=12+(l=(F=G=H)+540|0)|(c[(t=H+536|0)>>2]=0),rc(e),B=(0|(j=0|z()))<0?(rc(e=-e),j=0|z(),D=1,2539):(D=0!=(2049&h|0)&1,0==(2048&h|0)?0==(1&h|0)?2540:2545:2542);do{if(!0&2146435072==(2146435072&j|0))G=0!=(32&i|0),mc(b,32,f,j=D+3|0,-65537&h),ec(b,B,D),ec(b,e!=e|!1?G?2566:2570:G?2558:2562,3),mc(b,32,f,j,8192^h);else{if((j=0!=(q=2*+sc(e,t)))&&(c[t>>2]=(0|c[t>>2])-1),97==(0|(w=32|i))){r=0==(0|(o=32&i))?B:9+B|0,p=2|D,j=12-g|0;do{if(!(11<g>>>0|0==(0|j))){for(e=8;e*=16,0!=(0|(j=j+-1|0)););if(45==(0|a[r>>0])){e=-(e+(-q-e));break}e=q+e-e;break}}while(e=q,0);for((0|(j=0|kc(j=(0|(k=0|c[t>>2]))<0?0-k|0:k,((0|j)<0)<<31>>31,E)))==(0|E)&&(a[(j=l+11|0)>>0]=48),a[j+-1>>0]=43+(k>>31&2),a[(n=j+-2|0)>>0]=i+15,k=(0|g)<1,l=0==(8&h|0),j=G;m=j+1|0,a[j>>0]=o|d[480+(D=~~e)>>0],e=16*(e-(0|D)),1!=(m-F|0)||l&k&0==e||(a[m>>0]=46,m=j+2|0),0!=e;)j=m;mc(b,32,f,E=(j=0!=(0|g)&&(-2-F+m|0)<(0|g)?g+2+(k=E)-(l=n)|0:(k=E)-F-(l=n)+m|0)+p|0,h),ec(b,r,p),mc(b,48,f,E,65536^h),ec(b,G,F=m-F|0),mc(b,48,j-(F+(G=k-l|0))|0,0,0),ec(b,n,G),mc(b,32,f,E,8192^h),j=E;break}for(k=(0|g)<0?6:g,e=j?(l=(0|c[t>>2])-28|0,c[t>>2]=l,268435456*q):(l=0|c[t>>2],q),m=C=(0|l)<0?m:m+288|0;c[m>>2]=y=~~e>>>0,m=m+4|0,0!=(e=1e9*(e-(y>>>0))););if(y=C,0<(0|l)){j=C;do{if(o=(0|l)<29?l:29,j>>>0<=(l=m+-4|0)>>>0){for(n=0;s=0|Mc(0|(s=0|Sc(0|c[l>>2],0,0|o)),0|z(),0|n,0),x=0|Mc(0|s,0|(u=0|z()),0|(x=0|Lc(0|(n=0|Qc(0|s,0|u,1e9,0)),0|z(),-1e9,-1)),0|z()),z(),c[l>>2]=x,j>>>0<=(l=l+-4|0)>>>0;);n&&(c[(j=j+-4|0)>>2]=n)}a:do{if(j>>>0<m>>>0)for(;;){if(0|c[(l=m+-4|0)>>2])break a;if(!(j>>>0<l>>>0)){m=l;break}m=l}}while(0)}while(l=(0|c[t>>2])-o|0,0<(0|(c[t>>2]=l)))}else j=C;if((0|l)<0){g=1+((k+25|0)/9|0)|0,s=102==(0|w);do{if(r=(0|(r=0-l|0))<9?r:9,j>>>0<m>>>0){for(o=(1<<r)-1|0,n=r?1e9>>>r:1e9,p=0,l=j;x=0|c[l>>2],c[l>>2]=(r?x>>>r:x)+p,p=0|v(x&o,n),(l=l+4|0)>>>0<m>>>0;);j=0==(0|c[j>>2])?j+4|0:j,p&&(c[m>>2]=p,m=m+4|0)}else j=0==(0|c[j>>2])?j+4|0:j}while(m=(0|g)<((x=m-(l=s?C:j)|0)>>2|0)?l+(g<<2)|0:m,l=(0|c[t>>2])+r|0,(0|(c[t>>2]=l))<0);s=m}else s=m;if(j>>>0<s>>>0){if(l=9*((y-j|0)>>2)|0,10<=(n=0|c[j>>2])>>>0)for(m=10;l=l+1|0,(m=10*m|0)>>>0<=n>>>0;);}else l=0;if((0|(m=k-(102==(0|w)?0:l)+(((u=0!=(0|k))&(t=103==(0|w)))<<31>>31)|0))<((9*((x=s-y|0)>>2)|0)-9|0)){if(g=C+4+((m=(0|(x=m+9216|0))/9|0)-1024<<2)|0,(0|(m=x+(0|v(m,-9))|0))<8)for(n=10;n=10*n|0,(0|m)<7;)m=m+1|0;else n=10;if((p=(g+4|0)==(0|s))&0==(0|(o=(o=0|c[g>>2])-(r=0|v(m=(o>>>0)/(n>>>0)|0,n))|0)))m=g;else if(q=0==(1&m|0)?9007199254740992:9007199254740994,e=o>>>0<(x=n>>>1)>>>0?.5:p&(0|o)==(0|x)?1:1.5,D&&(q=(x=45==(0|a[B>>0]))?-q:q,e=x?-e:e),c[g>>2]=r,q+e!=q){if(999999999<(c[g>>2]=x=r+n|0)>>>0)for(l=g;(m=l+-4|0)>>>(c[l>>2]=0)<j>>>0&&(c[(j=j+-4|0)>>2]=0),x=1+(0|c[m>>2])|0,999999999<(c[m>>2]=x)>>>0;)l=m;else m=g;if(l=9*((y-j|0)>>2)|0,10<=(o=0|c[j>>2])>>>0)for(n=10;l=l+1|0,(n=10*n|0)>>>0<=o>>>0;);}else m=g;x=j,j=(w=m+4|0)>>>0<s>>>0?w:s}else x=j,j=s;r=0-l|0;b:do{if(x>>>0<j>>>0)for(;;){if(0|c[(m=j+-4|0)>>2]){s=1,w=j;break b}if(!(x>>>0<m>>>0)){s=0,w=m;break}j=m}else s=0,w=j}while(0);do{if(t){if(n=(0|l)<(0|(j=k+(1&(1^u))|0))&-5<(0|l)?(k=j+-1-l|0,i+-1|0):(k=j+-1|0,i+-2|0),!(8&h)){if(s&&0!=(0|(A=0|c[w+-4>>2])))if((A>>>0)%10|0)m=0;else for(j=10,m=0;m=m+1|0,!((A>>>0)%((j=10*j|0)>>>0)|0););else m=9;if(j=(9*((w-y|0)>>2)|0)-9|0,102==(32|n)){k=(0|k)<(0|(i=0<(0|(i=j-m|0))?i:0))?k:i;break}k=(0|k)<(0|(i=0<(0|(i=j+l-m|0))?i:0))?k:i;break}}else n=i}while(0);if(o=(g=0!=(0|k))?1:h>>>3&1,p=102==(32|n))j=(u=0)<(0|l)?l:0;else{if(((m=E)-(j=0|kc(j=(0|l)<0?r:l,((0|j)<0)<<31>>31,E))|0)<2)for(;a[(j=j+-1|0)>>0]=48,(m-j|0)<2;);a[j+-1>>0]=43+(l>>31&2),a[(j=j+-2|0)>>0]=n,j=m-(u=j)|0}if(mc(b,32,f,j=D+1+k+o+j|0,h),ec(b,B,D),mc(b,48,f,j,65536^h),p){p=r=G+9|0,n=G+8|0,m=o=C>>>0<x>>>0?C:x;do{if(l=0|kc(0|c[m>>2],0,r),(0|m)==(0|o))(0|l)==(0|r)&&(a[n>>0]=48,l=n);else if(G>>>0<l>>>0)for(Vc(0|G,48,l-F|0);G>>>0<(l=l+-1|0)>>>0;);}while(ec(b,l,p-l|0),(m=m+4|0)>>>0<=C>>>0);if(0==(8&h|0)&(1^g)||ec(b,2574,1),m>>>0<w>>>0&0<(0|k))for(;;){if(G>>>0<(l=0|kc(0|c[m>>2],0,r))>>>0)for(Vc(0|G,48,l-F|0);G>>>0<(l=l+-1|0)>>>0;);if(ec(b,l,(0|k)<9?k:9),l=k+-9|0,!((m=m+4|0)>>>0<w>>>0&9<(0|k))){k=l;break}k=l}mc(b,48,k+9|0,9,0)}else{if(x>>>0<(g=s?w:x+4|0)>>>0&-1<(0|k)){t=0==(8&h|0),s=r=G+9|0,n=0-F|0,p=G+8|0,o=x;do{(0|(l=0|kc(0|c[o>>2],0,r)))==(0|r)&&(a[p>>0]=48,l=p);do{if((0|o)==(0|x)){if(m=l+1|0,ec(b,l,1),t&(0|k)<1){l=m;break}ec(b,2574,1),l=m}else{if(l>>>0<=G>>>0)break;for(Vc(0|G,48,l+n|0);G>>>0<(l=l+-1|0)>>>0;);}}while(0)}while(ec(b,l,(0|(F=s-l|0))<(0|k)?F:k),(o=o+4|0)>>>0<g>>>0&-1<(0|(k=k-F|0)))}mc(b,48,k+18|0,18,0),ec(b,u,E-u|0)}mc(b,32,f,j,8192^h)}}while(0);return S=H,0|((0|j)<(0|f)?f:j)}function cc(b,d,e){b|=0,d|=0,e|=0;var h,i,j,k,l,m,n,o,f=0,g=0,p=S;for(S=S+224|0,l=p+208|0,n=p+80|0,g=40+(f=o=(m=p)+160|0)|0;(0|(f=f+4|(c[f>>2]=0)))<(0|g););c[l>>2]=c[e>>2],0<=(0|dc(0,d,l,n,o))&&(k=32&(e=0|c[b>>2]),(0|a[b+74>>0])<1&&(c[b>>2]=-33&e),0|c[(g=b+48|0)>>2]?dc(b,d,l,n,o):(e=0|c[(f=b+44|0)>>2],c[f>>2]=m,c[(h=b+28|0)>>2]=m,c[(j=b+20|0)>>2]=m,c[g>>2]=80,c[(i=b+16|0)>>2]=m+80,dc(b,d,l,n,o),0|e&&(X[3&c[b+36>>2]](b,0,0),c[f>>2]=e,c[g>>2]=0,c[i>>2]=0,c[h>>2]=0,c[j>>2]=0)),c[b>>2]=c[b>>2]|k),S=p}function dc(d,e,f,h,i){d|=0,f|=0,h|=0,i|=0;var v,w,x,y,A,B,C,D,E,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,G=0,F=S;S=S+64|0,B=F+40|0,E=(w=F)+48|0,C=F+60|0,c[(D=F+56|0)>>2]=e|=0,A=0!=(0|d),y=v=w+40|0,w=w+39|0,x=4+E|0,m=j=e=0;a:for(;;){do{do{if(-1<(0|e)){if((2147483647-e|0)<(0|j)){c[922]=61,e=-1;break}e=j+e|0;break}}while(0);if(p=0|c[D>>2],!((j=0|a[p>>0])<<24>>24)){u=91;break a}k=p;b:for(;;){switch(j<<24>>24){case 37:u=10;break b;case 0:j=k;break b}c[D>>2]=t=k+1|0,j=0|a[t>>0],k=t}c:do{if(10==(0|u)){u=0,j=l=k;do{if(37!=(0|a[l+1>>0]))break c}while(j=j+1|0,c[D>>2]=l=l+2|0,37==(0|a[l>>0]))}}while(0)}while(j=j-p|0,A&&ec(d,p,j),0!=(0|j));if(l=0|c[D>>2],o=0|fc(j=0|a[l+1>>0])?(k=(o=36==(0|a[l+2>>0]))?3:1,r=o?j+-48|0:-1,o?1:m):(r=-(k=1),m),c[D>>2]=k=l+k|0,31<(l=((j=0|a[k>>0])<<24>>24)-32|0)>>>0|0==(1<<l&75913|0))n=0;else for(j=0;;){if(m=1<<l|j,c[D>>2]=k=k+1|0,31<(l=((j=0|a[k>>0])<<24>>24)-32|0)>>>0|0==(1<<l&75913|0)){n=m;break}j=m}if(j<<24>>24==42){if(0!=(0|fc(j=0|a[(l=k+1|0)>>0]))&&36==(0|a[k+2>>0]))c[i+(j+-48<<2)>>2]=10,m=1,j=k+3|0,k=0|c[h+((0|a[l>>0])-48<<3)>>2];else{if(0|o){e=-1;break}A?(m=3+(0|c[f>>2])&-4,k=0|c[m>>2],c[f>>2]=m+4,m=0,j=l):(j=l,k=m=0)}l=c[D>>2]=j,q=(s=(0|k)<0)?8192|n:n,t=m,s=s?0-k|0:k}else{if((0|(j=0|gc(D)))<0){e=-1;break}l=0|c[D>>2],q=n,t=o,s=j}do{if(46==(0|a[l>>0])){if(42!=(0|a[(j=l+1|0)>>0])){c[D>>2]=j,n=0|gc(D),j=0|c[D>>2];break}if(0|fc(k=0|a[(j=l+2|0)>>0])&&36==(0|a[l+3>>0])){c[i+(k+-48<<2)>>2]=10,n=0|c[h+((0|a[j>>0])-48<<3)>>2],c[D>>2]=j=l+4|0;break}if(0|t){e=-1;break a}A?(o=3+(0|c[f>>2])&-4,k=0|c[o>>2],c[f>>2]=o+4):k=0,c[D>>2]=j,n=k}else j=l,n=-1}while(0);for(o=0;;){if(57<((0|a[j>>0])-65|0)>>>0){e=-1;break a}if(c[D>>2]=k=j+1|0,!(((m=255&(l=0|a[(0|a[j>>0])-65+(16+(58*o|0))>>0]))-1|0)>>>0<8))break;j=k,o=m}if(!(l<<24>>24)){e=-1;break}k=-1<(0|r);do{if(l<<24>>24==19){if(k){e=-1;break a}u=52}else{if(k){c[i+(r<<2)>>2]=m,r=0|c[4+(m=h+(r<<3)|0)>>2],c[(u=B)>>2]=c[m>>2],c[u+4>>2]=r,u=52;break}if(!A){e=0;break a}hc(B,m,f),u=53}}while(0);52==(0|u)&&(u=0,A?u=53:j=0);d:do{if(53==(0|u)){l=(u=0)!=(0|o)&3==(15&(l=0|a[j>>0])|0)?-33&l:l,j=-65537&q,r=0==(8192&q|0)?q:j;e:do{switch(0|l){case 110:switch((255&o)<<24>>24){case 0:case 1:c[c[B>>2]>>2]=e,j=0;break d;case 2:j=0|c[B>>2],c[j>>2]=e,c[j+4>>2]=((0|e)<0)<<31>>31,j=0;break d;case 3:b[c[B>>2]>>1]=e,j=0;break d;case 4:a[c[B>>2]>>0]=e,j=0;break d;case 6:c[c[B>>2]>>2]=e,j=0;break d;case 7:j=0|c[B>>2],c[j>>2]=e,c[j+4>>2]=((0|e)<0)<<31>>31,j=0;break d;default:j=0;break d}case 112:j=8|r,k=8<n>>>0?n:8,m=120,u=65;break;case 88:case 120:j=r,k=n,m=l,u=65;break;case 111:n=0==(8&(j=r)|0)|(0|(l=y-(o=0|function(b,c,d){if(d|=0,!(0==(0|(b|=0))&0==(0|(c|=0))))for(;a[(d=d+-1|0)>>0]=7&b|48,!(0==(0|(b=0|Rc(0|b,0|c,3)))&0==(0|(c=0|z()))););return 0|d}(p=0|c[(q=B)>>2],q=0|c[q+4>>2],v))|0))<(0|n)?n:l+1|0,l=0,k=2522,u=71;break;case 105:case 100:if(j=0|c[(k=B)>>2],(0|(k=0|c[k+4>>2]))<0){j=0|Nc(0,0,0|j,0|k),k=0|z(),c[(l=B)>>2]=j,c[l+4>>2]=k,l=1,m=2522,u=70;break e}l=0!=(2049&r|0)&1,m=0==(2048&r|0)?0==(1&r|0)?2522:2524:2523,u=70;break e;case 117:j=0|c[(k=B)>>2],k=0|c[k+4>>2],l=0,m=2522,u=70;break;case 99:a[w>>0]=c[B>>2],p=w,o=j,m=1,l=0,k=2522,j=y;break;case 115:p=q=0==(0|(q=0|c[B>>2]))?2532:q,o=j,m=(G=0==(0|(r=0|function(b,d){b|=0;var e=0,f=0,e=0!=(0|(d|=0));a:do{if(e&0!=(3&b|0))for(;;){if(!(0|a[b>>0]))break a;if(!((e=0!=(0|(d=d+-1|0)))&0!=(3&(b=b+1|0)|0))){f=5;break}}else f=5}while(0);b:do{if(5==(0|f)){do{if(e){if(!(0|a[b>>0])){if(d)break b;break}c:do{if(3<d>>>0)for(;;){if((-2139062144&(e=0|c[b>>2])^-2139062144)&e+-16843009|0)break c;if(b=b+4|0,(d=d+-4|0)>>>0<=3){f=11;break}}else f=11}while(0);if(11==(0|f)&&!d)break;for(;;){if(!(0|a[b>>0]))break b;if(!(d=d+-1|0))break;b=b+1|0}}}while(0);b=0}}while(0);return 0|b}(q,n))))?n:r-q|0,l=0,k=2522,j=G?q+n|0:r;break;case 67:c[E>>2]=c[B>>2],c[x>>2]=0,l=c[B>>2]=E,n=-1,u=78;break;case 83:if(n){l=0|c[B>>2],u=78;break e}mc(d,32,s,0,r),j=0,u=88;break e;case 65:case 71:case 70:case 69:case 97:case 103:case 102:case 101:j=0|ac(d,+g[B>>3],s,n,r,l);break d;default:o=r,m=n,l=0,k=2522,j=y}}while(0);f:do{if(65==(0|u))o=0|ic(p=0|c[(q=B)>>2],q=0|c[q+4>>2],v,32&m),n=k,l=(G=0==(8&j|0)|0==(0|p)&0==(0|q))?0:2,k=G?2522:2522+(m>>>4)|0,u=71;else if(70==(0|u))o=0|kc(p=j,q=k,v),j=r,k=m,u=71;else if(78==(0|u)){for(j=u=0,o=l;k=0|c[o>>2];){if((m=(0|(k=0|nc(C,k)))<0)|(n-j|0)>>>0<k>>>0){u=82;break}if(!((j=k+j|0)>>>0<n>>>0))break;o=o+4|0}if(82==(0|u)&&(u=0,m)){e=-1;break a}if(mc(d,32,s,j,r),j)for(m=0;;){if(!(k=0|c[l>>2])){u=88;break f}if((0|j)<(0|(m=(k=0|nc(C,k))+m|0))){u=88;break f}if(ec(d,C,k),j>>>0<=m>>>0){u=88;break}l=l+4|0}else j=0,u=88}}while(0);if(71==(0|u))G=(u=0)!=(0|n)|(m=0!=(0|p)|0!=(0|q)),m=y-o+(1&(1^m))|0,p=G?o:v,o=-1<(0|n)?-65537&j:j,m=G?(0|m)<(0|n)?n:m:0,j=y;else if(88==(0|u)){u=0,mc(d,32,s,j,8192^r),j=(0|j)<(0|s)?s:j;break}mc(d,32,j=(0|s)<(0|(G=(q=(0|m)<(0|(r=j-p|0))?r:m)+l|0))?G:s,G,o),ec(d,k,l),mc(d,48,j,G,65536^o),mc(d,48,q,r,0),ec(d,p,r),mc(d,32,j,G,8192^o)}}while(0);m=t}g:do{if(91==(0|u)&&!d)if(m){for(e=1;j=0|c[i+(e<<2)>>2];)if(hc(h+(e<<3)|0,j,f),10<=(e=e+1|0)>>>0){e=1;break g}for(j=0;;){if(e=e+1|0,0|j){e=-1;break g}if(10<=e>>>0){e=1;break g}j=0|c[i+(e<<2)>>2]}}else e=0}while(0);return S=F,0|e}function ec(a,b,d){b|=0,d|=0,32&c[(a|=0)>>2]||pc(b,d,a)}function fc(a){return((0|a)-48|0)>>>0<10|0}function gc(b){var d=0,e=0,f=0,e=0|c[(b|=0)>>2];if(0|fc((d=0|a[e>>0])<<24>>24))for(f=d,d=0;d=(10*d|0)-48+(f<<24>>24)|0,c[b>>2]=e=e+1|0,0!=(0|fc((f=0|a[e>>0])<<24>>24)););else d=0;return 0|d}function hc(a,b,d){a|=0,b|=0,d|=0;var h,e=0,f=0;a:do{if(b>>>0<=20)switch(0|b){case 9:e=3+(0|c[d>>2])&-4,b=0|c[e>>2],c[d>>2]=e+4,c[a>>2]=b;break a;case 10:e=3+(0|c[d>>2])&-4,b=0|c[e>>2],c[d>>2]=e+4,c[(e=a)>>2]=b,c[e+4>>2]=((0|b)<0)<<31>>31;break a;case 11:e=3+(0|c[d>>2])&-4,b=0|c[e>>2],c[d>>2]=e+4,c[(e=a)>>2]=b,c[e+4>>2]=0;break a;case 12:e=7+(0|c[d>>2])&-8,f=0|c[(b=e)>>2],b=0|c[b+4>>2],c[d>>2]=e+8,c[(e=a)>>2]=f,c[e+4>>2]=b;break a;case 13:f=3+(0|c[d>>2])&-4,e=0|c[f>>2],c[d>>2]=f+4,c[(f=a)>>2]=e=(65535&e)<<16>>16,c[f+4>>2]=((0|e)<0)<<31>>31;break a;case 14:f=3+(0|c[d>>2])&-4,e=0|c[f>>2],c[d>>2]=f+4,c[(f=a)>>2]=65535&e,c[f+4>>2]=0;break a;case 15:f=3+(0|c[d>>2])&-4,e=0|c[f>>2],c[d>>2]=f+4,c[(f=a)>>2]=e=(255&e)<<24>>24,c[f+4>>2]=((0|e)<0)<<31>>31;break a;case 16:f=3+(0|c[d>>2])&-4,e=0|c[f>>2],c[d>>2]=f+4,c[(f=a)>>2]=255&e,c[f+4>>2]=0;break a;case 17:f=7+(0|c[d>>2])&-8,h=+g[f>>3],c[d>>2]=f+8,g[a>>3]=h;break a;case 18:!function(a,b){a|=0;var e=7+(0|c[(b|=0)>>2])&-8,d=+g[e>>3];c[b>>2]=8+e,g[a>>3]=d}(a,d);break a;default:break a}}while(0)}function ic(b,c,e,f){if(e|=0,f|=0,!(0==(0|(b|=0))&0==(0|(c|=0))))for(;a[(e=e+-1|0)>>0]=0|d[480+(15&b)>>0]|f,!(0==(0|(b=0|Rc(0|b,0|c,4)))&0==(0|(c=0|z()))););return 0|e}function kc(b,c,d){d|=0;var e,f=0,g=0;if(0<(c|=0)>>>0|0==(0|c)&4294967295<(b|=0)>>>0)for(;g=0|Mc(0|(e=b),0|(f=c),0|(g=0|Lc(0|(b=0|Qc(0|b,0|c,10,0)),0|(c=0|z()),-10,-1)),0|z()),z(),a[(d=d+-1|0)>>0]=255&g|48,9<f>>>0|9==(0|f)&4294967295<e>>>0;);if(b)for(;f=255&((g=b)+(0|v(b=(b>>>0)/10|0,-10))|48),a[(d=d+-1|0)>>0]=f,10<=g>>>0;);return 0|d}function mc(a,b,c,d,e){a|=0,b|=0;var f,g=S;if(S=S+256|0,f=g,(0|(d|=0))<(0|(c|=0))&0==(73728&(e|=0)|0)){if(Vc(0|f,b<<24>>24|0,0|((e=c-d|0)>>>0<256?e:256)),255<e>>>0){for(d=e;ec(a,f,256),255<(d=d+-256|0)>>>0;);e&=255}ec(a,f,e)}S=g}function nc(a,b){return b|=0,0|((a|=0)?0|oc(a,b):0)}function oc(b,d){b|=0,d|=0;do{if(b){if(d>>>0<128){a[b>>0]=d,b=1;break}if(!(0|c[916])){if(57216==(-128&d|0)){a[b>>0]=d,b=1;break}c[922]=25,b=-1;break}if(d>>>0<2048){a[b>>0]=d>>>6|192,a[b+1>>0]=63&d|128,b=2;break}if(d>>>0<55296|57344==(-8192&d|0)){a[b>>0]=d>>>12|224,a[b+1>>0]=d>>>6&63|128,a[b+2>>0]=63&d|128,b=3;break}if((d+-65536|0)>>>0<1048576){a[b>>0]=d>>>18|240,a[b+1>>0]=d>>>12&63|128,a[b+2>>0]=d>>>6&63|128,a[b+3>>0]=63&d|128,b=4;break}c[922]=25,b=-1;break}}while(b=1,0);return 0|b}function pc(b,d,e){b|=0,d|=0;var i,f=0,g=0,h=0;(f=0|c[(g=16+(e|=0)|0)>>2])?h=5:0|function(b){var d=0,e=0|a[(d=74+(b|=0)|0)>>0];return a[d>>0]=255+e|e,0|(d=8&(d=0|c[b>>2])?(c[b>>2]=32|d,-1):(c[8+b>>2]=0,d=(c[4+b>>2]=0)|c[44+b>>2],c[28+b>>2]=d,c[20+b>>2]=d,c[16+b>>2]=d+(0|c[48+b>>2]),0))}(e)||(f=0|c[g>>2],h=5);a:do{if(5==(0|h)){if((f-(g=h=0|c[(i=e+20|0)>>2])|0)>>>0<d>>>0){X[3&c[e+36>>2]](e,b,d);break}b:do{if((0|a[e+75>>0])<0|0==(0|d))f=d;else{for(h=d;10!=(0|a[b+(f=h+-1|0)>>0]);){if(!f){f=d;break b}h=f}if((0|X[3&c[e+36>>2]](e,b,h))>>>0<h>>>0)break a;g=0|c[i>>2],f=d-h|0,b=b+h|0}}while(0);Uc(0|g,0|b,0|f),c[i>>2]=(0|c[i>>2])+f}}while(0)}function rc(a){g[h>>3]=a=+a,a=0|c[h>>2],y(0|c[h+4>>2])}function sc(a,b){b|=0;var e,f,d=0;switch(g[h>>3]=a=+a,f=0|Rc(0|(d=0|c[h>>2]),0|(e=0|c[h+4>>2]),52),z(),2047&f){case 0:d=0!=a?(a=+sc(0x10000000000000000*a,b),(0|c[b>>2])-64|0):0,c[b>>2]=d;break;case 2047:break;default:c[b>>2]=(2047&f)-1022,c[h>>2]=d,c[h+4>>2]=-2146435073&e|1071644672,a=+g[h>>3]}return+a}function uc(b){var g,c=0,e=0,f=0,c=0|a[(b|=0)>>0];a:do{if(c<<24>>24)for(e=b,f=4,b=1033;;){if(!(c<<24>>24==(g=0|a[b>>0])<<24>>24&0!=(0|(f=f+-1|0))&g<<24>>24!=0))break a;if(b=b+1|0,!((c=0|a[(e=e+1|0)>>0])<<24>>24)){c=0;break}}else c=0,b=1033}while(0);return(255&c)-(0|d[b>>0])|0}function xc(a,b,d){b|=0,d|=0;var g,h,i,e=0,f=0,j=S;S=S+240|0,c[(i=j)>>2]=a|=0;a:do{if(1<(0|b))for(f=e=a,a=1;;){if(-1<(0|oa(e,g=(f=f+-4|0)+(0-(0|c[d+((h=b+-2|0)<<2)>>2]))|0))&&-1<(0|oa(e,f)))break a;if(e=i+(a<<2)|0,a=a+1|0,(0|(b=-1<(0|oa(g,f))?(f=c[e>>2]=g,b+-1|0):(c[e>>2]=f,h)))<=1)break a;e=0|c[i>>2]}else a=1}while(0);Dc(i,a),S=j}function yc(a,b){var d=0,e=0,f=4+(a|=0)|0;31<(b|=0)>>>0?(d=0|c[f>>2],c[a>>2]=d,b=b+-32|(e=c[f>>2]=0)):(d=0|c[a>>2],e=0|c[f>>2]),c[a>>2]=e<<32-b|(b?d>>>b:d),c[f>>2]=b?e>>>b:e}function zc(a,b,d,e,f,g){a|=0,d|=0,e|=0,f|=0,g|=0;var j,k,l,h=0,i=0,m=S;S=S+240|0,c[(k=(l=m)+232|0)>>2]=b|=0,c[(j=4+k|0)>>2]=d,c[l>>2]=a;a:do{if(1!=(0|b)|0!=(0|d)&&1<=(0|oa(h=a+(0-(0|c[g+(e<<2)>>2]))|0,a)))for(b=h,i=1,h=0==(0|f);;){if(h&1<(0|e)){if(-1<(0|oa(h=a+-4|0,b))){b=a,h=i,d=10;break a}if(-1<(0|oa(h+(0-(0|c[g+(e+-2<<2)>>2]))|0,b))){b=a,h=i,d=10;break a}}if(d=i+1|0,c[l+(i<<2)>>2]=b,yc(k,f=0|Bc(k)),e=f+e|0,!(1!=(0|c[k>>2])|0!=(0|c[j>>2]))){h=d,d=10;break a}if((0|oa(h=b+(0-(0|c[g+(e<<2)>>2]))|0,0|c[l>>2]))<1){h=d,d=10;break}a=b,b=h,i=d,h=1}else d=9}while(0);9==(0|d)&&0==(0|f)&&(b=a,h=1,d=10),10==(0|d)&&(Dc(l,h),xc(b,e,g)),S=m}function Ac(a,b){var d=0,e=0,f=4+(a|=0)|0;31<(b|=0)>>>0?(d=0|c[a>>2],c[f>>2]=d,b=b+-32|(e=c[a>>2]=0)):(d=0|c[f>>2],e=0|c[a>>2]),c[f>>2]=((f=32-b|0)?e>>>f:e)|d<<b,c[a>>2]=e<<b}function Bc(a){var b;return(b=0|Cc((0|c[(a|=0)>>2])-1|0))?0|b:0|(0==(0|(a=0|Cc(0|c[a+4>>2])))?0:a+32|0)}function Cc(a){var b=0;if(a|=0)if(1&a)b=0;else for(b=0;b=b+1|0,!(2&a);)a>>>=1;else b=32;return 0|b}function Dc(a,b){a|=0;var f,d=0,e=S;if(S=S+256|0,d=e,2<=(0|(b|=0)))for(Uc(0|(c[a+(b<<2)>>2]=d),0|c[a>>2],4),d=0;Uc(0|c[(f=a+(d<<2)|0)>>2],0|c[a+((d=d+1|0)<<2)>>2],4),c[f>>2]=4+(0|c[f>>2]),(0|d)!=(0|b););S=e}function Ec(a){a|=0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=S;S=S+16|0,n=w;do{if(a>>>0<245){if(m=0|c[923],3&(d=(a=(k=a>>>0<11?16:a+11&-8)>>>3)?m>>>a:m)|0)return a=0|c[(b=8+(f=3732+((e=(1&d^1)+a|0)<<1<<2)|0)|0)>>2],(0|(d=0|c[(g=a+8|0)>>2]))==(0|f)?c[923]=m&~(1<<e):(c[d+12>>2]=f,c[b>>2]=d),c[a+4>>2]=3|(v=e<<3),c[(v=a+v+4|0)>>2]=1|c[v>>2],S=w,0|g;if((l=0|c[925])>>>0<k>>>0){if(0|d)return g=0|c[(b=8+(d=3732+((e=((a=(e=(i=(e=((e=d<<a&((e=2<<a)|0-e))&0-e)-1|0)>>>12&16)?e>>>i:e)>>>5&8)|i|(g=(e=a?e>>>a:e)>>>2&4)|(b=(e=g?e>>>g:e)>>>1&2)|(d=(e=b?e>>>b:e)>>>1&1))+(d?e>>>d:e)|0)<<1<<2)|0)|0)>>2],(0|(a=0|c[(i=g+8|0)>>2]))==(0|d)?c[923]=a=m&~(1<<e):(c[a+12>>2]=d,c[b>>2]=a,a=m),h=(v=e<<3)-k|0,c[g+4>>2]=3|k,c[4+(f=g+k|0)>>2]=1|h,c[g+v>>2]=h,0|l&&(e=0|c[928],d=3732+((b=l>>>3)<<1<<2)|0,a=a&(b=1<<b)?0|c[(b=a=d+8|0)>>2]:(c[923]=a|b,b=d+8|0,d),c[b>>2]=e,c[a+12>>2]=e,c[e+8>>2]=a,c[e+12>>2]=d),c[925]=h,c[928]=f,S=w,0|i;if(g=0|c[924]){for(j=0|c[3996+(((e=(j=(f=(j=(g&0-g)-1|0)>>>12&16)?j>>>f:j)>>>5&8)|f|(h=(j=e?j>>>e:j)>>>2&4)|(d=(j=h?j>>>h:j)>>>1&2)|(i=(j=d?j>>>d:j)>>>1&1))+(i?j>>>i:j)<<2)>>2],i=(-8&c[j+4>>2])-k|0,d=j;(a=0|c[d+16>>2])||(a=0|c[d+20>>2]);)i=(h=(d=(-8&c[a+4>>2])-k|0)>>>0<i>>>0)?d:i,d=a,j=h?a:j;if(j>>>0<(h=j+k|0)>>>0){f=0|c[j+24>>2],b=0|c[j+12>>2];do{if((0|b)==(0|j)){if(!(b=0|c[(a=j+20|0)>>2])&&!(b=0|c[(a=j+16|0)>>2])){d=0;break}for(;;)if(d=0|c[(e=b+20|0)>>2])b=d,a=e;else{if(!(d=0|c[(e=b+16|0)>>2]))break;b=d,a=e}c[a>>2]=0,d=b}else d=0|c[j+8>>2],c[d+12>>2]=b,c[b+8>>2]=d,d=b}while(0);do{if(0|f){if(b=0|c[j+28>>2],(0|j)==(0|c[(a=3996+(b<<2)|0)>>2])){if(!(c[a>>2]=d)){c[924]=g&~(1<<b);break}}else if(!(c[((0|c[(v=f+16|0)>>2])==(0|j)?v:f+20|0)>>2]=d))break;c[d+24>>2]=f,0|(b=0|c[j+16>>2])&&(c[d+16>>2]=b,c[b+24>>2]=d),0|(b=0|c[j+20>>2])&&(c[d+20>>2]=b,c[b+24>>2]=d)}}while(0);return i>>>0<16?(c[j+4>>2]=3|(v=i+k|0),c[(v=j+v+4|0)>>2]=1|c[v>>2]):(c[j+4>>2]=3|k,c[h+4>>2]=1|i,c[h+i>>2]=i,0|l&&(e=0|c[928],d=3732+((b=l>>>3)<<1<<2)|0,a=(b=1<<b)&m?0|c[(b=a=d+8|0)>>2]:(c[923]=b|m,b=d+8|0,d),c[b>>2]=e,c[a+12>>2]=e,c[e+8>>2]=a,c[e+12>>2]=d),c[925]=i,c[928]=h),S=w,j+8|0}m=k}else m=k}else m=k}else if(a>>>0<=4294967231)if(k=-8&(a=a+11|0),e=0|c[924]){d=0-k|0,j=(a>>>=8)?16777215<k>>>0?31:1&((r=7+(j=14-((i=(520192+(j=a<<(m=(a+1048320|0)>>>16&8))|0)>>>16&4)|m|(r=(245760+(j<<=i)|0)>>>16&2))+(j<<r>>>15)|0)|0)?k>>>r:k)|j<<1:0,a=0|c[3996+(j<<2)>>2];a:do{if(a)for(h=k<<(31==((f=0)|j)?0:25-(j>>>1)|0),i=a,a=0;;){if((g=(-8&c[i+4>>2])-k|0)>>>0<d>>>0){if(!g){d=0,a=f=i,r=65;break a}d=g,a=i}if(f=0==(0|(r=0|c[i+20>>2]))|(0|r)==(0|(i=0|c[i+16+(h>>>31<<2)>>2]))?f:r,!i){r=61;break}h<<=1}else a=f=0,r=61}while(0);if(61==(0|r)){if(0==(0|f)&0==(0|a)){if(!(a=((a=2<<j)|0-a)&e)){m=k;break}f=0|c[3996+(((h=(f=(i=(f=(a&0-a)-1|0)>>>12&16)?f>>>i:f)>>>5&8)|i|(j=(f=h?f>>>h:f)>>>2&4)|(m=(f=j?f>>>j:f)>>>1&2)|(a=(f=m?f>>>m:f)>>>1&1))+(a?f>>>a:f)<<2)>>2],a=0}f?r=65:(i=d,g=a)}if(65==(0|r))for(;;){if(d=(g=(m=(-8&c[f+4>>2])-k|0)>>>0<d>>>0)?m:d,g=g?f:a,!(a=(a=0|c[f+16>>2])||0|c[f+20>>2])){i=d;break}f=a,a=g}if(0!=(0|g)&&i>>>0<((0|c[925])-k|0)>>>0&&g>>>0<(l=g+k|0)>>>0){h=0|c[g+24>>2],b=0|c[g+12>>2];do{if((0|b)==(0|g)){if(!(b=0|c[(a=g+20|0)>>2])&&!(b=0|c[(a=g+16|0)>>2])){b=0;break}for(;;)if(d=0|c[(f=b+20|0)>>2])b=d,a=f;else{if(!(d=0|c[(f=b+16|0)>>2]))break;b=d,a=f}c[a>>2]=0}else v=0|c[g+8>>2],c[v+12>>2]=b,c[b+8>>2]=v}while(0);do{if(h){if(a=0|c[g+28>>2],(0|g)==(0|c[(d=3996+(a<<2)|0)>>2])){if(!(c[d>>2]=b)){e&=~(1<<a),c[924]=e;break}}else if(!(c[((0|c[(v=h+16|0)>>2])==(0|g)?v:h+20|0)>>2]=b))break;c[b+24>>2]=h,0|(a=0|c[g+16>>2])&&(c[b+16>>2]=a,c[a+24>>2]=b),(a=0|c[g+20>>2])&&(c[b+20>>2]=a,c[a+24>>2]=b)}}while(0);b:do{if(i>>>0<16)c[g+4>>2]=3|(v=i+k|0),c[(v=g+v+4|0)>>2]=1|c[v>>2];else{if(c[g+4>>2]=3|k,c[l+4>>2]=1|i,b=(c[l+i>>2]=i)>>>3,i>>>0<256){d=3732+(b<<1<<2)|0,a=(a=0|c[923])&(b=1<<b)?0|c[(b=a=d+8|0)>>2]:(c[923]=a|b,b=d+8|0,d),c[b>>2]=l,c[a+12>>2]=l,c[l+8>>2]=a,c[l+12>>2]=d;break}if(b=3996+((d=(b=i>>>8)?16777215<i>>>0?31:1&((v=7+(d=14-((t=(520192+(d=b<<(u=(b+1048320|0)>>>16&8))|0)>>>16&4)|u|(v=(245760+(d<<=t)|0)>>>16&2))+(d<<v>>>15)|0)|0)?i>>>v:i)|d<<1:0)<<2)|0,c[l+28>>2]=d,c[4+(a=l+16|0)>>2]=0,c[a>>2]=0,!(e&(a=1<<d))){c[924]=e|a,c[b>>2]=l,c[l+24>>2]=b,c[l+12>>2]=l,c[l+8>>2]=l;break}b=0|c[b>>2];c:do{if((-8&c[b+4>>2]|0)!=(0|i)){for(e=i<<(31==(0|d)?0:25-(d>>>1)|0);a=0|c[(d=b+16+(e>>>31<<2)|0)>>2];){if((-8&c[a+4>>2]|0)==(0|i)){b=a;break c}e<<=1,b=a}c[d>>2]=l,c[l+24>>2]=b,c[l+12>>2]=l,c[l+8>>2]=l;break b}}while(0);v=0|c[(u=b+8|0)>>2],c[v+12>>2]=l,c[u>>2]=l,c[l+8>>2]=v,c[l+12>>2]=b,c[l+24>>2]=0}}while(0);return S=w,g+8|0}m=k}else m=k;else m=-1}while(0);if(m>>>0<=(d=0|c[925])>>>0)return b=0|c[928],15<(a=d-m|0)>>>0?(c[928]=v=b+m|0,c[925]=a,c[v+4>>2]=1|a,c[b+d>>2]=a,c[b+4>>2]=3|m):(c[925]=0,c[928]=0,c[b+4>>2]=3|d,c[(v=b+d+4|0)>>2]=1|c[v>>2]),S=w,b+8|0;if(m>>>0<(h=0|c[926])>>>0)return c[926]=t=h-m|0,v=0|c[929],c[929]=u=v+m|0,c[u+4>>2]=1|t,c[v+4>>2]=3|m,S=w,v+8|0;if(i=m+48|0,(k=(g=(a=0|c[1041]?0|c[1043]:(c[1043]=4096,c[1042]=4096,c[1044]=-1,c[1045]=-1,c[1046]=0,c[1034]=0,c[1041]=-16&n^1431655768,4096))+(j=m+47|0)|0)&(e=0-a|0))>>>0<=m>>>0)return S=w,(v=0)|v;if(0|(a=0|c[1033])&&(n=(l=0|c[1031])+k|0)>>>0<=l>>>0|a>>>0<n>>>0)return S=w,(v=0)|v;d:do{if(4&c[1034])b=0,r=143;else{d=0|c[929];e:do{if(d){for(f=4140;!((a=0|c[f>>2])>>>0<=d>>>0&&(a+(0|c[(q=f+4|0)>>2])|0)>>>0>d>>>0);){if(!(a=0|c[f+8>>2])){r=128;break e}f=a}if((b=g-h&e)>>>0<2147483647)if((0|(a=0|Jc(b)))==((0|c[f>>2])+(0|c[q>>2])|0)){if(-1!=(0|a)){h=a,g=b,r=145;break d}}else e=a,r=136;else b=0}else r=128}while(0);do{if(128==(0|r))if(-1!=(0|(d=0|Jc(0)))&&(b=d,p=(b=(0==((p=(o=0|c[1042])-1|0)&b|0)?0:(p+b&0-o)-b|0)+k|0)+(o=0|c[1031])|0,m>>>0<b>>>0&b>>>0<2147483647)){if(0|(q=0|c[1033])&&p>>>0<=o>>>0|q>>>0<p>>>0){b=0;break}if((0|(a=0|Jc(b)))==(0|d)){h=d,g=b,r=145;break d}e=a,r=136}else b=0}while(0);do{if(136==(0|r)){if(d=0-b|0,!(b>>>0<i>>>0&b>>>0<2147483647&-1!=(0|e))){if(-1==(0|e)){b=0;break}h=e,g=b,r=145;break d}if(2147483647<=(a=j-b+(a=0|c[1043])&0-a)>>>0){h=e,g=b,r=145;break d}if(-1==(0|Jc(a))){Jc(d),b=0;break}h=e,g=a+b|0,r=145;break d}}while(0);c[1034]=4|c[1034],r=143}}while(0);if(143==(0|r)&&k>>>0<2147483647&&!(-1==(0|(s=0|Jc(k)))|1^(t=(m+40|0)>>>0<(u=(q=0|Jc(0))-s|0)>>>0)|s>>>0<q>>>0&-1!=(0|s)&-1!=(0|q)^1)&&(h=s,g=t?u:b,r=145),145==(0|r)){b=(0|c[1031])+g|0,(c[1031]=b)>>>0>(0|c[1032])>>>0&&(c[1032]=b),j=0|c[929];f:do{if(j){for(f=4140;;){if((0|h)==((b=0|c[f>>2])+(a=0|c[(e=f+4|0)>>2])|0)){r=154;break}if(!(d=0|c[f+8>>2]))break;f=d}if(154==(0|r)&&0==(8&c[f+12>>2]|0)&&j>>>0<h>>>0&b>>>0<=j>>>0){c[e>>2]=a+g,u=j+(t=0==(7&(t=j+8|0)|0)?0:0-t&7)|0,t=(v=(0|c[926])+g|0)-t|0,c[929]=u,c[926]=t,c[u+4>>2]=1|t,c[j+v+4>>2]=40,c[930]=c[1045];break}for(h>>>0<(0|c[927])>>>0&&(c[927]=h),d=h+g|0,a=4140;;){if((0|c[a>>2])==(0|d)){r=162;break}if(!(b=0|c[a+8>>2]))break;a=b}if(162==(0|r)&&0==(8&c[a+12>>2]|0)){c[a>>2]=h,c[(l=a+4|0)>>2]=(0|c[l>>2])+g,k=(l=h+(0==(7&(l=h+8|0)|0)?0:0-l&7)|0)+m|0,i=(b=d+(0==(7&(b=d+8|0)|0)?0:0-b&7)|0)-l-m|0,c[l+4>>2]=3|m;g:do{if((0|j)==(0|b))v=(0|c[926])+i|0,c[926]=v,c[929]=k,c[k+4>>2]=1|v;else{if((0|c[928])==(0|b)){v=(0|c[925])+i|0,c[925]=v,c[928]=k,c[k+4>>2]=1|v,c[k+v>>2]=v;break}if(1==(3&(a=0|c[b+4>>2])|0)){h=-8&a,e=a>>>3;h:do{if(a>>>0<256){if(a=0|c[b+8>>2],(0|(d=0|c[b+12>>2]))==(0|a)){c[923]=c[923]&~(1<<e);break}c[a+12>>2]=d,c[d+8>>2]=a;break}g=0|c[b+24>>2],a=0|c[b+12>>2];do{if((0|a)==(0|b)){if(!(a=0|c[(d=4+(e=b+16|0)|0)>>2])){if(!(a=0|c[e>>2])){a=0;break}d=e}for(;;)if(e=0|c[(f=a+20|0)>>2])a=e,d=f;else{if(!(e=0|c[(f=a+16|0)>>2]))break;a=e,d=f}c[d>>2]=0}else v=0|c[b+8>>2],c[v+12>>2]=a,c[a+8>>2]=v}while(0);if(!g)break;e=3996+((d=0|c[b+28>>2])<<2)|0;do{if((0|c[e>>2])==(0|b)){if(0|(c[e>>2]=a))break;c[924]=c[924]&~(1<<d);break h}if(!(c[((0|c[(v=g+16|0)>>2])==(0|b)?v:g+20|0)>>2]=a))break h}while(0)}while(c[a+24>>2]=g,0|(d=0|c[(e=b+16|0)>>2])&&(c[a+16>>2]=d,c[d+24>>2]=a),(d=0|c[e+4>>2])&&(c[a+20>>2]=d,c[d+24>>2]=a,0));b=b+h|0,f=h+i|0}else f=i;if(c[(b=b+4|0)>>2]=-2&c[b>>2],c[k+4>>2]=1|f,b=(c[k+f>>2]=f)>>>3,f>>>0<256){d=3732+(b<<1<<2)|0,a=(a=0|c[923])&(b=1<<b)?0|c[(b=a=d+8|0)>>2]:(c[923]=a|b,b=d+8|0,d),c[b>>2]=k,c[a+12>>2]=k,c[k+8>>2]=a,c[k+12>>2]=d;break}b=f>>>8;do{if(b){if(16777215<f>>>0){e=31;break}e=1&((v=7+(e=14-((t=(520192+(e=b<<(u=(b+1048320|0)>>>16&8))|0)>>>16&4)|u|(v=(245760+(e<<=t)|0)>>>16&2))+(e<<v>>>15)|0)|0)?f>>>v:f)|e<<1}else e=0}while(0);if(a=3996+(e<<2)|0,c[k+28>>2]=e,c[4+(b=k+16|0)>>2]=0,!((b=(c[b>>2]=0)|c[924])&(d=1<<e))){c[924]=b|d,c[a>>2]=k,c[k+24>>2]=a,c[k+12>>2]=k,c[k+8>>2]=k;break}b=0|c[a>>2];i:do{if((-8&c[b+4>>2]|0)!=(0|f)){for(e=f<<(31==(0|e)?0:25-(e>>>1)|0);a=0|c[(d=b+16+(e>>>31<<2)|0)>>2];){if((-8&c[a+4>>2]|0)==(0|f)){b=a;break i}e<<=1,b=a}c[d>>2]=k,c[k+24>>2]=b,c[k+12>>2]=k,c[k+8>>2]=k;break g}}while(0);v=0|c[(u=b+8|0)>>2],c[v+12>>2]=k,c[u>>2]=k,c[k+8>>2]=v,c[k+12>>2]=b,c[k+24>>2]=0}}while(0);return S=w,l+8|0}for(a=4140;!((b=0|c[a>>2])>>>0<=j>>>0&&j>>>0<(v=b+(0|c[a+4>>2])|0)>>>0);)a=0|c[a+8>>2];for(b=(a=(a=(f=v+-47|0)+(0==(7&(a=f+8|0)|0)?0:0-a&7)|0)>>>0<(f=j+16|0)>>>0?j:a)+8|0,u=h+(t=0==(7&(t=h+8|0)|0)?0:0-t&7)|0,t=(d=g+-40|0)-t|0,c[929]=u,c[926]=t,c[u+4>>2]=1|t,c[h+d+4>>2]=40,c[930]=c[1045],c[(d=a+4|0)>>2]=27,c[b>>2]=c[1035],c[b+4>>2]=c[1036],c[b+8>>2]=c[1037],c[b+12>>2]=c[1038],c[1035]=h,c[1036]=g,c[1038]=0,c[1037]=b,b=a+24|0;c[(b=(u=b)+4|0)>>2]=7,(u+8|0)>>>0<v>>>0;);if((0|a)!=(0|j)){if(g=a-j|0,c[d>>2]=-2&c[d>>2],c[j+4>>2]=1|g,b=(c[a>>2]=g)>>>3,g>>>0<256){d=3732+(b<<1<<2)|0,a=(a=0|c[923])&(b=1<<b)?0|c[(b=a=d+8|0)>>2]:(c[923]=a|b,b=d+8|0,d),c[b>>2]=j,c[a+12>>2]=j,c[j+8>>2]=a,c[j+12>>2]=d;break}if(d=3996+((e=(b=g>>>8)?16777215<g>>>0?31:1&((v=7+(e=14-((t=(520192+(e=b<<(u=(b+1048320|0)>>>16&8))|0)>>>16&4)|u|(v=(245760+(e<<=t)|0)>>>16&2))+(e<<v>>>15)|0)|0)?g>>>v:g)|e<<1:0)<<2)|0,c[j+28>>2]=e,c[j+20>>2]=0,!((b=(c[f>>2]=0)|c[924])&(a=1<<e))){c[924]=b|a,c[d>>2]=j,c[j+24>>2]=d,c[j+12>>2]=j,c[j+8>>2]=j;break}b=0|c[d>>2];j:do{if((-8&c[b+4>>2]|0)!=(0|g)){for(e=g<<(31==(0|e)?0:25-(e>>>1)|0);a=0|c[(d=b+16+(e>>>31<<2)|0)>>2];){if((-8&c[a+4>>2]|0)==(0|g)){b=a;break j}e<<=1,b=a}c[d>>2]=j,c[j+24>>2]=b,c[j+12>>2]=j,c[j+8>>2]=j;break f}}while(0);v=0|c[(u=b+8|0)>>2],c[v+12>>2]=j,c[u>>2]=j,c[j+8>>2]=v,c[j+12>>2]=b,c[j+24>>2]=0}}else 0==(0|(v=0|c[927]))|h>>>0<v>>>0&&(c[927]=h),c[1035]=h,c[1036]=g,c[1038]=0,c[932]=c[1041],c[931]=-1,c[936]=3732,c[935]=3732,c[938]=3740,c[937]=3740,c[940]=3748,c[939]=3748,c[942]=3756,c[941]=3756,c[944]=3764,c[943]=3764,c[946]=3772,c[945]=3772,c[948]=3780,c[947]=3780,c[950]=3788,c[949]=3788,c[952]=3796,c[951]=3796,c[954]=3804,c[953]=3804,c[956]=3812,c[955]=3812,c[958]=3820,c[957]=3820,c[960]=3828,c[959]=3828,c[962]=3836,c[961]=3836,c[964]=3844,c[963]=3844,c[966]=3852,c[965]=3852,c[968]=3860,c[967]=3860,c[970]=3868,c[969]=3868,c[972]=3876,c[971]=3876,c[974]=3884,c[973]=3884,c[976]=3892,c[975]=3892,c[978]=3900,c[977]=3900,c[980]=3908,c[979]=3908,c[982]=3916,c[981]=3916,c[984]=3924,c[983]=3924,c[986]=3932,c[985]=3932,c[988]=3940,c[987]=3940,c[990]=3948,c[989]=3948,c[992]=3956,c[991]=3956,c[994]=3964,c[993]=3964,c[996]=3972,c[995]=3972,c[998]=3980,c[997]=3980,u=h+(t=0==(7&(t=h+8|0)|0)?0:0-t&7)|0,t=(v=g+-40|0)-t|0,c[929]=u,c[926]=t,c[u+4>>2]=1|t,c[h+v+4>>2]=40,c[930]=c[1045]}while(0);if(m>>>0<(b=0|c[926])>>>0)return c[926]=t=b-m|0,v=0|c[929],c[929]=u=v+m|0,c[u+4>>2]=1|t,c[v+4>>2]=3|m,S=w,v+8|0}return c[922]=48,S=w,(v=0)|v}function Fc(a){var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;if(a|=0){e=0|c[927],k=(d=a+-8|0)+(b=-8&(a=0|c[a+-4>>2]))|0;do{if(1&a)j=i=d;else{if(f=0|c[d>>2],!(3&a))return;if(h=f+b|0,(g=d+(0-f)|0)>>>0<e>>>0)return;if((0|c[928])==(0|g)){if(3==(3&(a=0|c[(b=k+4|0)>>2])|0))return c[925]=h,c[b>>2]=-2&a,c[g+4>>2]=1|h,void(c[g+h>>2]=h);j=i=g,b=h;break}if(d=f>>>3,f>>>0<256){if(a=0|c[g+8>>2],(0|(b=0|c[g+12>>2]))==(0|a)){c[923]=c[923]&~(1<<d),j=i=g,b=h;break}c[a+12>>2]=b,c[b+8>>2]=a,j=i=g,b=h;break}f=0|c[g+24>>2],a=0|c[g+12>>2];do{if((0|a)==(0|g)){if(!(a=0|c[(b=4+(d=g+16|0)|0)>>2])){if(!(a=0|c[d>>2])){d=0;break}b=d}for(;;)if(d=0|c[(e=a+20|0)>>2])a=d,b=e;else{if(!(d=0|c[(e=a+16|0)>>2]))break;a=d,b=e}c[b>>2]=0,d=a}else d=0|c[g+8>>2],c[d+12>>2]=a,c[a+8>>2]=d,d=a}while(0);if(f){if(a=0|c[g+28>>2],(0|c[(b=3996+(a<<2)|0)>>2])==(0|g)){if(!(c[b>>2]=d)){c[924]=c[924]&~(1<<a),j=i=g,b=h;break}}else if(!(c[((0|c[(j=f+16|0)>>2])==(0|g)?j:f+20|0)>>2]=d)){j=i=g,b=h;break}c[d+24>>2]=f,0|(a=0|c[(b=g+16|0)>>2])&&(c[d+16>>2]=a,c[a+24>>2]=d),(a=0|c[b+4>>2])&&(c[d+20>>2]=a,c[a+24>>2]=d),j=i=g,b=h}else j=i=g,b=h}}while(0);if(!(k>>>0<=i>>>0)&&1&(d=0|c[(a=k+4|0)>>2])){if(2&d)c[a>>2]=-2&d,c[j+4>>2]=1|b,f=c[i+b>>2]=b;else{if((0|c[929])==(0|k))return k=(0|c[926])+b|0,c[926]=k,c[929]=j,c[j+4>>2]=1|k,void((0|j)==(0|c[928])&&(c[928]=0,c[925]=0));if((0|c[928])==(0|k))return k=(0|c[925])+b|0,c[925]=k,c[928]=i,c[j+4>>2]=1|k,void(c[i+k>>2]=k);f=(-8&d)+b|0,e=d>>>3;do{if(d>>>0<256){if(b=0|c[k+8>>2],(0|(a=0|c[k+12>>2]))==(0|b)){c[923]=c[923]&~(1<<e);break}c[b+12>>2]=a,c[a+8>>2]=b;break}g=0|c[k+24>>2],a=0|c[k+12>>2];do{if((0|a)==(0|k)){if(!(a=0|c[(b=4+(d=k+16|0)|0)>>2])){if(!(a=0|c[d>>2])){d=0;break}b=d}for(;;)if(d=0|c[(e=a+20|0)>>2])a=d,b=e;else{if(!(d=0|c[(e=a+16|0)>>2]))break;a=d,b=e}c[b>>2]=0,d=a}else d=0|c[k+8>>2],c[d+12>>2]=a,c[a+8>>2]=d,d=a}while(0);if(0|g){if(a=0|c[k+28>>2],(0|c[(b=3996+(a<<2)|0)>>2])==(0|k)){if(!(c[b>>2]=d)){c[924]=c[924]&~(1<<a);break}}else if(!(c[((0|c[(h=g+16|0)>>2])==(0|k)?h:g+20|0)>>2]=d))break;c[d+24>>2]=g,0|(a=0|c[(b=k+16|0)>>2])&&(c[d+16>>2]=a,c[a+24>>2]=d),0|(a=0|c[b+4>>2])&&(c[d+20>>2]=a,c[a+24>>2]=d)}}while(0);if(c[j+4>>2]=1|f,c[i+f>>2]=f,(0|j)==(0|c[928]))return void(c[925]=f)}if(a=f>>>3,f>>>0<256)return d=3732+(a<<1<<2)|0,b=(b=0|c[923])&(a=1<<a)?0|c[(a=b=d+8|0)>>2]:(c[923]=b|a,a=d+8|0,d),c[a>>2]=j,c[b+12>>2]=j,c[j+8>>2]=b,void(c[j+12>>2]=d);b=3996+((e=(a=f>>>8)?16777215<f>>>0?31:1&((k=7+(e=14-((h=(520192+(e=a<<(i=(a+1048320|0)>>>16&8))|0)>>>16&4)|i|(k=(245760+(e<<=h)|0)>>>16&2))+(e<<k>>>15)|0)|0)?f>>>k:f)|e<<1:0)<<2)|0,c[j+28>>2]=e,c[j+20>>2]=0,a=(c[j+16>>2]=0)|c[924],d=1<<e;a:do{if(a&d){a=0|c[b>>2];b:do{if((-8&c[a+4>>2]|0)!=(0|f)){for(e=f<<(31==(0|e)?0:25-(e>>>1)|0);b=0|c[(d=a+16+(e>>>31<<2)|0)>>2];){if((-8&c[b+4>>2]|0)==(0|f)){a=b;break b}e<<=1,a=b}c[d>>2]=j,c[j+24>>2]=a,c[j+12>>2]=j,c[j+8>>2]=j;break a}}while(0);k=0|c[(i=a+8|0)>>2],c[k+12>>2]=j,c[i>>2]=j,c[j+8>>2]=k,c[j+12>>2]=a,c[j+24>>2]=0}else c[924]=a|d,c[b>>2]=j,c[j+24>>2]=b,c[j+12>>2]=j,c[j+8>>2]=j}while(0);if(k=(0|c[931])-1|0,!(0|(c[931]=k))){for(a=4148;a=0|c[a>>2];)a=a+8|0;c[931]=-1}}}}function Gc(a,b){var d=0,e=0,f=0,g=0,h=0,i=0,j=0,j=(a|=0)+(b|=0)|0,d=0|c[a+4>>2];do{if(1&d)i=a,a=b;else{if(e=0|c[a>>2],!(3&d))return;if(h=e+b|0,(0|c[928])==(0|(g=a+(0-e)|0))){if(3==(3&(d=0|c[(a=j+4|0)>>2])|0))return c[925]=h,c[a>>2]=-2&d,c[g+4>>2]=1|h,c[j>>2]=h;i=g,a=h;break}if(b=e>>>3,e>>>0<256){if(d=0|c[g+8>>2],(0|(a=0|c[g+12>>2]))==(0|d)){c[923]=c[923]&~(1<<b),i=g,a=h;break}c[d+12>>2]=a,c[a+8>>2]=d,i=g,a=h;break}f=0|c[g+24>>2],d=0|c[g+12>>2];do{if((0|d)==(0|g)){if(!(d=0|c[(a=4+(b=g+16|0)|0)>>2])){if(!(d=0|c[b>>2])){b=0;break}a=b}for(;;)if(b=0|c[(e=d+20|0)>>2])d=b,a=e;else{if(!(b=0|c[(e=d+16|0)>>2]))break;d=b,a=e}c[a>>2]=0,b=d}else b=0|c[g+8>>2],c[b+12>>2]=d,c[d+8>>2]=b,b=d}while(0);if(f){if(d=0|c[g+28>>2],(0|c[(a=3996+(d<<2)|0)>>2])==(0|g)){if(!(c[a>>2]=b)){c[924]=c[924]&~(1<<d),i=g,a=h;break}}else if(!(c[((0|c[(i=f+16|0)>>2])==(0|g)?i:f+20|0)>>2]=b)){i=g,a=h;break}c[b+24>>2]=f,0|(d=0|c[(a=g+16|0)>>2])&&(c[b+16>>2]=d,c[d+24>>2]=b),(d=0|c[a+4>>2])&&(c[b+20>>2]=d,c[d+24>>2]=b),i=g,a=h}else i=g,a=h}}while(0);if(2&(b=0|c[(d=j+4|0)>>2]))c[d>>2]=-2&b,c[i+4>>2]=1|a,c[i+a>>2]=a;else{if((0|c[929])==(0|j))return j=(0|c[926])+a|0,c[926]=j,c[929]=i,c[i+4>>2]=1|j,(0|i)==(0|c[928])&&(c[928]=0,c[925]=0);if((0|c[928])==(0|j))return j=(0|c[925])+a|0,c[925]=j,c[928]=i,c[i+4>>2]=1|j,c[i+j>>2]=j;g=(-8&b)+a|0,e=b>>>3;do{if(b>>>0<256){if(a=0|c[j+8>>2],(0|(d=0|c[j+12>>2]))==(0|a)){c[923]=c[923]&~(1<<e);break}c[a+12>>2]=d,c[d+8>>2]=a;break}f=0|c[j+24>>2],d=0|c[j+12>>2];do{if((0|d)==(0|j)){if(!(d=0|c[(a=4+(b=j+16|0)|0)>>2])){if(!(d=0|c[b>>2])){b=0;break}a=b}for(;;)if(b=0|c[(e=d+20|0)>>2])d=b,a=e;else{if(!(b=0|c[(e=d+16|0)>>2]))break;d=b,a=e}c[a>>2]=0,b=d}else b=0|c[j+8>>2],c[b+12>>2]=d,c[d+8>>2]=b,b=d}while(0);if(0|f){if(d=0|c[j+28>>2],(0|c[(a=3996+(d<<2)|0)>>2])==(0|j)){if(!(c[a>>2]=b)){c[924]=c[924]&~(1<<d);break}}else if(!(c[((0|c[(h=f+16|0)>>2])==(0|j)?h:f+20|0)>>2]=b))break;c[b+24>>2]=f,0|(d=0|c[(a=j+16|0)>>2])&&(c[b+16>>2]=d,c[d+24>>2]=b),0|(d=0|c[a+4>>2])&&(c[b+20>>2]=d,c[d+24>>2]=b)}}while(0);if(c[i+4>>2]=1|g,c[i+g>>2]=g,(0|i)==(0|c[928]))return c[925]=g;a=g}if(d=a>>>3,a>>>0<256)return b=3732+(d<<1<<2)|0,a=(a=0|c[923])&(d=1<<d)?0|c[(d=a=b+8|0)>>2]:(c[923]=a|d,d=b+8|0,b),c[d>>2]=i,c[a+12>>2]=i,c[i+8>>2]=a,c[i+12>>2]=b;if(b=3996+((f=(d=a>>>8)?16777215<a>>>0?31:1&((j=7+(f=14-((g=(520192+(f=d<<(h=(d+1048320|0)>>>16&8))|0)>>>16&4)|h|(j=(245760+(f<<=g)|0)>>>16&2))+(f<<j>>>15)|0)|0)?a>>>j:a)|f<<1:0)<<2)|0,c[i+28>>2]=f,c[i+20>>2]=0,!((d=(c[i+16>>2]=0)|c[924])&(e=1<<f)))return c[924]=d|e,c[b>>2]=i,c[i+24>>2]=b,c[i+12>>2]=i,c[i+8>>2]=i;d=0|c[b>>2];a:do{if((-8&c[d+4>>2]|0)!=(0|a)){for(f=a<<(31==(0|f)?0:25-(f>>>1)|0);b=0|c[(e=d+16+(f>>>31<<2)|0)>>2];){if((-8&c[b+4>>2]|0)==(0|a)){d=b;break a}f<<=1,d=b}return c[e>>2]=i,c[i+24>>2]=d,c[i+12>>2]=i,c[i+8>>2]=i}}while(0);j=0|c[(h=d+8|0)>>2],c[j+12>>2]=i,c[h>>2]=i,c[i+8>>2]=j,c[i+12>>2]=d,c[i+24>>2]=0}function Ic(a,b,d){var e;return a|=0,0!=(3&(b|=0)|0)|0==(0|(e=b>>>2))||1073741823+e&e|0?28:(-64-b|0)>>>0<(d|=0)>>>0||!(b=0|function(a,b){b|=0;var g,d=0,e=0,f=0,h=0,i=0;if((d=16<(a|=0)>>>0?a:16)+-1&d)for(a=16;a>>>0<d>>>0;)a<<=1;else a=d;if((-64-a|0)>>>0<=b>>>0)return c[922]=48,(h=0)|h;if(!(d=0|Ec(12+(g=b>>>0<11?16:b+11&-8)+a|0)))return(h=0)|h;f=d+-8|0;do{if(a+-1&d){if(e=15<((e=(d+a+-1&0-a)-8|0)-(b=f)|0)>>>0?e:e+a|0,d=(-8&(i=0|c[(a=d+-4|0)>>2]))-(b=e-b|0)|0,3&i){c[(i=e+4|0)>>2]=d|1&c[i>>2]|2,c[(d=e+d+4|0)>>2]=1|c[d>>2],c[a>>2]=b|1&c[a>>2]|2,c[i>>2]=1|c[i>>2],Gc(f,b),a=b=e;break}c[e>>2]=(0|c[f>>2])+b,c[e+4>>2]=d,a=b=e;break}}while(a=b=f,0);return 3&(a=0|c[(d=a+4|0)>>2])|0&&(16+g|0)>>>0<(h=-8&a)>>>0&&(i=h-g|0,f=b+g|0,c[d>>2]=g|1&a|2,c[f+4>>2]=3|i,c[(h=b+h+4|0)>>2]=1|c[h>>2],Gc(f,i)),b+8|0}(16<b>>>0?b:16,d))?48:(c[a>>2]=b,(a=0)|a)}function Jc(a){var b,d=0;return(a=(b=0|c[(d=4208)>>2])+(0|a)|0)>>>0>(0|H())>>>0&&0==(0|J(0|a))?(c[922]=48,-1):(c[d>>2]=a,0|b)}function Lc(a,b,c,d){b|=0,d|=0;var e,f;return c=0|function(a,b){var f,e,c,d;return a=((c=0|v(e=65535&(b|=0),f=65535&(a|=0)))>>>16)+(0|v(e,d=a>>>16))|0,b=0|v(e=b>>>16,f),0|(y((a>>>16)+(0|v(e,d))+(((65535&a)+b|0)>>>16)|0),a+b<<16|65535&c|0)}(e=a|=0,f=c|=0),a=0|z(),0|(y((0|v(b,f))+(0|v(d,e))+a|0&a|0),0|c)}function Mc(a,b,c,d){return 0|(y((b|=0)+(d|=0)+((c=(a|=0)+(0|c)>>>0)>>>0<a>>>0|0)>>>0|0),0|c)}function Nc(a,b,c,d){return 0|(y(0|(d=(b|=0)-(d|=0)-((a|=0)>>>0<(c|=0)>>>0|0)>>>0)),a-c>>>0|0)}function Oc(a){return 0|((a|=0)?31-(0|w(a^a-1))|0:32)}function Pc(a,b,d,e,f){f|=0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,l=a|=0,h=d|=0,i=n=e|=0;if(!(k=j=b|=0))return g=0!=(0|f),i?(g&&(c[f>>2]=0|a,c[f+4>>2]=0&b),(f=n=0)|(y(0|n),f)):(g&&(c[f>>2]=(l>>>0)%(h>>>0),c[f+4>>2]=0),f=(l>>>(n=0))/(h>>>0)>>>0,0|(y(0|n),f));g=0==(0|i);do{if(h){if(!g){if((g=(0|w(0|i))-(0|w(0|k))|0)>>>0<=31){a=l>>>((h=m=g+1|0)>>>0)&(b=g-31>>31)|k<<(i=31-g|0),b&=k>>>(m>>>0),g=0,i=l<<i;break}return f&&(c[f>>2]=0|a,c[f+4>>2]=j|0&b),(f=n=0)|(y(0|n),f)}if((g=h-1|0)&h|0){a=(m=32-(i=33+(0|w(0|h))-(0|w(0|k))|0)|0)-1>>31&k>>>((o=i-32|0)>>>0)|(k<<m|l>>>((h=i)>>>0))&(b=o>>31),b&=k>>>(i>>>0),g=l<<(p=64-i|0)&(j=m>>31),i=(k<<p|l>>>(o>>>0))&j|l<<m&i-33>>31;break}return 0|f&&(c[f>>2]=g&l,c[f+4>>2]=0),1==(0|h)?(p=0|a,0|(y(0|(o=j|0&b)),p)):(o=k>>>((p=0|Oc(0|h))>>>0)|0,p=k<<32-p|l>>>(p>>>0)|0,0|(y(0|o),p))}if(g)return 0|f&&(c[f>>2]=(k>>>0)%(h>>>0),c[f+4>>2]=0),p=(k>>>(o=0))/(h>>>0)>>>0,0|(y(0|o),p);if(!l)return 0|f&&(c[f>>2]=0,c[f+4>>2]=(k>>>0)%(i>>>0)),p=(k>>>(o=0))/(i>>>0)>>>0,0|(y(0|o),p);if(!((g=i-1|0)&i))return 0|f&&(c[f>>2]=0|a,c[f+4>>2]=g&k|0&b),p=k>>>(((o=0)|Oc(0|i))>>>0),0|(y(0|o),p);if((g=(0|w(0|i))-(0|w(0|k))|0)>>>0<=30){a=k<<(i=31-g|0)|l>>>((h=b=g+1|0)>>>0),b=k>>>(b>>>0),g=0,i=l<<i;break}return f&&(c[f>>2]=0|a,c[f+4>>2]=j|0&b),(p=o=0)|(y(0|o),p)}while(0);if(h){for(k=0|Mc(0|(m=0|d),0|(l=n|0&e),-1,-1),d=0|z(),j=i,i=0;j=g>>>31|(e=j)<<1,g=i|g<<1,Nc(0|k,0|d,0|(e=a<<1|e>>>31|0),0|(n=a>>>31|b<<1|0)),i=1&(o=(p=0|z())>>31|((0|p)<0?-1:0)<<1),a=0|Nc(0|e,0|n,o&m|0,(((0|p)<0?-1:0)>>31|((0|p)<0?-1:0)<<1)&l|0),b=0|z(),0!=(0|(h=h-1|0)););k=j,j=0}else k=i,i=j=0;return(h=0)|f&&(c[f>>2]=a,c[f+4>>2]=b),p=-2&(g<<1|0)|i,0|(y(0|(o=(0|g)>>>31|(k|h)<<1|0&(h<<1|g>>>31)|j)),p)}function Qc(a,b,c,d){return 0|Pc(a|=0,b|=0,c|=0,d|=0,0)}function Rc(a,b,c){return a|=0,b|=0,(0|(c|=0))<32?(y(b>>>c|0),a>>>c|(b&(1<<c)-1)<<32-c):(y(0),b>>>c-32|0)}function Sc(a,b,c){return a|=0,b|=0,(0|(c|=0))<32?(y(b<<c|(a&(1<<c)-1<<32-c)>>>32-c|0),a<<c):(y(a<<c-32|0),0)}function Uc(b,d,e){var f,g,h;if(b|=0,d|=0,8192<=(0|(e|=0)))return I(0|b,0|d,0|e),0|b;if(h=0|b,g=b+e|0,(3&b)==(3&d)){for(;3&b;){if(!e)return 0|h;a[b>>0]=0|a[d>>0],b=b+1|0,d=d+1|0,e=e-1|0}for(f=(e=-4&g|0)-64|0;(0|b)<=(0|f);)c[b>>2]=c[d>>2],c[b+4>>2]=c[d+4>>2],c[b+8>>2]=c[d+8>>2],c[b+12>>2]=c[d+12>>2],c[b+16>>2]=c[d+16>>2],c[b+20>>2]=c[d+20>>2],c[b+24>>2]=c[d+24>>2],c[b+28>>2]=c[d+28>>2],c[b+32>>2]=c[d+32>>2],c[b+36>>2]=c[d+36>>2],c[b+40>>2]=c[d+40>>2],c[b+44>>2]=c[d+44>>2],c[b+48>>2]=c[d+48>>2],c[b+52>>2]=c[d+52>>2],c[b+56>>2]=c[d+56>>2],c[b+60>>2]=c[d+60>>2],b=b+64|0,d=d+64|0;for(;(0|b)<(0|e);)c[b>>2]=c[d>>2],b=b+4|0,d=d+4|0}else for(e=g-4|0;(0|b)<(0|e);)a[b>>0]=0|a[d>>0],a[b+1>>0]=0|a[d+1>>0],a[b+2>>0]=0|a[d+2>>0],a[b+3>>0]=0|a[d+3>>0],b=b+4|0,d=d+4|0;for(;(0|b)<(0|g);)a[b>>0]=0|a[d>>0],b=b+1|0,d=d+1|0;return 0|h}function Vc(b,d,e){var f,g,i,h=(b|=0)+(e|=0)|0;if(d=255&(0|d),67<=(0|e)){for(;3&b;)a[b>>0]=d,b=b+1|0;for(i=d|d<<8|d<<16|d<<24,g=(f=-4&h|0)-64|0;(0|b)<=(0|g);)c[b>>2]=i,c[b+4>>2]=i,c[b+8>>2]=i,c[b+12>>2]=i,c[b+16>>2]=i,c[b+20>>2]=i,c[b+24>>2]=i,c[b+28>>2]=i,c[b+32>>2]=i,c[b+36>>2]=i,c[b+40>>2]=i,c[b+44>>2]=i,c[b+48>>2]=i,c[b+52>>2]=i,c[b+56>>2]=i,c[b+60>>2]=i,b=b+64|0;for(;(0|b)<(0|f);)c[b>>2]=i,b=b+4|0}for(;(0|b)<(0|h);)a[b>>0]=d,b=b+1|0;return h-e|0}function gd(a){return x(0),0}function id(a,b,c,d){return x(2),0}var W=[gd,function(a){return 0|A(0,0|(a|=0))},function(a){return 0},gd],X=[function(a,b,c){return x(1),0},function(a,b,c){return 0|B(0,0|(a|=0),0|(b|=0),0|(c|=0))},function(a,b,d){b|=0,d|=0;var e,i,j,k,m,n,o,f=0,g=0,h=0,p=0,l=S;for(S=S+32|0,i=(g=l)+16|0,f=0|c[(j=28+(a|=0)|0)>>2],c[g>>2]=f,f=(0|c[(k=a+20|0)>>2])-f|0,c[g+4>>2]=f,c[g+8>>2]=b,e=a+60|0,f=f+(c[g+12>>(h=2)]=d)|0;;){if((0|f)==(0|(b=0|function(a){return 0|((a|=0)<<16>>16?(c[922]=65535&a,-1):0)}(0|G(0|c[e>>2],0|g,0|h,0|i))?c[i>>2]=-1:0|c[i>>2]))){b=6;break}if((0|b)<0){b=8;break}p=0|c[g+4>>2],c[(n=(m=p>>>0<b>>>0)?g+8|0:g)>>2]=(0|c[n>>2])+(p=b-(m?p:0)|0),c[(o=n+4|0)>>2]=(0|c[o>>2])-p,g=n,h=h+(m<<31>>31)|0,f=f-b|0}return 6==(0|b)?(p=0|c[a+44>>2],c[a+16>>2]=p+(0|c[a+48>>2]),c[j>>2]=p,c[k>>2]=p):8==(0|b)&&(c[a+16>>2]=0,c[j>>2]=0,c[k>>2]=0,c[a>>2]=32|c[a>>2],d=2==(0|h)?0:d-(0|c[g+4>>2])|0),S=l,0|d},function(a,b,d){var e,f;return Uc(0|(f=0|c[(e=20+(a|=0)|0)>>2]),0|(b|=0),0|(a=(d|=0)>>>0<(a=(0|c[a+16>>2])-f|0)>>>0?d:a)),c[e>>2]=(0|c[e>>2])+a,0|d}],Y=[id,function(a,b,c,d){return 0|C(0,0|(a|=0),0|(b|=0),0|(c|=0),0|(d|=0))},function(a,b,c,d){return y(0),0},id],Z=[function(a){x(3)},function(a){D(0,0|(a|=0))}],_=[function(a,b){x(4)},function(a,b){E(0,0|(a|=0),0|(b|=0))},function(a,b){var j,e=0,g=0,h=0,i=0,k=0,l=0,m=0,n=0,e=0|c[(j=308+(a|=0)|0)>>2],g=0|c[a+316>>2],h=0|c[a+320>>2];-1==(0|(i=0|c[(k=e+((b|=0)<<5)+8|0)>>2]))?(c[g+(b<<2)>>2]=c[(0|c[a+148>>2])+(c[e+(b<<5)+16>>2]<<2)>>2],f[h+(b<<2)>>2]=1):(m=0|c[(l=e+(b<<5)+16|0)>>2],n=0|c[(0|c[a+152>>2])+(m<<2)>>2],$[3&c[e+(i<<5)+24>>2]](a,i,n,n,0|c[(0|c[a+60>>2])+(24*m|0)+16>>2]),k=0|c[k>>2],f[g+(b<<2)>>2]=+f[(0|c[a+148>>2])+(c[l>>2]<<2)>>2]*+f[g+(k<<2)>>2],c[h+(b<<2)>>2]=c[h+(k<<2)>>2]),(0|d[4+(0|c[a>>2])>>0])<4||(e=0|c[j>>2],g=0|c[a+324>>2],j=0|c[a+328>>2],h=b<<2,i=c[e+(b<<5)+16>>2]<<2,-1==(0|(e=0|c[e+(b<<5)+8>>2]))?(e=0|c[a+156>>2],c[g+(h<<2)>>2]=c[e+(i<<2)>>2],c[g+((b=1|h)<<2)>>2]=c[e+((k=1|i)<<2)>>2],c[g+((n=2|h)<<2)>>2]=c[e+((m=2|i)<<2)>>2],f[g+((e=3|h)<<2)>>2]=1,l=0|c[a+160>>2],c[j+(h<<2)>>2]=c[l+(i<<2)>>2],c[j+(b<<2)>>2]=c[l+(k<<2)>>2],c[j+(n<<2)>>2]=c[l+(m<<2)>>2]):(m=e<<2,l=(0|c[a+156>>2])+(i<<2)|0,f[(e=g+(h<<2)|0)>>2]=+f[l>>2]*+f[(n=g+(m<<2)|0)>>2],f[e+4>>2]=+f[l+4>>2]*+f[n+4>>2],f[e+8>>2]=+f[l+8>>2]*+f[n+8>>2],f[g+((e=3|h)<<2)>>2]=1,l=(0|c[a+160>>2])+(i<<2)|0,b=+f[l>>2],k=+f[(m=j+(m<<2)|0)>>2],f[(n=j+(h<<2)|0)>>2]=b+k-b*k,k=+f[l+4>>2],b=+f[m+4>>2],f[n+4>>2]=k+b-k*b,b=+f[l+8>>2],k=+f[m+8>>2],f[n+8>>2]=b+k-b*k),f[j+(e<<2)>>2]=1)},function(a,b){var n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,e=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,o=0,D=0,E=0,F=0,G=0,H=S;if(S=S+48|0,u=H+8|0,s=H+40|0,r=H+32|0,q=(t=H)+24|0,F=H+16|0,e=0|c[(y=308+(a|=0)|0)>>2],w=0|c[a+316>>2],x=0|c[a+320>>2],-1==(0|(p=0|c[(B=e+((b|=0)<<5)+8|0)>>2])))G=0|c[e+(b<<5)+16>>2],c[w+(b<<2)>>2]=c[(0|c[a+268>>2])+(G<<2)>>2],c[x+(b<<2)>>2]=c[(0|c[a+272>>2])+(G<<2)>>2];else{for(v=0|c[(C=e+(b<<5)+16|0)>>2],j=0|c[(0|c[(z=a+276|0)>>2])+(v<<2)>>2],c[F>>2]=j,v=0|c[(0|c[(A=a+280|0)>>2])+(v<<2)>>2],c[(D=F+4|0)>>2]=v,E=1==(0|c[e+(p<<5)+12>>2])?-10:-.10000000149011612,c[s>>2]=j,c[(j=4+s|0)>>2]=v,$[3&c[(v=e+(p<<5)+24|0)>>2]](a,p,s,r,1),h=4+q|0,e=4+r|0,g=t+4|0,i=9,o=1;f[q>>2]=(m=0*o)+ +f[s>>2],f[h>>2]=(n=E*o)+ +f[j>>2],$[3&c[v>>2]](a,p,q,t,1),l=+f[t>>2]-+f[r>>2],f[t>>2]=l,k=+f[g>>2]-+f[e>>2],!(0!=l|0!=(f[g>>2]=k));){if(f[q>>2]=+f[s>>2]-m,f[h>>2]=+f[j>>2]-n,$[3&c[v>>2]](a,p,q,t,1),k=+f[t>>2]-+f[r>>2],f[t>>2]=k,m=+f[g>>2]-+f[e>>2],0!=k|0!=(f[g>>2]=m)){G=6;break}if(!i){G=8;break}i=i+-1|0,o*=.10000000149011612}6==(0|G)?(l=-k,k=-m):8==(0|G)&&(ia(0,2397,u),k=l=0),E=180*+ob(0,E,l,k)/3.1415927410125732,$[3&c[v>>2]](a,0|c[B>>2],F,F,1),G=0|c[C>>2],c[(0|c[z>>2])+(G<<2)>>2]=c[F>>2],c[(0|c[A>>2])+(G<<2)>>2]=c[D>>2],F=(0|c[a+284>>2])+(G<<2)|0,f[F>>2]=+f[F>>2]-E,F=0|c[B>>2],f[w+(b<<2)>>2]=+f[(0|c[a+268>>2])+(G<<2)>>2]*+f[w+(F<<2)>>2],G=(0|c[a+272>>2])+(G<<2)|0,E=+f[G>>2]*+f[x+(F<<2)>>2],f[x+(b<<2)>>2]=E,f[G>>2]=E}(0|d[4+(0|c[a>>2])>>0])<4||(e=0|c[y>>2],g=0|c[a+324>>2],j=0|c[a+328>>2],h=b<<2,i=c[e+(b<<5)+16>>2]<<2,-1==(0|(e=0|c[e+(b<<5)+8>>2]))?(e=0|c[a+296>>2],c[g+(h<<2)>>2]=c[e+(i<<2)>>2],c[g+((F=1|h)<<2)>>2]=c[e+((D=1|i)<<2)>>2],c[g+((b=2|h)<<2)>>2]=c[e+((G=2|i)<<2)>>2],f[g+((e=3|h)<<2)>>2]=1,a=0|c[a+300>>2],c[j+(h<<2)>>2]=c[a+(i<<2)>>2],c[j+(F<<2)>>2]=c[a+(D<<2)>>2],c[j+(b<<2)>>2]=c[a+(G<<2)>>2]):(F=e<<2,G=(0|c[a+296>>2])+(i<<2)|0,f[(e=g+(h<<2)|0)>>2]=+f[G>>2]*+f[(b=g+(F<<2)|0)>>2],f[e+4>>2]=+f[G+4>>2]*+f[b+4>>2],f[e+8>>2]=+f[G+8>>2]*+f[b+8>>2],f[g+((e=3|h)<<2)>>2]=1,G=(0|c[a+300>>2])+(i<<2)|0,o=+f[G>>2],E=+f[(a=j+(F<<2)|0)>>2],f[(b=j+(h<<2)|0)>>2]=o+E-o*E,E=+f[G+4>>2],o=+f[a+4>>2],f[b+4>>2]=E+o-E*o,o=+f[G+8>>2],E=+f[a+8>>2],f[b+8>>2]=o+E-o*E),f[j+(e<<2)>>2]=1),S=H}],$=[function(a,b,c,d,e){x(5)},function(a,b,c,d,e){F(0,0|(a|=0),0|(b|=0),0|(c|=0),0|(d|=0),0|(e|=0))},function(a,b,d,e,h){d|=0,e|=0;var B,F,G,H,I,J,K,L,N,O,P,Q,R,T,U,V,W,X,Y,ba,ca,da,ea,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,w=0,x=0,y=0,z=0,A=0,C=0,D=0,E=0,M=0,_=0,Z=S;if(S=S+32|0,Y=Z,b=0|c[(0|c[308+(a|=0)>>2])+((b|=0)<<5)+16>>2],i=0|c[a+60>>2],R=0|c[(0|c[a+152>>2])+(b<<2)>>2],T=0|c[i+(24*b|0)+8>>2],U=0|c[i+(24*b|0)+4>>2],V=1+T|0,(0|(h|=0))<=0)S=Z;else{W=0|T,X=0|U,Q=0==(0|c[i+(24*b|0)+12>>2]),F=R+(T<<3)|0,G=R+((N=0|v(U,V))<<3)|0,H=R+((L=N+T|0)<<3)|0,I=4+R|0,J=R+(T<<3)+4|0,K=R+(N<<3)+4|0,L=R+(L<<3)+4|0,P=T-1|0,O=U-1|0,t=u=w=x=j=k=s=r=q=p=E=D=o=n=m=l=M=A=0;do{y=(B=+f[d+(M<<3)>>2])*W,C=(z=+f[d+(M<<3)+4>>2])*X,a=!(1<=B),i=!(1<=z);do{if(i&a&!(B<0)&!(z<0)){if(a=~~y,b=(0|v(V,i=~~C))+a|0,k=y-(0|a),j=C-(0|i),!Q){f[e+(M<<3)>>2]=(y=1-j)*((z=1-k)*+f[R+(b<<3)>>2])+y*(k*+f[R+((_=b+1|0)<<3)>>2])+j*(z*+f[R+((a=b+V|0)<<3)>>2])+j*(k*+f[R+((i=a+1|0)<<3)>>2]),z=y*(z*+f[R+(b<<3)+4>>2])+y*(k*+f[R+(_<<3)+4>>2])+j*(z*+f[R+(a<<3)+4>>2]),y=j*(k*+f[R+(i<<3)+4>>2]);break}if(k+j<=1){f[e+(M<<3)>>2]=(z=1-k-j)*+f[R+(b<<3)>>2]+k*+f[R+((i=b+1|0)<<3)>>2]+j*+f[R+((_=b+V|0)<<3)>>2],z=z*+f[R+(b<<3)+4>>2]+k*+f[R+(i<<3)+4>>2],y=j*+f[R+(_<<3)+4>>2];break}f[e+(M<<3)>>2]=(C=k+-1+j)*+f[R+((a=1+(i=b+V|0)|0)<<3)>>2]+(z=1-k)*+f[R+(i<<3)>>2]+(y=1-j)*+f[R+((_=b+1|0)<<3)>>2],z=C*+f[R+(a<<3)+4>>2]+z*+f[R+(i<<3)+4>>2],y*=+f[R+(_<<3)+4>>2];break}if(A||(ea=+f[R>>2],da=+f[F>>2],ca=+f[G>>2],D=+f[H>>2],ba=+f[I>>2],t=(w=+f[J>>2])-(x=+f[K>>2]),A=1,D=.25*(ea+da+ca+D)-.5*(ea=D-ea),E=.25*(ba+w+x+(E=+f[L>>2]))-.5*(ba=E-ba),x=.5*((u=da-ca)+ea),w=.5*(t+ba),u=.5*(ea-u),t=.5*(ba-t)),!(z<3&-2<B&B<3&-2<z)){f[e+(M<<3)>>2]=z*u+(B*x+D),z*=t,y=B*w+E;break}do{if(B<=0){if(z<=0){l=D-(n=2*u),m=E-(o=2*t),n=(r=D-2*x)-n,o=(s=E-2*w)-o,p=+f[R>>2],q=+f[I>>2],k=.5*(2+B),j=.5*(z+2);break}if(i){o=(j=0|(i=(0|U)==(0|(i=~~C))?O:i))/X,k=(0|(_=i+1|0))/X,i=0|v(i,V),_=0|v(_,V),l=+f[R+(i<<3)>>2],m=+f[R+(i<<3)+4>>2],n=o*u+(r=D-2*x),o=o*t+(s=E-2*w),p=+f[R+(_<<3)>>2],q=+f[R+(_<<3)+4>>2],r=k*u+r,s=k*t+s,k=.5*(2+B),j=C-j;break}l=+f[G>>2],m=+f[K>>2],n=u+(r=D-2*x),o=t+(s=E-2*w),p=(j=3*u)+D,q=(k=3*t)+E,r=j+r,s=k+s,k=.5*(2+B),j=.5*(z+-1);break}if(b=z<=0,a){if(b){l=(m=(0|(i=(_=(0|T)==(0|(_=~~y))?P:_)+1|0))/W)*x+D-(n=2*u),m=m*w+E-(o=2*t),n=(p=(k=0|_)/W)*x+D-n,o=p*w+E-o,p=+f[R+(i<<3)>>2],q=+f[R+(i<<3)+4>>2],r=+f[R+(_<<3)>>2],s=+f[R+(_<<3)+4>>2],k=y-k,j=.5*(z+2);break}if(i){c[Y>>2]=M,g[Y+8>>3]=B,g[Y+16>>3]=z,ia(0,865,Y);break}k=0|(_=(0|T)==(0|(_=~~y))?P:_),q=(0|(i=_+1|0))/W,l=+f[R+((i=i+N|0)<<3)>>2],m=+f[R+(i<<3)+4>>2],n=+f[R+((_=_+N|0)<<3)>>2],o=+f[R+(_<<3)+4>>2],p=(r=3*u)+(q*x+D),q=(j=3*t)+(q*w+E),r+=(s=k/W)*x+D,s=j+(s*w+E),k=y-k,j=.5*(z+-1);break}if(b){l=(p=3*x+D)-(n=2*u),m=(q=3*w+E)-(o=2*t),n=x+D-n,o=w+E-o,r=+f[F>>2],s=+f[J>>2],k=.5*(B-1),j=.5*(z+2);break}if(i){m=(j=0|(i=(0|U)==(0|(i=~~C))?O:i))/X,r=(0|(_=i+1|0))/X,i=(0|v(i,V))+T|0,_=(0|v(_,V))+T|0,l=m*u+(p=3*x+D),m=m*t+(q=3*w+E),n=+f[R+(i<<3)>>2],o=+f[R+(i<<3)+4>>2],p=r*u+p,q=r*t+q,r=+f[R+(_<<3)>>2],s=+f[R+(_<<3)+4>>2],k=.5*(B-1),j=C-j;break}l=u+(p=3*x+D),m=t+(q=3*w+E),n=+f[H>>2],o=+f[L>>2],p=(r=3*u)+p,q=(s=3*t)+q,r+=x+D,s+=w+E,k=.5*(B-1),j=.5*(z+-1);break}while(0);if(k+j<=1){f[e+(M<<3)>>2]=n+(l-n)*k+(r-n)*j,z=o+(m-o)*k,y=(s-o)*j;break}f[e+(M<<3)>>2]=p+(r-p)*(z=1-k)+(l-p)*(y=1-j),z=q+(s-q)*z,y*=m-q;break}while(0)}while(f[e+(M<<3)+4>>2]=z+y,(0|(M=M+1|0))!=(0|h));S=Z}},function(a,b,d,e,g){d|=0,e|=0,g|=0;var i,k,n,o,h,j,l,m;if(b=0|c[(0|c[(a|=0)+308>>2])+((b|=0)<<5)+16>>2],j=3.1415927410125732*(+f[(0|c[a+168>>2])+(12*b|0)+4>>2]+ +f[(0|c[a+284>>2])+(b<<2)>>2])/180,h=+t(j),j=+s(j),k=(j*=i=+f[(0|c[a+272>>2])+(b<<2)>>2])*(l=0==(0|c[(0|c[a+288>>2])+(b<<2)>>2])?1:-1),i=(h*=i)*(m=0==(0|c[(0|c[a+292>>2])+(b<<2)>>2])?1:-1),l*=h,m*=j,j=+f[(0|c[a+276>>2])+(b<<2)>>2],h=+f[(0|c[a+280>>2])+(b<<2)>>2],!((0|g)<=0))for(b=0;o=+f[d+(b<<3)>>2],n=+f[d+(b<<3)+4>>2],f[e+(b<<3)>>2]=k*o-i*n+j,f[e+(b<<3)+4>>2]=l*o+m*n+h,(0|(b=b+1|0))!=(0|g););}];return{___errno_location:function(){return 3688},___muldi3:Lc,___udivdi3:Qc,_bitshift64Lshr:Rc,_bitshift64Shl:Sc,_csmFree:function(a){Fc(a|=0)},_csmGetDrawableConstantFlags:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[888+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=1896,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableCount:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[a+332>>2],S=d,0|b):(c[b>>2]=1858,c[b+4>>2]=1411,ia(0,1269,b),S=d,-1)},_csmGetDrawableDrawOrders:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[a+440>>2],S=d,0|b):(c[b>>2]=1980,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableDynamicFlags:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[a+432>>2],S=d,0|b):(c[b>>2]=1924,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableIds:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[832+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=1878,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableIndexCounts:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[904+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=2182,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableIndices:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[840+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=2208,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableMaskCounts:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[912+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=2056,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableMasks:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[844+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=2081,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableMultiplyColors:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[a+452>>2],S=d,0|b):(c[b>>2]=2230,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableOpacities:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[a+448>>2],S=d,0|b):(c[b>>2]=2032,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableParentPartIndices:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[876+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=2286,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableRenderOrders:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[a+436>>2],S=d,0|b):(c[b>>2]=2005,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableScreenColors:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[a+456>>2],S=d,0|b):(c[b>>2]=2259,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableTextureIndices:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[884+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=1951,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableVertexCounts:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[892+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=2101,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableVertexPositions:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[a+444>>2],S=d,0|b):(c[b>>2]=2128,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetDrawableVertexUvs:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[836+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=2158,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetLatestMocVersion:function(){return 4},_csmGetMocVersion:function(a,b){b|=0;var d=S;return S=S+16|0,b=d,(a|=0)?(a=0|ra(a),S=d,0|a):(c[b>>2]=1286,c[b+4>>2]=1303,ia(0,1269,b),S=d,(a=0)|a)},_csmGetParameterCount:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[a+540>>2],S=d,0|b):(c[b>>2]=1610,c[b+4>>2]=1411,ia(0,1269,b),S=d,-1)},_csmGetParameterDefaultValues:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[932+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=1729,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetParameterIds:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[916+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=1631,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetParameterKeyCounts:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[a+616>>2],S=d,0|b):(c[b>>2]=2347,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetParameterKeyValues:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[a+612>>2],S=d,0|b):(c[b>>2]=2372,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetParameterMaximumValues:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[924+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=1700,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetParameterMinimumValues:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[928+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=1671,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetParameterTypes:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[a+548>>2],S=d,0|b):(c[b>>2]=1650,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetParameterValues:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[a+552>>2],S=d,0|b):(c[b>>2]=1758,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetPartCount:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[a+4>>2],S=d,0|b):(c[b>>2]=1780,c[b+4>>2]=1411,ia(0,1269,b),S=d,-1)},_csmGetPartIds:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[712+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=1796,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetPartOpacities:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[a+52>>2],S=d,0|b):(c[b>>2]=1810,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetPartParentPartIndices:function(a){var b=0,d=S;return S=S+16|0,b=d,(a|=0)?(b=0|c[740+(0|c[a>>2])>>2],S=d,0|b):(c[b>>2]=1830,c[b+4>>2]=1411,ia(0,1269,b),S=d,(b=0)|b)},_csmGetSizeofModel:Ha,_csmGetVersion:function(){return 67239938},_csmInitializeModelInPlace:Ia,_csmMalloc:function(a){return 0|Ec(a|=0)},_csmMallocMoc:function(a){var b,d=S;return S=S+16|0,Ic(b=d,64,a|=0),S=d,0|c[b>>2]},_csmMallocModelAndInitialize:function(a){var b=0,e=0,f=S;return S=S+16|0,b=f,0!=(0|(a|=0))&&0==(0|Ic(b,16,e=0|Ha(a)))?(b=0|Ia(a,a=0|c[b>>2],e))||(Fc(a),b=0):b=0,S=f,0|b},_csmReadCanvasInfo:function(a,b,d,e){b|=0,d|=0,e|=0;var f,g,h,i=0,j=S;if(S=S+32|0,g=j+24|0,i=j+16|0,h=j+8|0,f=j,a|=0)return b?d?e?(i=0|c[708+(0|c[a>>2])>>2],c[b>>2]=c[i+12>>2],c[b+4>>2]=c[i+16>>2],c[d>>2]=c[i+4>>2],c[d+4>>2]=c[i+8>>2],c[e>>2]=c[i>>2]):(c[g>>2]=1393,c[4+g>>2]=1487,ia(0,1269,g)):(c[i>>2]=1393,c[i+4>>2]=1458,ia(0,1269,i)):(c[h>>2]=1393,c[4+h>>2]=1431,ia(0,1269,h)),void(S=j);c[f>>2]=1393,c[f+4>>2]=1411,ia(0,1269,f),S=j},_csmResetDrawableDynamicFlags:function(a){var b,d=S;S=S+16|0,b=d,(a|=0)?c[a+428>>2]=1:(c[b>>2]=2318,c[b+4>>2]=1411,ia(0,1269,b)),S=d},_csmReviveMocInPlace:function(a,b){b|=0;var e,d=0,f=0,g=S;return S=S+32|0,f=g+16|0,e=g+8|0,d=g,(a|=0)?((d=a)+63&-64|0)!=(0|d)?(c[e>>2]=1322,c[4+e>>2]=1342,ia(0,1269,e),S=g,(f=0)|f):0|b&&(b+63&-64|0)==(0|b)?(f=0|qa(a),S=g,0|f):(c[f>>2]=1322,c[f+4>>2]=1374,ia(0,1269,f),S=g,(f=0)|f):(c[d>>2]=1322,c[d+4>>2]=1303,ia(0,1269,d),S=g,(f=0)|f)},_csmSetLogFunction:function(a){c[904]=a|=0},_csmUpdateModel:function(a){var b,d=S;S=S+16|0,b=d,(a|=0)?Gb(a):(c[b>>2]=1595,c[b+4>>2]=1411,ia(0,1269,b)),S=d},_emscripten_get_sbrk_ptr:function(){return 4208},_emscripten_replace_memory:function(newBuffer){return a=new Int8Array(newBuffer),d=new Uint8Array(newBuffer),b=new Int16Array(newBuffer),e=new Uint16Array(newBuffer),c=new Int32Array(newBuffer),f=new Float32Array(newBuffer),g=new Float64Array(newBuffer),!0},_free:Fc,_i64Add:Mc,_i64Subtract:Nc,_malloc:Ec,_memcpy:Uc,_memset:Vc,dynCall_ii:function(a,b){return 0|W[3&(a|=0)](0|(b|=0))},dynCall_iiii:function(a,b,c,d){return 0|X[3&(a|=0)](0|(b|=0),0|(c|=0),0|(d|=0))},dynCall_iiiii:function(a,b,c,d,e){return 0|Y[3&(a|=0)](0|(b|=0),0|(c|=0),0|(d|=0),0|(e|=0))},dynCall_vi:function(a,b){Z[1&(a|=0)](0|(b|=0))},dynCall_vii:function(a,b,c){_[3&(a|=0)](0|(b|=0),0|(c|=0))},dynCall_viiiii:function(a,b,c,d,e,f){$[3&(a|=0)](0|(b|=0),0|(c|=0),0|(d|=0),0|(e|=0),0|(f|=0))},establishStackSpace:function(a,b){S=a|=0},stackAlloc:function(a){var b=S;return S=15+(S+(a|=0)|0)&-16,0|b},stackRestore:function(a){S=0|a},stackSave:function(){return 0|S}}}({Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Float32Array:Float32Array,Float64Array:Float64Array},{a:C,b:function(a){J=a},c:function(){return J},d:function(a,c){return I[a](c)},e:function(a,c,d,f){return I[a](c,d,f)},f:function(a,c,d,f,g){return I[a](c,d,f,g)},g:function(a,c){I[a](c)},h:function(a,c,d){I[a](c,d)},i:function(a,c,d,f,g,h){I[a](c,d,f,g,h)},j:function(){return pa.apply(null,arguments)},k:qa,l:function(a,c,d){M.set(M.subarray(c,c+d),a)},m:function(a){if(2130706432<a)return!1;for(var c=Math.max(qa(),16777216);c<a;)c=c<=536870912?ea(2*c):Math.min(ea((3*c+2147483648)/4),2130706432);return!!ra(c)},n:pa,o:function(){C("OOM")},p:function(a){return a},q:na,r:ra,s:function(){var a=b._fflush;a&&a(0),V[1].length&&W(1,10),V[2].length&&W(2,10)},t:oa,u:function(){var a=oa();return b.extraStackTrace&&(a+="\n"+b.extraStackTrace()),na(a)},v:4400},buffer),sa=(b.___errno_location=q.___errno_location,b.___muldi3=q.___muldi3,b.___udivdi3=q.___udivdi3,b._bitshift64Lshr=q._bitshift64Lshr,b._bitshift64Shl=q._bitshift64Shl,b._csmFree=q._csmFree,b._csmGetDrawableConstantFlags=q._csmGetDrawableConstantFlags,b._csmGetDrawableCount=q._csmGetDrawableCount,b._csmGetDrawableDrawOrders=q._csmGetDrawableDrawOrders,b._csmGetDrawableDynamicFlags=q._csmGetDrawableDynamicFlags,b._csmGetDrawableIds=q._csmGetDrawableIds,b._csmGetDrawableIndexCounts=q._csmGetDrawableIndexCounts,b._csmGetDrawableIndices=q._csmGetDrawableIndices,b._csmGetDrawableMaskCounts=q._csmGetDrawableMaskCounts,b._csmGetDrawableMasks=q._csmGetDrawableMasks,b._csmGetDrawableMultiplyColors=q._csmGetDrawableMultiplyColors,b._csmGetDrawableOpacities=q._csmGetDrawableOpacities,b._csmGetDrawableParentPartIndices=q._csmGetDrawableParentPartIndices,b._csmGetDrawableRenderOrders=q._csmGetDrawableRenderOrders,b._csmGetDrawableScreenColors=q._csmGetDrawableScreenColors,b._csmGetDrawableTextureIndices=q._csmGetDrawableTextureIndices,b._csmGetDrawableVertexCounts=q._csmGetDrawableVertexCounts,b._csmGetDrawableVertexPositions=q._csmGetDrawableVertexPositions,b._csmGetDrawableVertexUvs=q._csmGetDrawableVertexUvs,b._csmGetLatestMocVersion=q._csmGetLatestMocVersion,b._csmGetMocVersion=q._csmGetMocVersion,b._csmGetParameterCount=q._csmGetParameterCount,b._csmGetParameterDefaultValues=q._csmGetParameterDefaultValues,b._csmGetParameterIds=q._csmGetParameterIds,b._csmGetParameterKeyCounts=q._csmGetParameterKeyCounts,b._csmGetParameterKeyValues=q._csmGetParameterKeyValues,b._csmGetParameterMaximumValues=q._csmGetParameterMaximumValues,b._csmGetParameterMinimumValues=q._csmGetParameterMinimumValues,b._csmGetParameterTypes=q._csmGetParameterTypes,b._csmGetParameterValues=q._csmGetParameterValues,b._csmGetPartCount=q._csmGetPartCount,b._csmGetPartIds=q._csmGetPartIds,b._csmGetPartOpacities=q._csmGetPartOpacities,b._csmGetPartParentPartIndices=q._csmGetPartParentPartIndices,b._csmGetSizeofModel=q._csmGetSizeofModel,b._csmGetVersion=q._csmGetVersion,b._csmInitializeModelInPlace=q._csmInitializeModelInPlace,b._csmMalloc=q._csmMalloc,b._csmMallocMoc=q._csmMallocMoc,b._csmMallocModelAndInitialize=q._csmMallocModelAndInitialize,b._csmReadCanvasInfo=q._csmReadCanvasInfo,b._csmResetDrawableDynamicFlags=q._csmResetDrawableDynamicFlags,b._csmReviveMocInPlace=q._csmReviveMocInPlace,b._csmSetLogFunction=q._csmSetLogFunction,b._csmUpdateModel=q._csmUpdateModel,b._emscripten_get_sbrk_ptr=q._emscripten_get_sbrk_ptr,b._emscripten_replace_memory=q._emscripten_replace_memory),xa=(b._free=q._free,b._i64Add=q._i64Add,b._i64Subtract=q._i64Subtract,b._malloc=q._malloc,b._memcpy=q._memcpy,b._memset=q._memset,b.establishStackSpace=q.establishStackSpace,b.stackAlloc=q.stackAlloc),ya=b.stackRestore=q.stackRestore,za=b.stackSave=q.stackSave;function Z(){function a(){if(!Y&&(Y=!0,!K)){if(P(ja),P(ka),b.onRuntimeInitialized&&b.onRuntimeInitialized(),b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var a=b.postRun.shift();la.unshift(a)}P(la)}}if(!(0<Q)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)!function(){var a=b.preRun.shift();ia.unshift(a)}();P(ia),0<Q||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("")},1),a()},1)):a())}}if(b.dynCall_ii=q.dynCall_ii,b.dynCall_iiii=q.dynCall_iiii,b.dynCall_iiiii=q.dynCall_iiiii,b.dynCall_vi=q.dynCall_vi,b.dynCall_vii=q.dynCall_vii,b.dynCall_viiiii=q.dynCall_viiiii,b.asm=q,b.ccall=function(a,c,d,f){var g={string:function(a){var c=0;if(null!=a&&0!==a){var d=1+(a.length<<2),f=c=xa(d),g=M;if(0<d){for(var d=f+d-1,h=0;h<a.length;++h){var l=a.charCodeAt(h);if((l=55296<=l&&l<=57343?65536+((1023&l)<<10)|1023&a.charCodeAt(++h):l)<=127){if(d<=f)break;g[f++]=l}else{if(l<=2047){if(d<=f+1)break;g[f++]=192|l>>6}else{if(l<=65535){if(d<=f+2)break;g[f++]=224|l>>12}else{if(d<=f+3)break;g[f++]=240|l>>18,g[f++]=128|l>>12&63}g[f++]=128|l>>6&63}g[f++]=128|63&l}}g[f]=0}}return c},array:function(a){var c=xa(a.length);return N.set(a,c),c}},h=function(a){var c=b["_"+a];return assert(c,"Cannot call unknown function "+a+", make sure it is exported"),c}(a),p=[];if(a=0,f)for(var k=0;k<f.length;k++){var y=g[d[k]];y?(0===a&&(a=za()),p[k]=y(f[k])):p[k]=f[k]}return d=function(a){return"string"===c?da(a):"boolean"===c?!!a:a}(d=h.apply(null,p)),0!==a&&ya(a),d},b.UTF8ToString=da,b.addFunction=function(a){for(var c=0;c<1;c++)if(!I[c])return I[c]=a,1+c;throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."},E&&((String.prototype.startsWith?E.startsWith(U):0===E.indexOf(U))||(n=E,E=b.locateFile?b.locateFile(n,u):u+n),r||t?(q=x(E),M.set(q,8)):(Q++,b.monitorRunDependencies&&b.monitorRunDependencies(Q),F=function(a){a.byteLength&&(a=new Uint8Array(a)),M.set(a,8),b.memoryInitializerRequest&&delete b.memoryInitializerRequest.response,Q--,b.monitorRunDependencies&&b.monitorRunDependencies(Q),0==Q&&(null!==S&&(clearInterval(S),S=null),T&&(a=T,T=null,a()))},Ca=function(){w(function(){throw"could not load memory initializer "+E})},(u=B(E))?F(u.buffer):b.memoryInitializerRequest?(n=function(){var a=b.memoryInitializerRequest,c=a.response;if(200!==a.status&&0!==a.status){if(!(c=B(b.memoryInitializerRequestURL)))return console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: "+a.status+", retrying "+E),void Ca();c=c.buffer}F(c)},b.memoryInitializerRequest.response?setTimeout(n,0):b.memoryInitializerRequest.addEventListener("load",n)):Ca())),b.then=function(a){var c;return Y?a(b):(c=b.onRuntimeInitialized,b.onRuntimeInitialized=function(){c&&c(),a(b)}),b},T=function Fa(){Y||Z(),Y||(T=Fa)},b.run=Z,b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();return Z(),_em_module}),_em=("object"==typeof exports&&"object"==typeof module?module.exports=_em_module:"function"==typeof define&&define.amd?define([],function(){return _em_module}):"object"==typeof exports&&(exports._em_module=_em_module),_em_module())}(Live2DCubismCore=Live2DCubismCore||{});

window.Live2DCubismCore = Live2DCubismCore

  const LOGICAL_WIDTH = 2;
  const LOGICAL_HEIGHT = 2;
  var CubismConfig;
  ((CubismConfig2) => {
    CubismConfig2.supportMoreMaskDivisions = true;
    CubismConfig2.setOpacityFromMotion = false;
  })(CubismConfig || (CubismConfig = {}));
  exports2.config = void 0;
  ((config2) => {
    config2.LOG_LEVEL_VERBOSE = 0;
    config2.LOG_LEVEL_WARNING = 1;
    config2.LOG_LEVEL_ERROR = 2;
    config2.LOG_LEVEL_NONE = 999;
    config2.logLevel = config2.LOG_LEVEL_WARNING;
    config2.sound = true;
    config2.motionSync = true;
    config2.motionFadingDuration = 500;
    config2.idleMotionFadingDuration = 2e3;
    config2.expressionFadingDuration = 500;
    config2.preserveExpressionOnMotion = true;
    config2.cubism4 = CubismConfig;
  })(exports2.config || (exports2.config = {}));
  const VERSION = "0.4.0";
  const logger = {
    log(tag, ...messages) {
      if (exports2.config.logLevel <= exports2.config.LOG_LEVEL_VERBOSE) {
        console.log(`[${tag}]`, ...messages);
      }
    },
    warn(tag, ...messages) {
      if (exports2.config.logLevel <= exports2.config.LOG_LEVEL_WARNING) {
        console.warn(`[${tag}]`, ...messages);
      }
    },
    error(tag, ...messages) {
      if (exports2.config.logLevel <= exports2.config.LOG_LEVEL_ERROR) {
        console.error(`[${tag}]`, ...messages);
      }
    }
  };
  function clamp(num, lower, upper) {
    return num < lower ? lower : num > upper ? upper : num;
  }
  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }
  function copyProperty(type, from, to, fromKey, toKey) {
    const value = from[fromKey];
    if (value !== null && typeof value === type) {
      to[toKey] = value;
    }
  }
  function copyArray(type, from, to, fromKey, toKey) {
    const array = from[fromKey];
    if (Array.isArray(array)) {
      to[toKey] = array.filter((item) => item !== null && typeof item === type);
    }
  }
  function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        if (name !== "constructor") {
          Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        }
      });
    });
  }
  function folderName(url) {
    let lastSlashIndex = url.lastIndexOf("/");
    if (lastSlashIndex != -1) {
      url = url.slice(0, lastSlashIndex);
    }
    lastSlashIndex = url.lastIndexOf("/");
    if (lastSlashIndex !== -1) {
      url = url.slice(lastSlashIndex + 1);
    }
    return url;
  }
  function remove(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  class ExpressionManager extends utils.EventEmitter {
    constructor(settings, options) {
      super();
      this.expressions = [];
      this.reserveExpressionIndex = -1;
      this.destroyed = false;
      this.settings = settings;
      this.tag = `ExpressionManager(${settings.name})`;
    }
    init() {
      this.defaultExpression = this.createExpression({}, void 0);
      this.currentExpression = this.defaultExpression;
      this.stopAllExpressions();
    }
    loadExpression(index) {
      return __async(this, null, function* () {
        if (!this.definitions[index]) {
          logger.warn(this.tag, `Undefined expression at [${index}]`);
          return void 0;
        }
        if (this.expressions[index] === null) {
          logger.warn(this.tag, `Cannot set expression at [${index}] because it's already failed in loading.`);
          return void 0;
        }
        if (this.expressions[index]) {
          return this.expressions[index];
        }
        const expression = yield this._loadExpression(index);
        this.expressions[index] = expression;
        return expression;
      });
    }
    _loadExpression(index) {
      throw new Error("Not implemented.");
    }
    setRandomExpression() {
      return __async(this, null, function* () {
        if (this.definitions.length) {
          const availableIndices = [];
          for (let i = 0; i < this.definitions.length; i++) {
            if (this.expressions[i] !== null && this.expressions[i] !== this.currentExpression && i !== this.reserveExpressionIndex) {
              availableIndices.push(i);
            }
          }
          if (availableIndices.length) {
            const index = Math.floor(Math.random() * availableIndices.length);
            return this.setExpression(index);
          }
        }
        return false;
      });
    }
    resetExpression() {
      this._setExpression(this.defaultExpression);
    }
    restoreExpression() {
      this._setExpression(this.currentExpression);
    }
    setExpression(index) {
      return __async(this, null, function* () {
        if (typeof index !== "number") {
          index = this.getExpressionIndex(index);
        }
        if (!(index > -1 && index < this.definitions.length)) {
          return false;
        }
        if (index === this.expressions.indexOf(this.currentExpression)) {
          return false;
        }
        this.reserveExpressionIndex = index;
        const expression = yield this.loadExpression(index);
        if (!expression || this.reserveExpressionIndex !== index) {
          return false;
        }
        this.reserveExpressionIndex = -1;
        this.currentExpression = expression;
        this._setExpression(expression);
        return true;
      });
    }
    update(model, now) {
      if (!this.isFinished()) {
        return this.updateParameters(model, now);
      }
      return false;
    }
    destroy() {
      this.destroyed = true;
      this.emit("destroy");
      const self2 = this;
      self2.definitions = void 0;
      self2.expressions = void 0;
    }
  }
  const EPSILON = 0.01;
  const MAX_SPEED = 40 / 7.5;
  const ACCELERATION_TIME = 1 / (0.15 * 1e3);
  class FocusController {
    constructor() {
      this.targetX = 0;
      this.targetY = 0;
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;
    }
    focus(x, y, instant = false) {
      this.targetX = clamp(x, -1, 1);
      this.targetY = clamp(y, -1, 1);
      if (instant) {
        this.x = this.targetX;
        this.y = this.targetY;
      }
    }
    update(dt) {
      const dx = this.targetX - this.x;
      const dy = this.targetY - this.y;
      if (Math.abs(dx) < EPSILON && Math.abs(dy) < EPSILON)
        return;
      const d = Math.sqrt(__pow(dx, 2) + __pow(dy, 2));
      const maxSpeed = MAX_SPEED / (1e3 / dt);
      let ax = maxSpeed * (dx / d) - this.vx;
      let ay = maxSpeed * (dy / d) - this.vy;
      const a = Math.sqrt(__pow(ax, 2) + __pow(ay, 2));
      const maxA = maxSpeed * ACCELERATION_TIME * dt;
      if (a > maxA) {
        ax *= maxA / a;
        ay *= maxA / a;
      }
      this.vx += ax;
      this.vy += ay;
      const v = Math.sqrt(__pow(this.vx, 2) + __pow(this.vy, 2));
      const maxV = 0.5 * (Math.sqrt(__pow(maxA, 2) + 8 * maxA * d) - maxA);
      if (v > maxV) {
        this.vx *= maxV / v;
        this.vy *= maxV / v;
      }
      this.x += this.vx;
      this.y += this.vy;
    }
  }
  class ModelSettings {
    constructor(json) {
      this.json = json;
      let url2 = json.url;
      if (typeof url2 !== "string") {
        throw new TypeError("The `url` field in settings JSON must be defined as a string.");
      }
      this.url = url2;
      this.name = folderName(this.url);
    }
    resolveURL(path) {
      return utils.url.resolve(this.url, path);
    }
    replaceFiles(replacer) {
      this.moc = replacer(this.moc, "moc");
      if (this.pose !== void 0) {
        this.pose = replacer(this.pose, "pose");
      }
      if (this.physics !== void 0) {
        this.physics = replacer(this.physics, "physics");
      }
      for (let i = 0; i < this.textures.length; i++) {
        this.textures[i] = replacer(this.textures[i], `textures[${i}]`);
      }
    }
    getDefinedFiles() {
      const files = [];
      this.replaceFiles((file) => {
        files.push(file);
        return file;
      });
      return files;
    }
    validateFiles(files) {
      const assertFileExists = (expectedFile, shouldThrow) => {
        const actualPath = this.resolveURL(expectedFile);
        if (!files.includes(actualPath)) {
          if (shouldThrow) {
            throw new Error(`File "${expectedFile}" is defined in settings, but doesn't exist in given files`);
          }
          return false;
        }
        return true;
      };
      const essentialFiles = [this.moc, ...this.textures];
      essentialFiles.forEach((texture) => assertFileExists(texture, true));
      const definedFiles = this.getDefinedFiles();
      return definedFiles.filter((file) => assertFileExists(file, false));
    }
  }
  var MotionPriority = /* @__PURE__ */ ((MotionPriority2) => {
    MotionPriority2[MotionPriority2["NONE"] = 0] = "NONE";
    MotionPriority2[MotionPriority2["IDLE"] = 1] = "IDLE";
    MotionPriority2[MotionPriority2["NORMAL"] = 2] = "NORMAL";
    MotionPriority2[MotionPriority2["FORCE"] = 3] = "FORCE";
    return MotionPriority2;
  })(MotionPriority || {});
  class MotionState {
    constructor() {
      this.debug = false;
      this.currentPriority = 0;
      this.reservePriority = 0;
    }
    reserve(group, index, priority) {
      if (priority <= 0) {
        logger.log(this.tag, `Cannot start a motion with MotionPriority.NONE.`);
        return false;
      }
      if (group === this.currentGroup && index === this.currentIndex) {
        logger.log(this.tag, `Motion is already playing.`, this.dump(group, index));
        return false;
      }
      if (group === this.reservedGroup && index === this.reservedIndex || group === this.reservedIdleGroup && index === this.reservedIdleIndex) {
        logger.log(this.tag, `Motion is already reserved.`, this.dump(group, index));
        return false;
      }
      if (priority === 1) {
        if (this.currentPriority !== 0) {
          logger.log(this.tag, `Cannot start idle motion because another motion is playing.`, this.dump(group, index));
          return false;
        }
        if (this.reservedIdleGroup !== void 0) {
          logger.log(this.tag, `Cannot start idle motion because another idle motion has reserved.`, this.dump(group, index));
          return false;
        }
        this.setReservedIdle(group, index);
      } else {
        if (priority < 3) {
          if (priority <= this.currentPriority) {
            logger.log(this.tag, "Cannot start motion because another motion is playing as an equivalent or higher priority.", this.dump(group, index));
            return false;
          }
          if (priority <= this.reservePriority) {
            logger.log(this.tag, "Cannot start motion because another motion has reserved as an equivalent or higher priority.", this.dump(group, index));
            return false;
          }
        }
        this.setReserved(group, index, priority);
      }
      return true;
    }
    start(motion, group, index, priority) {
      if (priority === 1) {
        this.setReservedIdle(void 0, void 0);
        if (this.currentPriority !== 0) {
          logger.log(this.tag, "Cannot start idle motion because another motion is playing.", this.dump(group, index));
          return false;
        }
      } else {
        if (group !== this.reservedGroup || index !== this.reservedIndex) {
          logger.log(this.tag, "Cannot start motion because another motion has taken the place.", this.dump(group, index));
          return false;
        }
        this.setReserved(void 0, void 0, 0);
      }
      if (!motion) {
        return false;
      }
      this.setCurrent(group, index, priority);
      return true;
    }
    complete() {
      this.setCurrent(void 0, void 0, 0);
    }
    setCurrent(group, index, priority) {
      this.currentPriority = priority;
      this.currentGroup = group;
      this.currentIndex = index;
    }
    setReserved(group, index, priority) {
      this.reservePriority = priority;
      this.reservedGroup = group;
      this.reservedIndex = index;
    }
    setReservedIdle(group, index) {
      this.reservedIdleGroup = group;
      this.reservedIdleIndex = index;
    }
    isActive(group, index) {
      return group === this.currentGroup && index === this.currentIndex || group === this.reservedGroup && index === this.reservedIndex || group === this.reservedIdleGroup && index === this.reservedIdleIndex;
    }
    reset() {
      this.setCurrent(void 0, void 0, 0);
      this.setReserved(void 0, void 0, 0);
      this.setReservedIdle(void 0, void 0);
    }
    shouldRequestIdleMotion() {
      return this.currentGroup === void 0 && this.reservedIdleGroup === void 0;
    }
    shouldOverrideExpression() {
      return !exports2.config.preserveExpressionOnMotion && this.currentPriority > 1;
    }
    dump(requestedGroup, requestedIndex) {
      if (this.debug) {
        const keys = [
          "currentPriority",
          "reservePriority",
          "currentGroup",
          "currentIndex",
          "reservedGroup",
          "reservedIndex",
          "reservedIdleGroup",
          "reservedIdleIndex"
        ];
        return `
<Requested> group = "${requestedGroup}", index = ${requestedIndex}
` + keys.map((key) => "[" + key + "] " + this[key]).join("\n");
      }
      return "";
    }
  }
  const TAG$2 = "SoundManager";
  const VOLUME = 0.5;
  class SoundManager {
    static get volume() {
      return this._volume;
    }
    static set volume(value) {
      this._volume = (value > 1 ? 1 : value < 0 ? 0 : value) || 0;
      this.audios.forEach((audio) => audio.volume = this._volume);
    }
    static add(file, onFinish, onError) {
      const audio = new Audio(file);
      audio.volume = this._volume;
      audio.preload = "auto";
      audio.addEventListener("ended", () => {
        this.dispose(audio);
        onFinish == null ? void 0 : onFinish();
      });
      audio.addEventListener("error", (e) => {
        this.dispose(audio);
        logger.warn(TAG$2, `Error occurred on "${file}"`, e.error);
        onError == null ? void 0 : onError(e.error);
      });
      this.audios.push(audio);
      return audio;
    }
    static play(audio) {
      return new Promise((resolve, reject) => {
        var _a;
        (_a = audio.play()) == null ? void 0 : _a.catch((e) => {
          audio.dispatchEvent(new ErrorEvent("error", { error: e }));
          reject(e);
        });
        if (audio.readyState === audio.HAVE_ENOUGH_DATA) {
          resolve();
        } else {
          audio.addEventListener("canplaythrough", resolve);
        }
      });
    }
    static dispose(audio) {
      audio.pause();
      audio.removeAttribute("src");
      remove(this.audios, audio);
    }
    static destroy() {
      for (let i = this.audios.length - 1; i >= 0; i--) {
        this.dispose(this.audios[i]);
      }
    }
  }
  SoundManager.audios = [];
  SoundManager._volume = VOLUME;
  var MotionPreloadStrategy = /* @__PURE__ */ ((MotionPreloadStrategy2) => {
    MotionPreloadStrategy2["ALL"] = "ALL";
    MotionPreloadStrategy2["IDLE"] = "IDLE";
    MotionPreloadStrategy2["NONE"] = "NONE";
    return MotionPreloadStrategy2;
  })(MotionPreloadStrategy || {});
  class MotionManager extends utils.EventEmitter {
    constructor(settings, options) {
      super();
      this.motionGroups = {};
      this.state = new MotionState();
      this.playing = false;
      this.destroyed = false;
      this.settings = settings;
      this.tag = `MotionManager(${settings.name})`;
      this.state.tag = this.tag;
    }
    init(options) {
      if (options == null ? void 0 : options.idleMotionGroup) {
        this.groups.idle = options.idleMotionGroup;
      }
      this.setupMotions(options);
      this.stopAllMotions();
    }
    setupMotions(options) {
      for (const group of Object.keys(this.definitions)) {
        this.motionGroups[group] = [];
      }
      let groups;
      switch (options == null ? void 0 : options.motionPreload) {
        case "NONE":
          return;
        case "ALL":
          groups = Object.keys(this.definitions);
          break;
        case "IDLE":
        default:
          groups = [this.groups.idle];
          break;
      }
      for (const group of groups) {
        if (this.definitions[group]) {
          for (let i = 0; i < this.definitions[group].length; i++) {
            this.loadMotion(group, i).then();
          }
        }
      }
    }
    loadMotion(group, index) {
      return __async(this, null, function* () {
        var _a;
        if (!((_a = this.definitions[group]) == null ? void 0 : _a[index])) {
          logger.warn(this.tag, `Undefined motion at "${group}"[${index}]`);
          return void 0;
        }
        if (this.motionGroups[group][index] === null) {
          logger.warn(this.tag, `Cannot start motion at "${group}"[${index}] because it's already failed in loading.`);
          return void 0;
        }
        if (this.motionGroups[group][index]) {
          return this.motionGroups[group][index];
        }
        const motion = yield this._loadMotion(group, index);
        if (this.destroyed) {
          return;
        }
        this.motionGroups[group][index] = motion != null ? motion : null;
        return motion;
      });
    }
    _loadMotion(group, index) {
      throw new Error("Not implemented.");
    }
    startMotion(_0, _1) {
      return __async(this, arguments, function* (group, index, priority = MotionPriority.NORMAL) {
        var _a;
        if (!this.state.reserve(group, index, priority)) {
          return false;
        }
        const definition = (_a = this.definitions[group]) == null ? void 0 : _a[index];
        if (!definition) {
          return false;
        }
        if (this.currentAudio) {
          SoundManager.dispose(this.currentAudio);
        }
        let audio;
        if (exports2.config.sound) {
          const soundURL = this.getSoundFile(definition);
          if (soundURL) {
            try {
              audio = SoundManager.add(this.settings.resolveURL(soundURL), () => this.currentAudio = void 0, () => this.currentAudio = void 0);
              this.currentAudio = audio;
            } catch (e) {
              logger.warn(this.tag, "Failed to create audio", soundURL, e);
            }
          }
        }
        const motion = yield this.loadMotion(group, index);
        if (audio) {
          const readyToPlay = SoundManager.play(audio).catch((e) => logger.warn(this.tag, "Failed to play audio", audio.src, e));
          if (exports2.config.motionSync) {
            yield readyToPlay;
          }
        }
        if (!this.state.start(motion, group, index, priority)) {
          if (audio) {
            SoundManager.dispose(audio);
            this.currentAudio = void 0;
          }
          return false;
        }
        logger.log(this.tag, "Start motion:", this.getMotionName(definition));
        this.emit("motionStart", group, index, audio);
        if (this.state.shouldOverrideExpression()) {
          this.expressionManager && this.expressionManager.resetExpression();
        }
        this.playing = true;
        this._startMotion(motion);
        return true;
      });
    }
    startRandomMotion(group, priority) {
      return __async(this, null, function* () {
        const groupDefs = this.definitions[group];
        if (groupDefs == null ? void 0 : groupDefs.length) {
          const availableIndices = [];
          for (let i = 0; i < groupDefs.length; i++) {
            if (this.motionGroups[group][i] !== null && !this.state.isActive(group, i)) {
              availableIndices.push(i);
            }
          }
          if (availableIndices.length) {
            const index = Math.floor(Math.random() * availableIndices.length);
            return this.startMotion(group, availableIndices[index], priority);
          }
        }
        return false;
      });
    }
    stopAllMotions() {
      this._stopAllMotions();
      this.state.reset();
      if (this.currentAudio) {
        SoundManager.dispose(this.currentAudio);
        this.currentAudio = void 0;
      }
    }
    update(model, now) {
      var _a;
      if (this.isFinished()) {
        if (this.playing) {
          this.playing = false;
          this.emit("motionFinish");
        }
        if (this.state.shouldOverrideExpression()) {
          (_a = this.expressionManager) == null ? void 0 : _a.restoreExpression();
        }
        this.state.complete();
        if (this.state.shouldRequestIdleMotion()) {
          this.startRandomMotion(this.groups.idle, MotionPriority.IDLE);
        }
      }
      return this.updateParameters(model, now);
    }
    destroy() {
      var _a;
      this.destroyed = true;
      this.emit("destroy");
      this.stopAllMotions();
      (_a = this.expressionManager) == null ? void 0 : _a.destroy();
      const self2 = this;
      self2.definitions = void 0;
      self2.motionGroups = void 0;
    }
  }
  const tempBounds = { x: 0, y: 0, width: 0, height: 0 };
  class InternalModel extends utils.EventEmitter {
    constructor() {
      super(...arguments);
      this.focusController = new FocusController();
      this.originalWidth = 0;
      this.originalHeight = 0;
      this.width = 0;
      this.height = 0;
      this.localTransform = new math.Matrix();
      this.drawingMatrix = new math.Matrix();
      this.hitAreas = {};
      this.textureFlipY = false;
      this.viewport = [0, 0, 0, 0];
      this.destroyed = false;
    }
    init() {
      this.setupLayout();
      this.setupHitAreas();
    }
    setupLayout() {
      const self2 = this;
      const size = this.getSize();
      self2.originalWidth = size[0];
      self2.originalHeight = size[1];
      const layout = Object.assign({
        width: LOGICAL_WIDTH,
        height: LOGICAL_HEIGHT
      }, this.getLayout());
      this.localTransform.scale(layout.width / LOGICAL_WIDTH, layout.height / LOGICAL_HEIGHT);
      self2.width = this.originalWidth * this.localTransform.a;
      self2.height = this.originalHeight * this.localTransform.d;
      const offsetX = layout.x !== void 0 && layout.x - layout.width / 2 || layout.centerX !== void 0 && layout.centerX || layout.left !== void 0 && layout.left - layout.width / 2 || layout.right !== void 0 && layout.right + layout.width / 2 || 0;
      const offsetY = layout.y !== void 0 && layout.y - layout.height / 2 || layout.centerY !== void 0 && layout.centerY || layout.top !== void 0 && layout.top - layout.height / 2 || layout.bottom !== void 0 && layout.bottom + layout.height / 2 || 0;
      this.localTransform.translate(this.width * offsetX, -this.height * offsetY);
    }
    setupHitAreas() {
      const definitions = this.getHitAreaDefs().filter((hitArea) => hitArea.index >= 0);
      for (const def of definitions) {
        this.hitAreas[def.name] = def;
      }
    }
    hitTest(x, y) {
      return Object.keys(this.hitAreas).filter((hitAreaName) => this.isHit(hitAreaName, x, y));
    }
    isHit(hitAreaName, x, y) {
      if (!this.hitAreas[hitAreaName]) {
        return false;
      }
      const drawIndex = this.hitAreas[hitAreaName].index;
      const bounds = this.getDrawableBounds(drawIndex, tempBounds);
      return bounds.x <= x && x <= bounds.x + bounds.width && bounds.y <= y && y <= bounds.y + bounds.height;
    }
    getDrawableBounds(index, bounds) {
      const vertices = this.getDrawableVertices(index);
      let left = vertices[0];
      let right = vertices[0];
      let top = vertices[1];
      let bottom = vertices[1];
      for (let i = 0; i < vertices.length; i += 2) {
        const vx = vertices[i];
        const vy = vertices[i + 1];
        left = Math.min(vx, left);
        right = Math.max(vx, right);
        top = Math.min(vy, top);
        bottom = Math.max(vy, bottom);
      }
      bounds != null ? bounds : bounds = {};
      bounds.x = left;
      bounds.y = top;
      bounds.width = right - left;
      bounds.height = bottom - top;
      return bounds;
    }
    updateTransform(transform) {
      this.drawingMatrix.copyFrom(transform).append(this.localTransform);
    }
    update(dt, now) {
      this.focusController.update(dt);
    }
    destroy() {
      this.destroyed = true;
      this.emit("destroy");
      this.motionManager.destroy();
      this.motionManager = void 0;
    }
  }
  const TAG$1 = "XHRLoader";
  class NetworkError extends Error {
    constructor(message, url, status, aborted = false) {
      super(message);
      this.url = url;
      this.status = status;
      this.aborted = aborted;
    }
  }
  const _XHRLoader = class {
    static createXHR(target, url, type, onload, onerror) {
      const xhr = new XMLHttpRequest();
      _XHRLoader.allXhrSet.add(xhr);
      if (target) {
        let xhrSet = _XHRLoader.xhrMap.get(target);
        if (!xhrSet) {
          xhrSet = /* @__PURE__ */ new Set([xhr]);
          _XHRLoader.xhrMap.set(target, xhrSet);
        } else {
          xhrSet.add(xhr);
        }
        if (!target.listeners("destroy").includes(_XHRLoader.cancelXHRs)) {
          target.once("destroy", _XHRLoader.cancelXHRs);
        }
      }
      xhr.open("GET", url);
      xhr.responseType = type;
      xhr.onload = () => {
        if ((xhr.status === 200 || xhr.status === 0) && xhr.response) {
          onload(xhr.response);
        } else {
          xhr.onerror();
        }
      };
      xhr.onerror = () => {
        logger.warn(TAG$1, `Failed to load resource as ${xhr.responseType} (Status ${xhr.status}): ${url}`);
        onerror(new NetworkError("Network error.", url, xhr.status));
      };
      xhr.onabort = () => onerror(new NetworkError("Aborted.", url, xhr.status, true));
      xhr.onloadend = () => {
        var _a;
        _XHRLoader.allXhrSet.delete(xhr);
        if (target) {
          (_a = _XHRLoader.xhrMap.get(target)) == null ? void 0 : _a.delete(xhr);
        }
      };
      return xhr;
    }
    static cancelXHRs() {
      var _a;
      (_a = _XHRLoader.xhrMap.get(this)) == null ? void 0 : _a.forEach((xhr) => {
        xhr.abort();
        _XHRLoader.allXhrSet.delete(xhr);
      });
      _XHRLoader.xhrMap.delete(this);
    }
    static release() {
      _XHRLoader.allXhrSet.forEach((xhr) => xhr.abort());
      _XHRLoader.allXhrSet.clear();
      _XHRLoader.xhrMap = /* @__PURE__ */ new WeakMap();
    }
  };
  let XHRLoader = _XHRLoader;
  XHRLoader.xhrMap = /* @__PURE__ */ new WeakMap();
  XHRLoader.allXhrSet = /* @__PURE__ */ new Set();
  XHRLoader.loader = (context, next) => {
    return new Promise((resolve, reject) => {
      const xhr = _XHRLoader.createXHR(context.target, context.settings ? context.settings.resolveURL(context.url) : context.url, context.type, (data) => {
        context.result = data;
        resolve();
      }, reject);
      xhr.send();
    });
  };
  function runMiddlewares(middleware, context) {
    let index = -1;
    return dispatch(0);
    function dispatch(i, err) {
      if (err)
        return Promise.reject(err);
      if (i <= index)
        return Promise.reject(new Error("next() called multiple times"));
      index = i;
      const fn = middleware[i];
      if (!fn)
        return Promise.resolve();
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err2) {
        return Promise.reject(err2);
      }
    }
  }
  class Live2DLoader {
    static load(context) {
      return runMiddlewares(this.middlewares, context).then(() => context.result);
    }
  }
  Live2DLoader.middlewares = [XHRLoader.loader];
  function createTexture(url, options = {}) {
    var _a;
    const textureOptions = { resourceOptions: { crossorigin: options.crossOrigin } };
    if (core.Texture.fromURL) {
      return core.Texture.fromURL(url, textureOptions).catch((e) => {
        if (e instanceof Error) {
          throw e;
        }
        const err = new Error("Texture loading error");
        err.event = e;
        throw err;
      });
    }
    textureOptions.resourceOptions.autoLoad = false;
    const texture = core.Texture.from(url, textureOptions);
    if (texture.baseTexture.valid) {
      return Promise.resolve(texture);
    }
    const resource = texture.baseTexture.resource;
    (_a = resource._live2d_load) != null ? _a : resource._live2d_load = new Promise((resolve, reject) => {
      const errorHandler = (event) => {
        resource.source.removeEventListener("error", errorHandler);
        const err = new Error("Texture loading error");
        err.event = event;
        reject(err);
      };
      resource.source.addEventListener("error", errorHandler);
      resource.load().then(() => resolve(texture)).catch(errorHandler);
    });
    return resource._live2d_load;
  }
  const TAG = "Live2DFactory";
  const urlToJSON = (context, next) => __async(this, null, function* () {
    if (typeof context.source === "string") {
      const data = yield Live2DLoader.load({
        url: context.source,
        type: "json",
        target: context.live2dModel
      });
      data.url = context.source;
      context.source = data;
      context.live2dModel.emit("settingsJSONLoaded", data);
    }
    return next();
  });
  const jsonToSettings = (context, next) => __async(this, null, function* () {
    if (context.source instanceof ModelSettings) {
      context.settings = context.source;
      return next();
    } else if (typeof context.source === "object") {
      const runtime = Live2DFactory.findRuntime(context.source);
      if (runtime) {
        const settings = runtime.createModelSettings(context.source);
        context.settings = settings;
        context.live2dModel.emit("settingsLoaded", settings);
        return next();
      }
    }
    throw new TypeError("Unknown settings format.");
  });
  const waitUntilReady = (context, next) => {
    if (context.settings) {
      const runtime = Live2DFactory.findRuntime(context.settings);
      if (runtime) {
        return runtime.ready().then(next);
      }
    }
    return next();
  };
  const setupOptionals = (context, next) => __async(this, null, function* () {
    yield next();
    const internalModel = context.internalModel;
    if (internalModel) {
      const settings = context.settings;
      const runtime = Live2DFactory.findRuntime(settings);
      if (runtime) {
        const tasks = [];
        if (settings.pose) {
          tasks.push(Live2DLoader.load({
            settings,
            url: settings.pose,
            type: "json",
            target: internalModel
          }).then((data) => {
            internalModel.pose = runtime.createPose(internalModel.coreModel, data);
            context.live2dModel.emit("poseLoaded", internalModel.pose);
          }).catch((e) => {
            context.live2dModel.emit("poseLoadError", e);
            logger.warn(TAG, "Failed to load pose.", e);
          }));
        }
        if (settings.physics) {
          tasks.push(Live2DLoader.load({
            settings,
            url: settings.physics,
            type: "json",
            target: internalModel
          }).then((data) => {
            internalModel.physics = runtime.createPhysics(internalModel.coreModel, data);
            context.live2dModel.emit("physicsLoaded", internalModel.physics);
          }).catch((e) => {
            context.live2dModel.emit("physicsLoadError", e);
            logger.warn(TAG, "Failed to load physics.", e);
          }));
        }
        if (tasks.length) {
          yield Promise.all(tasks);
        }
      }
    }
  });
  const setupEssentials = (context, next) => __async(this, null, function* () {
    if (context.settings) {
      const live2DModel = context.live2dModel;
      const textureLoadings = context.settings.textures.map((tex) => {
        const url = context.settings.resolveURL(tex);
        return createTexture(url, { crossOrigin: context.options.crossOrigin });
      });
      yield next();
      if (context.internalModel) {
        live2DModel.internalModel = context.internalModel;
        live2DModel.emit("modelLoaded", context.internalModel);
      } else {
        throw new TypeError("Missing internal model.");
      }
      live2DModel.textures = yield Promise.all(textureLoadings);
      live2DModel.emit("textureLoaded", live2DModel.textures);
    } else {
      throw new TypeError("Missing settings.");
    }
  });
  const createInternalModel = (context, next) => __async(this, null, function* () {
    const settings = context.settings;
    if (settings instanceof ModelSettings) {
      const runtime = Live2DFactory.findRuntime(settings);
      if (!runtime) {
        throw new TypeError("Unknown model settings.");
      }
      const modelData = yield Live2DLoader.load({
        settings,
        url: settings.moc,
        type: "arraybuffer",
        target: context.live2dModel
      });
      if (!runtime.isValidMoc(modelData)) {
        throw new Error("Invalid moc data");
      }
      const coreModel = runtime.createCoreModel(modelData);
      context.internalModel = runtime.createInternalModel(coreModel, settings, context.options);
      return next();
    }
    throw new TypeError("Missing settings.");
  });
  const _Live2DFactory = class {
    static registerRuntime(runtime) {
      _Live2DFactory.runtimes.push(runtime);
      _Live2DFactory.runtimes.sort((a, b) => b.version - a.version);
    }
    static findRuntime(source) {
      for (const runtime of _Live2DFactory.runtimes) {
        if (runtime.test(source)) {
          return runtime;
        }
      }
    }
    static setupLive2DModel(live2dModel, source, options) {
      return __async(this, null, function* () {
        const textureLoaded = new Promise((resolve) => live2dModel.once("textureLoaded", resolve));
        const modelLoaded = new Promise((resolve) => live2dModel.once("modelLoaded", resolve));
        const readyEventEmitted = Promise.all([textureLoaded, modelLoaded]).then(() => live2dModel.emit("ready"));
        yield runMiddlewares(_Live2DFactory.live2DModelMiddlewares, {
          live2dModel,
          source,
          options: options || {}
        });
        yield readyEventEmitted;
        live2dModel.emit("load");
      });
    }
    static loadMotion(motionManager, group, index) {
      var _a, _b;
      const handleError = (e) => motionManager.emit("motionLoadError", group, index, e);
      try {
        const definition = (_a = motionManager.definitions[group]) == null ? void 0 : _a[index];
        if (!definition) {
          return Promise.resolve(void 0);
        }
        if (!motionManager.listeners("destroy").includes(_Live2DFactory.releaseTasks)) {
          motionManager.once("destroy", _Live2DFactory.releaseTasks);
        }
        let tasks = _Live2DFactory.motionTasksMap.get(motionManager);
        if (!tasks) {
          tasks = {};
          _Live2DFactory.motionTasksMap.set(motionManager, tasks);
        }
        let taskGroup = tasks[group];
        if (!taskGroup) {
          taskGroup = [];
          tasks[group] = taskGroup;
        }
        const path = motionManager.getMotionFile(definition);
        (_b = taskGroup[index]) != null ? _b : taskGroup[index] = Live2DLoader.load({
          url: path,
          settings: motionManager.settings,
          type: motionManager.motionDataType,
          target: motionManager
        }).then((data) => {
          var _a2;
          const taskGroup2 = (_a2 = _Live2DFactory.motionTasksMap.get(motionManager)) == null ? void 0 : _a2[group];
          if (taskGroup2) {
            delete taskGroup2[index];
          }
          const motion = motionManager.createMotion(data, group, definition);
          motionManager.emit("motionLoaded", group, index, motion);
          return motion;
        }).catch((e) => {
          logger.warn(motionManager.tag, `Failed to load motion: ${path}
`, e);
          handleError(e);
        });
        return taskGroup[index];
      } catch (e) {
        logger.warn(motionManager.tag, `Failed to load motion at "${group}"[${index}]
`, e);
        handleError(e);
      }
      return Promise.resolve(void 0);
    }
    static loadExpression(expressionManager, index) {
      var _a;
      const handleError = (e) => expressionManager.emit("expressionLoadError", index, e);
      try {
        const definition = expressionManager.definitions[index];
        if (!definition) {
          return Promise.resolve(void 0);
        }
        if (!expressionManager.listeners("destroy").includes(_Live2DFactory.releaseTasks)) {
          expressionManager.once("destroy", _Live2DFactory.releaseTasks);
        }
        let tasks = _Live2DFactory.expressionTasksMap.get(expressionManager);
        if (!tasks) {
          tasks = [];
          _Live2DFactory.expressionTasksMap.set(expressionManager, tasks);
        }
        const path = expressionManager.getExpressionFile(definition);
        (_a = tasks[index]) != null ? _a : tasks[index] = Live2DLoader.load({
          url: path,
          settings: expressionManager.settings,
          type: "json",
          target: expressionManager
        }).then((data) => {
          const tasks2 = _Live2DFactory.expressionTasksMap.get(expressionManager);
          if (tasks2) {
            delete tasks2[index];
          }
          const expression = expressionManager.createExpression(data, definition);
          expressionManager.emit("expressionLoaded", index, expression);
          return expression;
        }).catch((e) => {
          logger.warn(expressionManager.tag, `Failed to load expression: ${path}
`, e);
          handleError(e);
        });
        return tasks[index];
      } catch (e) {
        logger.warn(expressionManager.tag, `Failed to load expression at [${index}]
`, e);
        handleError(e);
      }
      return Promise.resolve(void 0);
    }
    static releaseTasks() {
      if (this instanceof MotionManager) {
        _Live2DFactory.motionTasksMap.delete(this);
      } else {
        _Live2DFactory.expressionTasksMap.delete(this);
      }
    }
  };
  let Live2DFactory = _Live2DFactory;
  Live2DFactory.runtimes = [];
  Live2DFactory.urlToJSON = urlToJSON;
  Live2DFactory.jsonToSettings = jsonToSettings;
  Live2DFactory.waitUntilReady = waitUntilReady;
  Live2DFactory.setupOptionals = setupOptionals;
  Live2DFactory.setupEssentials = setupEssentials;
  Live2DFactory.createInternalModel = createInternalModel;
  Live2DFactory.live2DModelMiddlewares = [
    urlToJSON,
    jsonToSettings,
    waitUntilReady,
    setupOptionals,
    setupEssentials,
    createInternalModel
  ];
  Live2DFactory.motionTasksMap = /* @__PURE__ */ new WeakMap();
  Live2DFactory.expressionTasksMap = /* @__PURE__ */ new WeakMap();
  MotionManager.prototype["_loadMotion"] = function(group, index) {
    return Live2DFactory.loadMotion(this, group, index);
  };
  ExpressionManager.prototype["_loadExpression"] = function(index) {
    return Live2DFactory.loadExpression(this, index);
  };
  class InteractionMixin {
    constructor() {
      this._autoInteract = false;
    }
    get autoInteract() {
      return this._autoInteract;
    }
    set autoInteract(autoInteract) {
      if (autoInteract !== this._autoInteract) {
        if (autoInteract) {
          this.on("pointertap", onTap, this);
        } else {
          this.off("pointertap", onTap, this);
        }
        this._autoInteract = autoInteract;
      }
    }
    registerInteraction(manager) {
      if (manager !== this.interactionManager) {
        this.unregisterInteraction();
        if (this._autoInteract && manager) {
          this.interactionManager = manager;
          manager.on("pointermove", onPointerMove, this);
        }
      }
    }
    unregisterInteraction() {
      var _a;
      if (this.interactionManager) {
        (_a = this.interactionManager) == null ? void 0 : _a.off("pointermove", onPointerMove, this);
        this.interactionManager = void 0;
      }
    }
  }
  function onTap(event) {
    this.tap(event.data.global.x, event.data.global.y);
  }
  function onPointerMove(event) {
    this.focus(event.data.global.x, event.data.global.y);
  }
  class Live2DTransform extends math.Transform {
  }
  const tempPoint = new math.Point();
  const tempMatrix$1 = new math.Matrix();
  let tickerRef;
  class Live2DModel extends display.Container {
    constructor(options) {
      super();
      this.tag = "Live2DModel(uninitialized)";
      this.textures = [];
      this.transform = new Live2DTransform();
      this.anchor = new math.ObservablePoint(this.onAnchorChange, this, 0, 0);
      this.glContextID = -1;
      this.elapsedTime = performance.now();
      this.deltaTime = 0;
      this.wasUpdated = false;
      this._autoUpdate = false;
      this.once("modelLoaded", () => this.init(options));
    }
    static from(source, options) {
      const model = new this(options);
      return Live2DFactory.setupLive2DModel(model, source, options).then(() => model);
    }
    static fromSync(source, options) {
      const model = new this(options);
      Live2DFactory.setupLive2DModel(model, source, options).then(options == null ? void 0 : options.onLoad).catch(options == null ? void 0 : options.onError);
      return model;
    }
    static registerTicker(tickerClass) {
      tickerRef = tickerClass;
    }
    get autoUpdate() {
      return this._autoUpdate;
    }
    set autoUpdate(autoUpdate) {
      var _a;
      tickerRef || (tickerRef = (_a = window.PIXI) == null ? void 0 : _a.Ticker);
      if (autoUpdate) {
        if (!this._destroyed) {
          if (tickerRef) {
            tickerRef.shared.add(this.onTickerUpdate, this);
            this._autoUpdate = true;
          } else {
            logger.warn(this.tag, "No Ticker registered, please call Live2DModel.registerTicker(Ticker).");
          }
        }
      } else {
        tickerRef == null ? void 0 : tickerRef.shared.remove(this.onTickerUpdate, this);
        this._autoUpdate = false;
      }
    }
    init(options) {
      this.tag = `Live2DModel(${this.internalModel.settings.name})`;
      const _options = Object.assign({
        autoUpdate: true,
        autoInteract: true
      }, options);
      if (_options.autoInteract) {
        this.interactive = true;
      }
      this.autoInteract = _options.autoInteract;
      this.autoUpdate = _options.autoUpdate;
    }
    onAnchorChange() {
      this.pivot.set(this.anchor.x * this.internalModel.width, this.anchor.y * this.internalModel.height);
    }
    motion(group, index, priority) {
      return index === void 0 ? this.internalModel.motionManager.startRandomMotion(group, priority) : this.internalModel.motionManager.startMotion(group, index, priority);
    }
    expression(id) {
      if (this.internalModel.motionManager.expressionManager) {
        return id === void 0 ? this.internalModel.motionManager.expressionManager.setRandomExpression() : this.internalModel.motionManager.expressionManager.setExpression(id);
      }
      return Promise.resolve(false);
    }
    focus(x, y, instant = false) {
      tempPoint.x = x;
      tempPoint.y = y;
      this.toModelPosition(tempPoint, tempPoint, true);
      let tx = tempPoint.x / this.internalModel.originalWidth * 2 - 1;
      let ty = tempPoint.y / this.internalModel.originalHeight * 2 - 1;
      let radian = Math.atan2(ty, tx);
      this.internalModel.focusController.focus(Math.cos(radian), -Math.sin(radian), instant);
    }
    tap(x, y) {
      const hitAreaNames = this.hitTest(x, y);
      if (hitAreaNames.length) {
        logger.log(this.tag, `Hit`, hitAreaNames);
        this.emit("hit", hitAreaNames);
      }
    }
    hitTest(x, y) {
      tempPoint.x = x;
      tempPoint.y = y;
      this.toModelPosition(tempPoint, tempPoint);
      return this.internalModel.hitTest(tempPoint.x, tempPoint.y);
    }
    toModelPosition(position, result = position.clone(), skipUpdate) {
      if (!skipUpdate) {
        this._recursivePostUpdateTransform();
        if (!this.parent) {
          this.parent = this._tempDisplayObjectParent;
          this.displayObjectUpdateTransform();
          this.parent = null;
        } else {
          this.displayObjectUpdateTransform();
        }
      }
      this.transform.worldTransform.applyInverse(position, result);
      this.internalModel.localTransform.applyInverse(result, result);
      return result;
    }
    containsPoint(point) {
      return this.getBounds(true).contains(point.x, point.y);
    }
    _calculateBounds() {
      this._bounds.addFrame(this.transform, 0, 0, this.internalModel.width, this.internalModel.height);
    }
    onTickerUpdate() {
      this.update(tickerRef.shared.deltaMS);
    }
    update(dt) {
      this.deltaTime += dt;
      this.elapsedTime += dt;
      this.wasUpdated = true;
    }
    _render(renderer) {
      this.registerInteraction(renderer.plugins.interaction);
      if (!this.wasUpdated) {
        return;
      }
      renderer.batch.reset();
      renderer.geometry.reset();
      renderer.shader.reset();
      renderer.state.reset();
      let shouldUpdateTexture = false;
      if (this.glContextID !== renderer.CONTEXT_UID) {
        this.glContextID = renderer.CONTEXT_UID;
        this.internalModel.updateWebGLContext(renderer.gl, this.glContextID);
        shouldUpdateTexture = true;
      }
      for (let i = 0; i < this.textures.length; i++) {
        const texture = this.textures[i];
        if (!texture.valid) {
          continue;
        }
        if (shouldUpdateTexture || !texture.baseTexture._glTextures[this.glContextID]) {
          renderer.gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, this.internalModel.textureFlipY);
          renderer.texture.bind(texture.baseTexture, 0);
        }
        this.internalModel.bindTexture(i, texture.baseTexture._glTextures[this.glContextID].texture);
        texture.baseTexture.touched = renderer.textureGC.count;
      }
      const viewport = renderer.framebuffer.viewport;
      this.internalModel.viewport = [viewport.x, viewport.y, viewport.width, viewport.height];
      if (this.deltaTime) {
        this.internalModel.update(this.deltaTime, this.elapsedTime);
        this.deltaTime = 0;
      }
      const internalTransform = tempMatrix$1.copyFrom(renderer.globalUniforms.uniforms.projectionMatrix).append(this.worldTransform);
      this.internalModel.updateTransform(internalTransform);
      this.internalModel.draw(renderer.gl);
      renderer.state.reset();
      renderer.texture.reset();
    }
    destroy(options) {
      this.emit("destroy");
      this.autoUpdate = false;
      this.unregisterInteraction();
      if (options == null ? void 0 : options.texture) {
        this.textures.forEach((texture) => texture.destroy(options.baseTexture));
      }
      this.internalModel.destroy();
      super.destroy(options);
    }
  }
  applyMixins(Live2DModel, [InteractionMixin]);
  const _FileLoader = class {
    static resolveURL(settingsURL, filePath) {
      var _a;
      const resolved = (_a = _FileLoader.filesMap[settingsURL]) == null ? void 0 : _a[filePath];
      if (resolved === void 0) {
        throw new Error("Cannot find this file from uploaded files: " + filePath);
      }
      return resolved;
    }
    static upload(files, settings) {
      return __async(this, null, function* () {
        const fileMap = {};
        for (const definedFile of settings.getDefinedFiles()) {
          const actualPath = decodeURI(utils.url.resolve(settings.url, definedFile));
          const actualFile = files.find((file) => file.webkitRelativePath === actualPath);
          if (actualFile) {
            fileMap[definedFile] = URL.createObjectURL(actualFile);
          }
        }
        _FileLoader.filesMap[settings._objectURL] = fileMap;
      });
    }
    static createSettings(files) {
      return __async(this, null, function* () {
        const settingsFile = files.find((file) => file.name.endsWith("model.json") || file.name.endsWith("model3.json"));
        if (!settingsFile) {
          throw new TypeError("Settings file not found");
        }
        const settingsText = yield _FileLoader.readText(settingsFile);
        const settingsJSON = JSON.parse(settingsText);
        settingsJSON.url = settingsFile.webkitRelativePath;
        const runtime = Live2DFactory.findRuntime(settingsJSON);
        if (!runtime) {
          throw new Error("Unknown settings JSON");
        }
        const settings = runtime.createModelSettings(settingsJSON);
        settings._objectURL = URL.createObjectURL(settingsFile);
        return settings;
      });
    }
    static readText(file) {
      return __async(this, null, function* () {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsText(file, "utf8");
        });
      });
    }
  };
  let FileLoader = _FileLoader;
  FileLoader.filesMap = {};
  FileLoader.factory = (context, next) => __async(this, null, function* () {
    if (Array.isArray(context.source) && context.source[0] instanceof File) {
      const files = context.source;
      let settings = files.settings;
      if (!settings) {
        settings = yield _FileLoader.createSettings(files);
      } else if (!settings._objectURL) {
        throw new Error('"_objectURL" must be specified in ModelSettings');
      }
      settings.validateFiles(files.map((file) => encodeURI(file.webkitRelativePath)));
      yield _FileLoader.upload(files, settings);
      settings.resolveURL = function(url) {
        return _FileLoader.resolveURL(this._objectURL, url);
      };
      context.source = settings;
      context.live2dModel.once("modelLoaded", (internalModel) => {
        internalModel.once("destroy", function() {
          const objectURL = this.settings._objectURL;
          URL.revokeObjectURL(objectURL);
          if (_FileLoader.filesMap[objectURL]) {
            for (const resourceObjectURL of Object.values(_FileLoader.filesMap[objectURL])) {
              URL.revokeObjectURL(resourceObjectURL);
            }
          }
          delete _FileLoader.filesMap[objectURL];
        });
      });
    }
    return next();
  });
  Live2DFactory.live2DModelMiddlewares.unshift(FileLoader.factory);
  const _ZipLoader = class {
    static unzip(reader, settings) {
      return __async(this, null, function* () {
        const filePaths = yield _ZipLoader.getFilePaths(reader);
        const requiredFilePaths = [];
        for (const definedFile of settings.getDefinedFiles()) {
          const actualPath = decodeURI(utils.url.resolve(settings.url, definedFile));
          if (filePaths.includes(actualPath)) {
            requiredFilePaths.push(actualPath);
          }
        }
        const files = yield _ZipLoader.getFiles(reader, requiredFilePaths);
        for (let i = 0; i < files.length; i++) {
          const path = requiredFilePaths[i];
          const file = files[i];
          Object.defineProperty(file, "webkitRelativePath", {
            value: path
          });
        }
        return files;
      });
    }
    static createSettings(reader) {
      return __async(this, null, function* () {
        const filePaths = yield _ZipLoader.getFilePaths(reader);
        const settingsFilePath = filePaths.find((path) => path.endsWith("model.json") || path.endsWith("model3.json"));
        if (!settingsFilePath) {
          throw new Error("Settings file not found");
        }
        const settingsText = yield _ZipLoader.readText(reader, settingsFilePath);
        if (!settingsText) {
          throw new Error("Empty settings file: " + settingsFilePath);
        }
        const settingsJSON = JSON.parse(settingsText);
        settingsJSON.url = settingsFilePath;
        const runtime = Live2DFactory.findRuntime(settingsJSON);
        if (!runtime) {
          throw new Error("Unknown settings JSON");
        }
        return runtime.createModelSettings(settingsJSON);
      });
    }
    static zipReader(data, url) {
      return __async(this, null, function* () {
        throw new Error("Not implemented");
      });
    }
    static getFilePaths(reader) {
      return __async(this, null, function* () {
        throw new Error("Not implemented");
      });
    }
    static getFiles(reader, paths) {
      return __async(this, null, function* () {
        throw new Error("Not implemented");
      });
    }
    static readText(reader, path) {
      return __async(this, null, function* () {
        throw new Error("Not implemented");
      });
    }
    static releaseReader(reader) {
    }
  };
  let ZipLoader = _ZipLoader;
  ZipLoader.ZIP_PROTOCOL = "zip://";
  ZipLoader.uid = 0;
  ZipLoader.factory = (context, next) => __async(this, null, function* () {
    const source = context.source;
    let sourceURL;
    let zipBlob;
    let settings;
    if (typeof source === "string" && (source.endsWith(".zip") || source.startsWith(_ZipLoader.ZIP_PROTOCOL))) {
      if (source.startsWith(_ZipLoader.ZIP_PROTOCOL)) {
        sourceURL = source.slice(_ZipLoader.ZIP_PROTOCOL.length);
      } else {
        sourceURL = source;
      }
      zipBlob = yield Live2DLoader.load({
        url: sourceURL,
        type: "blob",
        target: context.live2dModel
      });
    } else if (Array.isArray(source) && source.length === 1 && source[0] instanceof File && source[0].name.endsWith(".zip")) {
      zipBlob = source[0];
      sourceURL = URL.createObjectURL(zipBlob);
      settings = source.settings;
    }
    if (zipBlob) {
      if (!zipBlob.size) {
        throw new Error("Empty zip file");
      }
      const reader = yield _ZipLoader.zipReader(zipBlob, sourceURL);
      if (!settings) {
        settings = yield _ZipLoader.createSettings(reader);
      }
      settings._objectURL = _ZipLoader.ZIP_PROTOCOL + _ZipLoader.uid + "/" + settings.url;
      const files = yield _ZipLoader.unzip(reader, settings);
      files.settings = settings;
      context.source = files;
      if (sourceURL.startsWith("blob:")) {
        context.live2dModel.once("modelLoaded", (internalModel) => {
          internalModel.once("destroy", function() {
            URL.revokeObjectURL(sourceURL);
          });
        });
      }
      _ZipLoader.releaseReader(reader);
    }
    return next();
  });
  Live2DFactory.live2DModelMiddlewares.unshift(ZipLoader.factory);
  if (!window.Live2D) {
    throw new Error("Could not find Cubism 2 runtime. This plugin requires live2d.min.js to be loaded.");
  }
  const originalUpdateParam = Live2DMotion.prototype.updateParam;
  Live2DMotion.prototype.updateParam = function(model, entry) {
    originalUpdateParam.call(this, model, entry);
    if (entry.isFinished() && this.onFinishHandler) {
      this.onFinishHandler(this);
      delete this.onFinishHandler;
    }
  };
  class Live2DExpression extends AMotion {
    constructor(json) {
      super();
      this.params = [];
      this.setFadeIn(json.fade_in > 0 ? json.fade_in : exports2.config.expressionFadingDuration);
      this.setFadeOut(json.fade_out > 0 ? json.fade_out : exports2.config.expressionFadingDuration);
      if (Array.isArray(json.params)) {
        json.params.forEach((param) => {
          const calc = param.calc || "add";
          if (calc === "add") {
            const defaultValue = param.def || 0;
            param.val -= defaultValue;
          } else if (calc === "mult") {
            const defaultValue = param.def || 1;
            param.val /= defaultValue;
          }
          this.params.push({
            calc,
            val: param.val,
            id: param.id
          });
        });
      }
    }
    updateParamExe(model, time, weight, motionQueueEnt) {
      this.params.forEach((param) => {
        model.setParamFloat(param.id, param.val * weight);
      });
    }
  }
  class Cubism2ExpressionManager extends ExpressionManager {
    constructor(settings, options) {
      var _a;
      super(settings, options);
      this.queueManager = new MotionQueueManager();
      this.definitions = (_a = this.settings.expressions) != null ? _a : [];
      this.init();
    }
    isFinished() {
      return this.queueManager.isFinished();
    }
    getExpressionIndex(name) {
      return this.definitions.findIndex((def) => def.name === name);
    }
    getExpressionFile(definition) {
      return definition.file;
    }
    createExpression(data, definition) {
      return new Live2DExpression(data);
    }
    _setExpression(motion) {
      return this.queueManager.startMotion(motion);
    }
    stopAllExpressions() {
      this.queueManager.stopAllMotions();
    }
    updateParameters(model, dt) {
      return this.queueManager.updateParam(model);
    }
  }
  class Cubism2MotionManager extends MotionManager {
    constructor(settings, options) {
      super(settings, options);
      this.groups = { idle: "idle" };
      this.motionDataType = "arraybuffer";
      this.queueManager = new MotionQueueManager();
      this.definitions = this.settings.motions;
      this.init(options);
    }
    init(options) {
      super.init(options);
      if (this.settings.expressions) {
        this.expressionManager = new Cubism2ExpressionManager(this.settings, options);
      }
    }
    isFinished() {
      return this.queueManager.isFinished();
    }
    createMotion(data, group, definition) {
      const motion = Live2DMotion.loadMotion(data);
      const defaultFadingDuration = group === this.groups.idle ? exports2.config.idleMotionFadingDuration : exports2.config.motionFadingDuration;
      motion.setFadeIn(definition.fade_in > 0 ? definition.fade_in : defaultFadingDuration);
      motion.setFadeOut(definition.fade_out > 0 ? definition.fade_out : defaultFadingDuration);
      return motion;
    }
    getMotionFile(definition) {
      return definition.file;
    }
    getMotionName(definition) {
      return definition.file;
    }
    getSoundFile(definition) {
      return definition.sound;
    }
    _startMotion(motion, onFinish) {
      motion.onFinishHandler = onFinish;
      this.queueManager.stopAllMotions();
      return this.queueManager.startMotion(motion);
    }
    _stopAllMotions() {
      this.queueManager.stopAllMotions();
    }
    updateParameters(model, now) {
      return this.queueManager.updateParam(model);
    }
    destroy() {
      super.destroy();
      this.queueManager = void 0;
    }
  }
  class Live2DEyeBlink {
    constructor(coreModel) {
      this.coreModel = coreModel;
      this.blinkInterval = 4e3;
      this.closingDuration = 100;
      this.closedDuration = 50;
      this.openingDuration = 150;
      this.eyeState = 0;
      this.eyeParamValue = 1;
      this.closedTimer = 0;
      this.nextBlinkTimeLeft = this.blinkInterval;
      this.leftParam = coreModel.getParamIndex("PARAM_EYE_L_OPEN");
      this.rightParam = coreModel.getParamIndex("PARAM_EYE_R_OPEN");
    }
    setEyeParams(value) {
      this.eyeParamValue = clamp(value, 0, 1);
      this.coreModel.setParamFloat(this.leftParam, this.eyeParamValue);
      this.coreModel.setParamFloat(this.rightParam, this.eyeParamValue);
    }
    update(dt) {
      switch (this.eyeState) {
        case 0:
          this.nextBlinkTimeLeft -= dt;
          if (this.nextBlinkTimeLeft < 0) {
            this.eyeState = 1;
            this.nextBlinkTimeLeft = this.blinkInterval + this.closingDuration + this.closedDuration + this.openingDuration + rand(0, 2e3);
          }
          break;
        case 1:
          this.setEyeParams(this.eyeParamValue + dt / this.closingDuration);
          if (this.eyeParamValue <= 0) {
            this.eyeState = 2;
            this.closedTimer = 0;
          }
          break;
        case 2:
          this.closedTimer += dt;
          if (this.closedTimer >= this.closedDuration) {
            this.eyeState = 3;
          }
          break;
        case 3:
          this.setEyeParams(this.eyeParamValue + dt / this.openingDuration);
          if (this.eyeParamValue >= 1) {
            this.eyeState = 0;
          }
      }
    }
  }
  const tempMatrixArray = new Float32Array([
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  ]);
  class Cubism2InternalModel extends InternalModel {
    constructor(coreModel, settings, options) {
      super();
      this.textureFlipY = true;
      this.drawDataCount = 0;
      this.disableCulling = false;
      this.coreModel = coreModel;
      this.settings = settings;
      this.motionManager = new Cubism2MotionManager(settings, options);
      this.eyeBlink = new Live2DEyeBlink(coreModel);
      this.eyeballXParamIndex = coreModel.getParamIndex("PARAM_EYE_BALL_X");
      this.eyeballYParamIndex = coreModel.getParamIndex("PARAM_EYE_BALL_Y");
      this.angleXParamIndex = coreModel.getParamIndex("PARAM_ANGLE_X");
      this.angleYParamIndex = coreModel.getParamIndex("PARAM_ANGLE_Y");
      this.angleZParamIndex = coreModel.getParamIndex("PARAM_ANGLE_Z");
      this.bodyAngleXParamIndex = coreModel.getParamIndex("PARAM_BODY_ANGLE_X");
      this.breathParamIndex = coreModel.getParamIndex("PARAM_BREATH");
      this.init();
    }
    init() {
      super.init();
      if (this.settings.initParams) {
        this.settings.initParams.forEach(({ id, value }) => this.coreModel.setParamFloat(id, value));
      }
      if (this.settings.initOpacities) {
        this.settings.initOpacities.forEach(({ id, value }) => this.coreModel.setPartsOpacity(id, value));
      }
      this.coreModel.saveParam();
      const arr = this.coreModel.getModelContext()._$aS;
      if (arr == null ? void 0 : arr.length) {
        this.drawDataCount = arr.length;
      }
      let culling = this.coreModel.drawParamWebGL.culling;
      Object.defineProperty(this.coreModel.drawParamWebGL, "culling", {
        set: (v) => culling = v,
        get: () => this.disableCulling ? false : culling
      });
      const clipManager = this.coreModel.getModelContext().clipManager;
      const originalSetupClip = clipManager.setupClip;
      clipManager.setupClip = (modelContext, drawParam) => {
        originalSetupClip.call(clipManager, modelContext, drawParam);
        drawParam.gl.viewport(...this.viewport);
      };
    }
    getSize() {
      return [this.coreModel.getCanvasWidth(), this.coreModel.getCanvasHeight()];
    }
    getLayout() {
      const layout = {};
      if (this.settings.layout) {
        for (const key of Object.keys(this.settings.layout)) {
          let commonKey = key;
          if (key === "center_x") {
            commonKey = "centerX";
          } else if (key === "center_y") {
            commonKey = "centerY";
          }
          layout[commonKey] = this.settings.layout[key];
        }
      }
      return layout;
    }
    updateWebGLContext(gl, glContextID) {
      const drawParamWebGL = this.coreModel.drawParamWebGL;
      drawParamWebGL.firstDraw = true;
      drawParamWebGL.setGL(gl);
      drawParamWebGL.glno = glContextID;
      for (const prop in drawParamWebGL) {
        if (drawParamWebGL.hasOwnProperty(prop) && drawParamWebGL[prop] instanceof WebGLBuffer) {
          drawParamWebGL[prop] = null;
        }
      }
      const clipManager = this.coreModel.getModelContext().clipManager;
      clipManager.curFrameNo = glContextID;
      const framebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);
      clipManager.getMaskRenderTexture();
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    }
    bindTexture(index, texture) {
      this.coreModel.setTexture(index, texture);
    }
    getHitAreaDefs() {
      var _a;
      return ((_a = this.settings.hitAreas) == null ? void 0 : _a.map((hitArea) => ({
        id: hitArea.id,
        name: hitArea.name,
        index: this.coreModel.getDrawDataIndex(hitArea.id)
      }))) || [];
    }
    getDrawableIDs() {
      const modelContext = this.coreModel.getModelContext();
      const ids = [];
      for (let i = 0; i < this.drawDataCount; i++) {
        const drawData = modelContext.getDrawData(i);
        if (drawData) {
          ids.push(drawData.getDrawDataID().id);
        }
      }
      return ids;
    }
    getDrawableIndex(id) {
      return this.coreModel.getDrawDataIndex(id);
    }
    getDrawableVertices(drawIndex) {
      if (typeof drawIndex === "string") {
        drawIndex = this.coreModel.getDrawDataIndex(drawIndex);
        if (drawIndex === -1)
          throw new TypeError("Unable to find drawable ID: " + drawIndex);
      }
      return this.coreModel.getTransformedPoints(drawIndex).slice();
    }
    update(dt, now) {
      var _a, _b, _c, _d;
      super.update(dt, now);
      const model = this.coreModel;
      this.emit("beforeMotionUpdate");
      const motionUpdated = this.motionManager.update(this.coreModel, now);
      this.emit("afterMotionUpdate");
      model.saveParam();
      (_a = this.motionManager.expressionManager) == null ? void 0 : _a.update(model, now);
      if (!motionUpdated) {
        (_b = this.eyeBlink) == null ? void 0 : _b.update(dt);
      }
      this.updateFocus();
      this.updateNaturalMovements(dt, now);
      (_c = this.physics) == null ? void 0 : _c.update(now);
      (_d = this.pose) == null ? void 0 : _d.update(dt);
      this.emit("beforeModelUpdate");
      model.update();
      model.loadParam();
    }
    updateFocus() {
      this.coreModel.addToParamFloat(this.eyeballXParamIndex, this.focusController.x);
      this.coreModel.addToParamFloat(this.eyeballYParamIndex, this.focusController.y);
      this.coreModel.addToParamFloat(this.angleXParamIndex, this.focusController.x * 30);
      this.coreModel.addToParamFloat(this.angleYParamIndex, this.focusController.y * 30);
      this.coreModel.addToParamFloat(this.angleZParamIndex, this.focusController.x * this.focusController.y * -30);
      this.coreModel.addToParamFloat(this.bodyAngleXParamIndex, this.focusController.x * 10);
    }
    updateNaturalMovements(dt, now) {
      const t = now / 1e3 * 2 * Math.PI;
      this.coreModel.addToParamFloat(this.angleXParamIndex, 15 * Math.sin(t / 6.5345) * 0.5);
      this.coreModel.addToParamFloat(this.angleYParamIndex, 8 * Math.sin(t / 3.5345) * 0.5);
      this.coreModel.addToParamFloat(this.angleZParamIndex, 10 * Math.sin(t / 5.5345) * 0.5);
      this.coreModel.addToParamFloat(this.bodyAngleXParamIndex, 4 * Math.sin(t / 15.5345) * 0.5);
      this.coreModel.setParamFloat(this.breathParamIndex, 0.5 + 0.5 * Math.sin(t / 3.2345));
    }
    draw(gl) {
      const disableCulling = this.disableCulling;
      if (gl.getParameter(gl.FRAMEBUFFER_BINDING)) {
        this.disableCulling = true;
      }
      const matrix = this.drawingMatrix;
      tempMatrixArray[0] = matrix.a;
      tempMatrixArray[1] = matrix.b;
      tempMatrixArray[4] = matrix.c;
      tempMatrixArray[5] = matrix.d;
      tempMatrixArray[12] = matrix.tx;
      tempMatrixArray[13] = matrix.ty;
      this.coreModel.setMatrix(tempMatrixArray);
      this.coreModel.draw();
      this.disableCulling = disableCulling;
    }
    destroy() {
      super.destroy();
      this.coreModel = void 0;
    }
  }
  class Cubism2ModelSettings extends ModelSettings {
    constructor(json) {
      super(json);
      this.motions = {};
      if (!Cubism2ModelSettings.isValidJSON(json)) {
        throw new TypeError("Invalid JSON.");
      }
      this.moc = json.model;
      copyArray("string", json, this, "textures", "textures");
      this.copy(json);
    }
    static isValidJSON(json) {
      var _a;
      return !!json && typeof json.model === "string" && ((_a = json.textures) == null ? void 0 : _a.length) > 0 && json.textures.every((item) => typeof item === "string");
    }
    copy(json) {
      copyProperty("string", json, this, "name", "name");
      copyProperty("string", json, this, "pose", "pose");
      copyProperty("string", json, this, "physics", "physics");
      copyProperty("object", json, this, "layout", "layout");
      copyProperty("object", json, this, "motions", "motions");
      copyArray("object", json, this, "hit_areas", "hitAreas");
      copyArray("object", json, this, "expressions", "expressions");
      copyArray("object", json, this, "init_params", "initParams");
      copyArray("object", json, this, "init_opacities", "initOpacities");
    }
    replaceFiles(replace) {
      super.replaceFiles(replace);
      for (const [group, motions] of Object.entries(this.motions)) {
        for (let i = 0; i < motions.length; i++) {
          motions[i].file = replace(motions[i].file, `motions.${group}[${i}].file`);
          if (motions[i].sound !== void 0) {
            motions[i].sound = replace(motions[i].sound, `motions.${group}[${i}].sound`);
          }
        }
      }
      if (this.expressions) {
        for (let i = 0; i < this.expressions.length; i++) {
          this.expressions[i].file = replace(this.expressions[i].file, `expressions[${i}].file`);
        }
      }
    }
  }
  const SRC_TYPE_MAP = {
    x: PhysicsHair.Src.SRC_TO_X,
    y: PhysicsHair.Src.SRC_TO_Y,
    angle: PhysicsHair.Src.SRC_TO_G_ANGLE
  };
  const TARGET_TYPE_MAP = {
    x: PhysicsHair.Src.SRC_TO_X,
    y: PhysicsHair.Src.SRC_TO_Y,
    angle: PhysicsHair.Src.SRC_TO_G_ANGLE
  };
  class Live2DPhysics {
    constructor(coreModel, json) {
      this.coreModel = coreModel;
      this.physicsHairs = [];
      if (json.physics_hair) {
        this.physicsHairs = json.physics_hair.map((definition) => {
          const physicsHair = new PhysicsHair();
          physicsHair.setup(definition.setup.length, definition.setup.regist, definition.setup.mass);
          definition.src.forEach(({ id, ptype, scale, weight }) => {
            const type = SRC_TYPE_MAP[ptype];
            if (type) {
              physicsHair.addSrcParam(type, id, scale, weight);
            }
          });
          definition.targets.forEach(({ id, ptype, scale, weight }) => {
            const type = TARGET_TYPE_MAP[ptype];
            if (type) {
              physicsHair.addTargetParam(type, id, scale, weight);
            }
          });
          return physicsHair;
        });
      }
    }
    update(elapsed) {
      this.physicsHairs.forEach((physicsHair) => physicsHair.update(this.coreModel, elapsed));
    }
  }
  class Live2DPartsParam {
    constructor(id) {
      this.id = id;
      this.paramIndex = -1;
      this.partsIndex = -1;
      this.link = [];
    }
    initIndex(model) {
      this.paramIndex = model.getParamIndex("VISIBLE:" + this.id);
      this.partsIndex = model.getPartsDataIndex(PartsDataID.getID(this.id));
      model.setParamFloat(this.paramIndex, 1);
    }
  }
  class Live2DPose {
    constructor(coreModel, json) {
      this.coreModel = coreModel;
      this.opacityAnimDuration = 500;
      this.partsGroups = [];
      if (json.parts_visible) {
        this.partsGroups = json.parts_visible.map(({ group }) => group.map(({ id, link }) => {
          const parts = new Live2DPartsParam(id);
          if (link) {
            parts.link = link.map((l) => new Live2DPartsParam(l));
          }
          return parts;
        }));
        this.init();
      }
    }
    init() {
      this.partsGroups.forEach((group) => {
        group.forEach((parts) => {
          parts.initIndex(this.coreModel);
          if (parts.paramIndex >= 0) {
            const visible = this.coreModel.getParamFloat(parts.paramIndex) !== 0;
            this.coreModel.setPartsOpacity(parts.partsIndex, visible ? 1 : 0);
            this.coreModel.setParamFloat(parts.paramIndex, visible ? 1 : 0);
            if (parts.link.length > 0) {
              parts.link.forEach((p) => p.initIndex(this.coreModel));
            }
          }
        });
      });
    }
    normalizePartsOpacityGroup(partsGroup, dt) {
      const model = this.coreModel;
      const phi = 0.5;
      const maxBackOpacity = 0.15;
      let visibleOpacity = 1;
      let visibleIndex = partsGroup.findIndex(({ paramIndex, partsIndex }) => partsIndex >= 0 && model.getParamFloat(paramIndex) !== 0);
      if (visibleIndex >= 0) {
        const originalOpacity = model.getPartsOpacity(partsGroup[visibleIndex].partsIndex);
        visibleOpacity = clamp(originalOpacity + dt / this.opacityAnimDuration, 0, 1);
      } else {
        visibleIndex = 0;
        visibleOpacity = 1;
      }
      partsGroup.forEach(({ partsIndex }, index) => {
        if (partsIndex >= 0) {
          if (visibleIndex == index) {
            model.setPartsOpacity(partsIndex, visibleOpacity);
          } else {
            let opacity = model.getPartsOpacity(partsIndex);
            let a1;
            if (visibleOpacity < phi) {
              a1 = visibleOpacity * (phi - 1) / phi + 1;
            } else {
              a1 = (1 - visibleOpacity) * phi / (1 - phi);
            }
            let backOp = (1 - a1) * (1 - visibleOpacity);
            if (backOp > maxBackOpacity) {
              a1 = 1 - maxBackOpacity / (1 - visibleOpacity);
            }
            if (opacity > a1) {
              opacity = a1;
            }
            model.setPartsOpacity(partsIndex, opacity);
          }
        }
      });
    }
    copyOpacity(partsGroup) {
      const model = this.coreModel;
      partsGroup.forEach(({ partsIndex, link }) => {
        if (partsIndex >= 0 && link) {
          const opacity = model.getPartsOpacity(partsIndex);
          link.forEach(({ partsIndex: partsIndex2 }) => {
            if (partsIndex2 >= 0) {
              model.setPartsOpacity(partsIndex2, opacity);
            }
          });
        }
      });
    }
    update(dt) {
      this.partsGroups.forEach((partGroup) => {
        this.normalizePartsOpacityGroup(partGroup, dt);
        this.copyOpacity(partGroup);
      });
    }
  }
  Live2DFactory.registerRuntime({
    version: 2,
    test(source) {
      return source instanceof Cubism2ModelSettings || Cubism2ModelSettings.isValidJSON(source);
    },
    ready() {
      return Promise.resolve();
    },
    isValidMoc(modelData) {
      if (modelData.byteLength < 3) {
        return false;
      }
      const view = new Int8Array(modelData, 0, 3);
      return String.fromCharCode(...view) === "moc";
    },
    createModelSettings(json) {
      return new Cubism2ModelSettings(json);
    },
    createCoreModel(data) {
      const model = Live2DModelWebGL.loadModel(data);
      const error = Live2D.getError();
      if (error)
        throw error;
      return model;
    },
    createInternalModel(coreModel, settings, options) {
      return new Cubism2InternalModel(coreModel, settings, options);
    },
    createPose(coreModel, data) {
      return new Live2DPose(coreModel, data);
    },
    createPhysics(coreModel, data) {
      return new Live2DPhysics(coreModel, data);
    }
  });
  if (!window.Live2DCubismCore) {
    throw new Error("Could not find Cubism 4 runtime. This plugin requires live2dcubismcore.js to be loaded.");
  }
  class CubismVector2 {
    constructor(x, y) {
      this.x = x || 0;
      this.y = y || 0;
    }
    add(vector2) {
      const ret = new CubismVector2(0, 0);
      ret.x = this.x + vector2.x;
      ret.y = this.y + vector2.y;
      return ret;
    }
    substract(vector2) {
      const ret = new CubismVector2(0, 0);
      ret.x = this.x - vector2.x;
      ret.y = this.y - vector2.y;
      return ret;
    }
    multiply(vector2) {
      const ret = new CubismVector2(0, 0);
      ret.x = this.x * vector2.x;
      ret.y = this.y * vector2.y;
      return ret;
    }
    multiplyByScaler(scalar) {
      return this.multiply(new CubismVector2(scalar, scalar));
    }
    division(vector2) {
      const ret = new CubismVector2(0, 0);
      ret.x = this.x / vector2.x;
      ret.y = this.y / vector2.y;
      return ret;
    }
    divisionByScalar(scalar) {
      return this.division(new CubismVector2(scalar, scalar));
    }
    getLength() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    getDistanceWith(a) {
      return Math.sqrt((this.x - a.x) * (this.x - a.x) + (this.y - a.y) * (this.y - a.y));
    }
    dot(a) {
      return this.x * a.x + this.y * a.y;
    }
    normalize() {
      const length = Math.pow(this.x * this.x + this.y * this.y, 0.5);
      this.x = this.x / length;
      this.y = this.y / length;
    }
    isEqual(rhs) {
      return this.x == rhs.x && this.y == rhs.y;
    }
    isNotEqual(rhs) {
      return !this.isEqual(rhs);
    }
  }
  const _CubismMath = class {
    static range(value, min, max) {
      if (value < min) {
        value = min;
      } else if (value > max) {
        value = max;
      }
      return value;
    }
    static sin(x) {
      return Math.sin(x);
    }
    static cos(x) {
      return Math.cos(x);
    }
    static abs(x) {
      return Math.abs(x);
    }
    static sqrt(x) {
      return Math.sqrt(x);
    }
    static cbrt(x) {
      if (x === 0) {
        return x;
      }
      let cx = x;
      const isNegativeNumber = cx < 0;
      if (isNegativeNumber) {
        cx = -cx;
      }
      let ret;
      if (cx === Infinity) {
        ret = Infinity;
      } else {
        ret = Math.exp(Math.log(cx) / 3);
        ret = (cx / (ret * ret) + 2 * ret) / 3;
      }
      return isNegativeNumber ? -ret : ret;
    }
    static getEasingSine(value) {
      if (value < 0) {
        return 0;
      } else if (value > 1) {
        return 1;
      }
      return 0.5 - 0.5 * this.cos(value * Math.PI);
    }
    static max(left, right) {
      return left > right ? left : right;
    }
    static min(left, right) {
      return left > right ? right : left;
    }
    static degreesToRadian(degrees) {
      return degrees / 180 * Math.PI;
    }
    static radianToDegrees(radian) {
      return radian * 180 / Math.PI;
    }
    static directionToRadian(from, to) {
      const q1 = Math.atan2(to.y, to.x);
      const q2 = Math.atan2(from.y, from.x);
      let ret = q1 - q2;
      while (ret < -Math.PI) {
        ret += Math.PI * 2;
      }
      while (ret > Math.PI) {
        ret -= Math.PI * 2;
      }
      return ret;
    }
    static directionToDegrees(from, to) {
      const radian = this.directionToRadian(from, to);
      let degree = this.radianToDegrees(radian);
      if (to.x - from.x > 0) {
        degree = -degree;
      }
      return degree;
    }
    static radianToDirection(totalAngle) {
      const ret = new CubismVector2();
      ret.x = this.sin(totalAngle);
      ret.y = this.cos(totalAngle);
      return ret;
    }
    static quadraticEquation(a, b, c) {
      if (this.abs(a) < _CubismMath.Epsilon) {
        if (this.abs(b) < _CubismMath.Epsilon) {
          return -c;
        }
        return -c / b;
      }
      return -(b + this.sqrt(b * b - 4 * a * c)) / (2 * a);
    }
    static cardanoAlgorithmForBezier(a, b, c, d) {
      if (this.sqrt(a) < _CubismMath.Epsilon) {
        return this.range(this.quadraticEquation(b, c, d), 0, 1);
      }
      const ba = b / a;
      const ca = c / a;
      const da = d / a;
      const p = (3 * ca - ba * ba) / 3;
      const p3 = p / 3;
      const q = (2 * ba * ba * ba - 9 * ba * ca + 27 * da) / 27;
      const q2 = q / 2;
      const discriminant = q2 * q2 + p3 * p3 * p3;
      const center = 0.5;
      const threshold = center + 0.01;
      if (discriminant < 0) {
        const mp3 = -p / 3;
        const mp33 = mp3 * mp3 * mp3;
        const r = this.sqrt(mp33);
        const t = -q / (2 * r);
        const cosphi = this.range(t, -1, 1);
        const phi = Math.acos(cosphi);
        const crtr = this.cbrt(r);
        const t1 = 2 * crtr;
        const root12 = t1 * this.cos(phi / 3) - ba / 3;
        if (this.abs(root12 - center) < threshold) {
          return this.range(root12, 0, 1);
        }
        const root2 = t1 * this.cos((phi + 2 * Math.PI) / 3) - ba / 3;
        if (this.abs(root2 - center) < threshold) {
          return this.range(root2, 0, 1);
        }
        const root3 = t1 * this.cos((phi + 4 * Math.PI) / 3) - ba / 3;
        return this.range(root3, 0, 1);
      }
      if (discriminant == 0) {
        let u12;
        if (q2 < 0) {
          u12 = this.cbrt(-q2);
        } else {
          u12 = -this.cbrt(q2);
        }
        const root12 = 2 * u12 - ba / 3;
        if (this.abs(root12 - center) < threshold) {
          return this.range(root12, 0, 1);
        }
        const root2 = -u12 - ba / 3;
        return this.range(root2, 0, 1);
      }
      const sd = this.sqrt(discriminant);
      const u1 = this.cbrt(sd - q2);
      const v1 = this.cbrt(sd + q2);
      const root1 = u1 - v1 - ba / 3;
      return this.range(root1, 0, 1);
    }
    constructor() {
    }
  };
  let CubismMath = _CubismMath;
  CubismMath.Epsilon = 1e-5;
  class CubismMatrix44 {
    constructor() {
      this._tr = new Float32Array(16);
      this.loadIdentity();
    }
    static multiply(a, b, dst) {
      const c = new Float32Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]);
      const n = 4;
      for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
          for (let k = 0; k < n; ++k) {
            c[j + i * 4] += a[k + i * 4] * b[j + k * 4];
          }
        }
      }
      for (let i = 0; i < 16; ++i) {
        dst[i] = c[i];
      }
    }
    loadIdentity() {
      const c = new Float32Array([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ]);
      this.setMatrix(c);
    }
    setMatrix(tr) {
      for (let i = 0; i < 16; ++i) {
        this._tr[i] = tr[i];
      }
    }
    getArray() {
      return this._tr;
    }
    getScaleX() {
      return this._tr[0];
    }
    getScaleY() {
      return this._tr[5];
    }
    getTranslateX() {
      return this._tr[12];
    }
    getTranslateY() {
      return this._tr[13];
    }
    transformX(src) {
      return this._tr[0] * src + this._tr[12];
    }
    transformY(src) {
      return this._tr[5] * src + this._tr[13];
    }
    invertTransformX(src) {
      return (src - this._tr[12]) / this._tr[0];
    }
    invertTransformY(src) {
      return (src - this._tr[13]) / this._tr[5];
    }
    translateRelative(x, y) {
      const tr1 = new Float32Array([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        x,
        y,
        0,
        1
      ]);
      CubismMatrix44.multiply(tr1, this._tr, this._tr);
    }
    translate(x, y) {
      this._tr[12] = x;
      this._tr[13] = y;
    }
    translateX(x) {
      this._tr[12] = x;
    }
    translateY(y) {
      this._tr[13] = y;
    }
    scaleRelative(x, y) {
      const tr1 = new Float32Array([
        x,
        0,
        0,
        0,
        0,
        y,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ]);
      CubismMatrix44.multiply(tr1, this._tr, this._tr);
    }
    scale(x, y) {
      this._tr[0] = x;
      this._tr[5] = y;
    }
    multiplyByMatrix(m) {
      CubismMatrix44.multiply(m.getArray(), this._tr, this._tr);
    }
    clone() {
      const cloneMatrix = new CubismMatrix44();
      for (let i = 0; i < this._tr.length; i++) {
        cloneMatrix._tr[i] = this._tr[i];
      }
      return cloneMatrix;
    }
  }
  class CubismRenderer {
    initialize(model) {
      this._model = model;
    }
    drawModel() {
      if (this.getModel() == null)
        return;
      this.doDrawModel();
    }
    setMvpMatrix(matrix44) {
      this._mvpMatrix4x4.setMatrix(matrix44.getArray());
    }
    getMvpMatrix() {
      return this._mvpMatrix4x4;
    }
    setModelColor(red, green, blue, alpha) {
      if (red < 0) {
        red = 0;
      } else if (red > 1) {
        red = 1;
      }
      if (green < 0) {
        green = 0;
      } else if (green > 1) {
        green = 1;
      }
      if (blue < 0) {
        blue = 0;
      } else if (blue > 1) {
        blue = 1;
      }
      if (alpha < 0) {
        alpha = 0;
      } else if (alpha > 1) {
        alpha = 1;
      }
      this._modelColor.R = red;
      this._modelColor.G = green;
      this._modelColor.B = blue;
      this._modelColor.A = alpha;
    }
    getModelColor() {
      return Object.assign({}, this._modelColor);
    }
    setIsPremultipliedAlpha(enable) {
      this._isPremultipliedAlpha = enable;
    }
    isPremultipliedAlpha() {
      return this._isPremultipliedAlpha;
    }
    setIsCulling(culling) {
      this._isCulling = culling;
    }
    isCulling() {
      return this._isCulling;
    }
    setAnisotropy(n) {
      this._anisortopy = n;
    }
    getAnisotropy() {
      return this._anisortopy;
    }
    getModel() {
      return this._model;
    }
    constructor() {
      this._isCulling = false;
      this._isPremultipliedAlpha = false;
      this._anisortopy = 0;
      this._modelColor = new CubismTextureColor();
      this._mvpMatrix4x4 = new CubismMatrix44();
      this._mvpMatrix4x4.loadIdentity();
    }
  }
  var CubismBlendMode = /* @__PURE__ */ ((CubismBlendMode2) => {
    CubismBlendMode2[CubismBlendMode2["CubismBlendMode_Normal"] = 0] = "CubismBlendMode_Normal";
    CubismBlendMode2[CubismBlendMode2["CubismBlendMode_Additive"] = 1] = "CubismBlendMode_Additive";
    CubismBlendMode2[CubismBlendMode2["CubismBlendMode_Multiplicative"] = 2] = "CubismBlendMode_Multiplicative";
    return CubismBlendMode2;
  })(CubismBlendMode || {});
  class CubismTextureColor {
    constructor() {
      this.R = 1;
      this.G = 1;
      this.B = 1;
      this.A = 1;
    }
  }
  let s_isStarted = false;
  let s_isInitialized = false;
  let s_option = void 0;
  const Constant = {
    vertexOffset: 0,
    vertexStep: 2
  };
  class CubismFramework {
    static startUp(option) {
      if (s_isStarted) {
        CubismLogInfo("CubismFramework.startUp() is already done.");
        return s_isStarted;
      }
      if (Live2DCubismCore._isStarted) {
        s_isStarted = true;
        return true;
      }
      Live2DCubismCore._isStarted = true;
      s_option = option;
      if (s_option) {
        Live2DCubismCore.Logging.csmSetLogFunction(s_option.logFunction);
      }
      s_isStarted = true;
      if (s_isStarted) {
        const version = Live2DCubismCore.Version.csmGetVersion();
        const major = (version & 4278190080) >> 24;
        const minor = (version & 16711680) >> 16;
        const patch = version & 65535;
        const versionNumber = version;
        CubismLogInfo(`Live2D Cubism Core version: {0}.{1}.{2} ({3})`, ("00" + major).slice(-2), ("00" + minor).slice(-2), ("0000" + patch).slice(-4), versionNumber);
      }
      CubismLogInfo("CubismFramework.startUp() is complete.");
      return s_isStarted;
    }
    static cleanUp() {
      s_isStarted = false;
      s_isInitialized = false;
      s_option = void 0;
    }
    static initialize() {
      if (!s_isStarted) {
        CubismLogWarning("CubismFramework is not started.");
        return;
      }
      if (s_isInitialized) {
        CubismLogWarning("CubismFramework.initialize() skipped, already initialized.");
        return;
      }
      s_isInitialized = true;
      CubismLogInfo("CubismFramework.initialize() is complete.");
    }
    static dispose() {
      if (!s_isStarted) {
        CubismLogWarning("CubismFramework is not started.");
        return;
      }
      if (!s_isInitialized) {
        CubismLogWarning("CubismFramework.dispose() skipped, not initialized.");
        return;
      }
      CubismRenderer.staticRelease();
      s_isInitialized = false;
      CubismLogInfo("CubismFramework.dispose() is complete.");
    }
    static isStarted() {
      return s_isStarted;
    }
    static isInitialized() {
      return s_isInitialized;
    }
    static coreLogFunction(message) {
      if (!Live2DCubismCore.Logging.csmGetLogFunction()) {
        return;
      }
      Live2DCubismCore.Logging.csmGetLogFunction()(message);
    }
    static getLoggingLevel() {
      if (s_option != null) {
        return s_option.loggingLevel;
      }
      return LogLevel.LogLevel_Off;
    }
    constructor() {
    }
  }
  var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
    LogLevel2[LogLevel2["LogLevel_Verbose"] = 0] = "LogLevel_Verbose";
    LogLevel2[LogLevel2["LogLevel_Debug"] = 1] = "LogLevel_Debug";
    LogLevel2[LogLevel2["LogLevel_Info"] = 2] = "LogLevel_Info";
    LogLevel2[LogLevel2["LogLevel_Warning"] = 3] = "LogLevel_Warning";
    LogLevel2[LogLevel2["LogLevel_Error"] = 4] = "LogLevel_Error";
    LogLevel2[LogLevel2["LogLevel_Off"] = 5] = "LogLevel_Off";
    return LogLevel2;
  })(LogLevel || {});
  const CSM_ASSERT = () => {
  };
  function CubismLogDebug(fmt, ...args) {
    CubismDebug.print(LogLevel.LogLevel_Debug, "[CSM][D]" + fmt + "\n", args);
  }
  function CubismLogInfo(fmt, ...args) {
    CubismDebug.print(LogLevel.LogLevel_Info, "[CSM][I]" + fmt + "\n", args);
  }
  function CubismLogWarning(fmt, ...args) {
    CubismDebug.print(LogLevel.LogLevel_Warning, "[CSM][W]" + fmt + "\n", args);
  }
  function CubismLogError(fmt, ...args) {
    CubismDebug.print(LogLevel.LogLevel_Error, "[CSM][E]" + fmt + "\n", args);
  }
  class CubismDebug {
    static print(logLevel, format, args) {
      if (logLevel < CubismFramework.getLoggingLevel()) {
        return;
      }
      const logPrint = CubismFramework.coreLogFunction;
      if (!logPrint)
        return;
      const buffer = format.replace(/{(\d+)}/g, (m, k) => {
        return args[k];
      });
      logPrint(buffer);
    }
    static dumpBytes(logLevel, data, length) {
      for (let i = 0; i < length; i++) {
        if (i % 16 == 0 && i > 0)
          this.print(logLevel, "\n");
        else if (i % 8 == 0 && i > 0)
          this.print(logLevel, "  ");
        this.print(logLevel, "{0} ", [data[i] & 255]);
      }
      this.print(logLevel, "\n");
    }
    constructor() {
    }
  }
  class ACubismMotion {
    constructor() {
      this._fadeInSeconds = -1;
      this._fadeOutSeconds = -1;
      this._weight = 1;
      this._offsetSeconds = 0;
      this._firedEventValues = [];
    }
    release() {
      this._weight = 0;
    }
    updateParameters(model, motionQueueEntry, userTimeSeconds) {
      if (!motionQueueEntry.isAvailable() || motionQueueEntry.isFinished()) {
        return;
      }
      if (!motionQueueEntry.isStarted()) {
        motionQueueEntry.setIsStarted(true);
        motionQueueEntry.setStartTime(userTimeSeconds - this._offsetSeconds);
        motionQueueEntry.setFadeInStartTime(userTimeSeconds);
        const duration = this.getDuration();
        if (motionQueueEntry.getEndTime() < 0) {
          motionQueueEntry.setEndTime(duration <= 0 ? -1 : motionQueueEntry.getStartTime() + duration);
        }
      }
      let fadeWeight = this._weight;
      const fadeIn = this._fadeInSeconds == 0 ? 1 : CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) / this._fadeInSeconds);
      const fadeOut = this._fadeOutSeconds == 0 || motionQueueEntry.getEndTime() < 0 ? 1 : CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) / this._fadeOutSeconds);
      fadeWeight = fadeWeight * fadeIn * fadeOut;
      motionQueueEntry.setState(userTimeSeconds, fadeWeight);
      this.doUpdateParameters(model, userTimeSeconds, fadeWeight, motionQueueEntry);
      if (motionQueueEntry.getEndTime() > 0 && motionQueueEntry.getEndTime() < userTimeSeconds) {
        motionQueueEntry.setIsFinished(true);
      }
    }
    setFadeInTime(fadeInSeconds) {
      this._fadeInSeconds = fadeInSeconds;
    }
    setFadeOutTime(fadeOutSeconds) {
      this._fadeOutSeconds = fadeOutSeconds;
    }
    getFadeOutTime() {
      return this._fadeOutSeconds;
    }
    getFadeInTime() {
      return this._fadeInSeconds;
    }
    setWeight(weight) {
      this._weight = weight;
    }
    getWeight() {
      return this._weight;
    }
    getDuration() {
      return -1;
    }
    getLoopDuration() {
      return -1;
    }
    setOffsetTime(offsetSeconds) {
      this._offsetSeconds = offsetSeconds;
    }
    getFiredEvent(beforeCheckTimeSeconds, motionTimeSeconds) {
      return this._firedEventValues;
    }
    setFinishedMotionHandler(onFinishedMotionHandler) {
      this._onFinishedMotion = onFinishedMotionHandler;
    }
    getFinishedMotionHandler() {
      return this._onFinishedMotion;
    }
  }
  const DefaultFadeTime = 1;
  class CubismExpressionMotion extends ACubismMotion {
    constructor() {
      super();
      this._parameters = [];
    }
    static create(json) {
      const expression = new CubismExpressionMotion();
      const fadeInTime = json.FadeInTime;
      const fadeOutTime = json.FadeOutTime;
      expression.setFadeInTime(fadeInTime !== void 0 ? fadeInTime : DefaultFadeTime);
      expression.setFadeOutTime(fadeOutTime !== void 0 ? fadeOutTime : DefaultFadeTime);
      const parameters = json.Parameters || [];
      for (let i = 0; i < parameters.length; ++i) {
        const param = parameters[i];
        const parameterId = param.Id;
        const value = param.Value;
        let blendType;
        switch (param.Blend) {
          case "Multiply":
            blendType = ExpressionBlendType.ExpressionBlendType_Multiply;
            break;
          case "Overwrite":
            blendType = ExpressionBlendType.ExpressionBlendType_Overwrite;
            break;
          case "Add":
          default:
            blendType = ExpressionBlendType.ExpressionBlendType_Add;
            break;
        }
        const item = {
          parameterId,
          blendType,
          value
        };
        expression._parameters.push(item);
      }
      return expression;
    }
    doUpdateParameters(model, userTimeSeconds, weight, motionQueueEntry) {
      for (let i = 0; i < this._parameters.length; ++i) {
        const parameter = this._parameters[i];
        switch (parameter.blendType) {
          case ExpressionBlendType.ExpressionBlendType_Add: {
            model.addParameterValueById(parameter.parameterId, parameter.value, weight);
            break;
          }
          case ExpressionBlendType.ExpressionBlendType_Multiply: {
            model.multiplyParameterValueById(parameter.parameterId, parameter.value, weight);
            break;
          }
          case ExpressionBlendType.ExpressionBlendType_Overwrite: {
            model.setParameterValueById(parameter.parameterId, parameter.value, weight);
            break;
          }
        }
      }
    }
  }
  var ExpressionBlendType = /* @__PURE__ */ ((ExpressionBlendType2) => {
    ExpressionBlendType2[ExpressionBlendType2["ExpressionBlendType_Add"] = 0] = "ExpressionBlendType_Add";
    ExpressionBlendType2[ExpressionBlendType2["ExpressionBlendType_Multiply"] = 1] = "ExpressionBlendType_Multiply";
    ExpressionBlendType2[ExpressionBlendType2["ExpressionBlendType_Overwrite"] = 2] = "ExpressionBlendType_Overwrite";
    return ExpressionBlendType2;
  })(ExpressionBlendType || {});
  class CubismMotionQueueEntry {
    constructor() {
      this._autoDelete = false;
      this._available = true;
      this._finished = false;
      this._started = false;
      this._startTimeSeconds = -1;
      this._fadeInStartTimeSeconds = 0;
      this._endTimeSeconds = -1;
      this._stateTimeSeconds = 0;
      this._stateWeight = 0;
      this._lastEventCheckSeconds = 0;
      this._motionQueueEntryHandle = this;
      this._fadeOutSeconds = 0;
      this._isTriggeredFadeOut = false;
    }
    release() {
      if (this._autoDelete && this._motion) {
        this._motion.release();
      }
    }
    setFadeOut(fadeOutSeconds) {
      this._fadeOutSeconds = fadeOutSeconds;
      this._isTriggeredFadeOut = true;
    }
    startFadeOut(fadeOutSeconds, userTimeSeconds) {
      const newEndTimeSeconds = userTimeSeconds + fadeOutSeconds;
      this._isTriggeredFadeOut = true;
      if (this._endTimeSeconds < 0 || newEndTimeSeconds < this._endTimeSeconds) {
        this._endTimeSeconds = newEndTimeSeconds;
      }
    }
    isFinished() {
      return this._finished;
    }
    isStarted() {
      return this._started;
    }
    getStartTime() {
      return this._startTimeSeconds;
    }
    getFadeInStartTime() {
      return this._fadeInStartTimeSeconds;
    }
    getEndTime() {
      return this._endTimeSeconds;
    }
    setStartTime(startTime) {
      this._startTimeSeconds = startTime;
    }
    setFadeInStartTime(startTime) {
      this._fadeInStartTimeSeconds = startTime;
    }
    setEndTime(endTime) {
      this._endTimeSeconds = endTime;
    }
    setIsFinished(f) {
      this._finished = f;
    }
    setIsStarted(f) {
      this._started = f;
    }
    isAvailable() {
      return this._available;
    }
    setIsAvailable(v) {
      this._available = v;
    }
    setState(timeSeconds, weight) {
      this._stateTimeSeconds = timeSeconds;
      this._stateWeight = weight;
    }
    getStateTime() {
      return this._stateTimeSeconds;
    }
    getStateWeight() {
      return this._stateWeight;
    }
    getLastCheckEventSeconds() {
      return this._lastEventCheckSeconds;
    }
    setLastCheckEventSeconds(checkSeconds) {
      this._lastEventCheckSeconds = checkSeconds;
    }
    isTriggeredFadeOut() {
      return this._isTriggeredFadeOut;
    }
    getFadeOutSeconds() {
      return this._fadeOutSeconds;
    }
  }
  class CubismMotionQueueManager {
    constructor() {
      this._userTimeSeconds = 0;
      this._eventCustomData = null;
      this._motions = [];
    }
    release() {
      for (let i = 0; i < this._motions.length; ++i) {
        if (this._motions[i]) {
          this._motions[i].release();
        }
      }
      this._motions = void 0;
    }
    startMotion(motion, autoDelete, userTimeSeconds) {
      if (motion == null) {
        return InvalidMotionQueueEntryHandleValue;
      }
      let motionQueueEntry;
      for (let i = 0; i < this._motions.length; ++i) {
        motionQueueEntry = this._motions[i];
        if (motionQueueEntry == null) {
          continue;
        }
        motionQueueEntry.setFadeOut(motionQueueEntry._motion.getFadeOutTime());
      }
      motionQueueEntry = new CubismMotionQueueEntry();
      motionQueueEntry._autoDelete = autoDelete;
      motionQueueEntry._motion = motion;
      this._motions.push(motionQueueEntry);
      return motionQueueEntry._motionQueueEntryHandle;
    }
    isFinished() {
      let i = 0;
      while (i < this._motions.length) {
        const motionQueueEntry = this._motions[i];
        if (motionQueueEntry == null) {
          this._motions.splice(i, 1);
          continue;
        }
        const motion = motionQueueEntry._motion;
        if (motion == null) {
          motionQueueEntry.release();
          this._motions.splice(i, 1);
          continue;
        }
        if (!motionQueueEntry.isFinished()) {
          return false;
        }
        i++;
      }
      return true;
    }
    isFinishedByHandle(motionQueueEntryNumber) {
      for (let i = 0; i < this._motions.length; i++) {
        const motionQueueEntry = this._motions[i];
        if (motionQueueEntry == null) {
          continue;
        }
        if (motionQueueEntry._motionQueueEntryHandle == motionQueueEntryNumber && !motionQueueEntry.isFinished()) {
          return false;
        }
      }
      return true;
    }
    stopAllMotions() {
      for (let i = 0; i < this._motions.length; i++) {
        const motionQueueEntry = this._motions[i];
        if (motionQueueEntry != null) {
          motionQueueEntry.release();
        }
      }
      this._motions = [];
    }
    getCubismMotionQueueEntry(motionQueueEntryNumber) {
      return this._motions.find((entry) => entry != null && entry._motionQueueEntryHandle == motionQueueEntryNumber);
    }
    setEventCallback(callback, customData = null) {
      this._eventCallBack = callback;
      this._eventCustomData = customData;
    }
    doUpdateMotion(model, userTimeSeconds) {
      let updated = false;
      let i = 0;
      while (i < this._motions.length) {
        const motionQueueEntry = this._motions[i];
        if (motionQueueEntry == null) {
          this._motions.splice(i, 1);
          continue;
        }
        const motion = motionQueueEntry._motion;
        if (motion == null) {
          motionQueueEntry.release();
          this._motions.splice(i, 1);
          continue;
        }
        motion.updateParameters(model, motionQueueEntry, userTimeSeconds);
        updated = true;
        const firedList = motion.getFiredEvent(motionQueueEntry.getLastCheckEventSeconds() - motionQueueEntry.getStartTime(), userTimeSeconds - motionQueueEntry.getStartTime());
        for (let i2 = 0; i2 < firedList.length; ++i2) {
          this._eventCallBack(this, firedList[i2], this._eventCustomData);
        }
        motionQueueEntry.setLastCheckEventSeconds(userTimeSeconds);
        if (motionQueueEntry.isFinished()) {
          motionQueueEntry.release();
          this._motions.splice(i, 1);
        } else {
          if (motionQueueEntry.isTriggeredFadeOut()) {
            motionQueueEntry.startFadeOut(motionQueueEntry.getFadeOutSeconds(), userTimeSeconds);
          }
          i++;
        }
      }
      return updated;
    }
  }
  const InvalidMotionQueueEntryHandleValue = -1;
  class Cubism4ExpressionManager extends ExpressionManager {
    constructor(settings, options) {
      var _a;
      super(settings, options);
      this.queueManager = new CubismMotionQueueManager();
      this.definitions = (_a = settings.expressions) != null ? _a : [];
      this.init();
    }
    isFinished() {
      return this.queueManager.isFinished();
    }
    getExpressionIndex(name) {
      return this.definitions.findIndex((def) => def.Name === name);
    }
    getExpressionFile(definition) {
      return definition.File;
    }
    createExpression(data, definition) {
      return CubismExpressionMotion.create(data);
    }
    _setExpression(motion) {
      return this.queueManager.startMotion(motion, false, performance.now());
    }
    stopAllExpressions() {
      this.queueManager.stopAllMotions();
    }
    updateParameters(model, now) {
      return this.queueManager.doUpdateMotion(model, now);
    }
  }
  class CubismModelSettingsJson {
    constructor(json) {
      this.groups = json.Groups;
      this.hitAreas = json.HitAreas;
      this.layout = json.Layout;
      this.moc = json.FileReferences.Moc;
      this.expressions = json.FileReferences.Expressions;
      this.motions = json.FileReferences.Motions;
      this.textures = json.FileReferences.Textures;
      this.physics = json.FileReferences.Physics;
      this.pose = json.FileReferences.Pose;
    }
    getEyeBlinkParameters() {
      var _a, _b;
      return (_b = (_a = this.groups) == null ? void 0 : _a.find((group) => group.Name === "EyeBlink")) == null ? void 0 : _b.Ids;
    }
    getLipSyncParameters() {
      var _a, _b;
      return (_b = (_a = this.groups) == null ? void 0 : _a.find((group) => group.Name === "LipSync")) == null ? void 0 : _b.Ids;
    }
  }
  class Cubism4ModelSettings extends ModelSettings {
    constructor(json) {
      super(json);
      if (!Cubism4ModelSettings.isValidJSON(json)) {
        throw new TypeError("Invalid JSON.");
      }
      Object.assign(this, new CubismModelSettingsJson(json));
    }
    static isValidJSON(json) {
      var _a;
      return !!(json == null ? void 0 : json.FileReferences) && typeof json.FileReferences.Moc === "string" && ((_a = json.FileReferences.Textures) == null ? void 0 : _a.length) > 0 && json.FileReferences.Textures.every((item) => typeof item === "string");
    }
    replaceFiles(replace) {
      super.replaceFiles(replace);
      if (this.motions) {
        for (const [group, motions] of Object.entries(this.motions)) {
          for (let i = 0; i < motions.length; i++) {
            motions[i].File = replace(motions[i].File, `motions.${group}[${i}].File`);
            if (motions[i].Sound !== void 0) {
              motions[i].Sound = replace(motions[i].Sound, `motions.${group}[${i}].Sound`);
            }
          }
        }
      }
      if (this.expressions) {
        for (let i = 0; i < this.expressions.length; i++) {
          this.expressions[i].File = replace(this.expressions[i].File, `expressions[${i}].File`);
        }
      }
    }
  }
  applyMixins(Cubism4ModelSettings, [CubismModelSettingsJson]);
  var CubismMotionCurveTarget = /* @__PURE__ */ ((CubismMotionCurveTarget2) => {
    CubismMotionCurveTarget2[CubismMotionCurveTarget2["CubismMotionCurveTarget_Model"] = 0] = "CubismMotionCurveTarget_Model";
    CubismMotionCurveTarget2[CubismMotionCurveTarget2["CubismMotionCurveTarget_Parameter"] = 1] = "CubismMotionCurveTarget_Parameter";
    CubismMotionCurveTarget2[CubismMotionCurveTarget2["CubismMotionCurveTarget_PartOpacity"] = 2] = "CubismMotionCurveTarget_PartOpacity";
    return CubismMotionCurveTarget2;
  })(CubismMotionCurveTarget || {});
  var CubismMotionSegmentType = /* @__PURE__ */ ((CubismMotionSegmentType2) => {
    CubismMotionSegmentType2[CubismMotionSegmentType2["CubismMotionSegmentType_Linear"] = 0] = "CubismMotionSegmentType_Linear";
    CubismMotionSegmentType2[CubismMotionSegmentType2["CubismMotionSegmentType_Bezier"] = 1] = "CubismMotionSegmentType_Bezier";
    CubismMotionSegmentType2[CubismMotionSegmentType2["CubismMotionSegmentType_Stepped"] = 2] = "CubismMotionSegmentType_Stepped";
    CubismMotionSegmentType2[CubismMotionSegmentType2["CubismMotionSegmentType_InverseStepped"] = 3] = "CubismMotionSegmentType_InverseStepped";
    return CubismMotionSegmentType2;
  })(CubismMotionSegmentType || {});
  class CubismMotionPoint {
    constructor(time = 0, value = 0) {
      this.time = time;
      this.value = value;
    }
  }
  class CubismMotionSegment {
    constructor() {
      this.basePointIndex = 0;
      this.segmentType = 0;
    }
  }
  class CubismMotionCurve {
    constructor() {
      this.id = "";
      this.type = 0;
      this.segmentCount = 0;
      this.baseSegmentIndex = 0;
      this.fadeInTime = 0;
      this.fadeOutTime = 0;
    }
  }
  class CubismMotionEvent {
    constructor() {
      this.fireTime = 0;
      this.value = "";
    }
  }
  class CubismMotionData {
    constructor() {
      this.duration = 0;
      this.loop = false;
      this.curveCount = 0;
      this.eventCount = 0;
      this.fps = 0;
      this.curves = [];
      this.segments = [];
      this.points = [];
      this.events = [];
    }
  }
  class CubismMotionJson {
    constructor(json) {
      this._json = json;
    }
    release() {
      this._json = void 0;
    }
    getMotionDuration() {
      return this._json.Meta.Duration;
    }
    isMotionLoop() {
      return this._json.Meta.Loop || false;
    }
    getEvaluationOptionFlag(flagType) {
      if (EvaluationOptionFlag.EvaluationOptionFlag_AreBeziersRistricted == flagType) {
        return !!this._json.Meta.AreBeziersRestricted;
      }
      return false;
    }
    getMotionCurveCount() {
      return this._json.Meta.CurveCount;
    }
    getMotionFps() {
      return this._json.Meta.Fps;
    }
    getMotionTotalSegmentCount() {
      return this._json.Meta.TotalSegmentCount;
    }
    getMotionTotalPointCount() {
      return this._json.Meta.TotalPointCount;
    }
    getMotionFadeInTime() {
      return this._json.Meta.FadeInTime;
    }
    getMotionFadeOutTime() {
      return this._json.Meta.FadeOutTime;
    }
    getMotionCurveTarget(curveIndex) {
      return this._json.Curves[curveIndex].Target;
    }
    getMotionCurveId(curveIndex) {
      return this._json.Curves[curveIndex].Id;
    }
    getMotionCurveFadeInTime(curveIndex) {
      return this._json.Curves[curveIndex].FadeInTime;
    }
    getMotionCurveFadeOutTime(curveIndex) {
      return this._json.Curves[curveIndex].FadeOutTime;
    }
    getMotionCurveSegmentCount(curveIndex) {
      return this._json.Curves[curveIndex].Segments.length;
    }
    getMotionCurveSegment(curveIndex, segmentIndex) {
      return this._json.Curves[curveIndex].Segments[segmentIndex];
    }
    getEventCount() {
      return this._json.Meta.UserDataCount || 0;
    }
    getTotalEventValueSize() {
      return this._json.Meta.TotalUserDataSize;
    }
    getEventTime(userDataIndex) {
      return this._json.UserData[userDataIndex].Time;
    }
    getEventValue(userDataIndex) {
      return this._json.UserData[userDataIndex].Value;
    }
  }
  var EvaluationOptionFlag = /* @__PURE__ */ ((EvaluationOptionFlag2) => {
    EvaluationOptionFlag2[EvaluationOptionFlag2["EvaluationOptionFlag_AreBeziersRistricted"] = 0] = "EvaluationOptionFlag_AreBeziersRistricted";
    return EvaluationOptionFlag2;
  })(EvaluationOptionFlag || {});
  const EffectNameEyeBlink = "EyeBlink";
  const EffectNameLipSync = "LipSync";
  const TargetNameModel = "Model";
  const TargetNameParameter = "Parameter";
  const TargetNamePartOpacity = "PartOpacity";
  const UseOldBeziersCurveMotion = false;
  function lerpPoints(a, b, t) {
    const result = new CubismMotionPoint();
    result.time = a.time + (b.time - a.time) * t;
    result.value = a.value + (b.value - a.value) * t;
    return result;
  }
  function linearEvaluate(points, time) {
    let t = (time - points[0].time) / (points[1].time - points[0].time);
    if (t < 0) {
      t = 0;
    }
    return points[0].value + (points[1].value - points[0].value) * t;
  }
  function bezierEvaluate(points, time) {
    let t = (time - points[0].time) / (points[3].time - points[0].time);
    if (t < 0) {
      t = 0;
    }
    const p01 = lerpPoints(points[0], points[1], t);
    const p12 = lerpPoints(points[1], points[2], t);
    const p23 = lerpPoints(points[2], points[3], t);
    const p012 = lerpPoints(p01, p12, t);
    const p123 = lerpPoints(p12, p23, t);
    return lerpPoints(p012, p123, t).value;
  }
  function bezierEvaluateCardanoInterpretation(points, time) {
    const x = time;
    const x1 = points[0].time;
    const x2 = points[3].time;
    const cx1 = points[1].time;
    const cx2 = points[2].time;
    const a = x2 - 3 * cx2 + 3 * cx1 - x1;
    const b = 3 * cx2 - 6 * cx1 + 3 * x1;
    const c = 3 * cx1 - 3 * x1;
    const d = x1 - x;
    const t = CubismMath.cardanoAlgorithmForBezier(a, b, c, d);
    const p01 = lerpPoints(points[0], points[1], t);
    const p12 = lerpPoints(points[1], points[2], t);
    const p23 = lerpPoints(points[2], points[3], t);
    const p012 = lerpPoints(p01, p12, t);
    const p123 = lerpPoints(p12, p23, t);
    return lerpPoints(p012, p123, t).value;
  }
  function steppedEvaluate(points, time) {
    return points[0].value;
  }
  function inverseSteppedEvaluate(points, time) {
    return points[1].value;
  }
  function evaluateCurve(motionData, index, time) {
    const curve = motionData.curves[index];
    let target = -1;
    const totalSegmentCount = curve.baseSegmentIndex + curve.segmentCount;
    let pointPosition = 0;
    for (let i = curve.baseSegmentIndex; i < totalSegmentCount; ++i) {
      pointPosition = motionData.segments[i].basePointIndex + (motionData.segments[i].segmentType == CubismMotionSegmentType.CubismMotionSegmentType_Bezier ? 3 : 1);
      if (motionData.points[pointPosition].time > time) {
        target = i;
        break;
      }
    }
    if (target == -1) {
      return motionData.points[pointPosition].value;
    }
    const segment = motionData.segments[target];
    return segment.evaluate(motionData.points.slice(segment.basePointIndex), time);
  }
  class CubismMotion extends ACubismMotion {
    constructor() {
      super();
      this._eyeBlinkParameterIds = [];
      this._lipSyncParameterIds = [];
      this._sourceFrameRate = 30;
      this._loopDurationSeconds = -1;
      this._isLoop = false;
      this._isLoopFadeIn = true;
      this._lastWeight = 0;
    }
    static create(json, onFinishedMotionHandler) {
      const ret = new CubismMotion();
      ret.parse(json);
      ret._sourceFrameRate = ret._motionData.fps;
      ret._loopDurationSeconds = ret._motionData.duration;
      ret._onFinishedMotion = onFinishedMotionHandler;
      return ret;
    }
    doUpdateParameters(model, userTimeSeconds, fadeWeight, motionQueueEntry) {
      if (this._modelCurveIdEyeBlink == null) {
        this._modelCurveIdEyeBlink = EffectNameEyeBlink;
      }
      if (this._modelCurveIdLipSync == null) {
        this._modelCurveIdLipSync = EffectNameLipSync;
      }
      let timeOffsetSeconds = userTimeSeconds - motionQueueEntry.getStartTime();
      if (timeOffsetSeconds < 0) {
        timeOffsetSeconds = 0;
      }
      let lipSyncValue = Number.MAX_VALUE;
      let eyeBlinkValue = Number.MAX_VALUE;
      const MaxTargetSize = 64;
      let lipSyncFlags = 0;
      let eyeBlinkFlags = 0;
      if (this._eyeBlinkParameterIds.length > MaxTargetSize) {
        CubismLogDebug("too many eye blink targets : {0}", this._eyeBlinkParameterIds.length);
      }
      if (this._lipSyncParameterIds.length > MaxTargetSize) {
        CubismLogDebug("too many lip sync targets : {0}", this._lipSyncParameterIds.length);
      }
      const tmpFadeIn = this._fadeInSeconds <= 0 ? 1 : CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) / this._fadeInSeconds);
      const tmpFadeOut = this._fadeOutSeconds <= 0 || motionQueueEntry.getEndTime() < 0 ? 1 : CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) / this._fadeOutSeconds);
      let value;
      let c, parameterIndex;
      let time = timeOffsetSeconds;
      if (this._isLoop) {
        while (time > this._motionData.duration) {
          time -= this._motionData.duration;
        }
      }
      const curves = this._motionData.curves;
      for (c = 0; c < this._motionData.curveCount && curves[c].type == CubismMotionCurveTarget.CubismMotionCurveTarget_Model; ++c) {
        value = evaluateCurve(this._motionData, c, time);
        if (curves[c].id == this._modelCurveIdEyeBlink) {
          eyeBlinkValue = value;
        } else if (curves[c].id == this._modelCurveIdLipSync) {
          lipSyncValue = value;
        }
      }
      for (; c < this._motionData.curveCount && curves[c].type == CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter; ++c) {
        parameterIndex = model.getParameterIndex(curves[c].id);
        if (parameterIndex == -1) {
          continue;
        }
        const sourceValue = model.getParameterValueByIndex(parameterIndex);
        value = evaluateCurve(this._motionData, c, time);
        if (eyeBlinkValue != Number.MAX_VALUE) {
          for (let i = 0; i < this._eyeBlinkParameterIds.length && i < MaxTargetSize; ++i) {
            if (this._eyeBlinkParameterIds[i] == curves[c].id) {
              value *= eyeBlinkValue;
              eyeBlinkFlags |= 1 << i;
              break;
            }
          }
        }
        if (lipSyncValue != Number.MAX_VALUE) {
          for (let i = 0; i < this._lipSyncParameterIds.length && i < MaxTargetSize; ++i) {
            if (this._lipSyncParameterIds[i] == curves[c].id) {
              value += lipSyncValue;
              lipSyncFlags |= 1 << i;
              break;
            }
          }
        }
        let v;
        if (curves[c].fadeInTime < 0 && curves[c].fadeOutTime < 0) {
          v = sourceValue + (value - sourceValue) * fadeWeight;
        } else {
          let fin;
          let fout;
          if (curves[c].fadeInTime < 0) {
            fin = tmpFadeIn;
          } else {
            fin = curves[c].fadeInTime == 0 ? 1 : CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) / curves[c].fadeInTime);
          }
          if (curves[c].fadeOutTime < 0) {
            fout = tmpFadeOut;
          } else {
            fout = curves[c].fadeOutTime == 0 || motionQueueEntry.getEndTime() < 0 ? 1 : CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) / curves[c].fadeOutTime);
          }
          const paramWeight = this._weight * fin * fout;
          v = sourceValue + (value - sourceValue) * paramWeight;
        }
        model.setParameterValueByIndex(parameterIndex, v, 1);
      }
      {
        if (eyeBlinkValue != Number.MAX_VALUE) {
          for (let i = 0; i < this._eyeBlinkParameterIds.length && i < MaxTargetSize; ++i) {
            const sourceValue = model.getParameterValueById(this._eyeBlinkParameterIds[i]);
            if (eyeBlinkFlags >> i & 1) {
              continue;
            }
            const v = sourceValue + (eyeBlinkValue - sourceValue) * fadeWeight;
            model.setParameterValueById(this._eyeBlinkParameterIds[i], v);
          }
        }
        if (lipSyncValue != Number.MAX_VALUE) {
          for (let i = 0; i < this._lipSyncParameterIds.length && i < MaxTargetSize; ++i) {
            const sourceValue = model.getParameterValueById(this._lipSyncParameterIds[i]);
            if (lipSyncFlags >> i & 1) {
              continue;
            }
            const v = sourceValue + (lipSyncValue - sourceValue) * fadeWeight;
            model.setParameterValueById(this._lipSyncParameterIds[i], v);
          }
        }
      }
      for (; c < this._motionData.curveCount && curves[c].type == CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity; ++c) {
        value = evaluateCurve(this._motionData, c, time);
        if (CubismConfig.setOpacityFromMotion) {
          model.setPartOpacityById(curves[c].id, value);
        } else {
          parameterIndex = model.getParameterIndex(curves[c].id);
          if (parameterIndex == -1) {
            continue;
          }
          model.setParameterValueByIndex(parameterIndex, value);
        }
      }
      if (timeOffsetSeconds >= this._motionData.duration) {
        if (this._isLoop) {
          motionQueueEntry.setStartTime(userTimeSeconds);
          if (this._isLoopFadeIn) {
            motionQueueEntry.setFadeInStartTime(userTimeSeconds);
          }
        } else {
          if (this._onFinishedMotion) {
            this._onFinishedMotion(this);
          }
          motionQueueEntry.setIsFinished(true);
        }
      }
      this._lastWeight = fadeWeight;
    }
    setIsLoop(loop) {
      this._isLoop = loop;
    }
    isLoop() {
      return this._isLoop;
    }
    setIsLoopFadeIn(loopFadeIn) {
      this._isLoopFadeIn = loopFadeIn;
    }
    isLoopFadeIn() {
      return this._isLoopFadeIn;
    }
    getDuration() {
      return this._isLoop ? -1 : this._loopDurationSeconds;
    }
    getLoopDuration() {
      return this._loopDurationSeconds;
    }
    setParameterFadeInTime(parameterId, value) {
      const curves = this._motionData.curves;
      for (let i = 0; i < this._motionData.curveCount; ++i) {
        if (parameterId == curves[i].id) {
          curves[i].fadeInTime = value;
          return;
        }
      }
    }
    setParameterFadeOutTime(parameterId, value) {
      const curves = this._motionData.curves;
      for (let i = 0; i < this._motionData.curveCount; ++i) {
        if (parameterId == curves[i].id) {
          curves[i].fadeOutTime = value;
          return;
        }
      }
    }
    getParameterFadeInTime(parameterId) {
      const curves = this._motionData.curves;
      for (let i = 0; i < this._motionData.curveCount; ++i) {
        if (parameterId == curves[i].id) {
          return curves[i].fadeInTime;
        }
      }
      return -1;
    }
    getParameterFadeOutTime(parameterId) {
      const curves = this._motionData.curves;
      for (let i = 0; i < this._motionData.curveCount; ++i) {
        if (parameterId == curves[i].id) {
          return curves[i].fadeOutTime;
        }
      }
      return -1;
    }
    setEffectIds(eyeBlinkParameterIds, lipSyncParameterIds) {
      this._eyeBlinkParameterIds = eyeBlinkParameterIds;
      this._lipSyncParameterIds = lipSyncParameterIds;
    }
    release() {
      this._motionData = void 0;
    }
    parse(motionJson) {
      this._motionData = new CubismMotionData();
      let json = new CubismMotionJson(motionJson);
      this._motionData.duration = json.getMotionDuration();
      this._motionData.loop = json.isMotionLoop();
      this._motionData.curveCount = json.getMotionCurveCount();
      this._motionData.fps = json.getMotionFps();
      this._motionData.eventCount = json.getEventCount();
      const areBeziersRestructed = json.getEvaluationOptionFlag(EvaluationOptionFlag.EvaluationOptionFlag_AreBeziersRistricted);
      const fadeInSeconds = json.getMotionFadeInTime();
      const fadeOutSeconds = json.getMotionFadeOutTime();
      if (fadeInSeconds !== void 0) {
        this._fadeInSeconds = fadeInSeconds < 0 ? 1 : fadeInSeconds;
      } else {
        this._fadeInSeconds = 1;
      }
      if (fadeOutSeconds !== void 0) {
        this._fadeOutSeconds = fadeOutSeconds < 0 ? 1 : fadeOutSeconds;
      } else {
        this._fadeOutSeconds = 1;
      }
      this._motionData.curves = Array.from({ length: this._motionData.curveCount }).map(() => new CubismMotionCurve());
      this._motionData.segments = Array.from({ length: json.getMotionTotalSegmentCount() }).map(() => new CubismMotionSegment());
      this._motionData.events = Array.from({ length: this._motionData.eventCount }).map(() => new CubismMotionEvent());
      this._motionData.points = [];
      let totalPointCount = 0;
      let totalSegmentCount = 0;
      for (let curveCount = 0; curveCount < this._motionData.curveCount; ++curveCount) {
        const curve = this._motionData.curves[curveCount];
        switch (json.getMotionCurveTarget(curveCount)) {
          case TargetNameModel:
            curve.type = CubismMotionCurveTarget.CubismMotionCurveTarget_Model;
            break;
          case TargetNameParameter:
            curve.type = CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter;
            break;
          case TargetNamePartOpacity:
            curve.type = CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity;
            break;
          default:
            CubismLogWarning('Warning : Unable to get segment type from Curve! The number of "CurveCount" may be incorrect!');
        }
        curve.id = json.getMotionCurveId(curveCount);
        curve.baseSegmentIndex = totalSegmentCount;
        const fadeInTime = json.getMotionCurveFadeInTime(curveCount);
        const fadeOutTime = json.getMotionCurveFadeOutTime(curveCount);
        curve.fadeInTime = fadeInTime !== void 0 ? fadeInTime : -1;
        curve.fadeOutTime = fadeOutTime !== void 0 ? fadeOutTime : -1;
        for (let segmentPosition = 0; segmentPosition < json.getMotionCurveSegmentCount(curveCount); ) {
          if (segmentPosition == 0) {
            this._motionData.segments[totalSegmentCount].basePointIndex = totalPointCount;
            this._motionData.points[totalPointCount] = new CubismMotionPoint(json.getMotionCurveSegment(curveCount, segmentPosition), json.getMotionCurveSegment(curveCount, segmentPosition + 1));
            totalPointCount += 1;
            segmentPosition += 2;
          } else {
            this._motionData.segments[totalSegmentCount].basePointIndex = totalPointCount - 1;
          }
          const segment = json.getMotionCurveSegment(curveCount, segmentPosition);
          switch (segment) {
            case CubismMotionSegmentType.CubismMotionSegmentType_Linear: {
              this._motionData.segments[totalSegmentCount].segmentType = CubismMotionSegmentType.CubismMotionSegmentType_Linear;
              this._motionData.segments[totalSegmentCount].evaluate = linearEvaluate;
              this._motionData.points[totalPointCount] = new CubismMotionPoint(json.getMotionCurveSegment(curveCount, segmentPosition + 1), json.getMotionCurveSegment(curveCount, segmentPosition + 2));
              totalPointCount += 1;
              segmentPosition += 3;
              break;
            }
            case CubismMotionSegmentType.CubismMotionSegmentType_Bezier: {
              this._motionData.segments[totalSegmentCount].segmentType = CubismMotionSegmentType.CubismMotionSegmentType_Bezier;
              if (areBeziersRestructed || UseOldBeziersCurveMotion) {
                this._motionData.segments[totalSegmentCount].evaluate = bezierEvaluate;
              } else {
                this._motionData.segments[totalSegmentCount].evaluate = bezierEvaluateCardanoInterpretation;
              }
              this._motionData.points[totalPointCount] = new CubismMotionPoint(json.getMotionCurveSegment(curveCount, segmentPosition + 1), json.getMotionCurveSegment(curveCount, segmentPosition + 2));
              this._motionData.points[totalPointCount + 1] = new CubismMotionPoint(json.getMotionCurveSegment(curveCount, segmentPosition + 3), json.getMotionCurveSegment(curveCount, segmentPosition + 4));
              this._motionData.points[totalPointCount + 2] = new CubismMotionPoint(json.getMotionCurveSegment(curveCount, segmentPosition + 5), json.getMotionCurveSegment(curveCount, segmentPosition + 6));
              totalPointCount += 3;
              segmentPosition += 7;
              break;
            }
            case CubismMotionSegmentType.CubismMotionSegmentType_Stepped: {
              this._motionData.segments[totalSegmentCount].segmentType = CubismMotionSegmentType.CubismMotionSegmentType_Stepped;
              this._motionData.segments[totalSegmentCount].evaluate = steppedEvaluate;
              this._motionData.points[totalPointCount] = new CubismMotionPoint(json.getMotionCurveSegment(curveCount, segmentPosition + 1), json.getMotionCurveSegment(curveCount, segmentPosition + 2));
              totalPointCount += 1;
              segmentPosition += 3;
              break;
            }
            case CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped: {
              this._motionData.segments[totalSegmentCount].segmentType = CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped;
              this._motionData.segments[totalSegmentCount].evaluate = inverseSteppedEvaluate;
              this._motionData.points[totalPointCount] = new CubismMotionPoint(json.getMotionCurveSegment(curveCount, segmentPosition + 1), json.getMotionCurveSegment(curveCount, segmentPosition + 2));
              totalPointCount += 1;
              segmentPosition += 3;
              break;
            }
          }
          ++curve.segmentCount;
          ++totalSegmentCount;
        }
        this._motionData.curves.push(curve);
      }
      for (let userdatacount = 0; userdatacount < json.getEventCount(); ++userdatacount) {
        this._motionData.events[userdatacount].fireTime = json.getEventTime(userdatacount);
        this._motionData.events[userdatacount].value = json.getEventValue(userdatacount);
      }
      json.release();
    }
    getFiredEvent(beforeCheckTimeSeconds, motionTimeSeconds) {
      this._firedEventValues.length = 0;
      for (let u = 0; u < this._motionData.eventCount; ++u) {
        if (this._motionData.events[u].fireTime > beforeCheckTimeSeconds && this._motionData.events[u].fireTime <= motionTimeSeconds) {
          this._firedEventValues.push(this._motionData.events[u].value);
        }
      }
      return this._firedEventValues;
    }
  }
  class Cubism4MotionManager extends MotionManager {
    constructor(settings, options) {
      var _a;
      super(settings, options);
      this.groups = { idle: "Idle" };
      this.motionDataType = "json";
      this.queueManager = new CubismMotionQueueManager();
      this.definitions = (_a = settings.motions) != null ? _a : {};
      this.eyeBlinkIds = settings.getEyeBlinkParameters() || [];
      this.lipSyncIds = settings.getLipSyncParameters() || [];
      this.init(options);
    }
    init(options) {
      super.init(options);
      if (this.settings.expressions) {
        this.expressionManager = new Cubism4ExpressionManager(this.settings, options);
      }
      this.queueManager.setEventCallback((caller, eventValue, customData) => {
        this.emit("motion:" + eventValue);
      });
    }
    isFinished() {
      return this.queueManager.isFinished();
    }
    _startMotion(motion, onFinish) {
      motion.setFinishedMotionHandler(onFinish);
      this.queueManager.stopAllMotions();
      return this.queueManager.startMotion(motion, false, performance.now());
    }
    _stopAllMotions() {
      this.queueManager.stopAllMotions();
    }
    createMotion(data, group, definition) {
      const motion = CubismMotion.create(data);
      const json = new CubismMotionJson(data);
      const defaultFadingDuration = (group === this.groups.idle ? exports2.config.idleMotionFadingDuration : exports2.config.motionFadingDuration) / 1e3;
      if (json.getMotionFadeInTime() === void 0) {
        motion.setFadeInTime(definition.FadeInTime > 0 ? definition.FadeInTime : defaultFadingDuration);
      }
      if (json.getMotionFadeOutTime() === void 0) {
        motion.setFadeOutTime(definition.FadeOutTime > 0 ? definition.FadeOutTime : defaultFadingDuration);
      }
      motion.setEffectIds(this.eyeBlinkIds, this.lipSyncIds);
      return motion;
    }
    getMotionFile(definition) {
      return definition.File;
    }
    getMotionName(definition) {
      return definition.File;
    }
    getSoundFile(definition) {
      return definition.Sound;
    }
    updateParameters(model, now) {
      return this.queueManager.doUpdateMotion(model, now);
    }
    destroy() {
      super.destroy();
      this.queueManager.release();
      this.queueManager = void 0;
    }
  }
  const ParamAngleX = "ParamAngleX";
  const ParamAngleY = "ParamAngleY";
  const ParamAngleZ = "ParamAngleZ";
  const ParamEyeBallX = "ParamEyeBallX";
  const ParamEyeBallY = "ParamEyeBallY";
  const ParamBodyAngleX = "ParamBodyAngleX";
  const ParamBreath = "ParamBreath";
  class CubismBreath {
    constructor() {
      this._breathParameters = [];
      this._currentTime = 0;
    }
    static create() {
      return new CubismBreath();
    }
    setParameters(breathParameters) {
      this._breathParameters = breathParameters;
    }
    getParameters() {
      return this._breathParameters;
    }
    updateParameters(model, deltaTimeSeconds) {
      this._currentTime += deltaTimeSeconds;
      const t = this._currentTime * 2 * 3.14159;
      for (let i = 0; i < this._breathParameters.length; ++i) {
        const data = this._breathParameters[i];
        model.addParameterValueById(data.parameterId, data.offset + data.peak * Math.sin(t / data.cycle), data.weight);
      }
    }
  }
  class BreathParameterData {
    constructor(parameterId, offset, peak, cycle, weight) {
      this.parameterId = parameterId == void 0 ? void 0 : parameterId;
      this.offset = offset == void 0 ? 0 : offset;
      this.peak = peak == void 0 ? 0 : peak;
      this.cycle = cycle == void 0 ? 0 : cycle;
      this.weight = weight == void 0 ? 0 : weight;
    }
  }
  const _CubismEyeBlink = class {
    static create(modelSetting) {
      return new _CubismEyeBlink(modelSetting);
    }
    setBlinkingInterval(blinkingInterval) {
      this._blinkingIntervalSeconds = blinkingInterval;
    }
    setBlinkingSetting(closing, closed, opening) {
      this._closingSeconds = closing;
      this._closedSeconds = closed;
      this._openingSeconds = opening;
    }
    setParameterIds(parameterIds) {
      this._parameterIds = parameterIds;
    }
    getParameterIds() {
      return this._parameterIds;
    }
    updateParameters(model, deltaTimeSeconds) {
      this._userTimeSeconds += deltaTimeSeconds;
      let parameterValue;
      let t = 0;
      switch (this._blinkingState) {
        case EyeState.EyeState_Closing:
          t = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closingSeconds;
          if (t >= 1) {
            t = 1;
            this._blinkingState = EyeState.EyeState_Closed;
            this._stateStartTimeSeconds = this._userTimeSeconds;
          }
          parameterValue = 1 - t;
          break;
        case EyeState.EyeState_Closed:
          t = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closedSeconds;
          if (t >= 1) {
            this._blinkingState = EyeState.EyeState_Opening;
            this._stateStartTimeSeconds = this._userTimeSeconds;
          }
          parameterValue = 0;
          break;
        case EyeState.EyeState_Opening:
          t = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._openingSeconds;
          if (t >= 1) {
            t = 1;
            this._blinkingState = EyeState.EyeState_Interval;
            this._nextBlinkingTime = this.determinNextBlinkingTiming();
          }
          parameterValue = t;
          break;
        case EyeState.EyeState_Interval:
          if (this._nextBlinkingTime < this._userTimeSeconds) {
            this._blinkingState = EyeState.EyeState_Closing;
            this._stateStartTimeSeconds = this._userTimeSeconds;
          }
          parameterValue = 1;
          break;
        case EyeState.EyeState_First:
        default:
          this._blinkingState = EyeState.EyeState_Interval;
          this._nextBlinkingTime = this.determinNextBlinkingTiming();
          parameterValue = 1;
          break;
      }
      if (!_CubismEyeBlink.CloseIfZero) {
        parameterValue = -parameterValue;
      }
      for (let i = 0; i < this._parameterIds.length; ++i) {
        model.setParameterValueById(this._parameterIds[i], parameterValue);
      }
    }
    constructor(modelSetting) {
      var _a, _b;
      this._blinkingState = EyeState.EyeState_First;
      this._nextBlinkingTime = 0;
      this._stateStartTimeSeconds = 0;
      this._blinkingIntervalSeconds = 4;
      this._closingSeconds = 0.1;
      this._closedSeconds = 0.05;
      this._openingSeconds = 0.15;
      this._userTimeSeconds = 0;
      this._parameterIds = [];
      if (modelSetting == null) {
        return;
      }
      this._parameterIds = (_b = (_a = modelSetting.getEyeBlinkParameters()) == null ? void 0 : _a.slice()) != null ? _b : this._parameterIds;
    }
    determinNextBlinkingTiming() {
      const r = Math.random();
      return this._userTimeSeconds + r * (2 * this._blinkingIntervalSeconds - 1);
    }
  };
  let CubismEyeBlink = _CubismEyeBlink;
  CubismEyeBlink.CloseIfZero = true;
  var EyeState = /* @__PURE__ */ ((EyeState2) => {
    EyeState2[EyeState2["EyeState_First"] = 0] = "EyeState_First";
    EyeState2[EyeState2["EyeState_Interval"] = 1] = "EyeState_Interval";
    EyeState2[EyeState2["EyeState_Closing"] = 2] = "EyeState_Closing";
    EyeState2[EyeState2["EyeState_Closed"] = 3] = "EyeState_Closed";
    EyeState2[EyeState2["EyeState_Opening"] = 4] = "EyeState_Opening";
    return EyeState2;
  })(EyeState || {});
  class csmRect {
    constructor(x = 0, y = 0, w = 0, h = 0) {
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
    }
    getCenterX() {
      return this.x + 0.5 * this.width;
    }
    getCenterY() {
      return this.y + 0.5 * this.height;
    }
    getRight() {
      return this.x + this.width;
    }
    getBottom() {
      return this.y + this.height;
    }
    setRect(r) {
      this.x = r.x;
      this.y = r.y;
      this.width = r.width;
      this.height = r.height;
    }
    expand(w, h) {
      this.x -= w;
      this.y -= h;
      this.width += w * 2;
      this.height += h * 2;
    }
  }
  const ColorChannelCount = 4;
  const shaderCount = 10;
  let s_instance;
  let s_viewport;
  let s_fbo;
  class CubismClippingManager_WebGL {
    getChannelFlagAsColor(channelNo) {
      return this._channelColors[channelNo];
    }
    getMaskRenderTexture() {
      let ret = 0;
      if (this._maskTexture && this._maskTexture.texture != 0) {
        this._maskTexture.frameNo = this._currentFrameNo;
        ret = this._maskTexture.texture;
      }
      if (ret == 0) {
        const size = this._clippingMaskBufferSize;
        this._colorBuffer = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorBuffer);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, size, size, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        ret = this.gl.createFramebuffer();
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, ret);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._colorBuffer, 0);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, s_fbo);
        this._maskTexture = new CubismRenderTextureResource(this._currentFrameNo, ret);
      }
      return ret;
    }
    setGL(gl) {
      this.gl = gl;
    }
    calcClippedDrawTotalBounds(model, clippingContext) {
      let clippedDrawTotalMinX = Number.MAX_VALUE;
      let clippedDrawTotalMinY = Number.MAX_VALUE;
      let clippedDrawTotalMaxX = Number.MIN_VALUE;
      let clippedDrawTotalMaxY = Number.MIN_VALUE;
      const clippedDrawCount = clippingContext._clippedDrawableIndexList.length;
      for (let clippedDrawableIndex = 0; clippedDrawableIndex < clippedDrawCount; clippedDrawableIndex++) {
        const drawableIndex = clippingContext._clippedDrawableIndexList[clippedDrawableIndex];
        const drawableVertexCount = model.getDrawableVertexCount(drawableIndex);
        const drawableVertexes = model.getDrawableVertices(drawableIndex);
        let minX = Number.MAX_VALUE;
        let minY = Number.MAX_VALUE;
        let maxX = Number.MIN_VALUE;
        let maxY = Number.MIN_VALUE;
        const loop = drawableVertexCount * Constant.vertexStep;
        for (let pi = Constant.vertexOffset; pi < loop; pi += Constant.vertexStep) {
          const x = drawableVertexes[pi];
          const y = drawableVertexes[pi + 1];
          if (x < minX) {
            minX = x;
          }
          if (x > maxX) {
            maxX = x;
          }
          if (y < minY) {
            minY = y;
          }
          if (y > maxY) {
            maxY = y;
          }
        }
        if (minX == Number.MAX_VALUE) {
          continue;
        }
        if (minX < clippedDrawTotalMinX) {
          clippedDrawTotalMinX = minX;
        }
        if (minY < clippedDrawTotalMinY) {
          clippedDrawTotalMinY = minY;
        }
        if (maxX > clippedDrawTotalMaxX) {
          clippedDrawTotalMaxX = maxX;
        }
        if (maxY > clippedDrawTotalMaxY) {
          clippedDrawTotalMaxY = maxY;
        }
        if (clippedDrawTotalMinX == Number.MAX_VALUE) {
          clippingContext._allClippedDrawRect.x = 0;
          clippingContext._allClippedDrawRect.y = 0;
          clippingContext._allClippedDrawRect.width = 0;
          clippingContext._allClippedDrawRect.height = 0;
          clippingContext._isUsing = false;
        } else {
          clippingContext._isUsing = true;
          const w = clippedDrawTotalMaxX - clippedDrawTotalMinX;
          const h = clippedDrawTotalMaxY - clippedDrawTotalMinY;
          clippingContext._allClippedDrawRect.x = clippedDrawTotalMinX;
          clippingContext._allClippedDrawRect.y = clippedDrawTotalMinY;
          clippingContext._allClippedDrawRect.width = w;
          clippingContext._allClippedDrawRect.height = h;
        }
      }
    }
    constructor() {
      this._maskRenderTexture = null;
      this._colorBuffer = null;
      this._currentFrameNo = 0;
      this._clippingMaskBufferSize = 256;
      this._clippingContextListForMask = [];
      this._clippingContextListForDraw = [];
      this._channelColors = [];
      this._tmpBoundsOnModel = new csmRect();
      this._tmpMatrix = new CubismMatrix44();
      this._tmpMatrixForMask = new CubismMatrix44();
      this._tmpMatrixForDraw = new CubismMatrix44();
      let tmp = new CubismTextureColor();
      tmp.R = 1;
      tmp.G = 0;
      tmp.B = 0;
      tmp.A = 0;
      this._channelColors.push(tmp);
      tmp = new CubismTextureColor();
      tmp.R = 0;
      tmp.G = 1;
      tmp.B = 0;
      tmp.A = 0;
      this._channelColors.push(tmp);
      tmp = new CubismTextureColor();
      tmp.R = 0;
      tmp.G = 0;
      tmp.B = 1;
      tmp.A = 0;
      this._channelColors.push(tmp);
      tmp = new CubismTextureColor();
      tmp.R = 0;
      tmp.G = 0;
      tmp.B = 0;
      tmp.A = 1;
      this._channelColors.push(tmp);
    }
    release() {
      var _a, _b, _c;
      const self2 = this;
      for (let i = 0; i < this._clippingContextListForMask.length; i++) {
        if (this._clippingContextListForMask[i]) {
          (_a = this._clippingContextListForMask[i]) == null ? void 0 : _a.release();
        }
      }
      self2._clippingContextListForMask = void 0;
      self2._clippingContextListForDraw = void 0;
      if (this._maskTexture) {
        (_b = this.gl) == null ? void 0 : _b.deleteFramebuffer(this._maskTexture.texture);
        self2._maskTexture = void 0;
      }
      self2._channelColors = void 0;
      (_c = this.gl) == null ? void 0 : _c.deleteTexture(this._colorBuffer);
      this._colorBuffer = null;
    }
    initialize(model, drawableCount, drawableMasks, drawableMaskCounts) {
      for (let i = 0; i < drawableCount; i++) {
        if (drawableMaskCounts[i] <= 0) {
          this._clippingContextListForDraw.push(null);
          continue;
        }
        let clippingContext = this.findSameClip(drawableMasks[i], drawableMaskCounts[i]);
        if (clippingContext == null) {
          clippingContext = new CubismClippingContext(this, drawableMasks[i], drawableMaskCounts[i]);
          this._clippingContextListForMask.push(clippingContext);
        }
        clippingContext.addClippedDrawable(i);
        this._clippingContextListForDraw.push(clippingContext);
      }
    }
    setupClippingContext(model, renderer) {
      this._currentFrameNo++;
      let usingClipCount = 0;
      for (let clipIndex = 0; clipIndex < this._clippingContextListForMask.length; clipIndex++) {
        const cc = this._clippingContextListForMask[clipIndex];
        this.calcClippedDrawTotalBounds(model, cc);
        if (cc._isUsing) {
          usingClipCount++;
        }
      }
      if (usingClipCount > 0) {
        this.gl.viewport(0, 0, this._clippingMaskBufferSize, this._clippingMaskBufferSize);
        this._maskRenderTexture = this.getMaskRenderTexture();
        renderer.getMvpMatrix();
        renderer.preDraw();
        this.setupLayoutBounds(usingClipCount);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._maskRenderTexture);
        this.gl.clearColor(1, 1, 1, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        for (let clipIndex = 0; clipIndex < this._clippingContextListForMask.length; clipIndex++) {
          const clipContext = this._clippingContextListForMask[clipIndex];
          const allClipedDrawRect = clipContext._allClippedDrawRect;
          const layoutBoundsOnTex01 = clipContext._layoutBounds;
          const MARGIN = 0.05;
          this._tmpBoundsOnModel.setRect(allClipedDrawRect);
          this._tmpBoundsOnModel.expand(allClipedDrawRect.width * MARGIN, allClipedDrawRect.height * MARGIN);
          const scaleX = layoutBoundsOnTex01.width / this._tmpBoundsOnModel.width;
          const scaleY = layoutBoundsOnTex01.height / this._tmpBoundsOnModel.height;
          {
            this._tmpMatrix.loadIdentity();
            {
              this._tmpMatrix.translateRelative(-1, -1);
              this._tmpMatrix.scaleRelative(2, 2);
            }
            {
              this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y);
              this._tmpMatrix.scaleRelative(scaleX, scaleY);
              this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y);
            }
            this._tmpMatrixForMask.setMatrix(this._tmpMatrix.getArray());
          }
          {
            this._tmpMatrix.loadIdentity();
            {
              this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y);
              this._tmpMatrix.scaleRelative(scaleX, scaleY);
              this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y);
            }
            this._tmpMatrixForDraw.setMatrix(this._tmpMatrix.getArray());
          }
          clipContext._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray());
          clipContext._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray());
          const clipDrawCount = clipContext._clippingIdCount;
          for (let i = 0; i < clipDrawCount; i++) {
            const clipDrawIndex = clipContext._clippingIdList[i];
            if (!model.getDrawableDynamicFlagVertexPositionsDidChange(clipDrawIndex)) {
              continue;
            }
            renderer.setIsCulling(model.getDrawableCulling(clipDrawIndex) != false);
            renderer.setClippingContextBufferForMask(clipContext);
            renderer.drawMesh(model.getDrawableTextureIndices(clipDrawIndex), model.getDrawableVertexIndexCount(clipDrawIndex), model.getDrawableVertexCount(clipDrawIndex), model.getDrawableVertexIndices(clipDrawIndex), model.getDrawableVertices(clipDrawIndex), model.getDrawableVertexUvs(clipDrawIndex), model.getDrawableOpacity(clipDrawIndex), CubismBlendMode.CubismBlendMode_Normal, false);
          }
        }
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, s_fbo);
        renderer.setClippingContextBufferForMask(null);
        this.gl.viewport(s_viewport[0], s_viewport[1], s_viewport[2], s_viewport[3]);
      }
    }
    findSameClip(drawableMasks, drawableMaskCounts) {
      for (let i = 0; i < this._clippingContextListForMask.length; i++) {
        const clippingContext = this._clippingContextListForMask[i];
        const count = clippingContext._clippingIdCount;
        if (count != drawableMaskCounts) {
          continue;
        }
        let sameCount = 0;
        for (let j = 0; j < count; j++) {
          const clipId = clippingContext._clippingIdList[j];
          for (let k = 0; k < count; k++) {
            if (drawableMasks[k] == clipId) {
              sameCount++;
              break;
            }
          }
        }
        if (sameCount == count) {
          return clippingContext;
        }
      }
      return null;
    }
    setupLayoutBounds(usingClipCount) {
      let div = usingClipCount / ColorChannelCount;
      let mod = usingClipCount % ColorChannelCount;
      div = ~~div;
      mod = ~~mod;
      let curClipIndex = 0;
      for (let channelNo = 0; channelNo < ColorChannelCount; channelNo++) {
        const layoutCount = div + (channelNo < mod ? 1 : 0);
        if (layoutCount == 0)
          ;
        else if (layoutCount == 1) {
          const clipContext = this._clippingContextListForMask[curClipIndex++];
          clipContext._layoutChannelNo = channelNo;
          clipContext._layoutBounds.x = 0;
          clipContext._layoutBounds.y = 0;
          clipContext._layoutBounds.width = 1;
          clipContext._layoutBounds.height = 1;
        } else if (layoutCount == 2) {
          for (let i = 0; i < layoutCount; i++) {
            let xpos = i % 2;
            xpos = ~~xpos;
            const cc = this._clippingContextListForMask[curClipIndex++];
            cc._layoutChannelNo = channelNo;
            cc._layoutBounds.x = xpos * 0.5;
            cc._layoutBounds.y = 0;
            cc._layoutBounds.width = 0.5;
            cc._layoutBounds.height = 1;
          }
        } else if (layoutCount <= 4) {
          for (let i = 0; i < layoutCount; i++) {
            let xpos = i % 2;
            let ypos = i / 2;
            xpos = ~~xpos;
            ypos = ~~ypos;
            const cc = this._clippingContextListForMask[curClipIndex++];
            cc._layoutChannelNo = channelNo;
            cc._layoutBounds.x = xpos * 0.5;
            cc._layoutBounds.y = ypos * 0.5;
            cc._layoutBounds.width = 0.5;
            cc._layoutBounds.height = 0.5;
          }
        } else if (layoutCount <= 9) {
          for (let i = 0; i < layoutCount; i++) {
            let xpos = i % 3;
            let ypos = i / 3;
            xpos = ~~xpos;
            ypos = ~~ypos;
            const cc = this._clippingContextListForMask[curClipIndex++];
            cc._layoutChannelNo = channelNo;
            cc._layoutBounds.x = xpos / 3;
            cc._layoutBounds.y = ypos / 3;
            cc._layoutBounds.width = 1 / 3;
            cc._layoutBounds.height = 1 / 3;
          }
        } else if (CubismConfig.supportMoreMaskDivisions && layoutCount <= 16) {
          for (let i = 0; i < layoutCount; i++) {
            let xpos = i % 4;
            let ypos = i / 4;
            xpos = ~~xpos;
            ypos = ~~ypos;
            const cc = this._clippingContextListForMask[curClipIndex++];
            cc._layoutChannelNo = channelNo;
            cc._layoutBounds.x = xpos / 4;
            cc._layoutBounds.y = ypos / 4;
            cc._layoutBounds.width = 1 / 4;
            cc._layoutBounds.height = 1 / 4;
          }
        } else {
          CubismLogError("not supported mask count : {0}", layoutCount);
        }
      }
    }
    getColorBuffer() {
      return this._colorBuffer;
    }
    getClippingContextListForDraw() {
      return this._clippingContextListForDraw;
    }
    setClippingMaskBufferSize(size) {
      this._clippingMaskBufferSize = size;
    }
    getClippingMaskBufferSize() {
      return this._clippingMaskBufferSize;
    }
  }
  class CubismRenderTextureResource {
    constructor(frameNo, texture) {
      this.frameNo = frameNo;
      this.texture = texture;
    }
  }
  class CubismClippingContext {
    constructor(manager, clippingDrawableIndices, clipCount) {
      this._isUsing = false;
      this._owner = manager;
      this._clippingIdList = clippingDrawableIndices;
      this._clippingIdCount = clipCount;
      this._allClippedDrawRect = new csmRect();
      this._layoutBounds = new csmRect();
      this._clippedDrawableIndexList = [];
      this._matrixForMask = new CubismMatrix44();
      this._matrixForDraw = new CubismMatrix44();
    }
    release() {
      const self2 = this;
      self2._layoutBounds = void 0;
      self2._allClippedDrawRect = void 0;
      self2._clippedDrawableIndexList = void 0;
    }
    addClippedDrawable(drawableIndex) {
      this._clippedDrawableIndexList.push(drawableIndex);
    }
    getClippingManager() {
      return this._owner;
    }
    setGl(gl) {
      this._owner.setGL(gl);
    }
  }
  class CubismShader_WebGL {
    static getInstance() {
      if (s_instance == null) {
        s_instance = new CubismShader_WebGL();
        return s_instance;
      }
      return s_instance;
    }
    static deleteInstance() {
      if (s_instance) {
        s_instance.release();
        s_instance = void 0;
      }
    }
    constructor() {
      this._shaderSets = [];
    }
    release() {
      this.releaseShaderProgram();
    }
    setupShaderProgram(renderer, textureId, vertexCount, vertexArray, indexArray, uvArray, bufferData, opacity, colorBlendMode, baseColor, isPremultipliedAlpha, matrix4x4, invertedMask) {
      if (!isPremultipliedAlpha) {
        CubismLogError("NoPremultipliedAlpha is not allowed");
      }
      if (this._shaderSets.length == 0) {
        this.generateShaders();
      }
      let SRC_COLOR;
      let DST_COLOR;
      let SRC_ALPHA;
      let DST_ALPHA;
      const clippingContextBufferForMask = renderer.getClippingContextBufferForMask();
      if (clippingContextBufferForMask != null) {
        const shaderSet = this._shaderSets[ShaderNames.ShaderNames_SetupMask];
        this.gl.useProgram(shaderSet.shaderProgram);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, textureId);
        this.gl.uniform1i(shaderSet.samplerTexture0Location, 0);
        if (bufferData.vertex == null) {
          bufferData.vertex = this.gl.createBuffer();
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.vertex);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexArray, this.gl.DYNAMIC_DRAW);
        this.gl.enableVertexAttribArray(shaderSet.attributePositionLocation);
        this.gl.vertexAttribPointer(shaderSet.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0);
        if (bufferData.uv == null) {
          bufferData.uv = this.gl.createBuffer();
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.uv);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, uvArray, this.gl.DYNAMIC_DRAW);
        this.gl.enableVertexAttribArray(shaderSet.attributeTexCoordLocation);
        this.gl.vertexAttribPointer(shaderSet.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
        const channelNo = clippingContextBufferForMask._layoutChannelNo;
        const colorChannel = clippingContextBufferForMask.getClippingManager().getChannelFlagAsColor(channelNo);
        this.gl.uniform4f(shaderSet.uniformChannelFlagLocation, colorChannel.R, colorChannel.G, colorChannel.B, colorChannel.A);
        this.gl.uniformMatrix4fv(shaderSet.uniformClipMatrixLocation, false, clippingContextBufferForMask._matrixForMask.getArray());
        const rect = clippingContextBufferForMask._layoutBounds;
        this.gl.uniform4f(shaderSet.uniformBaseColorLocation, rect.x * 2 - 1, rect.y * 2 - 1, rect.getRight() * 2 - 1, rect.getBottom() * 2 - 1);
        SRC_COLOR = this.gl.ZERO;
        DST_COLOR = this.gl.ONE_MINUS_SRC_COLOR;
        SRC_ALPHA = this.gl.ZERO;
        DST_ALPHA = this.gl.ONE_MINUS_SRC_ALPHA;
      } else {
        const clippingContextBufferForDraw = renderer.getClippingContextBufferForDraw();
        const masked = clippingContextBufferForDraw != null;
        const offset = masked ? invertedMask ? 2 : 1 : 0;
        let shaderSet;
        switch (colorBlendMode) {
          case CubismBlendMode.CubismBlendMode_Normal:
          default:
            shaderSet = this._shaderSets[ShaderNames.ShaderNames_NormalPremultipliedAlpha + offset];
            SRC_COLOR = this.gl.ONE;
            DST_COLOR = this.gl.ONE_MINUS_SRC_ALPHA;
            SRC_ALPHA = this.gl.ONE;
            DST_ALPHA = this.gl.ONE_MINUS_SRC_ALPHA;
            break;
          case CubismBlendMode.CubismBlendMode_Additive:
            shaderSet = this._shaderSets[ShaderNames.ShaderNames_AddPremultipliedAlpha + offset];
            SRC_COLOR = this.gl.ONE;
            DST_COLOR = this.gl.ONE;
            SRC_ALPHA = this.gl.ZERO;
            DST_ALPHA = this.gl.ONE;
            break;
          case CubismBlendMode.CubismBlendMode_Multiplicative:
            shaderSet = this._shaderSets[ShaderNames.ShaderNames_MultPremultipliedAlpha + offset];
            SRC_COLOR = this.gl.DST_COLOR;
            DST_COLOR = this.gl.ONE_MINUS_SRC_ALPHA;
            SRC_ALPHA = this.gl.ZERO;
            DST_ALPHA = this.gl.ONE;
            break;
        }
        this.gl.useProgram(shaderSet.shaderProgram);
        if (bufferData.vertex == null) {
          bufferData.vertex = this.gl.createBuffer();
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.vertex);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexArray, this.gl.DYNAMIC_DRAW);
        this.gl.enableVertexAttribArray(shaderSet.attributePositionLocation);
        this.gl.vertexAttribPointer(shaderSet.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0);
        if (bufferData.uv == null) {
          bufferData.uv = this.gl.createBuffer();
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.uv);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, uvArray, this.gl.DYNAMIC_DRAW);
        this.gl.enableVertexAttribArray(shaderSet.attributeTexCoordLocation);
        this.gl.vertexAttribPointer(shaderSet.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
        if (clippingContextBufferForDraw != null) {
          this.gl.activeTexture(this.gl.TEXTURE1);
          const tex = clippingContextBufferForDraw.getClippingManager().getColorBuffer();
          this.gl.bindTexture(this.gl.TEXTURE_2D, tex);
          this.gl.uniform1i(shaderSet.samplerTexture1Location, 1);
          this.gl.uniformMatrix4fv(shaderSet.uniformClipMatrixLocation, false, clippingContextBufferForDraw._matrixForDraw.getArray());
          const channelNo = clippingContextBufferForDraw._layoutChannelNo;
          const colorChannel = clippingContextBufferForDraw.getClippingManager().getChannelFlagAsColor(channelNo);
          this.gl.uniform4f(shaderSet.uniformChannelFlagLocation, colorChannel.R, colorChannel.G, colorChannel.B, colorChannel.A);
        }
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, textureId);
        this.gl.uniform1i(shaderSet.samplerTexture0Location, 0);
        this.gl.uniformMatrix4fv(shaderSet.uniformMatrixLocation, false, matrix4x4.getArray());
        this.gl.uniform4f(shaderSet.uniformBaseColorLocation, baseColor.R, baseColor.G, baseColor.B, baseColor.A);
      }
      if (bufferData.index == null) {
        bufferData.index = this.gl.createBuffer();
      }
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, bufferData.index);
      this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, indexArray, this.gl.DYNAMIC_DRAW);
      this.gl.blendFuncSeparate(SRC_COLOR, DST_COLOR, SRC_ALPHA, DST_ALPHA);
    }
    releaseShaderProgram() {
      for (let i = 0; i < this._shaderSets.length; i++) {
        this.gl.deleteProgram(this._shaderSets[i].shaderProgram);
        this._shaderSets[i].shaderProgram = 0;
      }
      this._shaderSets = [];
    }
    generateShaders() {
      for (let i = 0; i < shaderCount; i++) {
        this._shaderSets.push({});
      }
      this._shaderSets[0].shaderProgram = this.loadShaderProgram(vertexShaderSrcSetupMask, fragmentShaderSrcsetupMask);
      this._shaderSets[1].shaderProgram = this.loadShaderProgram(vertexShaderSrc, fragmentShaderSrcPremultipliedAlpha);
      this._shaderSets[2].shaderProgram = this.loadShaderProgram(vertexShaderSrcMasked, fragmentShaderSrcMaskPremultipliedAlpha);
      this._shaderSets[3].shaderProgram = this.loadShaderProgram(vertexShaderSrcMasked, fragmentShaderSrcMaskInvertedPremultipliedAlpha);
      this._shaderSets[4].shaderProgram = this._shaderSets[1].shaderProgram;
      this._shaderSets[5].shaderProgram = this._shaderSets[2].shaderProgram;
      this._shaderSets[6].shaderProgram = this._shaderSets[3].shaderProgram;
      this._shaderSets[7].shaderProgram = this._shaderSets[1].shaderProgram;
      this._shaderSets[8].shaderProgram = this._shaderSets[2].shaderProgram;
      this._shaderSets[9].shaderProgram = this._shaderSets[3].shaderProgram;
      this._shaderSets[0].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[0].shaderProgram, "a_position");
      this._shaderSets[0].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[0].shaderProgram, "a_texCoord");
      this._shaderSets[0].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, "s_texture0");
      this._shaderSets[0].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, "u_clipMatrix");
      this._shaderSets[0].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, "u_channelFlag");
      this._shaderSets[0].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, "u_baseColor");
      this._shaderSets[1].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[1].shaderProgram, "a_position");
      this._shaderSets[1].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[1].shaderProgram, "a_texCoord");
      this._shaderSets[1].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[1].shaderProgram, "s_texture0");
      this._shaderSets[1].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[1].shaderProgram, "u_matrix");
      this._shaderSets[1].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[1].shaderProgram, "u_baseColor");
      this._shaderSets[2].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[2].shaderProgram, "a_position");
      this._shaderSets[2].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[2].shaderProgram, "a_texCoord");
      this._shaderSets[2].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "s_texture0");
      this._shaderSets[2].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "s_texture1");
      this._shaderSets[2].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "u_matrix");
      this._shaderSets[2].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "u_clipMatrix");
      this._shaderSets[2].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "u_channelFlag");
      this._shaderSets[2].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "u_baseColor");
      this._shaderSets[3].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[3].shaderProgram, "a_position");
      this._shaderSets[3].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[3].shaderProgram, "a_texCoord");
      this._shaderSets[3].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "s_texture0");
      this._shaderSets[3].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "s_texture1");
      this._shaderSets[3].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "u_matrix");
      this._shaderSets[3].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "u_clipMatrix");
      this._shaderSets[3].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "u_channelFlag");
      this._shaderSets[3].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "u_baseColor");
      this._shaderSets[4].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[4].shaderProgram, "a_position");
      this._shaderSets[4].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[4].shaderProgram, "a_texCoord");
      this._shaderSets[4].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[4].shaderProgram, "s_texture0");
      this._shaderSets[4].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[4].shaderProgram, "u_matrix");
      this._shaderSets[4].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[4].shaderProgram, "u_baseColor");
      this._shaderSets[5].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[5].shaderProgram, "a_position");
      this._shaderSets[5].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[5].shaderProgram, "a_texCoord");
      this._shaderSets[5].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "s_texture0");
      this._shaderSets[5].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "s_texture1");
      this._shaderSets[5].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "u_matrix");
      this._shaderSets[5].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "u_clipMatrix");
      this._shaderSets[5].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "u_channelFlag");
      this._shaderSets[5].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "u_baseColor");
      this._shaderSets[6].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[6].shaderProgram, "a_position");
      this._shaderSets[6].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[6].shaderProgram, "a_texCoord");
      this._shaderSets[6].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "s_texture0");
      this._shaderSets[6].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "s_texture1");
      this._shaderSets[6].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "u_matrix");
      this._shaderSets[6].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "u_clipMatrix");
      this._shaderSets[6].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "u_channelFlag");
      this._shaderSets[6].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "u_baseColor");
      this._shaderSets[7].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[7].shaderProgram, "a_position");
      this._shaderSets[7].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[7].shaderProgram, "a_texCoord");
      this._shaderSets[7].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[7].shaderProgram, "s_texture0");
      this._shaderSets[7].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[7].shaderProgram, "u_matrix");
      this._shaderSets[7].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[7].shaderProgram, "u_baseColor");
      this._shaderSets[8].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[8].shaderProgram, "a_position");
      this._shaderSets[8].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[8].shaderProgram, "a_texCoord");
      this._shaderSets[8].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "s_texture0");
      this._shaderSets[8].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "s_texture1");
      this._shaderSets[8].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "u_matrix");
      this._shaderSets[8].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "u_clipMatrix");
      this._shaderSets[8].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "u_channelFlag");
      this._shaderSets[8].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "u_baseColor");
      this._shaderSets[9].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[9].shaderProgram, "a_position");
      this._shaderSets[9].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[9].shaderProgram, "a_texCoord");
      this._shaderSets[9].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "s_texture0");
      this._shaderSets[9].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "s_texture1");
      this._shaderSets[9].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "u_matrix");
      this._shaderSets[9].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "u_clipMatrix");
      this._shaderSets[9].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "u_channelFlag");
      this._shaderSets[9].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "u_baseColor");
    }
    loadShaderProgram(vertexShaderSource, fragmentShaderSource) {
      let shaderProgram = this.gl.createProgram();
      let vertShader = this.compileShaderSource(this.gl.VERTEX_SHADER, vertexShaderSource);
      if (!vertShader) {
        CubismLogError("Vertex shader compile error!");
        return 0;
      }
      let fragShader = this.compileShaderSource(this.gl.FRAGMENT_SHADER, fragmentShaderSource);
      if (!fragShader) {
        CubismLogError("Vertex shader compile error!");
        return 0;
      }
      this.gl.attachShader(shaderProgram, vertShader);
      this.gl.attachShader(shaderProgram, fragShader);
      this.gl.linkProgram(shaderProgram);
      const linkStatus = this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS);
      if (!linkStatus) {
        CubismLogError("Failed to link program: {0}", shaderProgram);
        this.gl.deleteShader(vertShader);
        this.gl.deleteShader(fragShader);
        if (shaderProgram) {
          this.gl.deleteProgram(shaderProgram);
        }
        return 0;
      }
      this.gl.deleteShader(vertShader);
      this.gl.deleteShader(fragShader);
      return shaderProgram;
    }
    compileShaderSource(shaderType, shaderSource) {
      const source = shaderSource;
      const shader = this.gl.createShader(shaderType);
      this.gl.shaderSource(shader, source);
      this.gl.compileShader(shader);
      if (!shader) {
        const log = this.gl.getShaderInfoLog(shader);
        CubismLogError("Shader compile log: {0} ", log);
      }
      const status = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
      if (!status) {
        this.gl.deleteShader(shader);
        return null;
      }
      return shader;
    }
    setGl(gl) {
      this.gl = gl;
    }
  }
  var ShaderNames = /* @__PURE__ */ ((ShaderNames2) => {
    ShaderNames2[ShaderNames2["ShaderNames_SetupMask"] = 0] = "ShaderNames_SetupMask";
    ShaderNames2[ShaderNames2["ShaderNames_NormalPremultipliedAlpha"] = 1] = "ShaderNames_NormalPremultipliedAlpha";
    ShaderNames2[ShaderNames2["ShaderNames_NormalMaskedPremultipliedAlpha"] = 2] = "ShaderNames_NormalMaskedPremultipliedAlpha";
    ShaderNames2[ShaderNames2["ShaderNames_NomralMaskedInvertedPremultipliedAlpha"] = 3] = "ShaderNames_NomralMaskedInvertedPremultipliedAlpha";
    ShaderNames2[ShaderNames2["ShaderNames_AddPremultipliedAlpha"] = 4] = "ShaderNames_AddPremultipliedAlpha";
    ShaderNames2[ShaderNames2["ShaderNames_AddMaskedPremultipliedAlpha"] = 5] = "ShaderNames_AddMaskedPremultipliedAlpha";
    ShaderNames2[ShaderNames2["ShaderNames_AddMaskedPremultipliedAlphaInverted"] = 6] = "ShaderNames_AddMaskedPremultipliedAlphaInverted";
    ShaderNames2[ShaderNames2["ShaderNames_MultPremultipliedAlpha"] = 7] = "ShaderNames_MultPremultipliedAlpha";
    ShaderNames2[ShaderNames2["ShaderNames_MultMaskedPremultipliedAlpha"] = 8] = "ShaderNames_MultMaskedPremultipliedAlpha";
    ShaderNames2[ShaderNames2["ShaderNames_MultMaskedPremultipliedAlphaInverted"] = 9] = "ShaderNames_MultMaskedPremultipliedAlphaInverted";
    return ShaderNames2;
  })(ShaderNames || {});
  const vertexShaderSrcSetupMask = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_myPos;uniform mat4       u_clipMatrix;void main(){   gl_Position = u_clipMatrix * a_position;   v_myPos = u_clipMatrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}";
  const fragmentShaderSrcsetupMask = "precision mediump float;varying vec2       v_texCoord;varying vec4       v_myPos;uniform vec4       u_baseColor;uniform vec4       u_channelFlag;uniform sampler2D  s_texture0;void main(){   float isInside =        step(u_baseColor.x, v_myPos.x/v_myPos.w)       * step(u_baseColor.y, v_myPos.y/v_myPos.w)       * step(v_myPos.x/v_myPos.w, u_baseColor.z)       * step(v_myPos.y/v_myPos.w, u_baseColor.w);   gl_FragColor = u_channelFlag * texture2D(s_texture0, v_texCoord).a * isInside;}";
  const vertexShaderSrc = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;uniform mat4       u_matrix;void main(){   gl_Position = u_matrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}";
  const vertexShaderSrcMasked = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_clipPos;uniform mat4       u_matrix;uniform mat4       u_clipMatrix;void main(){   gl_Position = u_matrix * a_position;   v_clipPos = u_clipMatrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}";
  const fragmentShaderSrcPremultipliedAlpha = "precision mediump float;varying vec2       v_texCoord;uniform vec4       u_baseColor;uniform sampler2D  s_texture0;void main(){   gl_FragColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;}";
  const fragmentShaderSrcMaskPremultipliedAlpha = "precision mediump float;varying vec2       v_texCoord;varying vec4       v_clipPos;uniform vec4       u_baseColor;uniform vec4       u_channelFlag;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;void main(){   vec4 col_formask = texture2D(s_texture0 , v_texCoord) * u_baseColor;   vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;   col_formask = col_formask * maskVal;   gl_FragColor = col_formask;}";
  const fragmentShaderSrcMaskInvertedPremultipliedAlpha = "precision mediump float;varying vec2 v_texCoord;varying vec4 v_clipPos;uniform sampler2D s_texture0;uniform sampler2D s_texture1;uniform vec4 u_channelFlag;uniform vec4 u_baseColor;void main(){vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;col_formask = col_formask * (1.0 - maskVal);gl_FragColor = col_formask;}";
  class CubismRenderer_WebGL extends CubismRenderer {
    constructor() {
      super();
      this._clippingContextBufferForMask = null;
      this._clippingContextBufferForDraw = null;
      this._clippingManager = new CubismClippingManager_WebGL();
      this.firstDraw = true;
      this._textures = {};
      this._sortedDrawableIndexList = [];
      this._bufferData = {
        vertex: null,
        uv: null,
        index: null
      };
    }
    initialize(model) {
      if (model.isUsingMasking()) {
        this._clippingManager = new CubismClippingManager_WebGL();
        this._clippingManager.initialize(model, model.getDrawableCount(), model.getDrawableMasks(), model.getDrawableMaskCounts());
      }
      for (let i = model.getDrawableCount() - 1; i >= 0; i--) {
        this._sortedDrawableIndexList[i] = 0;
      }
      super.initialize(model);
    }
    bindTexture(modelTextureNo, glTexture) {
      this._textures[modelTextureNo] = glTexture;
    }
    getBindedTextures() {
      return this._textures;
    }
    setClippingMaskBufferSize(size) {
      this._clippingManager.release();
      this._clippingManager = new CubismClippingManager_WebGL();
      this._clippingManager.setClippingMaskBufferSize(size);
      this._clippingManager.initialize(this.getModel(), this.getModel().getDrawableCount(), this.getModel().getDrawableMasks(), this.getModel().getDrawableMaskCounts());
    }
    getClippingMaskBufferSize() {
      return this._clippingManager.getClippingMaskBufferSize();
    }
    release() {
      var _a, _b, _c;
      const self2 = this;
      this._clippingManager.release();
      self2._clippingManager = void 0;
      (_a = this.gl) == null ? void 0 : _a.deleteBuffer(this._bufferData.vertex);
      this._bufferData.vertex = null;
      (_b = this.gl) == null ? void 0 : _b.deleteBuffer(this._bufferData.uv);
      this._bufferData.uv = null;
      (_c = this.gl) == null ? void 0 : _c.deleteBuffer(this._bufferData.index);
      this._bufferData.index = null;
      self2._bufferData = void 0;
      self2._textures = void 0;
    }
    doDrawModel() {
      this.preDraw();
      if (this._clippingManager != null) {
        this._clippingManager.setupClippingContext(this.getModel(), this);
      }
      const drawableCount = this.getModel().getDrawableCount();
      const renderOrder = this.getModel().getDrawableRenderOrders();
      for (let i = 0; i < drawableCount; ++i) {
        const order = renderOrder[i];
        this._sortedDrawableIndexList[order] = i;
      }
      for (let i = 0; i < drawableCount; ++i) {
        const drawableIndex = this._sortedDrawableIndexList[i];
        if (!this.getModel().getDrawableDynamicFlagIsVisible(drawableIndex)) {
          continue;
        }
        this.setClippingContextBufferForDraw(this._clippingManager != null ? this._clippingManager.getClippingContextListForDraw()[drawableIndex] : null);
        this.setIsCulling(this.getModel().getDrawableCulling(drawableIndex));
        this.drawMesh(this.getModel().getDrawableTextureIndices(drawableIndex), this.getModel().getDrawableVertexIndexCount(drawableIndex), this.getModel().getDrawableVertexCount(drawableIndex), this.getModel().getDrawableVertexIndices(drawableIndex), this.getModel().getDrawableVertices(drawableIndex), this.getModel().getDrawableVertexUvs(drawableIndex), this.getModel().getDrawableOpacity(drawableIndex), this.getModel().getDrawableBlendMode(drawableIndex), this.getModel().getDrawableInvertedMaskBit(drawableIndex));
      }
    }
    drawMesh(textureNo, indexCount, vertexCount, indexArray, vertexArray, uvArray, opacity, colorBlendMode, invertedMask) {
      if (this.isCulling()) {
        this.gl.enable(this.gl.CULL_FACE);
      } else {
        this.gl.disable(this.gl.CULL_FACE);
      }
      this.gl.frontFace(this.gl.CCW);
      const modelColorRGBA = this.getModelColor();
      if (this.getClippingContextBufferForMask() == null) {
        modelColorRGBA.A *= opacity;
        if (this.isPremultipliedAlpha()) {
          modelColorRGBA.R *= modelColorRGBA.A;
          modelColorRGBA.G *= modelColorRGBA.A;
          modelColorRGBA.B *= modelColorRGBA.A;
        }
      }
      let drawtexture = null;
      if (this._textures[textureNo] != null) {
        drawtexture = this._textures[textureNo];
      }
      CubismShader_WebGL.getInstance().setupShaderProgram(this, drawtexture, vertexCount, vertexArray, indexArray, uvArray, this._bufferData, opacity, colorBlendMode, modelColorRGBA, this.isPremultipliedAlpha(), this.getMvpMatrix(), invertedMask);
      this.gl.drawElements(this.gl.TRIANGLES, indexCount, this.gl.UNSIGNED_SHORT, 0);
      this.gl.useProgram(null);
      this.setClippingContextBufferForDraw(null);
      this.setClippingContextBufferForMask(null);
    }
    static doStaticRelease() {
      CubismShader_WebGL.deleteInstance();
    }
    setRenderState(fbo, viewport) {
      s_fbo = fbo;
      s_viewport = viewport;
    }
    preDraw() {
      if (this.firstDraw) {
        this.firstDraw = false;
        this._anisortopy = this.gl.getExtension("EXT_texture_filter_anisotropic") || this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
      }
      this.gl.disable(this.gl.SCISSOR_TEST);
      this.gl.disable(this.gl.STENCIL_TEST);
      this.gl.disable(this.gl.DEPTH_TEST);
      this.gl.frontFace(this.gl.CW);
      this.gl.enable(this.gl.BLEND);
      this.gl.colorMask(true, true, true, true);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    }
    setClippingContextBufferForMask(clip) {
      this._clippingContextBufferForMask = clip;
    }
    getClippingContextBufferForMask() {
      return this._clippingContextBufferForMask;
    }
    setClippingContextBufferForDraw(clip) {
      this._clippingContextBufferForDraw = clip;
    }
    getClippingContextBufferForDraw() {
      return this._clippingContextBufferForDraw;
    }
    startUp(gl) {
      this.gl = gl;
      this._clippingManager.setGL(gl);
      CubismShader_WebGL.getInstance().setGl(gl);
    }
  }
  CubismRenderer.staticRelease = () => {
    CubismRenderer_WebGL.doStaticRelease();
  };
  const tempMatrix = new CubismMatrix44();
  class Cubism4InternalModel extends InternalModel {
    constructor(coreModel, settings, options) {
      super();
      this.lipSync = true;
      this.breath = CubismBreath.create();
      this.renderer = new CubismRenderer_WebGL();
      this.idParamAngleX = ParamAngleX;
      this.idParamAngleY = ParamAngleY;
      this.idParamAngleZ = ParamAngleZ;
      this.idParamEyeBallX = ParamEyeBallX;
      this.idParamEyeBallY = ParamEyeBallY;
      this.idParamBodyAngleX = ParamBodyAngleX;
      this.idParamBreath = ParamBreath;
      this.pixelsPerUnit = 1;
      this.centeringTransform = new math.Matrix();
      this.coreModel = coreModel;
      this.settings = settings;
      this.motionManager = new Cubism4MotionManager(settings, options);
      this.init();
    }
    init() {
      var _a;
      super.init();
      if (((_a = this.settings.getEyeBlinkParameters()) == null ? void 0 : _a.length) > 0) {
        this.eyeBlink = CubismEyeBlink.create(this.settings);
      }
      this.breath.setParameters([
        new BreathParameterData(this.idParamAngleX, 0, 15, 6.5345, 0.5),
        new BreathParameterData(this.idParamAngleY, 0, 8, 3.5345, 0.5),
        new BreathParameterData(this.idParamAngleZ, 0, 10, 5.5345, 0.5),
        new BreathParameterData(this.idParamBodyAngleX, 0, 4, 15.5345, 0.5),
        new BreathParameterData(this.idParamBreath, 0, 0.5, 3.2345, 0.5)
      ]);
      this.renderer.initialize(this.coreModel);
      this.renderer.setIsPremultipliedAlpha(true);
    }
    getSize() {
      return [this.coreModel.getModel().canvasinfo.CanvasWidth, this.coreModel.getModel().canvasinfo.CanvasHeight];
    }
    getLayout() {
      const layout = {};
      if (this.settings.layout) {
        for (const key of Object.keys(this.settings.layout)) {
          const commonKey = key.charAt(0).toLowerCase() + key.slice(1);
          layout[commonKey] = this.settings.layout[key];
        }
      }
      return layout;
    }
    setupLayout() {
      super.setupLayout();
      this.pixelsPerUnit = this.coreModel.getModel().canvasinfo.PixelsPerUnit;
      this.centeringTransform.scale(this.pixelsPerUnit, this.pixelsPerUnit).translate(this.originalWidth / 2, this.originalHeight / 2);
    }
    updateWebGLContext(gl, glContextID) {
      this.renderer.firstDraw = true;
      this.renderer._bufferData = {
        vertex: null,
        uv: null,
        index: null
      };
      this.renderer.startUp(gl);
      this.renderer._clippingManager._currentFrameNo = glContextID;
      this.renderer._clippingManager._maskTexture = void 0;
      CubismShader_WebGL.getInstance()._shaderSets = [];
    }
    bindTexture(index, texture) {
      this.renderer.bindTexture(index, texture);
    }
    getHitAreaDefs() {
      var _a, _b;
      return (_b = (_a = this.settings.hitAreas) == null ? void 0 : _a.map((hitArea) => ({
        id: hitArea.Id,
        name: hitArea.Name,
        index: this.coreModel.getDrawableIndex(hitArea.Id)
      }))) != null ? _b : [];
    }
    getDrawableIDs() {
      return this.coreModel.getDrawableIds();
    }
    getDrawableIndex(id) {
      return this.coreModel.getDrawableIndex(id);
    }
    getDrawableVertices(drawIndex) {
      if (typeof drawIndex === "string") {
        drawIndex = this.coreModel.getDrawableIndex(drawIndex);
        if (drawIndex === -1)
          throw new TypeError("Unable to find drawable ID: " + drawIndex);
      }
      const arr = this.coreModel.getDrawableVertices(drawIndex).slice();
      for (let i = 0; i < arr.length; i += 2) {
        arr[i] = arr[i] * this.pixelsPerUnit + this.originalWidth / 2;
        arr[i + 1] = -arr[i + 1] * this.pixelsPerUnit + this.originalHeight / 2;
      }
      return arr;
    }
    updateTransform(transform) {
      this.drawingMatrix.copyFrom(this.centeringTransform).prepend(this.localTransform).prepend(transform);
    }
    update(dt, now) {
      var _a, _b, _c, _d;
      super.update(dt, now);
      dt /= 1e3;
      now /= 1e3;
      const model = this.coreModel;
      this.emit("beforeMotionUpdate");
      const motionUpdated = this.motionManager.update(this.coreModel, now);
      this.emit("afterMotionUpdate");
      model.saveParameters();
      (_a = this.motionManager.expressionManager) == null ? void 0 : _a.update(model, now);
      if (!motionUpdated) {
        (_b = this.eyeBlink) == null ? void 0 : _b.updateParameters(model, dt);
      }
      this.updateFocus();
      this.updateNaturalMovements(dt * 1e3, now * 1e3);
      (_c = this.physics) == null ? void 0 : _c.evaluate(model, dt);
      (_d = this.pose) == null ? void 0 : _d.updateParameters(model, dt);
      this.emit("beforeModelUpdate");
      model.update();
      model.loadParameters();
    }
    updateFocus() {
      this.coreModel.addParameterValueById(this.idParamEyeBallX, this.focusController.x);
      this.coreModel.addParameterValueById(this.idParamEyeBallY, this.focusController.y);
      this.coreModel.addParameterValueById(this.idParamAngleX, this.focusController.x * 30);
      this.coreModel.addParameterValueById(this.idParamAngleY, this.focusController.y * 30);
      this.coreModel.addParameterValueById(this.idParamAngleZ, this.focusController.x * this.focusController.y * -30);
      this.coreModel.addParameterValueById(this.idParamBodyAngleX, this.focusController.x * 10);
    }
    updateNaturalMovements(dt, now) {
      var _a;
      (_a = this.breath) == null ? void 0 : _a.updateParameters(this.coreModel, dt / 1e3);
    }
    draw(gl) {
      const matrix = this.drawingMatrix;
      const array = tempMatrix.getArray();
      array[0] = matrix.a;
      array[1] = matrix.b;
      array[4] = -matrix.c;
      array[5] = -matrix.d;
      array[12] = matrix.tx;
      array[13] = matrix.ty;
      this.renderer.setMvpMatrix(tempMatrix);
      this.renderer.setRenderState(gl.getParameter(gl.FRAMEBUFFER_BINDING), this.viewport);
      this.renderer.drawModel();
    }
    destroy() {
      super.destroy();
      this.renderer.release();
      this.coreModel.release();
      this.renderer = void 0;
      this.coreModel = void 0;
    }
  }
  let startupPromise;
  let startupRetries = 20;
  function cubism4Ready() {
    if (CubismFramework.isStarted()) {
      return Promise.resolve();
    }
    startupPromise != null ? startupPromise : startupPromise = new Promise((resolve, reject) => {
      function startUpWithRetry() {
        try {
          startUpCubism4();
          resolve();
        } catch (e) {
          startupRetries--;
          if (startupRetries < 0) {
            const err = new Error("Failed to start up Cubism 4 framework.");
            err.cause = e;
            reject(err);
            return;
          }
          logger.log("Cubism4", "Startup failed, retrying 10ms later...");
          setTimeout(startUpWithRetry, 10);
        }
      }
      startUpWithRetry();
    });
    return startupPromise;
  }
  function startUpCubism4(options) {
    options = Object.assign({
      logFunction: console.log,
      loggingLevel: LogLevel.LogLevel_Verbose
    }, options);
    CubismFramework.startUp(options);
    CubismFramework.initialize();
  }
  const Epsilon = 1e-3;
  const DefaultFadeInSeconds = 0.5;
  class CubismPose {
    static create(pose3json) {
      const ret = new CubismPose();
      if (typeof pose3json.FadeInTime === "number") {
        ret._fadeTimeSeconds = pose3json.FadeInTime;
        if (ret._fadeTimeSeconds <= 0) {
          ret._fadeTimeSeconds = DefaultFadeInSeconds;
        }
      }
      const poseListInfo = pose3json.Groups;
      const poseCount = poseListInfo.length;
      for (let poseIndex = 0; poseIndex < poseCount; ++poseIndex) {
        const idListInfo = poseListInfo[poseIndex];
        const idCount = idListInfo.length;
        let groupCount = 0;
        for (let groupIndex = 0; groupIndex < idCount; ++groupIndex) {
          const partInfo = idListInfo[groupIndex];
          const partData = new PartData();
          partData.partId = partInfo.Id;
          const linkListInfo = partInfo.Link;
          if (linkListInfo) {
            const linkCount = linkListInfo.length;
            for (let linkIndex = 0; linkIndex < linkCount; ++linkIndex) {
              const linkPart = new PartData();
              linkPart.partId = linkListInfo[linkIndex];
              partData.link.push(linkPart);
            }
          }
          ret._partGroups.push(partData);
          ++groupCount;
        }
        ret._partGroupCounts.push(groupCount);
      }
      return ret;
    }
    updateParameters(model, deltaTimeSeconds) {
      if (model != this._lastModel) {
        this.reset(model);
      }
      this._lastModel = model;
      if (deltaTimeSeconds < 0) {
        deltaTimeSeconds = 0;
      }
      let beginIndex = 0;
      for (let i = 0; i < this._partGroupCounts.length; i++) {
        const partGroupCount = this._partGroupCounts[i];
        this.doFade(model, deltaTimeSeconds, beginIndex, partGroupCount);
        beginIndex += partGroupCount;
      }
      this.copyPartOpacities(model);
    }
    reset(model) {
      let beginIndex = 0;
      for (let i = 0; i < this._partGroupCounts.length; ++i) {
        const groupCount = this._partGroupCounts[i];
        for (let j = beginIndex; j < beginIndex + groupCount; ++j) {
          this._partGroups[j].initialize(model);
          const partsIndex = this._partGroups[j].partIndex;
          const paramIndex = this._partGroups[j].parameterIndex;
          if (partsIndex < 0) {
            continue;
          }
          model.setPartOpacityByIndex(partsIndex, j == beginIndex ? 1 : 0);
          model.setParameterValueByIndex(paramIndex, j == beginIndex ? 1 : 0);
          for (let k = 0; k < this._partGroups[j].link.length; ++k) {
            this._partGroups[j].link[k].initialize(model);
          }
        }
        beginIndex += groupCount;
      }
    }
    copyPartOpacities(model) {
      for (let groupIndex = 0; groupIndex < this._partGroups.length; ++groupIndex) {
        const partData = this._partGroups[groupIndex];
        if (partData.link.length == 0) {
          continue;
        }
        const partIndex = this._partGroups[groupIndex].partIndex;
        const opacity = model.getPartOpacityByIndex(partIndex);
        for (let linkIndex = 0; linkIndex < partData.link.length; ++linkIndex) {
          const linkPart = partData.link[linkIndex];
          const linkPartIndex = linkPart.partIndex;
          if (linkPartIndex < 0) {
            continue;
          }
          model.setPartOpacityByIndex(linkPartIndex, opacity);
        }
      }
    }
    doFade(model, deltaTimeSeconds, beginIndex, partGroupCount) {
      let visiblePartIndex = -1;
      let newOpacity = 1;
      const phi = 0.5;
      const backOpacityThreshold = 0.15;
      for (let i = beginIndex; i < beginIndex + partGroupCount; ++i) {
        const partIndex = this._partGroups[i].partIndex;
        const paramIndex = this._partGroups[i].parameterIndex;
        if (model.getParameterValueByIndex(paramIndex) > Epsilon) {
          if (visiblePartIndex >= 0) {
            break;
          }
          visiblePartIndex = i;
          newOpacity = model.getPartOpacityByIndex(partIndex);
          newOpacity += deltaTimeSeconds / this._fadeTimeSeconds;
          if (newOpacity > 1) {
            newOpacity = 1;
          }
        }
      }
      if (visiblePartIndex < 0) {
        visiblePartIndex = 0;
        newOpacity = 1;
      }
      for (let i = beginIndex; i < beginIndex + partGroupCount; ++i) {
        const partsIndex = this._partGroups[i].partIndex;
        if (visiblePartIndex == i) {
          model.setPartOpacityByIndex(partsIndex, newOpacity);
        } else {
          let opacity = model.getPartOpacityByIndex(partsIndex);
          let a1;
          if (newOpacity < phi) {
            a1 = newOpacity * (phi - 1) / phi + 1;
          } else {
            a1 = (1 - newOpacity) * phi / (1 - phi);
          }
          const backOpacity = (1 - a1) * (1 - newOpacity);
          if (backOpacity > backOpacityThreshold) {
            a1 = 1 - backOpacityThreshold / (1 - newOpacity);
          }
          if (opacity > a1) {
            opacity = a1;
          }
          model.setPartOpacityByIndex(partsIndex, opacity);
        }
      }
    }
    constructor() {
      this._fadeTimeSeconds = DefaultFadeInSeconds;
      this._lastModel = void 0;
      this._partGroups = [];
      this._partGroupCounts = [];
    }
  }
  class PartData {
    constructor(v) {
      this.parameterIndex = 0;
      this.partIndex = 0;
      this.partId = "";
      this.link = [];
      if (v != void 0) {
        this.assignment(v);
      }
    }
    assignment(v) {
      this.partId = v.partId;
      this.link = v.link.map((link) => link.clone());
      return this;
    }
    initialize(model) {
      this.parameterIndex = model.getParameterIndex(this.partId);
      this.partIndex = model.getPartIndex(this.partId);
      model.setParameterValueByIndex(this.parameterIndex, 1);
    }
    clone() {
      const clonePartData = new PartData();
      clonePartData.partId = this.partId;
      clonePartData.parameterIndex = this.parameterIndex;
      clonePartData.partIndex = this.partIndex;
      clonePartData.link = this.link.map((link) => link.clone());
      return clonePartData;
    }
  }
  class CubismModel {
    update() {
      this._model.update();
      this._model.drawables.resetDynamicFlags();
    }
    getCanvasWidth() {
      if (this._model == null) {
        return 0;
      }
      return this._model.canvasinfo.CanvasWidth / this._model.canvasinfo.PixelsPerUnit;
    }
    getCanvasHeight() {
      if (this._model == null) {
        return 0;
      }
      return this._model.canvasinfo.CanvasHeight / this._model.canvasinfo.PixelsPerUnit;
    }
    saveParameters() {
      const parameterCount = this._model.parameters.count;
      const savedParameterCount = this._savedParameters.length;
      for (let i = 0; i < parameterCount; ++i) {
        if (i < savedParameterCount) {
          this._savedParameters[i] = this._parameterValues[i];
        } else {
          this._savedParameters.push(this._parameterValues[i]);
        }
      }
    }
    getModel() {
      return this._model;
    }
    getPartIndex(partId) {
      let partIndex;
      const partCount = this._model.parts.count;
      for (partIndex = 0; partIndex < partCount; ++partIndex) {
        if (partId == this._partIds[partIndex]) {
          return partIndex;
        }
      }
      if (partId in this._notExistPartId) {
        return this._notExistPartId[partId];
      }
      partIndex = partCount + this._notExistPartId.length;
      this._notExistPartId[partId] = partIndex;
      this._notExistPartOpacities[partIndex] = 0;
      return partIndex;
    }
    getPartCount() {
      return this._model.parts.count;
    }
    setPartOpacityByIndex(partIndex, opacity) {
      if (partIndex in this._notExistPartOpacities) {
        this._notExistPartOpacities[partIndex] = opacity;
        return;
      }
      CSM_ASSERT(0 <= partIndex && partIndex < this.getPartCount());
      this._partOpacities[partIndex] = opacity;
    }
    setPartOpacityById(partId, opacity) {
      const index = this.getPartIndex(partId);
      if (index < 0) {
        return;
      }
      this.setPartOpacityByIndex(index, opacity);
    }
    getPartOpacityByIndex(partIndex) {
      if (partIndex in this._notExistPartOpacities) {
        return this._notExistPartOpacities[partIndex];
      }
      CSM_ASSERT(0 <= partIndex && partIndex < this.getPartCount());
      return this._partOpacities[partIndex];
    }
    getPartOpacityById(partId) {
      const index = this.getPartIndex(partId);
      if (index < 0) {
        return 0;
      }
      return this.getPartOpacityByIndex(index);
    }
    getParameterIndex(parameterId) {
      let parameterIndex;
      const idCount = this._model.parameters.count;
      for (parameterIndex = 0; parameterIndex < idCount; ++parameterIndex) {
        if (parameterId != this._parameterIds[parameterIndex]) {
          continue;
        }
        return parameterIndex;
      }
      if (parameterId in this._notExistParameterId) {
        return this._notExistParameterId[parameterId];
      }
      parameterIndex = this._model.parameters.count + Object.keys(this._notExistParameterId).length;
      this._notExistParameterId[parameterId] = parameterIndex;
      this._notExistParameterValues[parameterIndex] = 0;
      return parameterIndex;
    }
    getParameterCount() {
      return this._model.parameters.count;
    }
    getParameterMaximumValue(parameterIndex) {
      return this._model.parameters.maximumValues[parameterIndex];
    }
    getParameterMinimumValue(parameterIndex) {
      return this._model.parameters.minimumValues[parameterIndex];
    }
    getParameterDefaultValue(parameterIndex) {
      return this._model.parameters.defaultValues[parameterIndex];
    }
    getParameterValueByIndex(parameterIndex) {
      if (parameterIndex in this._notExistParameterValues) {
        return this._notExistParameterValues[parameterIndex];
      }
      CSM_ASSERT(0 <= parameterIndex && parameterIndex < this.getParameterCount());
      return this._parameterValues[parameterIndex];
    }
    getParameterValueById(parameterId) {
      const parameterIndex = this.getParameterIndex(parameterId);
      return this.getParameterValueByIndex(parameterIndex);
    }
    setParameterValueByIndex(parameterIndex, value, weight = 1) {
      if (parameterIndex in this._notExistParameterValues) {
        this._notExistParameterValues[parameterIndex] = weight == 1 ? value : this._notExistParameterValues[parameterIndex] * (1 - weight) + value * weight;
        return;
      }
      CSM_ASSERT(0 <= parameterIndex && parameterIndex < this.getParameterCount());
      if (this._model.parameters.maximumValues[parameterIndex] < value) {
        value = this._model.parameters.maximumValues[parameterIndex];
      }
      if (this._model.parameters.minimumValues[parameterIndex] > value) {
        value = this._model.parameters.minimumValues[parameterIndex];
      }
      this._parameterValues[parameterIndex] = weight == 1 ? value : this._parameterValues[parameterIndex] = this._parameterValues[parameterIndex] * (1 - weight) + value * weight;
    }
    setParameterValueById(parameterId, value, weight = 1) {
      const index = this.getParameterIndex(parameterId);
      this.setParameterValueByIndex(index, value, weight);
    }
    addParameterValueByIndex(parameterIndex, value, weight = 1) {
      this.setParameterValueByIndex(parameterIndex, this.getParameterValueByIndex(parameterIndex) + value * weight);
    }
    addParameterValueById(parameterId, value, weight = 1) {
      const index = this.getParameterIndex(parameterId);
      this.addParameterValueByIndex(index, value, weight);
    }
    multiplyParameterValueById(parameterId, value, weight = 1) {
      const index = this.getParameterIndex(parameterId);
      this.multiplyParameterValueByIndex(index, value, weight);
    }
    multiplyParameterValueByIndex(parameterIndex, value, weight = 1) {
      this.setParameterValueByIndex(parameterIndex, this.getParameterValueByIndex(parameterIndex) * (1 + (value - 1) * weight));
    }
    getDrawableIds() {
      return this._drawableIds.slice();
    }
    getDrawableIndex(drawableId) {
      const drawableCount = this._model.drawables.count;
      for (let drawableIndex = 0; drawableIndex < drawableCount; ++drawableIndex) {
        if (this._drawableIds[drawableIndex] == drawableId) {
          return drawableIndex;
        }
      }
      return -1;
    }
    getDrawableCount() {
      return this._model.drawables.count;
    }
    getDrawableId(drawableIndex) {
      return this._model.drawables.ids[drawableIndex];
    }
    getDrawableRenderOrders() {
      return this._model.drawables.renderOrders;
    }
    getDrawableTextureIndices(drawableIndex) {
      return this._model.drawables.textureIndices[drawableIndex];
    }
    getDrawableDynamicFlagVertexPositionsDidChange(drawableIndex) {
      const dynamicFlags = this._model.drawables.dynamicFlags;
      return Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(dynamicFlags[drawableIndex]);
    }
    getDrawableVertexIndexCount(drawableIndex) {
      return this._model.drawables.indexCounts[drawableIndex];
    }
    getDrawableVertexCount(drawableIndex) {
      return this._model.drawables.vertexCounts[drawableIndex];
    }
    getDrawableVertices(drawableIndex) {
      return this.getDrawableVertexPositions(drawableIndex);
    }
    getDrawableVertexIndices(drawableIndex) {
      return this._model.drawables.indices[drawableIndex];
    }
    getDrawableVertexPositions(drawableIndex) {
      return this._model.drawables.vertexPositions[drawableIndex];
    }
    getDrawableVertexUvs(drawableIndex) {
      return this._model.drawables.vertexUvs[drawableIndex];
    }
    getDrawableOpacity(drawableIndex) {
      return this._model.drawables.opacities[drawableIndex];
    }
    getDrawableCulling(drawableIndex) {
      const constantFlags = this._model.drawables.constantFlags;
      return !Live2DCubismCore.Utils.hasIsDoubleSidedBit(constantFlags[drawableIndex]);
    }
    getDrawableBlendMode(drawableIndex) {
      const constantFlags = this._model.drawables.constantFlags;
      return Live2DCubismCore.Utils.hasBlendAdditiveBit(constantFlags[drawableIndex]) ? CubismBlendMode.CubismBlendMode_Additive : Live2DCubismCore.Utils.hasBlendMultiplicativeBit(constantFlags[drawableIndex]) ? CubismBlendMode.CubismBlendMode_Multiplicative : CubismBlendMode.CubismBlendMode_Normal;
    }
    getDrawableInvertedMaskBit(drawableIndex) {
      const constantFlags = this._model.drawables.constantFlags;
      return Live2DCubismCore.Utils.hasIsInvertedMaskBit(constantFlags[drawableIndex]);
    }
    getDrawableMasks() {
      return this._model.drawables.masks;
    }
    getDrawableMaskCounts() {
      return this._model.drawables.maskCounts;
    }
    isUsingMasking() {
      for (let d = 0; d < this._model.drawables.count; ++d) {
        if (this._model.drawables.maskCounts[d] <= 0) {
          continue;
        }
        return true;
      }
      return false;
    }
    getDrawableDynamicFlagIsVisible(drawableIndex) {
      const dynamicFlags = this._model.drawables.dynamicFlags;
      return Live2DCubismCore.Utils.hasIsVisibleBit(dynamicFlags[drawableIndex]);
    }
    getDrawableDynamicFlagVisibilityDidChange(drawableIndex) {
      const dynamicFlags = this._model.drawables.dynamicFlags;
      return Live2DCubismCore.Utils.hasVisibilityDidChangeBit(dynamicFlags[drawableIndex]);
    }
    getDrawableDynamicFlagOpacityDidChange(drawableIndex) {
      const dynamicFlags = this._model.drawables.dynamicFlags;
      return Live2DCubismCore.Utils.hasOpacityDidChangeBit(dynamicFlags[drawableIndex]);
    }
    getDrawableDynamicFlagRenderOrderDidChange(drawableIndex) {
      const dynamicFlags = this._model.drawables.dynamicFlags;
      return Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(dynamicFlags[drawableIndex]);
    }
    loadParameters() {
      let parameterCount = this._model.parameters.count;
      const savedParameterCount = this._savedParameters.length;
      if (parameterCount > savedParameterCount) {
        parameterCount = savedParameterCount;
      }
      for (let i = 0; i < parameterCount; ++i) {
        this._parameterValues[i] = this._savedParameters[i];
      }
    }
    initialize() {
      this._parameterValues = this._model.parameters.values;
      this._partOpacities = this._model.parts.opacities;
      this._parameterMaximumValues = this._model.parameters.maximumValues;
      this._parameterMinimumValues = this._model.parameters.minimumValues;
      {
        const parameterIds = this._model.parameters.ids;
        const parameterCount = this._model.parameters.count;
        for (let i = 0; i < parameterCount; ++i) {
          this._parameterIds.push(parameterIds[i]);
        }
      }
      {
        const partIds = this._model.parts.ids;
        const partCount = this._model.parts.count;
        for (let i = 0; i < partCount; ++i) {
          this._partIds.push(partIds[i]);
        }
      }
      {
        const drawableIds = this._model.drawables.ids;
        const drawableCount = this._model.drawables.count;
        for (let i = 0; i < drawableCount; ++i) {
          this._drawableIds.push(drawableIds[i]);
        }
      }
    }
    constructor(model) {
      this._model = model;
      this._savedParameters = [];
      this._parameterIds = [];
      this._drawableIds = [];
      this._partIds = [];
      this._notExistPartId = {};
      this._notExistParameterId = {};
      this._notExistParameterValues = {};
      this._notExistPartOpacities = {};
      this.initialize();
    }
    release() {
      this._model.release();
      this._model = void 0;
    }
  }
  class CubismMoc {
    static create(mocBytes) {
      const moc = Live2DCubismCore.Moc.fromArrayBuffer(mocBytes);
      if (moc) {
        return new CubismMoc(moc);
      }
      throw new Error("Unknown error");
    }
    createModel() {
      let cubismModel;
      const model = Live2DCubismCore.Model.fromMoc(this._moc);
      if (model) {
        cubismModel = new CubismModel(model);
        ++this._modelCount;
        return cubismModel;
      }
      throw new Error("Unknown error");
    }
    deleteModel(model) {
      if (model != null) {
        --this._modelCount;
      }
    }
    constructor(moc) {
      this._moc = moc;
      this._modelCount = 0;
    }
    release() {
      this._moc._release();
      this._moc = void 0;
    }
  }
  var CubismPhysicsTargetType = /* @__PURE__ */ ((CubismPhysicsTargetType2) => {
    CubismPhysicsTargetType2[CubismPhysicsTargetType2["CubismPhysicsTargetType_Parameter"] = 0] = "CubismPhysicsTargetType_Parameter";
    return CubismPhysicsTargetType2;
  })(CubismPhysicsTargetType || {});
  var CubismPhysicsSource = /* @__PURE__ */ ((CubismPhysicsSource2) => {
    CubismPhysicsSource2[CubismPhysicsSource2["CubismPhysicsSource_X"] = 0] = "CubismPhysicsSource_X";
    CubismPhysicsSource2[CubismPhysicsSource2["CubismPhysicsSource_Y"] = 1] = "CubismPhysicsSource_Y";
    CubismPhysicsSource2[CubismPhysicsSource2["CubismPhysicsSource_Angle"] = 2] = "CubismPhysicsSource_Angle";
    return CubismPhysicsSource2;
  })(CubismPhysicsSource || {});
  class CubismPhysicsParticle {
    constructor() {
      this.initialPosition = new CubismVector2(0, 0);
      this.position = new CubismVector2(0, 0);
      this.lastPosition = new CubismVector2(0, 0);
      this.lastGravity = new CubismVector2(0, 0);
      this.force = new CubismVector2(0, 0);
      this.velocity = new CubismVector2(0, 0);
    }
  }
  class CubismPhysicsSubRig {
    constructor() {
      this.normalizationPosition = {};
      this.normalizationAngle = {};
    }
  }
  class CubismPhysicsInput {
    constructor() {
      this.source = {};
    }
  }
  class CubismPhysicsOutput {
    constructor() {
      this.destination = {};
      this.translationScale = new CubismVector2(0, 0);
    }
  }
  class CubismPhysicsRig {
    constructor() {
      this.settings = [];
      this.inputs = [];
      this.outputs = [];
      this.particles = [];
      this.gravity = new CubismVector2(0, 0);
      this.wind = new CubismVector2(0, 0);
    }
  }
  class CubismPhysicsJson {
    constructor(json) {
      this._json = json;
    }
    release() {
      this._json = void 0;
    }
    getGravity() {
      const ret = new CubismVector2(0, 0);
      ret.x = this._json.Meta.EffectiveForces.Gravity.X;
      ret.y = this._json.Meta.EffectiveForces.Gravity.Y;
      return ret;
    }
    getWind() {
      const ret = new CubismVector2(0, 0);
      ret.x = this._json.Meta.EffectiveForces.Wind.X;
      ret.y = this._json.Meta.EffectiveForces.Wind.Y;
      return ret;
    }
    getSubRigCount() {
      return this._json.Meta.PhysicsSettingCount;
    }
    getTotalInputCount() {
      return this._json.Meta.TotalInputCount;
    }
    getTotalOutputCount() {
      return this._json.Meta.TotalOutputCount;
    }
    getVertexCount() {
      return this._json.Meta.VertexCount;
    }
    getNormalizationPositionMinimumValue(physicsSettingIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Normalization.Position.Minimum;
    }
    getNormalizationPositionMaximumValue(physicsSettingIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Normalization.Position.Maximum;
    }
    getNormalizationPositionDefaultValue(physicsSettingIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Normalization.Position.Default;
    }
    getNormalizationAngleMinimumValue(physicsSettingIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Normalization.Angle.Minimum;
    }
    getNormalizationAngleMaximumValue(physicsSettingIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Normalization.Angle.Maximum;
    }
    getNormalizationAngleDefaultValue(physicsSettingIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Normalization.Angle.Default;
    }
    getInputCount(physicsSettingIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Input.length;
    }
    getInputWeight(physicsSettingIndex, inputIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Input[inputIndex].Weight;
    }
    getInputReflect(physicsSettingIndex, inputIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Input[inputIndex].Reflect;
    }
    getInputType(physicsSettingIndex, inputIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Input[inputIndex].Type;
    }
    getInputSourceId(physicsSettingIndex, inputIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Input[inputIndex].Source.Id;
    }
    getOutputCount(physicsSettingIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Output.length;
    }
    getOutputVertexIndex(physicsSettingIndex, outputIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Output[outputIndex].VertexIndex;
    }
    getOutputAngleScale(physicsSettingIndex, outputIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Output[outputIndex].Scale;
    }
    getOutputWeight(physicsSettingIndex, outputIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Output[outputIndex].Weight;
    }
    getOutputDestinationId(physicsSettingIndex, outputIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Output[outputIndex].Destination.Id;
    }
    getOutputType(physicsSettingIndex, outputIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Output[outputIndex].Type;
    }
    getOutputReflect(physicsSettingIndex, outputIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Output[outputIndex].Reflect;
    }
    getParticleCount(physicsSettingIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Vertices.length;
    }
    getParticleMobility(physicsSettingIndex, vertexIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Vertices[vertexIndex].Mobility;
    }
    getParticleDelay(physicsSettingIndex, vertexIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Vertices[vertexIndex].Delay;
    }
    getParticleAcceleration(physicsSettingIndex, vertexIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Vertices[vertexIndex].Acceleration;
    }
    getParticleRadius(physicsSettingIndex, vertexIndex) {
      return this._json.PhysicsSettings[physicsSettingIndex].Vertices[vertexIndex].Radius;
    }
    getParticlePosition(physicsSettingIndex, vertexIndex) {
      const ret = new CubismVector2(0, 0);
      ret.x = this._json.PhysicsSettings[physicsSettingIndex].Vertices[vertexIndex].Position.X;
      ret.y = this._json.PhysicsSettings[physicsSettingIndex].Vertices[vertexIndex].Position.Y;
      return ret;
    }
  }
  const PhysicsTypeTagX = "X";
  const PhysicsTypeTagY = "Y";
  const PhysicsTypeTagAngle = "Angle";
  const AirResistance = 5;
  const MaximumWeight = 100;
  const MovementThreshold = 1e-3;
  class CubismPhysics {
    static create(json) {
      const ret = new CubismPhysics();
      ret.parse(json);
      ret._physicsRig.gravity.y = 0;
      return ret;
    }
    evaluate(model, deltaTimeSeconds) {
      let totalAngle;
      let weight;
      let radAngle;
      let outputValue;
      const totalTranslation = new CubismVector2();
      let currentSetting;
      let currentInput;
      let currentOutput;
      let currentParticles;
      let parameterValue;
      let parameterMaximumValue;
      let parameterMinimumValue;
      let parameterDefaultValue;
      parameterValue = model.getModel().parameters.values;
      parameterMaximumValue = model.getModel().parameters.maximumValues;
      parameterMinimumValue = model.getModel().parameters.minimumValues;
      parameterDefaultValue = model.getModel().parameters.defaultValues;
      for (let settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex) {
        totalAngle = { angle: 0 };
        totalTranslation.x = 0;
        totalTranslation.y = 0;
        currentSetting = this._physicsRig.settings[settingIndex];
        currentInput = this._physicsRig.inputs.slice(currentSetting.baseInputIndex);
        currentOutput = this._physicsRig.outputs.slice(currentSetting.baseOutputIndex);
        currentParticles = this._physicsRig.particles.slice(currentSetting.baseParticleIndex);
        for (let i = 0; i < currentSetting.inputCount; ++i) {
          weight = currentInput[i].weight / MaximumWeight;
          if (currentInput[i].sourceParameterIndex == -1) {
            currentInput[i].sourceParameterIndex = model.getParameterIndex(currentInput[i].source.id);
          }
          currentInput[i].getNormalizedParameterValue(totalTranslation, totalAngle, parameterValue[currentInput[i].sourceParameterIndex], parameterMinimumValue[currentInput[i].sourceParameterIndex], parameterMaximumValue[currentInput[i].sourceParameterIndex], parameterDefaultValue[currentInput[i].sourceParameterIndex], currentSetting.normalizationPosition, currentSetting.normalizationAngle, currentInput[i].reflect, weight);
        }
        radAngle = CubismMath.degreesToRadian(-totalAngle.angle);
        totalTranslation.x = totalTranslation.x * CubismMath.cos(radAngle) - totalTranslation.y * CubismMath.sin(radAngle);
        totalTranslation.y = totalTranslation.x * CubismMath.sin(radAngle) + totalTranslation.y * CubismMath.cos(radAngle);
        updateParticles(currentParticles, currentSetting.particleCount, totalTranslation, totalAngle.angle, this._options.wind, MovementThreshold * currentSetting.normalizationPosition.maximum, deltaTimeSeconds, AirResistance);
        for (let i = 0; i < currentSetting.outputCount; ++i) {
          const particleIndex = currentOutput[i].vertexIndex;
          if (particleIndex < 1 || particleIndex >= currentSetting.particleCount) {
            break;
          }
          if (currentOutput[i].destinationParameterIndex == -1) {
            currentOutput[i].destinationParameterIndex = model.getParameterIndex(currentOutput[i].destination.id);
          }
          const translation = new CubismVector2();
          translation.x = currentParticles[particleIndex].position.x - currentParticles[particleIndex - 1].position.x;
          translation.y = currentParticles[particleIndex].position.y - currentParticles[particleIndex - 1].position.y;
          outputValue = currentOutput[i].getValue(translation, currentParticles, particleIndex, currentOutput[i].reflect, this._options.gravity);
          const destinationParameterIndex = currentOutput[i].destinationParameterIndex;
          const outParameterValue = !Float32Array.prototype.slice && "subarray" in Float32Array.prototype ? JSON.parse(JSON.stringify(parameterValue.subarray(destinationParameterIndex))) : parameterValue.slice(destinationParameterIndex);
          updateOutputParameterValue(outParameterValue, parameterMinimumValue[destinationParameterIndex], parameterMaximumValue[destinationParameterIndex], outputValue, currentOutput[i]);
          for (let offset = destinationParameterIndex, outParamIndex = 0; offset < parameterValue.length; offset++, outParamIndex++) {
            parameterValue[offset] = outParameterValue[outParamIndex];
          }
        }
      }
    }
    setOptions(options) {
      this._options = options;
    }
    getOption() {
      return this._options;
    }
    constructor() {
      this._options = new Options();
      this._options.gravity.y = -1;
      this._options.gravity.x = 0;
      this._options.wind.x = 0;
      this._options.wind.y = 0;
    }
    release() {
      this._physicsRig = void 0;
    }
    parse(physicsJson) {
      this._physicsRig = new CubismPhysicsRig();
      let json = new CubismPhysicsJson(physicsJson);
      this._physicsRig.gravity = json.getGravity();
      this._physicsRig.wind = json.getWind();
      this._physicsRig.subRigCount = json.getSubRigCount();
      let inputIndex = 0, outputIndex = 0, particleIndex = 0;
      for (let i = 0; i < this._physicsRig.subRigCount; ++i) {
        const setting = new CubismPhysicsSubRig();
        setting.normalizationPosition.minimum = json.getNormalizationPositionMinimumValue(i);
        setting.normalizationPosition.maximum = json.getNormalizationPositionMaximumValue(i);
        setting.normalizationPosition.defalut = json.getNormalizationPositionDefaultValue(i);
        setting.normalizationAngle.minimum = json.getNormalizationAngleMinimumValue(i);
        setting.normalizationAngle.maximum = json.getNormalizationAngleMaximumValue(i);
        setting.normalizationAngle.defalut = json.getNormalizationAngleDefaultValue(i);
        setting.inputCount = json.getInputCount(i);
        setting.baseInputIndex = inputIndex;
        inputIndex += setting.inputCount;
        for (let j = 0; j < setting.inputCount; ++j) {
          const input = new CubismPhysicsInput();
          input.sourceParameterIndex = -1;
          input.weight = json.getInputWeight(i, j);
          input.reflect = json.getInputReflect(i, j);
          switch (json.getInputType(i, j)) {
            case PhysicsTypeTagX:
              input.type = CubismPhysicsSource.CubismPhysicsSource_X;
              input.getNormalizedParameterValue = getInputTranslationXFromNormalizedParameterValue;
              break;
            case PhysicsTypeTagY:
              input.type = CubismPhysicsSource.CubismPhysicsSource_Y;
              input.getNormalizedParameterValue = getInputTranslationYFromNormalizedParamterValue;
              break;
            case PhysicsTypeTagAngle:
              input.type = CubismPhysicsSource.CubismPhysicsSource_Angle;
              input.getNormalizedParameterValue = getInputAngleFromNormalizedParameterValue;
              break;
          }
          input.source.targetType = CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter;
          input.source.id = json.getInputSourceId(i, j);
          this._physicsRig.inputs.push(input);
        }
        setting.outputCount = json.getOutputCount(i);
        setting.baseOutputIndex = outputIndex;
        outputIndex += setting.outputCount;
        for (let j = 0; j < setting.outputCount; ++j) {
          const output = new CubismPhysicsOutput();
          output.destinationParameterIndex = -1;
          output.vertexIndex = json.getOutputVertexIndex(i, j);
          output.angleScale = json.getOutputAngleScale(i, j);
          output.weight = json.getOutputWeight(i, j);
          output.destination.targetType = CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter;
          output.destination.id = json.getOutputDestinationId(i, j);
          switch (json.getOutputType(i, j)) {
            case PhysicsTypeTagX:
              output.type = CubismPhysicsSource.CubismPhysicsSource_X;
              output.getValue = getOutputTranslationX;
              output.getScale = getOutputScaleTranslationX;
              break;
            case PhysicsTypeTagY:
              output.type = CubismPhysicsSource.CubismPhysicsSource_Y;
              output.getValue = getOutputTranslationY;
              output.getScale = getOutputScaleTranslationY;
              break;
            case PhysicsTypeTagAngle:
              output.type = CubismPhysicsSource.CubismPhysicsSource_Angle;
              output.getValue = getOutputAngle;
              output.getScale = getOutputScaleAngle;
              break;
          }
          output.reflect = json.getOutputReflect(i, j);
          this._physicsRig.outputs.push(output);
        }
        setting.particleCount = json.getParticleCount(i);
        setting.baseParticleIndex = particleIndex;
        particleIndex += setting.particleCount;
        for (let j = 0; j < setting.particleCount; ++j) {
          const particle = new CubismPhysicsParticle();
          particle.mobility = json.getParticleMobility(i, j);
          particle.delay = json.getParticleDelay(i, j);
          particle.acceleration = json.getParticleAcceleration(i, j);
          particle.radius = json.getParticleRadius(i, j);
          particle.position = json.getParticlePosition(i, j);
          this._physicsRig.particles.push(particle);
        }
        this._physicsRig.settings.push(setting);
      }
      this.initialize();
      json.release();
    }
    initialize() {
      let strand;
      let currentSetting;
      let radius;
      for (let settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex) {
        currentSetting = this._physicsRig.settings[settingIndex];
        strand = this._physicsRig.particles.slice(currentSetting.baseParticleIndex);
        strand[0].initialPosition = new CubismVector2(0, 0);
        strand[0].lastPosition = new CubismVector2(strand[0].initialPosition.x, strand[0].initialPosition.y);
        strand[0].lastGravity = new CubismVector2(0, -1);
        strand[0].lastGravity.y *= -1;
        strand[0].velocity = new CubismVector2(0, 0);
        strand[0].force = new CubismVector2(0, 0);
        for (let i = 1; i < currentSetting.particleCount; ++i) {
          radius = new CubismVector2(0, 0);
          radius.y = strand[i].radius;
          strand[i].initialPosition = new CubismVector2(strand[i - 1].initialPosition.x + radius.x, strand[i - 1].initialPosition.y + radius.y);
          strand[i].position = new CubismVector2(strand[i].initialPosition.x, strand[i].initialPosition.y);
          strand[i].lastPosition = new CubismVector2(strand[i].initialPosition.x, strand[i].initialPosition.y);
          strand[i].lastGravity = new CubismVector2(0, -1);
          strand[i].lastGravity.y *= -1;
          strand[i].velocity = new CubismVector2(0, 0);
          strand[i].force = new CubismVector2(0, 0);
        }
      }
    }
  }
  class Options {
    constructor() {
      this.gravity = new CubismVector2(0, 0);
      this.wind = new CubismVector2(0, 0);
    }
  }
  function getInputTranslationXFromNormalizedParameterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition, normalizationAngle, isInverted, weight) {
    targetTranslation.x += normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition.minimum, normalizationPosition.maximum, normalizationPosition.defalut, isInverted) * weight;
  }
  function getInputTranslationYFromNormalizedParamterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition, normalizationAngle, isInverted, weight) {
    targetTranslation.y += normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition.minimum, normalizationPosition.maximum, normalizationPosition.defalut, isInverted) * weight;
  }
  function getInputAngleFromNormalizedParameterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizaitionPosition, normalizationAngle, isInverted, weight) {
    targetAngle.angle += normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationAngle.minimum, normalizationAngle.maximum, normalizationAngle.defalut, isInverted) * weight;
  }
  function getOutputTranslationX(translation, particles, particleIndex, isInverted, parentGravity) {
    let outputValue = translation.x;
    if (isInverted) {
      outputValue *= -1;
    }
    return outputValue;
  }
  function getOutputTranslationY(translation, particles, particleIndex, isInverted, parentGravity) {
    let outputValue = translation.y;
    if (isInverted) {
      outputValue *= -1;
    }
    return outputValue;
  }
  function getOutputAngle(translation, particles, particleIndex, isInverted, parentGravity) {
    let outputValue;
    if (particleIndex >= 2) {
      parentGravity = particles[particleIndex - 1].position.substract(particles[particleIndex - 2].position);
    } else {
      parentGravity = parentGravity.multiplyByScaler(-1);
    }
    outputValue = CubismMath.directionToRadian(parentGravity, translation);
    if (isInverted) {
      outputValue *= -1;
    }
    return outputValue;
  }
  function getRangeValue(min, max) {
    return Math.abs(Math.max(min, max) - Math.min(min, max));
  }
  function getDefaultValue(min, max) {
    const minValue = Math.min(min, max);
    return minValue + getRangeValue(min, max) / 2;
  }
  function getOutputScaleTranslationX(translationScale, angleScale) {
    return translationScale.x;
  }
  function getOutputScaleTranslationY(translationScale, angleScale) {
    return translationScale.y;
  }
  function getOutputScaleAngle(translationScale, angleScale) {
    return angleScale;
  }
  function updateParticles(strand, strandCount, totalTranslation, totalAngle, windDirection, thresholdValue, deltaTimeSeconds, airResistance) {
    let totalRadian;
    let delay;
    let radian;
    let currentGravity;
    let direction = new CubismVector2(0, 0);
    let velocity = new CubismVector2(0, 0);
    let force = new CubismVector2(0, 0);
    let newDirection = new CubismVector2(0, 0);
    strand[0].position = new CubismVector2(totalTranslation.x, totalTranslation.y);
    totalRadian = CubismMath.degreesToRadian(totalAngle);
    currentGravity = CubismMath.radianToDirection(totalRadian);
    currentGravity.normalize();
    for (let i = 1; i < strandCount; ++i) {
      strand[i].force = currentGravity.multiplyByScaler(strand[i].acceleration).add(windDirection);
      strand[i].lastPosition = new CubismVector2(strand[i].position.x, strand[i].position.y);
      delay = strand[i].delay * deltaTimeSeconds * 30;
      direction = strand[i].position.substract(strand[i - 1].position);
      radian = CubismMath.directionToRadian(strand[i].lastGravity, currentGravity) / airResistance;
      direction.x = CubismMath.cos(radian) * direction.x - direction.y * CubismMath.sin(radian);
      direction.y = CubismMath.sin(radian) * direction.x + direction.y * CubismMath.cos(radian);
      strand[i].position = strand[i - 1].position.add(direction);
      velocity = strand[i].velocity.multiplyByScaler(delay);
      force = strand[i].force.multiplyByScaler(delay).multiplyByScaler(delay);
      strand[i].position = strand[i].position.add(velocity).add(force);
      newDirection = strand[i].position.substract(strand[i - 1].position);
      newDirection.normalize();
      strand[i].position = strand[i - 1].position.add(newDirection.multiplyByScaler(strand[i].radius));
      if (CubismMath.abs(strand[i].position.x) < thresholdValue) {
        strand[i].position.x = 0;
      }
      if (delay != 0) {
        strand[i].velocity = strand[i].position.substract(strand[i].lastPosition);
        strand[i].velocity = strand[i].velocity.divisionByScalar(delay);
        strand[i].velocity = strand[i].velocity.multiplyByScaler(strand[i].mobility);
      }
      strand[i].force = new CubismVector2(0, 0);
      strand[i].lastGravity = new CubismVector2(currentGravity.x, currentGravity.y);
    }
  }
  function updateOutputParameterValue(parameterValue, parameterValueMinimum, parameterValueMaximum, translation, output) {
    let outputScale;
    let value;
    let weight;
    outputScale = output.getScale(output.translationScale, output.angleScale);
    value = translation * outputScale;
    if (value < parameterValueMinimum) {
      if (value < output.valueBelowMinimum) {
        output.valueBelowMinimum = value;
      }
      value = parameterValueMinimum;
    } else if (value > parameterValueMaximum) {
      if (value > output.valueExceededMaximum) {
        output.valueExceededMaximum = value;
      }
      value = parameterValueMaximum;
    }
    weight = output.weight / MaximumWeight;
    if (weight >= 1) {
      parameterValue[0] = value;
    } else {
      value = parameterValue[0] * (1 - weight) + value * weight;
      parameterValue[0] = value;
    }
  }
  function normalizeParameterValue(value, parameterMinimum, parameterMaximum, parameterDefault, normalizedMinimum, normalizedMaximum, normalizedDefault, isInverted) {
    let result = 0;
    const maxValue = CubismMath.max(parameterMaximum, parameterMinimum);
    if (maxValue < value) {
      value = maxValue;
    }
    const minValue = CubismMath.min(parameterMaximum, parameterMinimum);
    if (minValue > value) {
      value = minValue;
    }
    const minNormValue = CubismMath.min(normalizedMinimum, normalizedMaximum);
    const maxNormValue = CubismMath.max(normalizedMinimum, normalizedMaximum);
    const middleNormValue = normalizedDefault;
    const middleValue = getDefaultValue(minValue, maxValue);
    const paramValue = value - middleValue;
    switch (Math.sign(paramValue)) {
      case 1: {
        const nLength = maxNormValue - middleNormValue;
        const pLength = maxValue - middleValue;
        if (pLength != 0) {
          result = paramValue * (nLength / pLength);
          result += middleNormValue;
        }
        break;
      }
      case -1: {
        const nLength = minNormValue - middleNormValue;
        const pLength = minValue - middleValue;
        if (pLength != 0) {
          result = paramValue * (nLength / pLength);
          result += middleNormValue;
        }
        break;
      }
      case 0: {
        result = middleNormValue;
        break;
      }
    }
    return isInverted ? result : result * -1;
  }
  Live2DFactory.registerRuntime({
    version: 4,
    ready: cubism4Ready,
    test(source) {
      return source instanceof Cubism4ModelSettings || Cubism4ModelSettings.isValidJSON(source);
    },
    isValidMoc(modelData) {
      if (modelData.byteLength < 4) {
        return false;
      }
      const view = new Int8Array(modelData, 0, 4);
      return String.fromCharCode(...view) === "MOC3";
    },
    createModelSettings(json) {
      return new Cubism4ModelSettings(json);
    },
    createCoreModel(data) {
      const moc = CubismMoc.create(data);
      try {
        const model = moc.createModel();
        model.__moc = moc;
        return model;
      } catch (e) {
        try {
          moc.release();
        } catch (ignored) {
        }
        throw e;
      }
    },
    createInternalModel(coreModel, settings, options) {
      const model = new Cubism4InternalModel(coreModel, settings, options);
      const coreModelWithMoc = coreModel;
      if (coreModelWithMoc.__moc) {
        model.__moc = coreModelWithMoc.__moc;
        delete coreModelWithMoc.__moc;
        model.once("destroy", releaseMoc);
      }
      return model;
    },
    createPhysics(coreModel, data) {
      return CubismPhysics.create(data);
    },
    createPose(coreModel, data) {
      return CubismPose.create(data);
    }
  });
  function releaseMoc() {
    var _a;
    (_a = this.__moc) == null ? void 0 : _a.release();
  }

  // EventEmitter.dispatch('Live2DModelLoaded', Live2DModel);
  exports2.Cubism2ExpressionManager = Cubism2ExpressionManager;
  exports2.Cubism2InternalModel = Cubism2InternalModel;
  exports2.Cubism2ModelSettings = Cubism2ModelSettings;
  exports2.Cubism2MotionManager = Cubism2MotionManager;
  exports2.Cubism4ExpressionManager = Cubism4ExpressionManager;
  exports2.Cubism4InternalModel = Cubism4InternalModel;
  exports2.Cubism4ModelSettings = Cubism4ModelSettings;
  exports2.Cubism4MotionManager = Cubism4MotionManager;
  exports2.ExpressionManager = ExpressionManager;
  exports2.FileLoader = FileLoader;
  exports2.FocusController = FocusController;
  exports2.InteractionMixin = InteractionMixin;
  exports2.InternalModel = InternalModel;
  exports2.LOGICAL_HEIGHT = LOGICAL_HEIGHT;
  exports2.LOGICAL_WIDTH = LOGICAL_WIDTH;
  exports2.Live2DExpression = Live2DExpression;
  exports2.Live2DEyeBlink = Live2DEyeBlink;
  exports2.Live2DFactory = Live2DFactory;
  exports2.Live2DLoader = Live2DLoader;
  exports2.Live2DModel = Live2DModel;
  exports2.Live2DPhysics = Live2DPhysics;
  exports2.Live2DPose = Live2DPose;
  exports2.Live2DTransform = Live2DTransform;
  exports2.ModelSettings = ModelSettings;
  exports2.MotionManager = MotionManager;
  exports2.MotionPreloadStrategy = MotionPreloadStrategy;
  exports2.MotionPriority = MotionPriority;
  exports2.MotionState = MotionState;
  exports2.SoundManager = SoundManager;
  exports2.VERSION = VERSION;
  exports2.XHRLoader = XHRLoader;
  exports2.ZipLoader = ZipLoader;
  exports2.applyMixins = applyMixins;
  exports2.clamp = clamp;
  exports2.copyArray = copyArray;
  exports2.copyProperty = copyProperty;
  exports2.cubism4Ready = cubism4Ready;
  exports2.folderName = folderName;
  exports2.logger = logger;
  exports2.rand = rand;
  exports2.remove = remove;
  exports2.startUpCubism4 = startUpCubism4;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  window.exports2 = exports2
});
console.log(window);
// export {
  
// };