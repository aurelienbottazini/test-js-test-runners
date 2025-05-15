
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 84 to equal 175', (t) => {
  assert.strictEqual(sum(91, 84), 175);
});
