
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 23 to equal 106', (t) => {
  assert.strictEqual(sum(83, 23), 106);
});
