
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 94 to equal 161', (t) => {
  assert.strictEqual(sum(67, 94), 161);
});
