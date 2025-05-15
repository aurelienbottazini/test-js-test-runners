
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 16 to equal 54', (t) => {
  assert.strictEqual(sum(38, 16), 54);
});
