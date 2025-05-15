
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 88 to equal 125', (t) => {
  assert.strictEqual(sum(37, 88), 125);
});
