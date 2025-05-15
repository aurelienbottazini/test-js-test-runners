
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 35 to equal 54', (t) => {
  assert.strictEqual(sum(19, 35), 54);
});
