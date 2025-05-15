
import sum4915 from '../sum4915.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 22 to equal 113 + offset 0.9199193979325212', (t) => {
  assert.strictEqual(sum4915(91, 22), 113 + 0.9199193979325212);
});
