
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 68 to equal 125', (t) => {
  assert.strictEqual(sum(57, 68), 125);
});
