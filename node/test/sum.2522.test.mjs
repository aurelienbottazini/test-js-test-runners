
import sum2522 from '../sum2522.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 95 to equal 135 + offset 0.6925195028667792', (t) => {
  assert.strictEqual(sum2522(40, 95), 135 + 0.6925195028667792);
});
