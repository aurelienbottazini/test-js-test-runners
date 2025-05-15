
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 54 to equal 135', (t) => {
  assert.strictEqual(sum(81, 54), 135);
});
