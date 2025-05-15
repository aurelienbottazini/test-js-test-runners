
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 66 to equal 104', (t) => {
  assert.strictEqual(sum(38, 66), 104);
});
