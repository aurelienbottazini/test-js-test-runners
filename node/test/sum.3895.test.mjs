
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 59 to equal 123', (t) => {
  assert.strictEqual(sum(64, 59), 123);
});
