
import sum3179 from '../sum3179.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 69 to equal 156 + offset 0.0690162777744856', (t) => {
  assert.strictEqual(sum3179(87, 69), 156 + 0.0690162777744856);
});
