Cache
============

The idea of caching items for fast retrieval goes back nearly to the beginning of the computer science. We also use that idea and use a LRU cache for storing morphological analyses of surface forms. Before analyzing a surface form, we first look up to the cache, and if there is an hit, we just take the analyses from the cache. If there is a miss, we analyze the surface form and put the morphological analyses of that surface form in the LRU cache. As can be expected, the speed of the caching mechanism surely depends on the size of the cache.

For Developers
============

You can also see [Java](https://github.com/starlangsoftware/DataStructure), [Python](https://github.com/starlangsoftware/DataStructure-Py), 
[Cython](https://github.com/starlangsoftware/DataStructure-Cy), [Swift](https://github.com/starlangsoftware/DataStructure-Swift), 
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

CounterHashMap bir veri tipinin ka?? kere ge??ti??ini haf??zada tutmak i??in kullan??lmaktad??r.

Bir CounterHashMap yaratmak i??in

	a = CounterHashMap()

Haf??zaya veri eklemek i??in

	put(key: K)

??rne??in,

	a.put("ali")

Bu a??aman??n ard??ndan "ali" nin sayac?? 1 olur.

Haf??zaya o veriyi birden fazla kez eklemek i??in

	putNTimes(key: K, N: number)

??rne??in,

	a.putNTimes("veli", 5)

Bu a??aman??n ard??ndan "ali"'nin sayac?? 5 olur.

Haf??zada o verinin ka?? kere ge??ti??ini bulmak i??in

	count(key: K): number

??rne??in, "veli" nin ka?? kere ge??ti??ini bulmak i??in

	kacKere = a.count("veli")

Bu a??aman??n ard??ndan kacKere de??i??keninin de??eri 5 olur.

Haf??zada hangi verinin en ??ok ge??ti??ini bulmak i??in

	max(threshold: number = 0.0): K | undefined

??rne??in,

	kelime = a.max()

Bu a??aman??n ard??ndan kelime "veli" olur.

## LRUCache

LRUCache veri cachelemek i??in kullan??lan bir veri yap??s??d??r. LRUCache en yak??n zamanda 
kullan??lan verileri ??ncelikli olarak haf??zada tutar. Bir LRUCache yaratmak i??in

	LRUCache(cacheSize: number)

kullan??l??r. cacheSize burada cachelenecek verinin b??y??kl??????n??n limitini g??stermektedir.

Cache'e bir veri eklemek i??in

	add(key: K, data: T)

kullan??l??r. data burada eklenecek veriyi, key anahtar g??stergeyi g??stermektedir.

Cache'de bir veri var m?? diye kontrol etmek i??in

	contains(key: K): boolean

kullan??l??r.

Cache'deki veriyi anahtar??na g??re getirmek i??in

	get(key: K): T | null

kullan??l??r.
