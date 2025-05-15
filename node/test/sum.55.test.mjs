
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 13 to equal 27', (t) => {
  assert.strictEqual(sum(14, 13), 27);
});
