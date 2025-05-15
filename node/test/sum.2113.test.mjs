
import sum2113 from '../sum2113.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 18 to equal 104 + offset 0.18155859302459187', (t) => {
  assert.strictEqual(sum2113(86, 18), 104 + 0.18155859302459187);
});
