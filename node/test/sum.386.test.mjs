
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 79 to equal 98', (t) => {
  assert.strictEqual(sum(19, 79), 98);
});
