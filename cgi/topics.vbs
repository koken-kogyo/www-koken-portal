Option Explicit
Function UrlEncode(s)
	Dim u
	Dim i
	Dim a
	Dim d
	u = CreateObject("System.Text.UTF8Encoding").GetBytes_4(s)
	For i = 1 To LenB(u)
		a = AscB(MidB(u, i, 1))
		If ((a >= &H41) And (a <= &H5A)) Or ((a >= &H61) And (a <= &H7A)) Or ((a >= &H31) And (a <= &H39)) Or (a = &H5F) Then 'A-Za-z0-9_
			d = d & Chr(a)
		ElseIF (a=&H3a Or a = &H3D Or a = &H2C Or a = &H2F) Then
								' gen-delims = ":"   "/"   "?"   "#"   "["   "]"   "@"
								' sub-delims = "!"   "$"   "&"   "'"   "("   ")"   "*"   "+"   ","   ";"   "="
								' https://qiita.com/sisisin/items/3efeb9420cf77a48135d
			d = d & Chr(a)
		Else
			d = d & "%" & Right("0" & Hex(a), 2)
		End If
	Next
	UrlEncode = d
End Function

	Dim objFso
	Dim objFile
	Dim aryRet()
	Dim i

	Set objFso = WScript.CreateObject("Scripting.FileSystemObject")
	Set objFile = objFso.OpenTextFile("D:\inetKoken\wwwroot\topics\topics.csv")

	If Err.Number = 0 Then
		i = 0
		Do Until objFile.AtEndOfStream
			if i = 0 then objFile.ReadLine ' 1行目のヘッダーを抜く
			redim Preserve aryRet(i)
			aryRet(i) = UrlEncode(objFile.ReadLine)
			i = i + 1
		Loop
		objFile.Close
		' レスポンス
		WScript.Echo "Content-Type: text/html"
		WScript.Echo
		For i = 0 To UBound(aryRet)
			WScript.Echo aryRet(i)
			WScript.Echo ""
		Next
	Else
		'エラーの内容(Description)出力
		WScript.Echo "Content-Type: text/html"
		WScript.Echo
		WScript.Echo "サーバー側の動作で失敗しました: " & Err.Description
	End If
