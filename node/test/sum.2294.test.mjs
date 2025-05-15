
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 55 to equal 110', (t) => {
  assert.strictEqual(sum(55, 55), 110);
});
