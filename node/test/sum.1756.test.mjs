
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 44 to equal 95', (t) => {
  assert.strictEqual(sum(51, 44), 95);
});
