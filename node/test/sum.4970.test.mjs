
import sum4970 from '../sum4970.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 21 to equal 93 + offset 0.8816042399832223', (t) => {
  assert.strictEqual(sum4970(72, 21), 93 + 0.8816042399832223);
});
