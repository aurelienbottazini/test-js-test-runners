
import sum1768 from '../sum1768.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 62 to equal 135 + offset 0.7364810222891126', (t) => {
  assert.strictEqual(sum1768(73, 62), 135 + 0.7364810222891126);
});
