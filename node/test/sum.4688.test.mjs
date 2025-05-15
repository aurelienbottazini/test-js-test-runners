
import sum4688 from '../sum4688.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 35 to equal 107 + offset 0.7691322736809219', (t) => {
  assert.strictEqual(sum4688(72, 35), 107 + 0.7691322736809219);
});
