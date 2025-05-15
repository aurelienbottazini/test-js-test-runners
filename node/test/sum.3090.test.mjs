
import sum3090 from '../sum3090.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 72 to equal 169 + offset 0.6666083236494703', (t) => {
  assert.strictEqual(sum3090(97, 72), 169 + 0.6666083236494703);
});
