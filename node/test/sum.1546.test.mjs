
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 38 to equal 74', (t) => {
  assert.strictEqual(sum(36, 38), 74);
});
