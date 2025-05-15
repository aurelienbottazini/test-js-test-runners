
import sum2100 from '../sum2100.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 73 to equal 82 + offset 0.9657395284341722', (t) => {
  assert.strictEqual(sum2100(9, 73), 82 + 0.9657395284341722);
});
