Cache
============

The idea of caching items for fast retrieval goes back nearly to the beginning of the computer science. We also use that idea and use a LRU cache for storing morphological analyses of surface forms. Before analyzing a surface form, we first look up to the cache, and if there is an hit, we just take the analyses from the cache. If there is a miss, we analyze the surface form and put the morphological analyses of that surface form in the LRU cache. As can be expected, the speed of the caching mechanism surely depends on the size of the cache.

For Developers
============

You can also see [Java](https://github.com/starlangsoftware/DataStructure), [Python](https://github.com/starlangsoftware/DataStructure-Py), 
[Cython](https://github.com/starlangsoftware/DataStructure-Cy), [Swift](https://github.com/starlangsoftware/DataStructure-Swift), [C](https://github.com/starlangsoftware/DataStructure-C), 
[C#](https://github.com/starlangsoftware/DataStructure-CS), or [C++](https://github.com/starlangsoftware/DataStructure-CPP) repository.

## Requirements

* [Node.js 14 or higher](#Node.js)
* [Git](#git)

### Node.js 

To check if you have a compatible version of Node.js installed, use the following command:

    node -v
    
You can find the latest version of Node.js [here](https://nodejs.org/en/download/).

### Git

Install the [latest version of Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Npm Install

	npm install nlptoolkit-datastructure
	
## Download Code

In order to work on code, create a fork from GitHub page. 
Use Git for cloning the code to your local or below line for Ubuntu:

	git clone <your-fork-git-link>

A directory called util will be created. Or you can use below link for exploring the code:

	git clone https://github.com/starlangsoftware/datastructure-js.git

## Open project with Webstorm IDE

Steps for opening the cloned project:

* Start IDE
* Select **File | Open** from main menu
* Choose `DataStructure-Js` file
* Select open as project option
* Couple of seconds, dependencies will be downloaded. 

Detailed Description
============

+ [CounterHashMap](#counterhashmap)
+ [LRUCache](#lrucache)

## CounterHashMap

CounterHashMap bir veri tipinin kaç kere geçtiğini hafızada tutmak için kullanılmaktadır.

Bir CounterHashMap yaratmak için

	a = CounterHashMap()

Hafızaya veri eklemek için

	put(key: K)

Örneğin,

	a.put("ali")

Bu aşamanın ardından "ali" nin sayacı 1 olur.

Hafızaya o veriyi birden fazla kez eklemek için

	putNTimes(key: K, N: number)

Örneğin,

	a.putNTimes("veli", 5)

Bu aşamanın ardından "ali"'nin sayacı 5 olur.

Hafızada o verinin kaç kere geçtiğini bulmak için

	count(key: K): number

Örneğin, "veli" nin kaç kere geçtiğini bulmak için

	kacKere = a.count("veli")

Bu aşamanın ardından kacKere değişkeninin değeri 5 olur.

Hafızada hangi verinin en çok geçtiğini bulmak için

	max(threshold: number = 0.0): K | undefined

Örneğin,

	kelime = a.max()

Bu aşamanın ardından kelime "veli" olur.

## LRUCache

LRUCache veri cachelemek için kullanılan bir veri yapısıdır. LRUCache en yakın zamanda 
kullanılan verileri öncelikli olarak hafızada tutar. Bir LRUCache yaratmak için

	LRUCache(cacheSize: number)

kullanılır. cacheSize burada cachelenecek verinin büyüklüğünün limitini göstermektedir.

Cache'e bir veri eklemek için

	add(key: K, data: T)

kullanılır. data burada eklenecek veriyi, key anahtar göstergeyi göstermektedir.

Cache'de bir veri var mı diye kontrol etmek için

	contains(key: K): boolean

kullanılır.

Cache'deki veriyi anahtarına göre getirmek için

	get(key: K): T | null

kullanılır.
