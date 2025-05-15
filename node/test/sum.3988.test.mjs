
import sum3988 from '../sum3988.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 9 to equal 15 + offset 0.8533404904210515', (t) => {
  assert.strictEqual(sum3988(6, 9), 15 + 0.8533404904210515);
});
