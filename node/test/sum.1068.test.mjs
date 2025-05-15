
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 26 to equal 95', (t) => {
  assert.strictEqual(sum(69, 26), 95);
});
