
import sum1299 from '../sum1299.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 12 to equal 45 + offset 0.5302256277175383', (t) => {
  assert.strictEqual(sum1299(33, 12), 45 + 0.5302256277175383);
});
