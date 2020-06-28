``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第一行，呼叫 function，並帶入參數，使原始設定參數 arr 為一個陣列 [3, 5, 8, 13, 22, 35]。
2. 執行第二行，設定變數 i 為 0，檢查 i 的數值小於參數的長度，是的話繼續執行，開始進入第一個迴圈。
3. 執行第三行，判斷 i 是否小於等於 0 ，由於陣列是從 0 開始計算，所以 i 為 0，i 等於 0 符合條件，所以結束迴圈，回傳 'invalid'。