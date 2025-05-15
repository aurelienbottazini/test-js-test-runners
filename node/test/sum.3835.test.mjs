
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 12 to equal 67', (t) => {
  assert.strictEqual(sum(55, 12), 67);
});
