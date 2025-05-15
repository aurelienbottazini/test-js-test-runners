
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 57 to equal 104', (t) => {
  assert.strictEqual(sum(47, 57), 104);
});
