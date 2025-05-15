
import sum2453 from '../sum2453.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 20 to equal 111 + offset 0.4031812834958328', (t) => {
  assert.strictEqual(sum2453(91, 20), 111 + 0.4031812834958328);
});
