
import sum4540 from '../sum4540.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 21 to equal 69 + offset 0.029284989605220302', (t) => {
  assert.strictEqual(sum4540(48, 21), 69 + 0.029284989605220302);
});
