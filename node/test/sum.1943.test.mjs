
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 31 to equal 123', (t) => {
  assert.strictEqual(sum(92, 31), 123);
});
