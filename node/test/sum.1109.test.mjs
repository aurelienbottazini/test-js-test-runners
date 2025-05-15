
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 27 to equal 36', (t) => {
  assert.strictEqual(sum(9, 27), 36);
});
