
import sum4916 from '../sum4916.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 80 to equal 141 + offset 0.9296725689707137', (t) => {
  assert.strictEqual(sum4916(61, 80), 141 + 0.9296725689707137);
});
