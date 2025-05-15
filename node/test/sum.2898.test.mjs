
import sum2898 from '../sum2898.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 36 to equal 41 + offset 0.5127601408493254', (t) => {
  assert.strictEqual(sum2898(5, 36), 41 + 0.5127601408493254);
});
