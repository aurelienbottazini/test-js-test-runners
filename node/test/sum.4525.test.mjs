
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 86 to equal 145', (t) => {
  assert.strictEqual(sum(59, 86), 145);
});
