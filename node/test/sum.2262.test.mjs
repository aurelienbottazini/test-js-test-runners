
import sum2262 from '../sum2262.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 21 to equal 120 + offset 0.32410652605626966', (t) => {
  assert.strictEqual(sum2262(99, 21), 120 + 0.32410652605626966);
});
