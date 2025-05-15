
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 88 to equal 142', (t) => {
  assert.strictEqual(sum(54, 88), 142);
});
