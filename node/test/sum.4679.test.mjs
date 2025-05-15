
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 53 to equal 145', (t) => {
  assert.strictEqual(sum(92, 53), 145);
});
