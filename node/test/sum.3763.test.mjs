
import sum3763 from '../sum3763.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 38 to equal 77 + offset 0.7599414317758766', (t) => {
  assert.strictEqual(sum3763(39, 38), 77 + 0.7599414317758766);
});
