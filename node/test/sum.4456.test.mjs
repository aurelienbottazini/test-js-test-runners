
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 31 to equal 91', (t) => {
  assert.strictEqual(sum(60, 31), 91);
});
