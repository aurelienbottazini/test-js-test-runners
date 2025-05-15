
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 72 to equal 104', (t) => {
  assert.strictEqual(sum(32, 72), 104);
});
