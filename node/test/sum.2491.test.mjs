
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 25 to equal 45', (t) => {
  assert.strictEqual(sum(20, 25), 45);
});
