
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 53 to equal 138', (t) => {
  assert.strictEqual(sum(85, 53), 138);
});
