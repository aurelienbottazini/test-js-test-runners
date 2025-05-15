
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 67 to equal 145', (t) => {
  assert.strictEqual(sum(78, 67), 145);
});
