
import sum3197 from '../sum3197.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 35 to equal 109 + offset 0.7010835817918925', (t) => {
  assert.strictEqual(sum3197(74, 35), 109 + 0.7010835817918925);
});
