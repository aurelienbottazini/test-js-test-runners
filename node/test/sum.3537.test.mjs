
import sum3537 from '../sum3537.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 62 to equal 156 + offset 0.8719987510757164', (t) => {
  assert.strictEqual(sum3537(94, 62), 156 + 0.8719987510757164);
});
