
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 93 to equal 183', (t) => {
  assert.strictEqual(sum(90, 93), 183);
});
