
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 90 to equal 125', (t) => {
  assert.strictEqual(sum(35, 90), 125);
});
