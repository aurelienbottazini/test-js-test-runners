
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 38 to equal 86', (t) => {
  assert.strictEqual(sum(48, 38), 86);
});
