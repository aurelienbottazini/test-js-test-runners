
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 54 to equal 81', (t) => {
  assert.strictEqual(sum(27, 54), 81);
});
