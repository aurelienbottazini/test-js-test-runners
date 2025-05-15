
import sum4661 from '../sum4661.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 14 to equal 101 + offset 0.44763215968834247', (t) => {
  assert.strictEqual(sum4661(87, 14), 101 + 0.44763215968834247);
});
