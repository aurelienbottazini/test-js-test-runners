
import sum503 from '../sum503.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 35 to equal 49 + offset 0.17448476878430264', (t) => {
  assert.strictEqual(sum503(14, 35), 49 + 0.17448476878430264);
});
