
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 29 to equal 36', (t) => {
  assert.strictEqual(sum(7, 29), 36);
});
