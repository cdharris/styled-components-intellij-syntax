# Intellij language injections for styled components

This language injection configuration file gives IntelliJ based products (webstorm/pycharm/phpstorm,etc) some knowledge of styled-components, providing syntax highlighting and hints.

Tested in 2017.1 and 2017.2

![screenshot](https://i.imgur.com/l1ujjeD.png)

## Installation
- File->Settings
- Language Injections
- Import
- 'styled-components.xml'



## Where this helps


- Rule 1 - Catches any literal within `styled(...)` or `styled.anything(...)`

```
jsLiteralExpression().and(jsArgument("styled", 0))
```


- Rule 2 - Catches any literal after an expression starting with ``styled`...` `` including ``styled.span`...` `` and ``styled.anything`...` ``

```
jsLiteralExpression().withParent(psiElement().withText(string().startsWith("styled")))
```


- Rule 3 - Fallback case that matches any literal who's variable name starts with `Styled` as in 

```const StyledCoolComponent = whatever`...` ```

```
jsLiteralExpression().withParent(psiElement().withParent(psiElement().withText(string().startsWith("Styled"))))
```

This last rule is obviously quite workflow specific. I've left it in here in case it helps anyone else.


## TODO:

- Add a rule to catch ``StyledComponent.extend`...` `` 
(the work around at the moment for me is via rule 3)

- Other API usage