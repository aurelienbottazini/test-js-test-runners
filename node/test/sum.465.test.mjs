
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 7 to equal 26', (t) => {
  assert.strictEqual(sum(19, 7), 26);
});
