
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 40 to equal 57', (t) => {
  assert.strictEqual(sum(17, 40), 57);
});
