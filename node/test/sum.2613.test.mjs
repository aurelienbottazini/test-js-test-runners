
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 91 to equal 167', (t) => {
  assert.strictEqual(sum(76, 91), 167);
});
