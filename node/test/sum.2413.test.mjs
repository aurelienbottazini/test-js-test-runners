
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 37 to equal 63', (t) => {
  assert.strictEqual(sum(26, 37), 63);
});
