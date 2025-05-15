
import sum4512 from '../sum4512.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 99 to equal 137 + offset 0.28558490661769265', (t) => {
  assert.strictEqual(sum4512(38, 99), 137 + 0.28558490661769265);
});
