import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("js", js);
function Blog() {
  `  const example = function dışFonksiyon() {
    var dışDeğişken = 10;
  
    function içFonksiyon() {
      console.log(dışDeğişken);
    }
  
    return içFonksiyon;
  }
  
  var içFonksiyonSonucu = dışFonksiyon(); // dışFonksiyon, içFonksiyon'u döndürür
  içFonksiyonSonucu(); // Bu, içFonksiyonun dışDeğişken'e erişimini sağlar`;

  return (
    <div   
        className="w-2/3 h-full mx-auto my-10 flex-grow py-3 overflow-auto space-y-2"
      >
        <div className="space-y-6">
          <h1 className="text-3xl">Clouser Kavramı</h1>
          <p>
          
            JavaScript kavramlarına başlarken en önemli konulardan biri
            "closure" (kapanış) kavramıdır. Bir closure, JavaScript'te oldukça
            güçlü ve sık kullanılan bir özelliktir. Başlangıç seviyesinde bir
            açıklama ile başlayalım:
          </p>
          <h1 className="text-3xl font-extrabold"></h1>
          Closures (Kapanışlar) Nedir? Kapanışlar, bir iç içe fonksiyonun
          dıştaki fonksiyonun değişkenlerine ve kapsamına (scope) erişim
          sağlayabilmesi anlamına gelir. Bu, bir fonksiyonun başka bir
          fonksiyonun içinde tanımlanması ve iç fonksiyonun dış fonksiyonun
          değişkenlerine erişmesi ile gerçekleşir. <br /><br />
          Örnek:
          <SyntaxHighlighter language="javascript" style={dark}>
            {`  const example = function disFonksiyon() {
    var dısDegisken = 10;
  
    function icFonksiyon() {
      console.log(dısDegisken);
    }
  
    return icFonksiyon;
  }
  
  var icFonksiyonSonucu = dısFonksiyon(); // dısFonksiyon, icFonksiyon'u döndürür
  icFonksiyonSonucu(); // Bu, icFonksiyonun dısDegisken'e erişimini sağlar`}

           
          </SyntaxHighlighter>

          <p>
              Bu örnekte, içFonksiyon adında bir iç fonksiyon dışFonksiyon
              içinde tanımlanmıştır. İç fonksiyon, dış fonksiyonun kapsamına
              erişebilir ve dışDeğişken adlı değişkeni kullanabilir.
              dışFonksiyon sonuç olarak içFonksiyon'u döndürür ve sonrasında
              içFonksiyonSonucu çağrıldığında iç fonksiyon dışDeğişken'e
              erişebilir.
              <br /><br />
              Bu, bir veriyi başka bir fonksiyonun içinden saklama ve koruma
              amacıyla kullanışlıdır. Closures, olay dinleyicileri (event
              listeners), callback fonksiyonları ve özel veri gizleme gibi
              birçok JavaScript tasarım deseninde kullanılır.
            </p>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl">Clouser Kavramı</h1>
          <p>
          
            JavaScript kavramlarına başlarken en önemli konulardan biri
            "closure" (kapanış) kavramıdır. Bir closure, JavaScript'te oldukça
            güçlü ve sık kullanılan bir özelliktir. Başlangıç seviyesinde bir
            açıklama ile başlayalım:
          </p>
          <h1 className="text-3xl font-extrabold"></h1>
          Closures (Kapanışlar) Nedir? Kapanışlar, bir iç içe fonksiyonun
          dıştaki fonksiyonun değişkenlerine ve kapsamına (scope) erişim
          sağlayabilmesi anlamına gelir. Bu, bir fonksiyonun başka bir
          fonksiyonun içinde tanımlanması ve iç fonksiyonun dış fonksiyonun
          değişkenlerine erişmesi ile gerçekleşir. <br /><br />
          Örnek:
          <SyntaxHighlighter language="javascript" style={dark}>
            {`  const example = function disFonksiyon() {
    var dısDegisken = 10;
  
    function icFonksiyon() {
      console.log(dısDegisken);
    }
  
    return icFonksiyon;
  }
  
  var icFonksiyonSonucu = dısFonksiyon(); // dısFonksiyon, icFonksiyon'u döndürür
  icFonksiyonSonucu(); // Bu, icFonksiyonun dısDegisken'e erişimini sağlar`}

           
          </SyntaxHighlighter>

          <p>
              Bu örnekte, içFonksiyon adında bir iç fonksiyon dışFonksiyon
              içinde tanımlanmıştır. İç fonksiyon, dış fonksiyonun kapsamına
              erişebilir ve dışDeğişken adlı değişkeni kullanabilir.
              dışFonksiyon sonuç olarak içFonksiyon'u döndürür ve sonrasında
              içFonksiyonSonucu çağrıldığında iç fonksiyon dışDeğişken'e
              erişebilir.
              <br /><br />
              Bu, bir veriyi başka bir fonksiyonun içinden saklama ve koruma
              amacıyla kullanışlıdır. Closures, olay dinleyicileri (event
              listeners), callback fonksiyonları ve özel veri gizleme gibi
              birçok JavaScript tasarım deseninde kullanılır.
            </p>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl">Clouser Kavramı</h1>
          <p>
          
            JavaScript kavramlarına başlarken en önemli konulardan biri
            "closure" (kapanış) kavramıdır. Bir closure, JavaScript'te oldukça
            güçlü ve sık kullanılan bir özelliktir. Başlangıç seviyesinde bir
            açıklama ile başlayalım:
          </p>
          <h1 className="text-3xl font-extrabold"></h1>
          Closures (Kapanışlar) Nedir? Kapanışlar, bir iç içe fonksiyonun
          dıştaki fonksiyonun değişkenlerine ve kapsamına (scope) erişim
          sağlayabilmesi anlamına gelir. Bu, bir fonksiyonun başka bir
          fonksiyonun içinde tanımlanması ve iç fonksiyonun dış fonksiyonun
          değişkenlerine erişmesi ile gerçekleşir. <br /><br />
          Örnek:
          <SyntaxHighlighter language="javascript" style={dark}>
            {`  const example = function disFonksiyon() {
    var dısDegisken = 10;
  
    function icFonksiyon() {
      console.log(dısDegisken);
    }
  
    return icFonksiyon;
  }
  
  var icFonksiyonSonucu = dısFonksiyon(); // dısFonksiyon, icFonksiyon'u döndürür
  icFonksiyonSonucu(); // Bu, icFonksiyonun dısDegisken'e erişimini sağlar`}

           
          </SyntaxHighlighter>

          <p>
              Bu örnekte, içFonksiyon adında bir iç fonksiyon dışFonksiyon
              içinde tanımlanmıştır. İç fonksiyon, dış fonksiyonun kapsamına
              erişebilir ve dışDeğişken adlı değişkeni kullanabilir.
              dışFonksiyon sonuç olarak içFonksiyon'u döndürür ve sonrasında
              içFonksiyonSonucu çağrıldığında iç fonksiyon dışDeğişken'e
              erişebilir.
              <br /><br />
              Bu, bir veriyi başka bir fonksiyonun içinden saklama ve koruma
              amacıyla kullanışlıdır. Closures, olay dinleyicileri (event
              listeners), callback fonksiyonları ve özel veri gizleme gibi
              birçok JavaScript tasarım deseninde kullanılır.
            </p>
        </div>
      
    </div>
  );
}

export default Blog;
