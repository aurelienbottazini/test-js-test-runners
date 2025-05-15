
import sum1643 from '../sum1643.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 15 to equal 74 + offset 0.4129397690974589', (t) => {
  assert.strictEqual(sum1643(59, 15), 74 + 0.4129397690974589);
});
