
import sum2587 from '../sum2587.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 95 to equal 154 + offset 0.7437344628142076', (t) => {
  assert.strictEqual(sum2587(59, 95), 154 + 0.7437344628142076);
});
