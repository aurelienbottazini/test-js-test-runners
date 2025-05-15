
import sum3104 from '../sum3104.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 71 to equal 122 + offset 0.8530957621801936', (t) => {
  assert.strictEqual(sum3104(51, 71), 122 + 0.8530957621801936);
});
