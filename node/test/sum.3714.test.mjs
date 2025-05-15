
import sum3714 from '../sum3714.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 11 to equal 66 + offset 0.7261811681596777', (t) => {
  assert.strictEqual(sum3714(55, 11), 66 + 0.7261811681596777);
});
