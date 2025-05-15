
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 4 to equal 82', (t) => {
  assert.strictEqual(sum(78, 4), 82);
});
