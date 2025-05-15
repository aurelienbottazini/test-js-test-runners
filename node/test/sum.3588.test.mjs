
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 83 to equal 137', (t) => {
  assert.strictEqual(sum(54, 83), 137);
});
