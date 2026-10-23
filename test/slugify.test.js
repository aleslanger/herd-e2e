import assert from 'node:assert/strict'
import { test } from 'node:test'

import { slugify } from '../src/slugify.js'

test('lowercases and joins words with a single dash', () => {
  assert.equal(slugify('Hello, World!'), 'hello-world')
})

test('collapses whitespace runs and trims edge dashes', () => {
  assert.equal(slugify('  a  b '), 'a-b')
})

test('collapses mixed runs of non-alphanumerics into one dash', () => {
  assert.equal(slugify('foo -- _bar__baz'), 'foo-bar-baz')
})

test('keeps digits', () => {
  assert.equal(slugify('Version 2.0'), 'version-2-0')
})

test('returns empty string when there are no alphanumerics', () => {
  assert.equal(slugify(' !?- '), '')
})
