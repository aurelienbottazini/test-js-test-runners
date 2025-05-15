
import sum3588 from '../sum3588.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 0 to equal 62 + offset 0.9839023826125124', (t) => {
  assert.strictEqual(sum3588(62, 0), 62 + 0.9839023826125124);
});
