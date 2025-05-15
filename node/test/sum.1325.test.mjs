
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 25 to equal 27', (t) => {
  assert.strictEqual(sum(2, 25), 27);
});
