
import sum457 from '../sum457.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 14 to equal 99 + offset 0.6654428651247302', (t) => {
  assert.strictEqual(sum457(85, 14), 99 + 0.6654428651247302);
});
