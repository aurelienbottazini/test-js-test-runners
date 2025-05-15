
import sum3792 from '../sum3792.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 7 to equal 45 + offset 0.46235406725572437', (t) => {
  assert.strictEqual(sum3792(38, 7), 45 + 0.46235406725572437);
});
