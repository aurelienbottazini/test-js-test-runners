
import sum4537 from '../sum4537.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 60 to equal 119 + offset 0.16469790460739253', (t) => {
  assert.strictEqual(sum4537(59, 60), 119 + 0.16469790460739253);
});
