
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 48 to equal 76', (t) => {
  assert.strictEqual(sum(28, 48), 76);
});
