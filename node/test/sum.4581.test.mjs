
import sum4581 from '../sum4581.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 38 to equal 115 + offset 0.2944160622323998', (t) => {
  assert.strictEqual(sum4581(77, 38), 115 + 0.2944160622323998);
});
