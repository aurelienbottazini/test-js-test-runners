
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 49 to equal 76', (t) => {
  assert.strictEqual(sum(27, 49), 76);
});
