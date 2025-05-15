
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 86 to equal 126', (t) => {
  assert.strictEqual(sum(40, 86), 126);
});
