
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 69 to equal 154', (t) => {
  assert.strictEqual(sum(85, 69), 154);
});
