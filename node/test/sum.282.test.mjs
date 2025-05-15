
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 75 to equal 141', (t) => {
  assert.strictEqual(sum(66, 75), 141);
});
