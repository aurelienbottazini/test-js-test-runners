
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 19 to equal 110', (t) => {
  assert.strictEqual(sum(91, 19), 110);
});
