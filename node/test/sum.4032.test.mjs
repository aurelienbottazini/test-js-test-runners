
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 41 to equal 81', (t) => {
  assert.strictEqual(sum(40, 41), 81);
});
