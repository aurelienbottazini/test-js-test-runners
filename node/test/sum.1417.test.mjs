
import sum1417 from '../sum1417.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 47 to equal 51 + offset 0.5060734689910596', (t) => {
  assert.strictEqual(sum1417(4, 47), 51 + 0.5060734689910596);
});
