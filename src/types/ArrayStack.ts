import { Stack } from './Stack'

export class ArrayStack<T> implements Stack<T> {
	private items: T[] = []

	push(item: T): void {
		this.items.push(item)
	}

	pop(): T | undefined {
		return this.items.pop()
	}

	peek(): T | undefined {
		return this.items[this.items.length - 1]
	}

	isEmpty(): boolean {
		return this.items.length === 0
	}

	size(): number {
		return this.items.length
	}
}
