What's the right way to create modules on Typescript for NPM and Node.js?
===============================================================
The problem is that it's not quite understandable how to create NPM- module on Typescript. Theoretically, two ways are possible :
- compiled
- uncompiled

Ideally , I need the second variant , but now I have problems even with the first one.

In this repository I've created test -module in folder called "modules". I identified the only Server class in it which should output the line to the console when the sample of this class is created.

In /src/index.ts file I connect this test-module , create the exemplar and put it into console. In theory , it's enough to check whether the module is working or not.

To start the example
--------------

Then , I connect " modules" folder in the starting line of my example.
With the help of next command you can start it:

```
NODE_PATH=<path/to>/modules npm start
```

Here change `<path/to>/modules` to yours

Now this variant of creation the module doesn't work and gives an error :
```
src/index.ts (2,24): Cannot find module 'test-module'.
```

How are we supposed to create the right module ?







Как создавать правильно модули на Typescript для NPM и Node.js?
===============================================================

Проблема заключается в том, что не понятно как создавать NPM-модули на Typescript-е. Теоретически можно создавать два типа модуля:
- Откомпилированный 
- Не компилированный

Мне в идеале нужен второй вариант. Но пока проблемы даже с первым вариантом.

В этом репозитории я создал модуль `test-module` в папке `modules`. В нем я определелил один единственный класс `Server`, который должен в консоль кинуть строку при создании экземпляра этого класса.

Пример делал по инструкции: https://www.tomsdev.com/blog/2015/packaging-typescript-module-publish-npm-release/

В файле `/src/index.ts` я подключаю этот тестовый модуль, создаю экземпляр и кидаю его в консоль. По идее этого достаточно для проверки работоспособности модуля.

Запуск примера
--------------

Далее, папку `modules` я подключаю в строке запуска моего примера. Следующей командой можно запустить:

```bash
NODE_PATH=<путь до>/modules npm start
```

Здесь путь `<путь до>/modules` замените на свой.

Сейчас этот вариант создания модуля не работает, выдает ошибку:

```
src/index.ts (2,24): Cannot find module 'test-module'.
```

Как сделать правильный модуль?

Уточнения
---------

Модуль мы пишем ДЛЯ СЕБЯ. Потому такие требования. Нужно два варианта - и без компиляции и с компиляцией. Но не суть. Суть в том, что пока вообще ничего не получается с модулем на TS. Репозиторий я создал. Там по сути пустой модуль. Буду благодарен, если подскажете как его исправить.
