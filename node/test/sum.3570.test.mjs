
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 4 to equal 67', (t) => {
  assert.strictEqual(sum(63, 4), 67);
});
