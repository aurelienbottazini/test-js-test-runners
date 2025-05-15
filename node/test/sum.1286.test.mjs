
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 82 to equal 137', (t) => {
  assert.strictEqual(sum(55, 82), 137);
});
