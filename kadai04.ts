function* inputPrompt(description: string){
    while(true){
        return prompt(description)
    }
}

function* kadaiq1() {
    const input: string = yield* inputPrompt('文章を入力してください')
    const match: string = yield* inputPrompt('調べる文字列を入力してください。')
    yield input.match(match) ? 
        yield document.getElementById('q1').innerHTML = `「${input}」中に「${match}」は含まれます`
        :
        yield document.getElementById('q1').innerHTML = `「${input}」中に「${match}」は含まれません。`
}

const hoge = kadaiq1()
hoge.next()
hoge.next()
hoge.next()

const kadaiq2 = (): void => {
    const input: number[] = [76, 50, 41, 58, 61, 94]
    const max: number = Math.max(...input)
    const min: number = Math.min(...input)
    document.getElementById('q2').innerHTML = `${input}の数値の中で最大値は${max}、最小値は${min}です。`
}

kadaiq2()

const kadaiq3 = (): void => {
    const input: string[] = ['ボンジュール', 'hoge', 'fuga', 'piyo']
    const rand: number = Math.floor(Math.random() * 3)
    document.getElementById('q3').innerHTML = input[rand]
}

kadaiq3()

const kadaiq4 = (): void => {
    const date: Date = new Date()
    const week: string[] = [ "日", "月", "火", "水", "木", "金", "土" ]
    document.getElementById('q4').innerHTML = `今日は${date.getMonth()}月${date.getDate()}日、${week[date.getDay()]}曜日。現在${date.getHours()}時${date.getMinutes()}分${date.getSeconds()}秒です。`
}

kadaiq4()

const kadaiq5 = (): void => {
    const now: Date = new Date()
    const tgday = now.getFullYear() + "/" + '12' + "/" + '31';
    const days =  Math.ceil((Date.parse(tgday) - now.getTime()) / (24 * 60 * 60 * 1000));
    document.getElementById('q5').innerHTML = `今年も残すところあと${days + 1}日になりました。`
}

kadaiq5()