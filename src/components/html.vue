<template>
<div>
    <div class="container">
        * 当margin-top、padding-top的值是百分比时，分别是如何计算的？ 相对最近父级块级元素的width，相对最近父级块级元素的width。<br/> 
        *    &lt;em>	把文本定义为强调的内容。<br/>
        *   &lt;strong>	把文本定义为语气更强的强调的内容。<br/>
        *   &lt;dfn>	定义一个定义项目。<br/>
        *   &lt;code>	定义计算机代码文本。<br/>
        *   &lt;samp>	定义样本文本。<br/>
        *   &lt;kbd>	定义键盘文本。它表示文本是从键盘上键入的。它经常用在与计算机相关的文档或手册中。<br/>
        *   &lt;var>	定义变量。您可以将此标签与 &lt;pre> 及 &lt;code> 标签配合使用。<br/>
        *   &lt;cite>	定义引用。可使用该标签对参考文献的引用进行定义，比如书籍或杂志的标题。<br/>
        <h1>h5新增元素</h1>
        *    &lt;datalist> 元素规定输入域的选项列表,通过&lt;option>创建。<br/>
        *    &lt;keygen> 元素的作用是提供一种验证用户的可靠方法,，密钥对生成器，私钥存于客户端，公钥发到服务器，用于之后验证客户端证书。 <br/>
        *    &lt;output> 元素用于不同类型的输出。<br/>
        *    &lt;q> 标签定义一个短的引用；<br/>
        *    &lt;ins> 标签定义文档的其余部分之外的插入文本；<br/>
        *    &lt;menu> 标签定义菜单列表。当希望列出表单控件时使用该标签（HTML4不支持该标签）
    </div>
</div>
</template>
<script>
import eventBus from "./eventBus.js";
export default {
  name: "htmlText",
  data() {
    return {
      tittle: "html面试题"
    };
  },
  mounted() {
    eventBus.$emit("tittle", this.tittle);
  }
};
</script>
<style scoped>
</style>