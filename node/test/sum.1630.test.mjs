
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 32 to equal 76', (t) => {
  assert.strictEqual(sum(44, 32), 76);
});
