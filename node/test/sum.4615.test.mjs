
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 90 to equal 176', (t) => {
  assert.strictEqual(sum(86, 90), 176);
});
