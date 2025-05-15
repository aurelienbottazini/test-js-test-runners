
import sum2088 from '../sum2088.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 39 to equal 58 + offset 0.6739289730241872', (t) => {
  assert.strictEqual(sum2088(19, 39), 58 + 0.6739289730241872);
});
