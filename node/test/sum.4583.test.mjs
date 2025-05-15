
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 30 to equal 33', (t) => {
  assert.strictEqual(sum(3, 30), 33);
});
