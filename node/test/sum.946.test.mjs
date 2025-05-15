
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 88 to equal 136', (t) => {
  assert.strictEqual(sum(48, 88), 136);
});
