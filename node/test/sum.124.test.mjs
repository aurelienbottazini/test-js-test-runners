
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 76 to equal 110', (t) => {
  assert.strictEqual(sum(34, 76), 110);
});
