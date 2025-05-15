
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 86 to equal 100', (t) => {
  assert.strictEqual(sum(14, 86), 100);
});
