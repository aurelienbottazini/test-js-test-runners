
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 41 to equal 137', (t) => {
  assert.strictEqual(sum(96, 41), 137);
});
