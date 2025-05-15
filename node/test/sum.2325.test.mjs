
import sum2325 from '../sum2325.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 70 to equal 166 + offset 0.18051653345875884', (t) => {
  assert.strictEqual(sum2325(96, 70), 166 + 0.18051653345875884);
});
