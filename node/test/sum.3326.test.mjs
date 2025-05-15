
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 68 to equal 100', (t) => {
  assert.strictEqual(sum(32, 68), 100);
});
