
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 84 to equal 111', (t) => {
  assert.strictEqual(sum(27, 84), 111);
});
