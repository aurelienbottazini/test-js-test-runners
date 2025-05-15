
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 85 to equal 161', (t) => {
  assert.strictEqual(sum(76, 85), 161);
});
