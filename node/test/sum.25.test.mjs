
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 96 to equal 104', (t) => {
  assert.strictEqual(sum(8, 96), 104);
});
