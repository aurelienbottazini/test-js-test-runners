
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 6 to equal 46', (t) => {
  assert.strictEqual(sum(40, 6), 46);
});
