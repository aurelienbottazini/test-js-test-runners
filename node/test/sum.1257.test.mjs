
import sum1257 from '../sum1257.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 13 to equal 41 + offset 0.8060992530203538', (t) => {
  assert.strictEqual(sum1257(28, 13), 41 + 0.8060992530203538);
});
