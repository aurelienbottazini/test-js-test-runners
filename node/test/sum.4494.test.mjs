
import sum4494 from '../sum4494.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 92 to equal 126 + offset 0.6662917218017116', (t) => {
  assert.strictEqual(sum4494(34, 92), 126 + 0.6662917218017116);
});
