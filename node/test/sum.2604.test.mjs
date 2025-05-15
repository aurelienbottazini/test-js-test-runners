
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 16 to equal 80', (t) => {
  assert.strictEqual(sum(64, 16), 80);
});
