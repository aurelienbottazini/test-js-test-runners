
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 59 to equal 114', (t) => {
  assert.strictEqual(sum(55, 59), 114);
});
