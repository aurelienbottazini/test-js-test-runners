
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 57 to equal 95', (t) => {
  assert.strictEqual(sum(38, 57), 95);
});
