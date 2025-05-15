
import sum3268 from '../sum3268.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 74 to equal 106 + offset 0.929902436060264', (t) => {
  assert.strictEqual(sum3268(32, 74), 106 + 0.929902436060264);
});
