
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 8 to equal 27', (t) => {
  assert.strictEqual(sum(19, 8), 27);
});
