
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 94 to equal 154', (t) => {
  assert.strictEqual(sum(60, 94), 154);
});
