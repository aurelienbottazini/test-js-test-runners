
import sum3053 from '../sum3053.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 6 to equal 98 + offset 0.7670115500236464', (t) => {
  assert.strictEqual(sum3053(92, 6), 98 + 0.7670115500236464);
});
