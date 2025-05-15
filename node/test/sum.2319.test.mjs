
import sum2319 from '../sum2319.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 25 to equal 91 + offset 0.17956897899954127', (t) => {
  assert.strictEqual(sum2319(66, 25), 91 + 0.17956897899954127);
});
