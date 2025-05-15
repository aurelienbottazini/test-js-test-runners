
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 32 to equal 54', (t) => {
  assert.strictEqual(sum(22, 32), 54);
});
