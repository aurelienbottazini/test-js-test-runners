
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 95 to equal 149', (t) => {
  assert.strictEqual(sum(54, 95), 149);
});
