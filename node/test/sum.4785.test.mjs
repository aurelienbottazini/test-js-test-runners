
import sum4785 from '../sum4785.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 44 to equal 49 + offset 0.472011568700323', (t) => {
  assert.strictEqual(sum4785(5, 44), 49 + 0.472011568700323);
});
