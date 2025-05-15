
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 70 to equal 123', (t) => {
  assert.strictEqual(sum(53, 70), 123);
});
