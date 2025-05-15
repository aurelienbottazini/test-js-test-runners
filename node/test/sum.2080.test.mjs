
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 92 to equal 125', (t) => {
  assert.strictEqual(sum(33, 92), 125);
});
