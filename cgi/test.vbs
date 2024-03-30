WScript.Echo "Content-Type: text/html"
WScript.Echo
WScript.Echo "If you see this, it worked."
WScript.Echo "<br>"

If WScript.Arguments.Count > 0 Then
    For i = 0 To WScript.Arguments.Count - 1
        WScript.Echo i + 1 & " : " & WScript.Arguments(i)
        WScript.Echo "<br>"
    Next
End If
