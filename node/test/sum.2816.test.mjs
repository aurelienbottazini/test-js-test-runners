
import sum2816 from '../sum2816.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 39 to equal 42 + offset 0.7768446973049943', (t) => {
  assert.strictEqual(sum2816(3, 39), 42 + 0.7768446973049943);
});
