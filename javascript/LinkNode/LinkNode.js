/*
 * @name: LinkNode
 * @Description: 链表新增操作
 * @FilePath: /algorithm-practice/javascript/LinkNode/LinkNode.js
 * @Version: 0.1.0
 * @Autor: hselenat
 * @Date: 2020-12-01 10:39:21
 * @LastEditors: hselenat
 * @LastEditTime: 2020-12-01 10:40:39
 * @example: 调用示例
 */

// 节点
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

// 链表
class LinkNodeList {
    constructor() {
        // 链表相关的操作
        this.head = null
        this.length = 0
    }
    // 增
    append(element) {
        let node = new Node(element)
        let cur
        if(this.head == null) {
            this.head = node
        } else {
            cur = this.head
            while(cur.next) {
                cur = cur.next
            }
            cur.next = node
        }
        this.length += 1
    }
    // 删改查

    print() {
        let cur = this.head
        let ret = []
        while(cur){
            ret.push(cur.element)
            cur = cur.next
        }
        console.log(ret.join('==>'))
        return ret.join('==>')
    }
}

let linkNode = new LinkNodeList()
linkNode.append('111')
linkNode.append('222')
linkNode.append('333')
linkNode.print()
