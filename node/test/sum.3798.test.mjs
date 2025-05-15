
import sum3798 from '../sum3798.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 41 to equal 99 + offset 0.9293092576878336', (t) => {
  assert.strictEqual(sum3798(58, 41), 99 + 0.9293092576878336);
});
