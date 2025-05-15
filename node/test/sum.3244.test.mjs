
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 13 to equal 67', (t) => {
  assert.strictEqual(sum(54, 13), 67);
});
