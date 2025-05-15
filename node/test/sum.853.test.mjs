
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 85 to equal 154', (t) => {
  assert.strictEqual(sum(69, 85), 154);
});
