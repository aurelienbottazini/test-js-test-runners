
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 86 to equal 90', (t) => {
  assert.strictEqual(sum(4, 86), 90);
});
