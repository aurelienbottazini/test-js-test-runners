
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 44 to equal 81', (t) => {
  assert.strictEqual(sum(37, 44), 81);
});
