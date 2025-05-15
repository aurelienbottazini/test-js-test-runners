
import sum4878 from '../sum4878.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 36 to equal 80 + offset 0.7135933162649629', (t) => {
  assert.strictEqual(sum4878(44, 36), 80 + 0.7135933162649629);
});
