
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 32 to equal 89', (t) => {
  assert.strictEqual(sum(57, 32), 89);
});
