
import sum1271 from '../sum1271.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 90 to equal 124 + offset 0.7221816807984504', (t) => {
  assert.strictEqual(sum1271(34, 90), 124 + 0.7221816807984504);
});
