
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 32 to equal 73', (t) => {
  assert.strictEqual(sum(41, 32), 73);
});
