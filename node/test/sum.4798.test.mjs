
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 24 to equal 81', (t) => {
  assert.strictEqual(sum(57, 24), 81);
});
