// components/NameGenerator.js
// 'use client' // Mark as client component

import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

const NameGenerator = () => {
  const [generatedName, setGeneratedName] = useState('')

  const generateName = () => {
    // Replace with your actual name generation logic
    const names = [
      '艾莉丝 (Alice)', '鲍勃 (Bob)', '查理 (Charlie)', '大卫 (David)', '伊芙 (Eve)', '弗兰克 (Frank)', '格蕾丝 (Grace)', '汉克 (Hank)', '艾琳 (Irene)', '杰克 (Jack)', 
      '凯特 (Kate)', '李 (Lee)', '玛丽 (Mary)', '尼克 (Nick)', '奥利弗 (Oliver)', '保罗 (Paul)', '奎因 (Quinn)', '瑞秋 (Rachel)', '史蒂夫 (Steve)', '蒂娜 (Tina)', 
      '尤里 (Yuri)', '维克 (Vic)', '温迪 (Wendy)', '泽维尔 (Xavier)', '杨 (Yang)', '佐伊 (Zoe)', '阿尔伯特 (Albert)', '贝拉 (Bella)', '卡尔 (Carl)', '丹尼尔 (Daniel)', 
      '爱德华 (Edward)', '菲奥娜 (Fiona)', '乔治 (George)', '汉娜 (Hannah)', '伊恩 (Ian)', '简 (Jane)', '凯文 (Kevin)', '莉莉 (Lily)', '迈克 (Mike)', '娜塔莎 (Natasha)', 
      '奥斯卡 (Oscar)', '彼得 (Peter)', '昆西 (Quincy)', '瑞安 (Ryan)', '萨拉 (Sarah)', '汤姆 (Tom)', '乌玛 (Uma)', '维克多 (Victor)', '威廉 (William)', '泽拉 (Zara)',
      '易豪 (Yi Hao)', '韩毅 (Han Yi)', '风源 (Feng Yuan)', '方平 (Fang Ping)', '建国 (Jian Guo)', '美玲 (Mei Ling)', '志强 (Zhi Qiang)', '秀英 (Xiu Ying)', '国华 (Guo Hua)', '建华 (Jian Hua)',
      '玉兰 (Yu Lan)', '桂英 (Gui Ying)', '桂芳 (Gui Fang)', '秀兰 (Xiu Lan)', '秀珍 (Xiu Zhen)', '桂珍 (Gui Zhen)', '桂兰 (Gui Lan)', '秀芳 (Xiu Fang)', '桂花 (Gui Hua)', '秀花 (Xiu Hua)',
      '桂香 (Gui Xiang)', '秀香 (Xiu Xiang)', '桂秀 (Gui Xiu)', '秀秀 (Xiu Xiu)', '桂秀 (Gui Xiu)', '秀丽 (Xiu Li)', '桂丽 (Gui Li)', '秀丽 (Xiu Li)', '桂丽 (Gui Li)', '秀丽 (Xiu Li)',
      '桂丽 (Gui Li)', '秀丽 (Xiu Li)', '桂丽 (Gui Li)', '秀丽 (Xiu Li)', '桂丽 (Gui Li)', '秀丽 (Xiu Li)', '桂丽 (Gui Li)', '秀丽 (Xiu Li)', '桂丽 (Gui Li)', '秀丽 (Xiu Li)',
      '桂丽 (Gui Li)', '秀丽 (Xiu Li)', '桂丽 (Gui Li)', '秀丽 (Xiu Li)', '桂丽 (Gui Li)', '秀丽 (Xiu Li)', '桂丽 (Gui Li)', '秀丽 (Xiu Li)', '桂丽 (Gui Li)', '秀丽 (Xiu Li)',
    ];
    const randomName = names[Math.floor(Math.random() * names.length)]
    setGeneratedName(randomName)
    };

    return (
    <div>
      <div></div>
      <Button onClick={generateName} className="transition-transform transform hover:scale-105 active:scale-95">
        Generate Name
      </Button>
      <div>{generatedName && <p>Generated Name: {generatedName}</p>}</div>
      </div>
  )
}

export default NameGenerator