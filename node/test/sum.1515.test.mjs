
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 33 to equal 72', (t) => {
  assert.strictEqual(sum(39, 33), 72);
});
