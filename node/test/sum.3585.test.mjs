
import sum3585 from '../sum3585.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 57 to equal 145 + offset 0.8967650637420399', (t) => {
  assert.strictEqual(sum3585(88, 57), 145 + 0.8967650637420399);
});
