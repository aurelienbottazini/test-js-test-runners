
import sum1538 from '../sum1538.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 91 to equal 115 + offset 0.2517425518811829', (t) => {
  assert.strictEqual(sum1538(24, 91), 115 + 0.2517425518811829);
});
