
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 70 to equal 154', (t) => {
  assert.strictEqual(sum(84, 70), 154);
});
