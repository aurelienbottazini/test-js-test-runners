
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 35 to equal 99', (t) => {
  assert.strictEqual(sum(64, 35), 99);
});
