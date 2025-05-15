
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 42 to equal 95', (t) => {
  assert.strictEqual(sum(53, 42), 95);
});
