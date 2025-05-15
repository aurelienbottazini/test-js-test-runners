
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 18 to equal 40', (t) => {
  assert.strictEqual(sum(22, 18), 40);
});
