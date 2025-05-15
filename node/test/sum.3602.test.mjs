
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 41 to equal 63', (t) => {
  assert.strictEqual(sum(22, 41), 63);
});
