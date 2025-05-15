
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 43 to equal 117', (t) => {
  assert.strictEqual(sum(74, 43), 117);
});
