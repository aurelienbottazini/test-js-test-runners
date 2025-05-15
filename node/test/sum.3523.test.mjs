
import sum3523 from '../sum3523.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 43 to equal 101 + offset 0.5700209689110056', (t) => {
  assert.strictEqual(sum3523(58, 43), 101 + 0.5700209689110056);
});
