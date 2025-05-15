
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 20 to equal 86', (t) => {
  assert.strictEqual(sum(66, 20), 86);
});
