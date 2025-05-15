
import sum4090 from '../sum4090.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 14 to equal 84 + offset 0.8297520005347452', (t) => {
  assert.strictEqual(sum4090(70, 14), 84 + 0.8297520005347452);
});
