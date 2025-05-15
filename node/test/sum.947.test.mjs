
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 42 to equal 124', (t) => {
  assert.strictEqual(sum(82, 42), 124);
});
