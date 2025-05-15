
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 0 to equal 47', (t) => {
  assert.strictEqual(sum(47, 0), 47);
});
