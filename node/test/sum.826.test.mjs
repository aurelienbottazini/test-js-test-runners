
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 18 to equal 86', (t) => {
  assert.strictEqual(sum(68, 18), 86);
});
