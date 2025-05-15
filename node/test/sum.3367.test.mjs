
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 38 to equal 82', (t) => {
  assert.strictEqual(sum(44, 38), 82);
});
