
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 53 to equal 62', (t) => {
  assert.strictEqual(sum(9, 53), 62);
});
