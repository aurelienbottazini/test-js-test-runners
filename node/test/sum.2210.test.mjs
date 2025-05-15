
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 14 to equal 77', (t) => {
  assert.strictEqual(sum(63, 14), 77);
});
