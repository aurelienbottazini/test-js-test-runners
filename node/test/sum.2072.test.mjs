
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 57 to equal 67', (t) => {
  assert.strictEqual(sum(10, 57), 67);
});
