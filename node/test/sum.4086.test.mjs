
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 56 to equal 78', (t) => {
  assert.strictEqual(sum(22, 56), 78);
});
