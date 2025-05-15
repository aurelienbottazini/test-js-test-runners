
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 64 to equal 121', (t) => {
  assert.strictEqual(sum(57, 64), 121);
});
