
import sum4863 from '../sum4863.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 67 to equal 87 + offset 0.4173103511053432', (t) => {
  assert.strictEqual(sum4863(20, 67), 87 + 0.4173103511053432);
});
