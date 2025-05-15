
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 18 to equal 29', (t) => {
  assert.strictEqual(sum(11, 18), 29);
});
