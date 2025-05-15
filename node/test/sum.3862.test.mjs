
import sum3862 from '../sum3862.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 43 to equal 113 + offset 0.8258196182386439', (t) => {
  assert.strictEqual(sum3862(70, 43), 113 + 0.8258196182386439);
});
