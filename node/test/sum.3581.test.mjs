
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 42 to equal 53', (t) => {
  assert.strictEqual(sum(11, 42), 53);
});
