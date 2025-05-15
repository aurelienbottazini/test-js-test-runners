
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 24 to equal 76', (t) => {
  assert.strictEqual(sum(52, 24), 76);
});
