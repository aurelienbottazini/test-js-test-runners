
import sum4242 from '../sum4242.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 39 to equal 55 + offset 0.8136342315969018', (t) => {
  assert.strictEqual(sum4242(16, 39), 55 + 0.8136342315969018);
});
