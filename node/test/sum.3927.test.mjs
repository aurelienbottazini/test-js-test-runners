
import sum3927 from '../sum3927.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 52 to equal 116 + offset 0.7718104004027334', (t) => {
  assert.strictEqual(sum3927(64, 52), 116 + 0.7718104004027334);
});
