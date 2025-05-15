
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 40 to equal 123', (t) => {
  assert.strictEqual(sum(83, 40), 123);
});
