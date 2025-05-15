
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 84 to equal 125', (t) => {
  assert.strictEqual(sum(41, 84), 125);
});
