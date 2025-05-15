
import sum2469 from '../sum2469.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 34 to equal 83 + offset 0.24233747621142177', (t) => {
  assert.strictEqual(sum2469(49, 34), 83 + 0.24233747621142177);
});
