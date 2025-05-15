
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 62 to equal 63', (t) => {
  assert.strictEqual(sum(1, 62), 63);
});
