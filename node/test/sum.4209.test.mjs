
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 8 to equal 104', (t) => {
  assert.strictEqual(sum(96, 8), 104);
});
