
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 53 to equal 142', (t) => {
  assert.strictEqual(sum(89, 53), 142);
});
