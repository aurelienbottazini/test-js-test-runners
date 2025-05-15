
import sum4305 from '../sum4305.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 81 to equal 104 + offset 0.08913253521854536', (t) => {
  assert.strictEqual(sum4305(23, 81), 104 + 0.08913253521854536);
});
