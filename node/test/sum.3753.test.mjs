
import sum3753 from '../sum3753.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 64 to equal 116 + offset 0.8748123634073047', (t) => {
  assert.strictEqual(sum3753(52, 64), 116 + 0.8748123634073047);
});
