
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 37 to equal 76', (t) => {
  assert.strictEqual(sum(39, 37), 76);
});
