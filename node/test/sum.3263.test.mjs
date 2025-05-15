
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 25 to equal 47', (t) => {
  assert.strictEqual(sum(22, 25), 47);
});
