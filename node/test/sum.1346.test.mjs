
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 58 to equal 142', (t) => {
  assert.strictEqual(sum(84, 58), 142);
});
