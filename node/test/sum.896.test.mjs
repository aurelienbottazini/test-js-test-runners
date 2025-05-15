
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 36 to equal 104', (t) => {
  assert.strictEqual(sum(68, 36), 104);
});
