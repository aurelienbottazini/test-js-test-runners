
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 86 to equal 124', (t) => {
  assert.strictEqual(sum(38, 86), 124);
});
