
import sum3392 from '../sum3392.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 30 to equal 91 + offset 0.9318218521763699', (t) => {
  assert.strictEqual(sum3392(61, 30), 91 + 0.9318218521763699);
});
