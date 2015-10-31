describe("Homoglyph Search - Data Tests", function () {
    function check(targetChar, homoglyphs){
        describe("Homoglyphs of '" + targetChar + "'", function(){
            homoglyphs.forEach(function (c) {
                it("Checking '" + c + "'", function () {
                    var textContainingHomoglyph = 'xx' + c + 'xx',
                        targetWord = 'xx' + targetChar + 'xx';
                    expect(search(textContainingHomoglyph, [targetWord])).toEqual([{match: textContainingHomoglyph, word: targetWord, index: 0}]);
                })
            });
        })
    }

    check("0", ['\u{10404}', '\u{2c9e}', '\u{1d6b6}', '\u{041e}', '\u{0b20}', '\u{118b5}', '\u{1d512}', '\u{ff2f}', '\u{10516}', '\u{1d40e}', '\u{ff10}', '\u{1d5ae}', '\u{1d7ce}', '\u{118e0}', '\u{3007}', '\u{1d7f6}', '\u{1d67e}', '\u{1d79e}', '\u{09e6}', '\u{1d64a}', '\u{1d5e2}', '\u{0d20}', '\u{114d0}', '\u{1d476}', '\u{1d57a}', '\u{0555}', '\u{1d7ec}', '\u{1d4de}', '\u{1d7e2}', '\u{1d72a}', '\u{0b66}', '\u{1d546}', '\u{1d7d8}', '\u{1d616}', '\u{1d4aa}', '\u{1d6f0}', '\u{07c0}', '\u{004f}', '\u{10292}', '\u{a4f3}', '\u{1d764}', '\u{1d442}', '\u{2d54}', '\u{102ab}', '\u{039f}']);
    check("1", ['\u{1d48d}', '\u{1d408}', '\u{05c0}', '\u{0627}', '\u{0196}', '\u{1d5dc}', '\u{1d644}', '\u{1d7e3}', '\u{1d798}', '\u{1d7ed}', '\u{16c1}', '\u{10320}', '\u{1d55d}', '\u{007c}', '\u{1d470}', '\u{1d574}', '\u{1d459}', '\u{2223}', '\u{1d661}', '\u{0399}', '\u{0661}', '\u{1e8c7}', '\u{1d6ea}', '\u{1ee00}', '\u{2d4f}', '\u{0049}', '\u{ff29}', '\u{2113}', '\u{04c0}', '\u{1028a}', '\u{1d5f9}', '\u{ff4c}', '\u{07ca}', '\u{2160}', '\u{1d4f5}', '\u{1d695}', '\u{1d724}', '\u{01c0}', '\u{1d591}', '\u{1d5a8}', '\u{1d425}', '\u{1d678}', '\u{10309}', '\u{1d610}', '\u{06f1}', '\u{ffe8}', '\u{1d62d}', '\u{1d540}', '\u{217c}', '\u{1d529}', '\u{05df}', '\u{1d7cf}', '\u{1ee80}', '\u{1d4c1}', '\u{006c}', '\u{1d4d8}', '\u{2c92}', '\u{1d7d9}', '\u{2111}', '\u{1d5c5}', '\u{a4f2}', '\u{1d7f7}', '\u{2110}', '\u{1d6b0}', '\u{1d75e}', '\u{0406}', '\u{05d5}', '\u{fe8e}', '\u{ff11}', '\u{1d43c}', '\u{fe8d}']);
    check("2", ['\u{1d7ee}', '\u{14bf}', '\u{ff12}', '\u{1d7d0}', '\u{03e8}', '\u{1d7e4}', '\u{01a7}', '\u{a75a}', '\u{1d7da}', '\u{1d7f8}', '\u{a644}']);
    check("3", ['\u{1d7d1}', '\u{118ca}', '\u{021c}', '\u{2ccc}', '\u{a7ab}', '\u{a76a}', '\u{04e0}', '\u{01b7}', '\u{1d7f9}', '\u{1d7e5}', '\u{ff13}', '\u{0417}', '\u{1d7ef}', '\u{1d7db}']);
    check("4", ['\u{1d7f0}', '\u{1d7dc}', '\u{1d7fa}', '\u{ff14}', '\u{13ce}', '\u{1d7e6}', '\u{1d7d2}', '\u{118af}']);
    check("5", ['\u{118bb}', '\u{1d7fb}', '\u{01bc}', '\u{1d7d3}', '\u{1d7dd}', '\u{1d7f1}', '\u{ff15}', '\u{1d7e7}']);
    check("6", ['\u{13ee}', '\u{1d7fc}', '\u{0431}', '\u{118d5}', '\u{1d7de}', '\u{1d7f2}', '\u{1d7d4}', '\u{1d7e8}', '\u{2cd2}', '\u{ff16}']);
    check("7", ['\u{1d7fd}', '\u{ff17}', '\u{1d7df}', '\u{1d7e9}', '\u{1d7d5}', '\u{1d7f3}', '\u{118c6}']);
    check("8", ['\u{1d7e0}', '\u{1d7ea}', '\u{1031a}', '\u{0a6a}', '\u{1e8cb}', '\u{ff18}', '\u{09ea}', '\u{0b03}', '\u{0223}', '\u{0222}', '\u{1d7d6}', '\u{1d7fe}', '\u{1d7f4}']);
    check("9", ['\u{09ed}', '\u{1d7eb}', '\u{0a67}', '\u{ff19}', '\u{2cca}', '\u{a76e}', '\u{118d6}', '\u{1d7d7}', '\u{118ac}', '\u{1d7f5}', '\u{118cc}', '\u{1d7e1}', '\u{0b68}', '\u{1d7ff}']);
    check("A", ['\u{1d790}', '\u{1d468}', '\u{1d71c}', '\u{1d5d4}', '\u{1d00}', '\u{1d63c}', '\u{0410}', '\u{102a0}', '\u{1d608}', '\u{1d434}', '\u{1d504}', '\u{ff21}', '\u{1d756}', '\u{1d400}', '\u{1d538}', '\u{1d670}', '\u{1d4d0}', '\u{13aa}', '\u{0391}', '\u{1d56c}', '\u{1d49c}', '\u{1d6a8}', '\u{a4ee}', '\u{1d5a0}', '\u{15c5}', '\u{1d6e2}']);
    check("B", ['\u{0412}', '\u{1d435}', '\u{1d6e3}', '\u{15f7}', '\u{102a1}', '\u{1d5a1}', '\u{212c}', '\u{1d671}', '\u{1d469}', '\u{0392}', '\u{10301}', '\u{13f4}', '\u{1d401}', '\u{1d56d}', '\u{1d71d}', '\u{1d791}', '\u{a4d0}', '\u{1d5d5}', '\u{10282}', '\u{1d539}', '\u{1d6a9}', '\u{a7b4}', '\u{ff22}', '\u{1d757}', '\u{1d505}', '\u{16d2}', '\u{1d609}', '\u{0299}', '\u{1d63d}', '\u{1d4d1}']);
    check("C", ['\u{102a2}', '\u{216d}', '\u{1d49e}', '\u{13df}', '\u{1d4d2}', '\u{10415}', '\u{118e9}', '\u{1d436}', '\u{1d672}', '\u{0421}', '\u{a4da}', '\u{10302}', '\u{212d}', '\u{03f9}', '\u{1f74c}', '\u{1d60a}', '\u{2ca4}', '\u{2102}', '\u{1051c}', '\u{ff23}', '\u{1d5d6}', '\u{1d56e}', '\u{1d5a2}', '\u{118f2}', '\u{1d46a}', '\u{1d63e}', '\u{1d402}']);
    check("D", ['\u{15de}', '\u{1d60b}', '\u{216e}', '\u{1d4d3}', '\u{1d53b}', '\u{1d5a3}', '\u{1d5d7}', '\u{1d63f}', '\u{1d673}', '\u{15ea}', '\u{a4d3}', '\u{ff24}', '\u{1d56f}', '\u{1d403}', '\u{2145}', '\u{1d437}', '\u{1d46b}', '\u{1d49f}', '\u{1d507}', '\u{13a0}']);
    check("E", ['\u{1d438}', '\u{0395}', '\u{2130}', '\u{1d674}', '\u{1d75a}', '\u{1d508}', '\u{0415}', '\u{1d6ac}', '\u{1d5a4}', '\u{1d570}', '\u{2d39}', '\u{118ae}', '\u{1d60c}', '\u{118a6}', '\u{1d794}', '\u{13ac}', '\u{1d640}', '\u{ff25}', '\u{1d46c}', '\u{1d404}', '\u{1d720}', '\u{a4f0}', '\u{22ff}', '\u{1d5d8}', '\u{1d6e6}', '\u{10286}', '\u{1d53c}', '\u{1d4d4}']);
    check("F", ['\u{15b4}', '\u{1d641}', '\u{1d7ca}', '\u{1d53d}', '\u{118c2}', '\u{1d405}', '\u{1d5a5}', '\u{102a5}', '\u{1d439}', '\u{ff26}', '\u{1d509}', '\u{10525}', '\u{2131}', '\u{a4dd}', '\u{118a2}', '\u{1d4d5}', '\u{1d60d}', '\u{03dc}', '\u{1d5d9}', '\u{1d675}', '\u{1d571}', '\u{1d46d}', '\u{10287}', '\u{a798}']);
    check("G", ['\u{1d572}', '\u{13c0}', '\u{1d642}', '\u{ff27}', '\u{1d43a}', '\u{1d676}', '\u{050c}', '\u{1d5a6}', '\u{a4d6}', '\u{1d46e}', '\u{1d4d6}', '\u{1d60e}', '\u{1d53e}', '\u{1d406}', '\u{1d5da}', '\u{13f3}', '\u{0262}', '\u{1d50a}', '\u{1d4a2}']);
    check("H", ['\u{1d677}', '\u{210c}', '\u{210b}', '\u{029c}', '\u{1d43b}', '\u{1d722}', '\u{a4e7}', '\u{102cf}', '\u{157c}', '\u{041d}', '\u{1d5db}', '\u{1d6e8}', '\u{1d643}', '\u{2c8e}', '\u{1d46f}', '\u{1d60f}', '\u{0397}', '\u{13bb}', '\u{1d573}', '\u{1d796}', '\u{ff28}', '\u{1d5a7}', '\u{210d}', '\u{1d6ae}', '\u{1d4d7}', '\u{1d407}', '\u{1d75c}']);
    check("I", ['\u{1d48d}', '\u{1d408}', '\u{05c0}', '\u{0627}', '\u{0196}', '\u{1d5dc}', '\u{1d644}', '\u{1d7e3}', '\u{1d798}', '\u{1d7ed}', '\u{16c1}', '\u{10320}', '\u{1d55d}', '\u{007c}', '\u{1d470}', '\u{1d574}', '\u{1d459}', '\u{2223}', '\u{1d661}', '\u{0399}', '\u{0661}', '\u{1e8c7}', '\u{1d6ea}', '\u{1ee00}', '\u{2d4f}', '\u{ff29}', '\u{2113}', '\u{04c0}', '\u{1028a}', '\u{0031}', '\u{1d5f9}', '\u{ff4c}', '\u{07ca}', '\u{2160}', '\u{1d4f5}', '\u{1d695}', '\u{1d724}', '\u{01c0}', '\u{1d591}', '\u{1d5a8}', '\u{1d425}', '\u{1d678}', '\u{10309}', '\u{1d610}', '\u{06f1}', '\u{ffe8}', '\u{1d62d}', '\u{1d540}', '\u{217c}', '\u{1d529}', '\u{05df}', '\u{1d7cf}', '\u{1ee80}', '\u{1d4c1}', '\u{006c}', '\u{1d4d8}', '\u{2c92}', '\u{1d7d9}', '\u{2111}', '\u{1d5c5}', '\u{a4f2}', '\u{1d7f7}', '\u{2110}', '\u{1d6b0}', '\u{1d75e}', '\u{0406}', '\u{05d5}', '\u{fe8e}', '\u{ff11}', '\u{1d43c}', '\u{fe8d}']);
    check("J", ['\u{1d471}', '\u{1d5dd}', '\u{a4d9}', '\u{0408}', '\u{1d575}', '\u{ff2a}', '\u{1d4a5}', '\u{1d5a9}', '\u{1d611}', '\u{13ab}', '\u{1d679}', '\u{1d409}', '\u{1d50d}', '\u{a7b2}', '\u{1d43d}', '\u{148d}', '\u{1d4d9}', '\u{1d541}', '\u{1d645}', '\u{037f}']);
    check("K", ['\u{16d5}', '\u{1d725}', '\u{1d472}', '\u{a4d7}', '\u{1d646}', '\u{1d4da}', '\u{1d75f}', '\u{ff2b}', '\u{1d576}', '\u{1d6eb}', '\u{1d6b1}', '\u{2c94}', '\u{041a}', '\u{1d40a}', '\u{1d5de}', '\u{212a}', '\u{10518}', '\u{1d5aa}', '\u{1d612}', '\u{1d50e}', '\u{039a}', '\u{1d67a}', '\u{13e6}', '\u{1d4a6}', '\u{1d542}', '\u{1d799}', '\u{1d43e}']);
    check("L", ['\u{1d4db}', '\u{ff2c}', '\u{118b2}', '\u{1d67b}', '\u{1d613}', '\u{14aa}', '\u{1d5ab}', '\u{1d43f}', '\u{1d40b}', '\u{1d577}', '\u{2cd0}', '\u{10526}', '\u{1d50f}', '\u{1d543}', '\u{1d5df}', '\u{13de}', '\u{2112}', '\u{029f}', '\u{118a3}', '\u{216c}', '\u{1041b}', '\u{1d647}', '\u{1d473}', '\u{a4e1}']);
    check("M", ['\u{1d648}', '\u{1d67c}', '\u{2c98}', '\u{15f0}', '\u{13b7}', '\u{10311}', '\u{1d510}', '\u{1d727}', '\u{1d79b}', '\u{ff2d}', '\u{1d6b3}', '\u{1d40c}', '\u{1d578}', '\u{1d440}', '\u{1d474}', '\u{039c}', '\u{041c}', '\u{16d6}', '\u{1d761}', '\u{1d614}', '\u{1d544}', '\u{03fa}', '\u{1d4dc}', '\u{1d5ac}', '\u{1d5e0}', '\u{102b0}', '\u{216f}', '\u{a4df}', '\u{1d6ed}', '\u{2133}']);
    check("N", ['\u{ff2e}', '\u{1d4dd}', '\u{1d6ee}', '\u{1d762}', '\u{1d5e1}', '\u{1d615}', '\u{1d441}', '\u{2115}', '\u{1d649}', '\u{1d579}', '\u{0274}', '\u{1d79c}', '\u{1d40d}', '\u{1d511}', '\u{1d4a9}', '\u{1d67d}', '\u{10513}', '\u{039d}', '\u{1d475}', '\u{1d728}', '\u{a4e0}', '\u{1d5ad}', '\u{2c9a}', '\u{1d6b4}']);
    check("O", ['\u{10404}', '\u{2c9e}', '\u{1d6b6}', '\u{041e}', '\u{0030}', '\u{0b20}', '\u{118b5}', '\u{1d512}', '\u{ff2f}', '\u{10516}', '\u{1d40e}', '\u{ff10}', '\u{1d5ae}', '\u{1d7ce}', '\u{118e0}', '\u{3007}', '\u{1d7f6}', '\u{1d67e}', '\u{1d79e}', '\u{09e6}', '\u{1d64a}', '\u{1d5e2}', '\u{0d20}', '\u{114d0}', '\u{1d476}', '\u{1d57a}', '\u{0555}', '\u{1d7ec}', '\u{1d4de}', '\u{1d7e2}', '\u{1d72a}', '\u{0b66}', '\u{1d546}', '\u{1d7d8}', '\u{1d616}', '\u{1d4aa}', '\u{1d6f0}', '\u{07c0}', '\u{10292}', '\u{a4f3}', '\u{1d764}', '\u{1d442}', '\u{2d54}', '\u{102ab}', '\u{039f}']);
    check("P", ['\u{03a1}', '\u{1d5e3}', '\u{13e2}', '\u{1d5af}', '\u{1d443}', '\u{a4d1}', '\u{1d617}', '\u{2ca2}', '\u{1d513}', '\u{1d40f}', '\u{ff30}', '\u{1d477}', '\u{1d6f2}', '\u{1d4df}', '\u{0420}', '\u{10295}', '\u{1d4ab}', '\u{1d72c}', '\u{1d7a0}', '\u{1d67f}', '\u{1d57b}', '\u{1d766}', '\u{1d64b}', '\u{1d6b8}', '\u{146d}', '\u{2119}']);
    check("Q", ['\u{1d410}', '\u{2d55}', '\u{1d5e4}', '\u{1d5b0}', '\u{1d57c}', '\u{1d618}', '\u{1d680}', '\u{1d444}', '\u{ff31}', '\u{1d64c}', '\u{1d4e0}', '\u{211a}', '\u{1d514}', '\u{1d4ac}', '\u{1d478}']);
    check("R", ['\u{1d5e5}', '\u{1d5b1}', '\u{1d619}', '\u{211d}', '\u{1587}', '\u{1d64d}', '\u{1d445}', '\u{16b1}', '\u{01a6}', '\u{1d4e1}', '\u{a4e3}', '\u{211c}', '\u{13a1}', '\u{211b}', '\u{0280}', '\u{ff32}', '\u{1d681}', '\u{1d411}', '\u{1d479}', '\u{13d2}', '\u{1d57d}']);
    check("S", ['\u{10420}', '\u{1d5b2}', '\u{1d446}', '\u{13d5}', '\u{ff33}', '\u{1d516}', '\u{054f}', '\u{1d61a}', '\u{1d64e}', '\u{13da}', '\u{1d682}', '\u{0405}', '\u{1d47a}', '\u{1d412}', '\u{10296}', '\u{1d5e6}', '\u{1d4ae}', '\u{1d4e2}', '\u{a4e2}', '\u{1d54a}', '\u{1d57e}']);
    check("T", ['\u{1d72f}', '\u{1f768}', '\u{1d769}', '\u{1d61b}', '\u{10315}', '\u{1d683}', '\u{1d4e3}', '\u{2ca6}', '\u{0422}', '\u{13a2}', '\u{1d6bb}', '\u{1d413}', '\u{118bc}', '\u{1d5b3}', '\u{1d57f}', '\u{10297}', '\u{22a4}', '\u{1d47b}', '\u{102b1}', '\u{a4d4}', '\u{1d5e7}', '\u{1d54b}', '\u{ff34}', '\u{1d64f}', '\u{27d9}', '\u{1d7a3}', '\u{1d6f5}', '\u{03a4}', '\u{1d447}', '\u{1d517}', '\u{1d4af}']);
    check("U", ['\u{1d54c}', '\u{1d414}', '\u{1d518}', '\u{22c3}', '\u{1d580}', '\u{1d61c}', '\u{1d4e4}', '\u{1d650}', '\u{1d5e8}', '\u{118b8}', '\u{144c}', '\u{1d448}', '\u{222a}', '\u{1d4b0}', '\u{054d}', '\u{1d47c}', '\u{a4f4}', '\u{1d5b4}', '\u{1d684}', '\u{ff35}']);
    check("V", ['\u{06f7}', '\u{1d61d}', '\u{1d54d}', '\u{118a0}', '\u{ff36}', '\u{13d9}', '\u{0474}', '\u{1051d}', '\u{1d651}', '\u{1d47d}', '\u{1d5b5}', '\u{a4e6}', '\u{1d581}', '\u{1d5e9}', '\u{0667}', '\u{2164}', '\u{1d415}', '\u{1d519}', '\u{142f}', '\u{1d449}', '\u{1d4e5}', '\u{1d685}', '\u{1d4b1}', '\u{2d38}']);
    check("W", ['\u{1d47e}', '\u{1d4b2}', '\u{1d54e}', '\u{118ef}', '\u{1d582}', '\u{1d5b6}', '\u{1d416}', '\u{1d4e6}', '\u{1d51a}', '\u{ff37}', '\u{1d44a}', '\u{1d61e}', '\u{13b3}', '\u{1d686}', '\u{1d5ea}', '\u{051c}', '\u{13d4}', '\u{1d652}', '\u{a4ea}', '\u{118e6}']);
    check("X", ['\u{10322}', '\u{1d51b}', '\u{10527}', '\u{1d5eb}', '\u{1d47f}', '\u{ff38}', '\u{1d4e7}', '\u{16b7}', '\u{1d54f}', '\u{2cac}', '\u{166d}', '\u{1d653}', '\u{a4eb}', '\u{1d4b3}', '\u{102b4}', '\u{2169}', '\u{1d6f8}', '\u{1d687}', '\u{2573}', '\u{a7b3}', '\u{1d732}', '\u{10317}', '\u{1d417}', '\u{1d583}', '\u{1d5b7}', '\u{10290}', '\u{2d5d}', '\u{1d44b}', '\u{1d76c}', '\u{118ec}', '\u{1d7a6}', '\u{03a7}', '\u{1d6be}', '\u{1d61f}', '\u{0425}']);
    check("Y", ['\u{1d730}', '\u{1d76a}', '\u{13bd}', '\u{1d6f6}', '\u{1d51c}', '\u{1d480}', '\u{1d620}', '\u{1d584}', '\u{1d550}', '\u{1d7a4}', '\u{13a9}', '\u{118a4}', '\u{1d4e8}', '\u{1d5b8}', '\u{102b2}', '\u{2ca8}', '\u{ff39}', '\u{1d4b4}', '\u{a4ec}', '\u{1d5ec}', '\u{1d654}', '\u{1d6bc}', '\u{03a5}', '\u{1d418}', '\u{1d688}', '\u{04ae}', '\u{1d44c}', '\u{03d2}']);
    check("Z", ['\u{13c3}', '\u{1d4b5}', '\u{1d6e7}', '\u{2124}', '\u{1d585}', '\u{1d44d}', '\u{102f5}', '\u{2128}', '\u{118e5}', '\u{a4dc}', '\u{1d5ed}', '\u{1d621}', '\u{118a9}', '\u{1d419}', '\u{1d6ad}', '\u{1d795}', '\u{0396}', '\u{1d4e9}', '\u{1d655}', '\u{ff3a}', '\u{1d481}', '\u{1d5b9}', '\u{1d721}', '\u{1d75b}', '\u{1d689}']);
    check("a", ['\u{1d6c2}', '\u{1d6fc}', '\u{1d656}', '\u{1d4ea}', '\u{0251}', '\u{03b1}', '\u{1d44e}', '\u{1d736}', '\u{1d622}', '\u{1d5ba}', '\u{1d552}', '\u{237a}', '\u{1d51e}', '\u{1d5ee}', '\u{0430}', '\u{ff41}', '\u{1d4b6}', '\u{1d7aa}', '\u{1d68a}', '\u{1d770}', '\u{1d586}', '\u{1d41a}', '\u{1d482}']);
    check("b", ['\u{1d51f}', '\u{1d4b7}', '\u{1d5ef}', '\u{1d483}', '\u{1d4eb}', '\u{1d553}', '\u{1d5bb}', '\u{1d587}', '\u{1d44f}', '\u{13cf}', '\u{0184}', '\u{15af}', '\u{1d41b}', '\u{042c}', '\u{ff42}', '\u{1d623}', '\u{1d657}', '\u{1d68b}']);
    check("c", ['\u{1d658}', '\u{03f2}', '\u{ff43}', '\u{217d}', '\u{1d450}', '\u{1d41c}', '\u{1d4b8}', '\u{1d4ec}', '\u{1d04}', '\u{1d68c}', '\u{1d520}', '\u{1043d}', '\u{2ca5}', '\u{0441}', '\u{1d5f0}', '\u{1d484}', '\u{1d5bc}', '\u{1d588}', '\u{1d554}', '\u{1d624}']);
    check("d", ['\u{1d625}', '\u{13e7}', '\u{ff44}', '\u{1d68d}', '\u{a4d2}', '\u{1d521}', '\u{1d5f1}', '\u{146f}', '\u{1d589}', '\u{217e}', '\u{1d4ed}', '\u{1d4b9}', '\u{1d41d}', '\u{0501}', '\u{2146}', '\u{1d451}', '\u{1d555}', '\u{1d5bd}', '\u{1d485}', '\u{1d659}']);
    check("e", ['\u{2147}', '\u{1d4ee}', '\u{1d5be}', '\u{1d626}', '\u{04bd}', '\u{1d68e}', '\u{1d522}', '\u{212f}', '\u{1d41e}', '\u{1d556}', '\u{1d58a}', '\u{ff45}', '\u{1d65a}', '\u{1d5f2}', '\u{ab32}', '\u{1d452}', '\u{0435}', '\u{1d486}', '\u{212e}']);
    check("f", ['\u{1d5bf}', '\u{017f}', '\u{1d65b}', '\u{1d4ef}', '\u{a799}', '\u{1d627}', '\u{1d41f}', '\u{1d557}', '\u{1d68f}', '\u{0584}', '\u{1d523}', '\u{1e9d}', '\u{ff46}', '\u{1d4bb}', '\u{1d487}', '\u{1d5f3}', '\u{ab35}', '\u{1d453}', '\u{1d58b}']);
    check("g", ['\u{1d5f4}', '\u{1d58c}', '\u{1d558}', '\u{1d5c0}', '\u{1d690}', '\u{1d488}', '\u{1d420}', '\u{1d65c}', '\u{ff47}', '\u{0261}', '\u{1d83}', '\u{018d}', '\u{0581}', '\u{210a}', '\u{1d524}', '\u{1d454}', '\u{1d4f0}', '\u{1d628}']);
    check("h", ['\u{1d525}', '\u{1d5c1}', '\u{1d58d}', '\u{1d629}', '\u{1d559}', '\u{13c2}', '\u{1d4f1}', '\u{1d421}', '\u{1d489}', '\u{ff48}', '\u{1d65d}', '\u{1d691}', '\u{210e}', '\u{1d4bd}', '\u{0570}', '\u{04bb}', '\u{1d5f5}']);
    check("i", ['\u{1d4be}', '\u{1d65e}', '\u{1d48a}', '\u{1d692}', '\u{1d6ca}', '\u{1d55a}', '\u{1d62a}', '\u{a647}', '\u{02db}', '\u{1d6a4}', '\u{1fbe}', '\u{03b9}', '\u{1d5f6}', '\u{0131}', '\u{1d456}', '\u{1d58e}', '\u{1d778}', '\u{1d7b2}', '\u{1d526}', '\u{13a5}', '\u{1d5c2}', '\u{ff49}', '\u{1d704}', '\u{04cf}', '\u{2373}', '\u{0269}', '\u{1d73e}', '\u{2170}', '\u{118c3}', '\u{1d4f2}', '\u{0456}', '\u{2148}', '\u{026a}', '\u{2139}', '\u{1d422}', '\u{037a}']);
    check("j", ['\u{1d423}', '\u{1d457}', '\u{1d58f}', '\u{1d62b}', '\u{1d55b}', '\u{1d5f7}', '\u{1d65f}', '\u{1d4f3}', '\u{0458}', '\u{1d5c3}', '\u{2149}', '\u{1d527}', '\u{03f3}', '\u{1d693}', '\u{ff4a}', '\u{1d48b}', '\u{1d4bf}']);
    check("k", ['\u{03ba}', '\u{1d694}', '\u{1d718}', '\u{1d6cb}', '\u{1d4c0}', '\u{1d55c}', '\u{03f0}', '\u{1d705}', '\u{1d752}', '\u{0138}', '\u{043a}', '\u{1d424}', '\u{1d73f}', '\u{2c95}', '\u{1d7c6}', '\u{1d590}', '\u{1d7b3}', '\u{1d528}', '\u{1d48c}', '\u{1d660}', '\u{1d78c}', '\u{ff4b}', '\u{1d0b}', '\u{1d6de}', '\u{1d5c4}', '\u{1d779}', '\u{1d5f8}', '\u{1d458}', '\u{1d4f4}', '\u{1d62c}']);
    check("l", ['\u{1d48d}', '\u{1d408}', '\u{05c0}', '\u{0627}', '\u{0196}', '\u{1d5dc}', '\u{1d644}', '\u{1d7e3}', '\u{1d798}', '\u{1d7ed}', '\u{16c1}', '\u{10320}', '\u{1d55d}', '\u{007c}', '\u{1d470}', '\u{1d574}', '\u{1d459}', '\u{2223}', '\u{1d661}', '\u{0399}', '\u{0661}', '\u{1e8c7}', '\u{1d6ea}', '\u{1ee00}', '\u{2d4f}', '\u{0049}', '\u{ff29}', '\u{2113}', '\u{04c0}', '\u{1028a}', '\u{0031}', '\u{1d5f9}', '\u{ff4c}', '\u{07ca}', '\u{2160}', '\u{1d4f5}', '\u{1d695}', '\u{1d724}', '\u{01c0}', '\u{1d591}', '\u{1d5a8}', '\u{1d425}', '\u{1d678}', '\u{10309}', '\u{1d610}', '\u{06f1}', '\u{ffe8}', '\u{1d62d}', '\u{1d540}', '\u{217c}', '\u{1d529}', '\u{05df}', '\u{1d7cf}', '\u{1ee80}', '\u{1d4c1}', '\u{1d4d8}', '\u{2c92}', '\u{1d7d9}', '\u{2111}', '\u{1d5c5}', '\u{a4f2}', '\u{1d7f7}', '\u{2110}', '\u{1d6b0}', '\u{1d75e}', '\u{0406}', '\u{05d5}', '\u{fe8e}', '\u{ff11}', '\u{1d43c}', '\u{fe8d}']);
    check("m", ['\u{ff4d}']);
    check("n", ['\u{1d4c3}', '\u{1d5fb}', '\u{03d6}', '\u{03c0}', '\u{ff4e}', '\u{1d6d1}', '\u{1d70b}', '\u{1d5c7}', '\u{1d745}', '\u{1d52b}', '\u{1d593}', '\u{1d4f7}', '\u{1d755}', '\u{1d697}', '\u{213c}', '\u{043f}', '\u{057c}', '\u{1d62f}', '\u{1d78f}', '\u{1d45b}', '\u{1d7c9}', '\u{1d6e1}', '\u{1d28}', '\u{1d55f}', '\u{1d48f}', '\u{1d77f}', '\u{1d427}', '\u{1d663}', '\u{1d71b}', '\u{1d7b9}', '\u{0578}']);
    check("o", ['\u{ff4f}', '\u{0d66}', '\u{0be6}', '\u{10ff}', '\u{1d77e}', '\u{0585}', '\u{1ee64}', '\u{1d782}', '\u{101d}', '\u{feec}', '\u{fbac}', '\u{1d52c}', '\u{feea}', '\u{118c8}', '\u{1040}', '\u{0c02}', '\u{ab3d}', '\u{2134}', '\u{1d560}', '\u{1ee24}', '\u{1d664}', '\u{2c9f}', '\u{0e50}', '\u{1d698}', '\u{05e1}', '\u{043e}', '\u{1ee84}', '\u{1d630}', '\u{1d6d0}', '\u{03c3}', '\u{fbad}', '\u{fba8}', '\u{fba6}', '\u{06d5}', '\u{0ce6}', '\u{0ed0}', '\u{1d4f8}', '\u{1d744}', '\u{0c66}', '\u{1d70a}', '\u{0647}', '\u{0966}', '\u{1d748}', '\u{0c82}', '\u{1d594}', '\u{03bf}', '\u{fee9}', '\u{fba7}', '\u{0a66}', '\u{1d7bc}', '\u{1d11}', '\u{1d7b8}', '\u{06c1}', '\u{fbab}', '\u{1d0f}', '\u{06be}', '\u{1d428}', '\u{06f5}', '\u{1d45c}', '\u{1d6d4}', '\u{fbaa}', '\u{feeb}', '\u{1042c}', '\u{0d02}', '\u{fba9}', '\u{0d82}', '\u{118d7}', '\u{0ae6}', '\u{1d5fc}', '\u{0665}', '\u{1d5c8}', '\u{1d70e}', '\u{1d490}']);
    check("p", ['\u{1d4c5}', '\u{1d746}', '\u{1d699}', '\u{1d4f9}', '\u{1d45d}', '\u{1d70c}', '\u{1d561}', '\u{2ca3}', '\u{1d52d}', '\u{1d429}', '\u{1d491}', '\u{0440}', '\u{1d780}', '\u{1d78e}', '\u{ff50}', '\u{1d5fd}', '\u{03f1}', '\u{03c1}', '\u{1d595}', '\u{1d665}', '\u{1d631}', '\u{1d71a}', '\u{1d6d2}', '\u{1d754}', '\u{1d7ba}', '\u{1d7c8}', '\u{1d5c9}', '\u{2374}', '\u{1d6e0}']);
    check("q", ['\u{1d5fe}', '\u{1d4c6}', '\u{1d42a}', '\u{0566}', '\u{051b}', '\u{1d69a}', '\u{1d5ca}', '\u{1d596}', '\u{1d52e}', '\u{1d562}', '\u{0563}', '\u{1d4fa}', '\u{ff51}', '\u{1d45e}', '\u{1d492}', '\u{1d632}', '\u{1d666}']);
    check("r", ['\u{1d42b}', '\u{0433}', '\u{1d45f}', '\u{1d69b}', '\u{1d633}', '\u{ab47}', '\u{1d4c7}', '\u{1d597}', '\u{ab48}', '\u{1d563}', '\u{2c85}', '\u{1d4fb}', '\u{1d493}', '\u{ff52}', '\u{1d667}', '\u{1d5ff}', '\u{1d26}', '\u{1d5cb}', '\u{1d52f}']);
    check("s", ['\u{1d598}', '\u{1d69c}', '\u{1d634}', '\u{1d460}', '\u{1d564}', '\u{1d530}', '\u{1d4c8}', '\u{1d42c}', '\u{1d668}', '\u{a731}', '\u{1d5cc}', '\u{10448}', '\u{ff53}', '\u{1d494}', '\u{01bd}', '\u{118c1}', '\u{1d4fc}', '\u{1d600}', '\u{0455}']);
    check("t", ['\u{0442}', '\u{1d7bd}', '\u{1d783}', '\u{03c4}', '\u{1d4c9}', '\u{1d69d}', '\u{1d495}', '\u{1d749}', '\u{1d635}', '\u{1d4fd}', '\u{1d461}', '\u{ff54}', '\u{1d669}', '\u{1d599}', '\u{1d42d}', '\u{1d531}', '\u{1d601}', '\u{1d5cd}', '\u{1d565}', '\u{1d70f}', '\u{1d1b}', '\u{1d6d5}']);
    check("u", ['\u{03c5}', '\u{1d602}', '\u{1d462}', '\u{1d4fe}', '\u{057d}', '\u{1d710}', '\u{1d69e}', '\u{a79f}', '\u{1d42e}', '\u{1d566}', '\u{1d59a}', '\u{1d784}', '\u{1d4ca}', '\u{1d1c}', '\u{ab52}', '\u{1d66a}', '\u{1d5ce}', '\u{ff55}', '\u{1d636}', '\u{1d74a}', '\u{1d496}', '\u{028b}', '\u{1d7be}', '\u{1d532}', '\u{ab4e}', '\u{0446}', '\u{1d6d6}', '\u{118d8}']);
    check("v", ['\u{118c0}', '\u{1d4cb}', '\u{1d69f}', '\u{1d59b}', '\u{2228}', '\u{05d8}', '\u{1d533}', '\u{1d603}', '\u{22c1}', '\u{1d637}', '\u{1d66b}', '\u{1d5cf}', '\u{03bd}', '\u{1d742}', '\u{1d7b6}', '\u{1d42f}', '\u{ff56}', '\u{1d4ff}', '\u{1d20}', '\u{1d463}', '\u{2174}', '\u{1d567}', '\u{0475}', '\u{1d77c}', '\u{1d497}', '\u{1d6ce}', '\u{1d708}']);
    check("w", ['\u{ff57}']);
    check("x", ['\u{00d7}', '\u{ff58}', '\u{166e}', '\u{2179}', '\u{1d499}', '\u{1d465}', '\u{157d}', '\u{1d501}', '\u{292c}', '\u{1d66d}', '\u{292b}', '\u{1d4cd}', '\u{1541}', '\u{1d605}', '\u{2a2f}', '\u{1d535}', '\u{1d431}', '\u{1d5d1}', '\u{1d639}', '\u{1d569}', '\u{0445}', '\u{1d6a1}', '\u{1d59d}']);
    check("y", ['\u{1d536}', '\u{1d4ce}', '\u{0443}', '\u{1d8c}', '\u{1d432}', '\u{1d606}', '\u{1d5d2}', '\u{1d772}', '\u{1d6a2}', '\u{ff59}', '\u{1d6fe}', '\u{1d7ac}', '\u{1d6c4}', '\u{0263}', '\u{1d66e}', '\u{ab5a}', '\u{213d}', '\u{1d738}', '\u{1d56a}', '\u{1d59e}', '\u{1eff}', '\u{028f}', '\u{03b3}', '\u{04af}', '\u{1d49a}', '\u{118dc}', '\u{1d63a}', '\u{1d502}', '\u{1d466}', '\u{10e7}']);
    check("z", ['\u{1d503}', '\u{1d5d3}', '\u{1d66f}', '\u{1d537}', '\u{ff5a}', '\u{1d467}', '\u{1d22}', '\u{1d63b}', '\u{1d4cf}', '\u{1d6a3}', '\u{118c4}', '\u{1d59f}', '\u{1d433}', '\u{1d56b}', '\u{1d49b}', '\u{1d607}']);

});
