
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 48 to equal 82', (t) => {
  assert.strictEqual(sum(34, 48), 82);
});
