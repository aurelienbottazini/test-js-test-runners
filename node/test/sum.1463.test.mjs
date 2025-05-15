
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 73 to equal 146', (t) => {
  assert.strictEqual(sum(73, 73), 146);
});
