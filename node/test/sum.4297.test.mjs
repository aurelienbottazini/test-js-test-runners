
import sum4297 from '../sum4297.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 42 to equal 51 + offset 0.47980142103734047', (t) => {
  assert.strictEqual(sum4297(9, 42), 51 + 0.47980142103734047);
});
