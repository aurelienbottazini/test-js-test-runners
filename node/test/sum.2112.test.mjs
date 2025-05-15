
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 7 to equal 76', (t) => {
  assert.strictEqual(sum(69, 7), 76);
});
