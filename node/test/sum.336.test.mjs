
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 86 to equal 178', (t) => {
  assert.strictEqual(sum(92, 86), 178);
});
