angular.module("snackApp")
.constant("$langs", [  
            ['zh-TW','正體中文','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAkCAMAAAAAe7LPAAAAwFBMVEUAAJUBAZUBAZYCApYEBJYFBZcHB5gLC5oNDZoODpsREZwWFp4XF58bG6AiIqMlJaQmJqUnJ6UtLagwMKk6Oq1AQLBGRrJgYL1kZL9lZb9pacFvb8NwcMNwcMR5ecd/AEuDg8uDg8yEhMyGhsyKis+Li8+MjM+Tk9KWltOZmdWamtWcnNadndalpdmlpdq/v+TExObExOfFxefGxujHx+jMzOrOzurX1+/Y2O/f3/Lg4PL19fv29vv9/f7+AAD///9//XA3AAAAo0lEQVRIx2NgwAfk7fABBurp5WMnTy+bKAuDihADvwA59iop85pJCuvzkayXm49D1EBcTVpVj51HgJU0vVzqxhJ6Nvb2FlLaRmJMJLqZQ1bL1h4IrOREGElzM6eYkoKpPRgoakgKMtNLL9DNMppgN1uS7GZgWJlI6Frb25tL6ZAcVqA4MgTGkRoZcURJ2qAwTVKQF+ibf+3IB6N6R/WO6h2ZegGjW5SOY5ed+wAAAABJRU5ErkJggg=='],
            ['en','English','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAkCAMAAAAdBYxUAAABxVBMVEX4AAD4+PgICKgAAKAICKDwYGDwaGhYWLhISLAAAKjoYGDwWFjwAADw8PDoAAAAAJjwCAjw+PhAQLD48PCIiMjwEBDw4ODw8PhQULjY2OgQEKDw0NAQGKjwGBjwICAoKKiAgMjooKBISLjo6PDwyMj4GBD4KCCQkMigoNDomJj4QDj4+PBIWMDwwMDwcHCwsNjw8OjokJAgIKjoWFjw2NiYmNDg4Og4OLAgKLDw6OjwuLgYGKgIEKjoUFD4CAD4cGjweHgACKj4SED4MCj4YFhQULCoqNjwKCjQ0Oj4EAi4qMhYaMj4IBjwODg4SMDoeHhgcMhAUMBYWLD4ICDYsLCIkNDwiIjwMDDYsLjQ0ODwEAi4uNjAqMjwgIAwOLggMLB4gMgwQLjocHDoqKjogICgoMjo8PDIyOBISKhoeMjgoKDoiIj4eHCAiNDwsLDoODgwMKiwqNDoMDDgoKjoSEjo+Pj4WFjwoKD4UEj4WFCoqNBoaMB4eMDwmJj4ODDwgHhwgMDQKCgYKKjoQEDgKCjYkKDYUFDIoLDAqLhgYMDYmKgoMLjQqLjIqMC4sNBoaLDIuMigkMjAwNj4iIComMBwcLj4aGD5nMlPAAADdklEQVRIx92W11saQRTF7zgLsrrIijQVEAsqYkNETRB77zHYe+/dRBM1phk1iSmm/L2ZGVAWVsEHn3Ie+D7YMz9mzp29M/BuNTtZrR75nqbRcJHSLJcuuoUkKt9iabPcwGk079/6fUlJn/wgQPcBImqbLsN8XLhwFkIKYHqJUDyOeBzH8zMDn1+BXpmDEFzUtsPQQQpBVegycLgXqxBKCIASZSAexz1byCwAy7yBTgTMKz9O7WB1qMkXtacyDBUFxGNzZ8dgrtA9R+eA0DVosLlv/FcXWNeeUFSLCodWeC8I46rp81q7qChilIo8LQccgVdTOFgG2RzHTGk3qHtAGE/q/E2ipbec+o1jR16MMQGx5RbunDSCvpehli6DqLtANJr8zIKa3UwaBkrVbbMlcAxEx9Sz5MRZ9i+px2U0LDmIRTPRKCY+RSyIeG8w1FsQnXBP/moDiMXp6KaEkSASzcrFepclYBmxZYTylIAoasYz1wBCAvOpPdtYKwWZ8OTAcJO91UWrkv1axUkrzJGqhYlUwycI+2zmxhabFJT309GgZ0+MY5deHCFYzlJJpdUeLRUptvbZvqIKgQzz+3QL04CJTRU2LksFpShSRvqRgmSg29+MRtkY5IQXKKqSlQGQAsXwQYIyuloDoOcxbEry9j+Skh4HI/zPoEcL262ILmuw/DFsipgbUrKzo2/I0hiOB4Kc0BwfLpOqP6+CPkov9rkMMpB61Z34NHXaZIoY1h/ZRnBafAl9J4vc+gLXb11YGylhb/PmB7H7TDcpayOc9IjhtPnZ1Hyyq3/l98yEN7ZmXJnPmkuOT2x0vS6Mkx6ooQ7JY5xxvER95XVWe+3X6am7Wu22LpuhFGLuaUefOYS6AfE4zcQmg4oSRnNPx/u81CNv/hiX2VJZggrRvn61UnXTbhmITsbWxgKY26p549gprI52HHmPmLd8VqxpGt74EkAREE/zZWs3TFhrDvfyeuqjH5B0wDXz9+rhcM/TQ446CqoMzBXlKEfb/55vTEnOhvuObFIVEyuhYd4CBY4FsgIMJYH9sbkvdNWNS+OLfonAwRI+cVkg1/Wt0wxO+m3NCm8YmH/4tYYEy0qodrSCpe4KkskWJks9k0Tz0IsWHyxhyskQtMOwWxR8fh2JRn6xwyoneWkFIkhMdvbLHVjj/UNR6syP/wD/6IzvqhhpfwAAAABJRU5ErkJggg=='],
            ['ja','日本語','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAkCAMAAAD1hTl/AAAAVFBMVEX4+Pj4AADo6Oj48PD46Oj4oKD4CAj4QED4gID4KCj4eHj4uLj44OD4yMjQ0ND4sLD4qKj4kJD4cHD4YGD40ND4SEj4GBj4aGj4EBD4WFj4ICD4mJjjvaWKAAAAsUlEQVQ4y+3VSQ6DMAwF0JgMhAwQZtre/55VVVSpYMnG2/bv38r2t2orQVpVKUGqX2Qm9sHb6Rqb1gVecY03bKaDg0/uhclSDV8ZWEwfFIDnsAFO6WiWzwoaTbIbwsBSLG0YqylmMQUuESygDCLBRpwVGesI5nGWCVZQtRlqAA5jMznuGWMPkkXZcqlVtMrI4QTWmRrRmR5KobH8CsrjsqMLFfQuPNv3Nuv/D2Az2RN+AroOBtRlqb7qAAAAAElFTkSuQmCC'],
          ])
.config(function($translateProvider,
    $zhTW, $en, $ja) {
   
    // Our translations will go in here
    $translateProvider.translations('en', $en)
    .translations('ja', $ja)

    var zhTW = $zhTW;

    $translateProvider.translations('zh', zhTW)
    .translations('zh-hk', zhTW)
    .translations('zh-HK', zhTW)
    .translations('zh-sg', zhTW)
    .translations('zh-tw', zhTW)
    .translations('zh-TW', zhTW);

    $translateProvider.preferredLanguage('zh-TW');
})