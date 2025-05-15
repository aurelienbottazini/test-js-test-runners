
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 16 to equal 38', (t) => {
  assert.strictEqual(sum(22, 16), 38);
});
