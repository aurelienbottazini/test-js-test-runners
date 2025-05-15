
import sum4735 from '../sum4735.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 64 to equal 159 + offset 0.2227708589992905', (t) => {
  assert.strictEqual(sum4735(95, 64), 159 + 0.2227708589992905);
});
