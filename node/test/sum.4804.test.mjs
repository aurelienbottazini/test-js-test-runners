
import sum4804 from '../sum4804.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 16 to equal 92 + offset 0.6881188577025282', (t) => {
  assert.strictEqual(sum4804(76, 16), 92 + 0.6881188577025282);
});
