
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 16 to equal 87', (t) => {
  assert.strictEqual(sum(71, 16), 87);
});
