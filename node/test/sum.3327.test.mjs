
import sum3327 from '../sum3327.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 41 to equal 99 + offset 0.9040339121286798', (t) => {
  assert.strictEqual(sum3327(58, 41), 99 + 0.9040339121286798);
});
