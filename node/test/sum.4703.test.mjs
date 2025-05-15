
import sum4703 from '../sum4703.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 71 to equal 148 + offset 0.7362446544839464', (t) => {
  assert.strictEqual(sum4703(77, 71), 148 + 0.7362446544839464);
});
