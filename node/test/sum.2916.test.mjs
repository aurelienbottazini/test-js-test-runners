
import sum2916 from '../sum2916.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 45 to equal 53 + offset 0.3111652354400847', (t) => {
  assert.strictEqual(sum2916(8, 45), 53 + 0.3111652354400847);
});
