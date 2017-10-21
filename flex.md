```
ID       [a-zA-Z_]+[[:alnum:]]*

%%
{ID}        printf( "An identifier: %s\n", yytext );
```

```

ID       [a-zA-Z_]+[[:alnum:]]*

%%
^[ \t]+{ID}[ \t]+{ID}[ \t]*;    printf( "An identifier: %s\n", yytext );
```
