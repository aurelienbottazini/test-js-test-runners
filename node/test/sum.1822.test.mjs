
import sum1822 from '../sum1822.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 74 to equal 142 + offset 0.6513524894099733', (t) => {
  assert.strictEqual(sum1822(68, 74), 142 + 0.6513524894099733);
});
