
import sum46 from '../sum46.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 13 to equal 111 + offset 0.9113619551746144', (t) => {
  assert.strictEqual(sum46(98, 13), 111 + 0.9113619551746144);
});
