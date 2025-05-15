
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 61 to equal 68', (t) => {
  assert.strictEqual(sum(7, 61), 68);
});
