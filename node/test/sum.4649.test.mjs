
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 17 to equal 76', (t) => {
  assert.strictEqual(sum(59, 17), 76);
});
