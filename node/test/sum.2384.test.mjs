
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 86 to equal 153', (t) => {
  assert.strictEqual(sum(67, 86), 153);
});
