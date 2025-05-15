
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 19 to equal 76', (t) => {
  assert.strictEqual(sum(57, 19), 76);
});
