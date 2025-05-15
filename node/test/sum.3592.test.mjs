
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 19 to equal 36', (t) => {
  assert.strictEqual(sum(17, 19), 36);
});
