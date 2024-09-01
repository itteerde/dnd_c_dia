const fs = require('node:fs/promises');

const args = process.argv.slice(2, process.argv.length);

if (process.argv.find(a => a == "--debug")) {
    process.argv.forEach(function (val, index, array) {
        console.log({ index: index, value: val });
    });
}


let content = `\ntest`;
/*
if (args.find(a => a == "--overwrite")) {
    console.log("overwriteing LaTeX output");
    fs.writeFile('./latex/dia.tex', content, err => { });
} else {
    fs.appendFile('./latex/dia.tex', content, err => { });
}
*/

content = `
\\documentclass[a4paper, twoside, russian, ngerman]{book}%[a4paper,oneside] ngerman für "=
\\usepackage[pass]{geometry}%[hmarginratio=1:1]{geometry}
\\usepackage{makeidx}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{mathabx}
\\usepackage{csquotes}
\\usepackage{afterpage}
\\usepackage{xcolor}
\\usepackage{tikz}
\\usetikzlibrary{shapes,backgrounds,arrows,calc,positioning}
\\usetikzlibrary{calendar,fpu}

\\usepackage{ifthen}
\\usepackage{intcalc}

\\usepackage[citecolor=black,urlcolor=black,linkcolor=black,breaklinks=true]{hyperref}
\\hypersetup{
    colorlinks=true
}

\\usepackage[xindy={language=english,codepage=duden-utf8},
    nonumberlist,
    toc,
    nopostdot,
    style=altlist,
    nogroupskip
    ]{glossaries}
    \\GlsSetXdyCodePage{duden-utf8}
\\apptocmd{\\thebibliography}{\\raggedright}{}{}


\\usepackage{fontspec}
\\setromanfont{CMU Serif}
\\setsansfont{CMU Sans Serif}
\\setmonofont{CMU Typewriter Text}

\\newfontfamily\\japanesefont{NotoSerifKR-Regular.otf}[
    BoldFont = NotoSerifKR-Bold.otf ,
    ItalicFont = NotoSerifKR-ExtraLight.otf ,
    BoldItalicFont = NotoSerifKR-Black.otf
] %\\newfontfamily\\japanesefont{Noto Sans CJK KR}
\\newcommand\\textjapanese[1]{{\\japanesefont #1}}

\\newfontfamily\\chinesefont{Msyh.ttc}[
    BoldFont = Msyhbd.ttc ,
    ItalicFont = Msyhl.ttc ,
    BoldItalicFont = Msyhbd.ttc
]
\\newcommand\\textchinese[1]{{\\chinesefont #1}}

\\newfontfamily\\arabicfont[Script=Arabic]{NotoSansArabic-Regular.ttf}[
    BoldFont = NotoSansArabic-Bold.ttf ,
    ItalicFont = NotoSansArabic-Thin.ttf ,
    BoldItalicFont = NotoSansArabic-Black.ttf
]
\\newcommand\\textarabic[1]{{\\arabicfont #1}}

\\newfontfamily\\sanskritfont{Sanskrit Text}
\\newcommand\\textsanskrit[1]{{\\sanskritfont #1}}

\\newfontfamily\\hebrewfont{NotoSansHebrew-VariableFont_wdth,wght.ttf}
\\newcommand\\texthebrew[1]{{\\hebrewfont #1}}

\\begin{titlepage}
\\centering
\\title{Descent into Avernus}

\\centering
\\author{$\\varnothing$}
\\end{titlepage}

\\begin{document}

\\maketitle

\\setlength{\\parskip}{1ex}

In the year...

\\end{document}
`;
fs.writeFile('./latex/dia.tex', content, err => { });
