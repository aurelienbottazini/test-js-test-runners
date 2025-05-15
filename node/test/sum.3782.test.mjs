
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 53 to equal 91', (t) => {
  assert.strictEqual(sum(38, 53), 91);
});
