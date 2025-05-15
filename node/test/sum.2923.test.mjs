
import sum2923 from '../sum2923.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 73 to equal 79 + offset 0.004818520211187227', (t) => {
  assert.strictEqual(sum2923(6, 73), 79 + 0.004818520211187227);
});
