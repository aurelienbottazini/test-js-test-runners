
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 20 to equal 20', (t) => {
  assert.strictEqual(sum(0, 20), 20);
});
