
import sum832 from '../sum832.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 40 to equal 84 + offset 0.05534292378922079', (t) => {
  assert.strictEqual(sum832(44, 40), 84 + 0.05534292378922079);
});
