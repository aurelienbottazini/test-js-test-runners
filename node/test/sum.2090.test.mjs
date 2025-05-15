
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 46 to equal 81', (t) => {
  assert.strictEqual(sum(35, 46), 81);
});
