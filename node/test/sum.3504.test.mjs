
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 16 to equal 36', (t) => {
  assert.strictEqual(sum(20, 16), 36);
});
