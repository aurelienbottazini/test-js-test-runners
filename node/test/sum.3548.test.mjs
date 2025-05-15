
import sum3548 from '../sum3548.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 94 to equal 138 + offset 0.01072841886721454', (t) => {
  assert.strictEqual(sum3548(44, 94), 138 + 0.01072841886721454);
});
