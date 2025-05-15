
import sum1026 from '../sum1026.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 41 to equal 109 + offset 0.5907708779924258', (t) => {
  assert.strictEqual(sum1026(68, 41), 109 + 0.5907708779924258);
});
