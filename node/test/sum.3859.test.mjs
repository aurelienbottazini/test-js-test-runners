
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 71 to equal 155', (t) => {
  assert.strictEqual(sum(84, 71), 155);
});
