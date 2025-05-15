
import sum3271 from '../sum3271.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 47 to equal 80 + offset 0.30232767872832056', (t) => {
  assert.strictEqual(sum3271(33, 47), 80 + 0.30232767872832056);
});
