
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 88 to equal 104', (t) => {
  assert.strictEqual(sum(16, 88), 104);
});
