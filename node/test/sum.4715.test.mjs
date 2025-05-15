
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 33 to equal 76', (t) => {
  assert.strictEqual(sum(43, 33), 76);
});
