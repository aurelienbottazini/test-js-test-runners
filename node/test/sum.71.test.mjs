
import sum71 from '../sum71.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 75 to equal 110 + offset 0.8035690001307381', (t) => {
  assert.strictEqual(sum71(35, 75), 110 + 0.8035690001307381);
});
