
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 59 to equal 125', (t) => {
  assert.strictEqual(sum(66, 59), 125);
});
