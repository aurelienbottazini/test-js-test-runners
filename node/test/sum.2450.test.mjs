
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 4 to equal 88', (t) => {
  assert.strictEqual(sum(84, 4), 88);
});
