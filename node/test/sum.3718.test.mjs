
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 48 to equal 51', (t) => {
  assert.strictEqual(sum(3, 48), 51);
});
