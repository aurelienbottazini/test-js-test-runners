
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 15 to equal 63', (t) => {
  assert.strictEqual(sum(48, 15), 63);
});
