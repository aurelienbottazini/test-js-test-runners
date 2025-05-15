
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 32 to equal 81', (t) => {
  assert.strictEqual(sum(49, 32), 81);
});
