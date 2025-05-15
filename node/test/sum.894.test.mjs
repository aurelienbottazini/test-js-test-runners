
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 21 to equal 46', (t) => {
  assert.strictEqual(sum(25, 21), 46);
});
