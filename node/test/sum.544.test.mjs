
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 39 to equal 100', (t) => {
  assert.strictEqual(sum(61, 39), 100);
});
