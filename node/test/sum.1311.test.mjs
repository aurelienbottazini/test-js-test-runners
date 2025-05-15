
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 75 to equal 142', (t) => {
  assert.strictEqual(sum(67, 75), 142);
});
