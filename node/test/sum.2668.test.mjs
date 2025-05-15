
import sum2668 from '../sum2668.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 95 to equal 173 + offset 0.7394390711191606', (t) => {
  assert.strictEqual(sum2668(78, 95), 173 + 0.7394390711191606);
});
