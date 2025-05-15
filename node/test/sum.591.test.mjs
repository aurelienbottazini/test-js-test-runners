
import sum591 from '../sum591.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 71 to equal 126 + offset 0.5607090842288205', (t) => {
  assert.strictEqual(sum591(55, 71), 126 + 0.5607090842288205);
});
