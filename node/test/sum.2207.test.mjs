
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 50 to equal 76', (t) => {
  assert.strictEqual(sum(26, 50), 76);
});
