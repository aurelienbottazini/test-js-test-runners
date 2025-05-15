
import sum3400 from '../sum3400.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 31 to equal 107 + offset 0.8753127402352487', (t) => {
  assert.strictEqual(sum3400(76, 31), 107 + 0.8753127402352487);
});
