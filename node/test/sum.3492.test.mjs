
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 3 to equal 31', (t) => {
  assert.strictEqual(sum(28, 3), 31);
});
