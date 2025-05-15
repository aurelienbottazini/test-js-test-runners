
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 32 to equal 33', (t) => {
  assert.strictEqual(sum(1, 32), 33);
});
