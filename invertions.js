function inversions(arr0) {
    let mid = arr0.length / 2
    if (arr0.length < 2) {
        return { arr: arr0, inv: 0 }
    }
    let { arr: arr1, inv: leftInv } = invertions(arr0.slice(0, mid))
    let { arr: arr2, inv: rightInv } = invertions(arr0.slice(mid))

    return merge({ arr: arr1, inv: leftInv }, { arr: arr2, inv: rightInv })
}


function merge(arr1, arr2) {
    let inv = arr1.inv + arr2.inv
    let result = []
    while (arr1.arr.length && arr2.arr.length) {
        if (arr1.arr[0] < arr2.arr[0]) {
            result.push(arr1.arr[0])
            arr1.arr.shift()
        } else {
            result.push(arr2.arr[0])
            inv = inv + 1
            arr2.arr.shift()
        }
    }
    return { arr: [...result, ...arr1.arr, ...arr2.arr], inv }
}


const p = {
    niyaz: [
        {title: 'The Green Mile', rate: 3},
        {title: 'The Shawshank Redemption', rate: 1},
        {title: 'The Lord of the Rings', rate: 2},
        {title: 'Inception', rate: 4},
        {title: 'Shrek', rate: 5},
        {title: 'Gladiator', rate: 6},
    ],
    damir: [
        {title: 'The Green Mile', rate:2},
        {title: 'Gladiator', rate: 1},
        {title: 'Shrek', rate: 3},
        {title: 'Inception', rate: 4},
        {title: 'The Lord of the Rings', rate: 5},
        {title: 'The Shawshank Redemption', rate: 6},
    ],
    timur: [
        {title: 'The Green Mile', rate: 5},
        {title: 'The Shawshank Redemption', rate: 4},
        {title: 'The Lord of the Rings', rate: 6},
        {title: 'Inception', rate: 3},
        {title: 'Shrek', rate: 1},
        {title: 'Gladiator', rate: 2},
    ],
    alexey: [
        {title: 'The Green Mile', rate: 3},
        {title: 'The Shawshank Redemption', rate: 2},
        {title: 'The Lord of the Rings', rate: 4},
        {title: 'Inception', rate: 5},
        {title: 'Shrek', rate: 1},
        {title: 'Gladiator', rate: 6},
    ],
    uraD: [
        {title: 'The Green Mile', rate: 6},
        {title: 'The Shawshank Redemption', rate: 5},
        {title: 'Shrek', rate: 4},
        {title: 'Inception', rate: 3},
        {title: 'Gladiator', rate: 2},
        {title: 'The Lord of the Rings', rate: 1},
    ],
    fedor: [
        {title: 'The Green Mile', rate: 5},
        {title: 'The Shawshank Redemption', rate: 3},
        {title: 'The Lord of the Rings', rate: 2},
        {title: 'Inception', rate: 6},
        {title: 'Shrek', rate: 4},
        {title: 'Gladiator', rate: 1},
    ],
    pavel: [
        {title: 'The Green Mile', rate: 5},
        {title: 'The Shawshank Redemption', rate: 3},
        {title: 'The Lord of the Rings', rate: 2},
        {title: 'Inception', rate: 6},
        {title: 'Shrek', rate: 4},
        {title: 'Gladiator', rate: 1},
    ]


}

function init(targetP, comparedP) {
    const arr = [...targetP].sort((a, b) => a.rate - b.rate)

    const result = []
    for (let i = 0; i < arr.length; i++) {
        const title = arr[i].title
        const el = comparedP.find((el) => el.title === title)
        el ? result.push(el.rate) : null
    }
    console.log(result)
    const inv = inversions(result)
    return inv
}

const inv = init(p.pavel, p.fedor)
console.log(inv)
console.log((1 - inv.inv/p.alexey.length) * 100 )
