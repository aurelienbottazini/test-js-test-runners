
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 64 to equal 68', (t) => {
  assert.strictEqual(sum(4, 64), 68);
});
