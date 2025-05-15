
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 33 to equal 82', (t) => {
  assert.strictEqual(sum(49, 33), 82);
});
