
import sum2218 from '../sum2218.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 24 to equal 40 + offset 0.7980665987482592', (t) => {
  assert.strictEqual(sum2218(16, 24), 40 + 0.7980665987482592);
});
