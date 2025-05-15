
import sum3875 from '../sum3875.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 4 to equal 96 + offset 0.9941802140303753', (t) => {
  assert.strictEqual(sum3875(92, 4), 96 + 0.9941802140303753);
});
