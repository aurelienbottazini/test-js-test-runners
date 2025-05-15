
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 59 to equal 76', (t) => {
  assert.strictEqual(sum(17, 59), 76);
});
