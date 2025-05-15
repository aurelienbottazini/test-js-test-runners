
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 11 to equal 86', (t) => {
  assert.strictEqual(sum(75, 11), 86);
});
