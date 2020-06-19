## 交作業流程

### 透過 GitHub 設定自己的作業專案
首先，要寫作業要先有自己的作業可以操作。所以起手式要先透過 GitHub classroom 來複製一份到自己的 GitHub 帳號中。

### 把作業拉到本地端
接著要把遠端的作業，下載到自己的電腦方便編輯，可以有兩種選擇：

1. 直接下載壓縮檔。
2. 透過 Git clone 到自己設定的資料夾中。

### 開新的 branch
接著是非常重要的一個步驟，就是先開一個新的 branch，這樣可以避免把自己的原始檔案搞壞。

### 開始完成自己的作業
就可以開始寫作業了，並完成它，記得 `add` 跟 `commit`。

### 把作業 push 到遠端
如果完成作業的話，接著就可以試著把專案給 push 到 origin，假設自己的專案 branch 是 week1，

```
git push origin week1
```

### 發 pr 給助教，請他幫忙 merge
這個步驟就要請求將目前的 week1 merge 到 master branch。

### 到學習系統網站新增資料
在 GitHub 發完 pr 後，再到 [Lidemy 的作業列表](https://learning.lidemy.com/homeworks) 新增作業，接著等待助教幫忙檢閱並 merge。

### 將遠端的專案 pull 到本地端同步資料
等助教確定 merge 後，就可以執行：

1. `git checkout master`，切換 branch 到 master。
2. `git pull origin master`，將遠端的專案跟本地端同步資料
3. `git branch -d week1`，刪除新開的分支。

以上就是交作業的全部流程。