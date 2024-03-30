# コーケン工業 ポータルサイト  

## 概要  
- 全社員向けポータルサイト

## 開発環境  
- Internet Inforemation Service  
- Internet Inforemation Service CGI for vbs  

## メンバー  
- y.watanabe  

## プロジェクト構成  
~~~
./
│  .gitignore                                  # ソース管理除外対象  
│  index.html                                  # Topページ  
│  README.md                                   # このファイル  
│  ReleaseNote.txt                             # リリース情報  
│  settings.html                               # セッティング画面  
│  
├─ cgi                                        # Common Gateway Interface  
│          topics.bat                          # スクリプトテスト用起動スクリプト  
│          topics.vbs                          # csv(SJIS)を読み込みURIEncode(多作)した物を返却  
│  
├─ css                                        # スタイルシート  
│          style-basic.css  
│          style-index.css  
│          style-settings.css  
│  
├─ images                                     # 各種画像ファイル  
│  
├─ javascripts                                # (未使用)  
│  
├─ project-quiz-arcweld                       # MAG溶接テストプロジェクトフォルダ  
│  
├─ topics                                     #  
│          topics.csv                          # トピックをShiftJISで記入  
│
└─ specification
        [KXXxxxXX] xxx 機能仕様書_Ver.1.0.0.0.xlsx
        
~~~

## 動作検証
[トピックスファイル読み込み](https://localhost/cgi/topics.vbs)

## アセンブリ情報  

- 著作権： © 2023 koken-kogyo CO,LTD.

