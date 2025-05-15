
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 90 to equal 106', (t) => {
  assert.strictEqual(sum(16, 90), 106);
});
