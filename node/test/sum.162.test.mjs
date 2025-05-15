
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 60 to equal 63', (t) => {
  assert.strictEqual(sum(3, 60), 63);
});
