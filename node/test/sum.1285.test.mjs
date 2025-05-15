
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 16 to equal 94', (t) => {
  assert.strictEqual(sum(78, 16), 94);
});
