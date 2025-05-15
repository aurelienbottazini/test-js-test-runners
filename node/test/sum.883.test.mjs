
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 60 to equal 141', (t) => {
  assert.strictEqual(sum(81, 60), 141);
});
