
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 19 to equal 33', (t) => {
  assert.strictEqual(sum(14, 19), 33);
});
