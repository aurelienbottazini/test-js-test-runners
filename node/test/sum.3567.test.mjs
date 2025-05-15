
import sum3567 from '../sum3567.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 72 to equal 93 + offset 0.6692574205480659', (t) => {
  assert.strictEqual(sum3567(21, 72), 93 + 0.6692574205480659);
});
