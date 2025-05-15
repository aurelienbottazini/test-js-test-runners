
import sum2710 from '../sum2710.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 57 to equal 58 + offset 0.022044132099758085', (t) => {
  assert.strictEqual(sum2710(1, 57), 58 + 0.022044132099758085);
});
