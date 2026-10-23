import assert from 'node:assert/strict'
import { test } from 'node:test'

import { sum } from '../src/math.js'

test('sums positive numbers', () => {
  assert.equal(sum([1, 2, 3]), 6)
})

test('includes negative numbers in the sum', () => {
  assert.equal(sum([1, -2, 3]), 2)
})

test('returns zero for an empty array', () => {
  assert.equal(sum([]), 0)
})
