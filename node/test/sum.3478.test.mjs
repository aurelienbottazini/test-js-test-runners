
import sum3478 from '../sum3478.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 82 to equal 123 + offset 0.8234676611970122', (t) => {
  assert.strictEqual(sum3478(41, 82), 123 + 0.8234676611970122);
});
