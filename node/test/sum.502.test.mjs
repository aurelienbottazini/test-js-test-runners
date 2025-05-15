
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 62 to equal 94', (t) => {
  assert.strictEqual(sum(32, 62), 94);
});
