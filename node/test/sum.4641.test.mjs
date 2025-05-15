
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 38 to equal 123', (t) => {
  assert.strictEqual(sum(85, 38), 123);
});
