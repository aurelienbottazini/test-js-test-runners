
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 39 to equal 43', (t) => {
  assert.strictEqual(sum(4, 39), 43);
});
