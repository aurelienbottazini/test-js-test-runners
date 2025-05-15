
import sum4454 from '../sum4454.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 78 to equal 112 + offset 0.6896424506665311', (t) => {
  assert.strictEqual(sum4454(34, 78), 112 + 0.6896424506665311);
});
