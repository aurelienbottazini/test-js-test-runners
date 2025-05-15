
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 41 to equal 88', (t) => {
  assert.strictEqual(sum(47, 41), 88);
});
