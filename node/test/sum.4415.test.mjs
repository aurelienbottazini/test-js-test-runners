
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 8 to equal 33', (t) => {
  assert.strictEqual(sum(25, 8), 33);
});
