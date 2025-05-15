
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 93 to equal 176', (t) => {
  assert.strictEqual(sum(83, 93), 176);
});
