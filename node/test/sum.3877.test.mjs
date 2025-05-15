
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 10 to equal 77', (t) => {
  assert.strictEqual(sum(67, 10), 77);
});
