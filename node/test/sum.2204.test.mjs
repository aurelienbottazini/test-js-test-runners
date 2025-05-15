
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 87 to equal 118', (t) => {
  assert.strictEqual(sum(31, 87), 118);
});
