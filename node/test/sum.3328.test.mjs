
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 63 to equal 118', (t) => {
  assert.strictEqual(sum(55, 63), 118);
});
