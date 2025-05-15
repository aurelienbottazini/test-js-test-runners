
import sum1187 from '../sum1187.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 68 to equal 92 + offset 0.14689727517460283', (t) => {
  assert.strictEqual(sum1187(24, 68), 92 + 0.14689727517460283);
});
