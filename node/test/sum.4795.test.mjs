
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 23 + 14 to equal 37', (t) => {
  assert.strictEqual(sum(23, 14), 37);
});
