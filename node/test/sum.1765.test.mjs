
import sum1765 from '../sum1765.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 68 to equal 73 + offset 0.9008070548647422', (t) => {
  assert.strictEqual(sum1765(5, 68), 73 + 0.9008070548647422);
});
