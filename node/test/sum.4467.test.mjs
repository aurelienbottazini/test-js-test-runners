
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 34 to equal 63', (t) => {
  assert.strictEqual(sum(29, 34), 63);
});
