
import sum2791 from '../sum2791.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 55 to equal 95 + offset 0.1489747521146837', (t) => {
  assert.strictEqual(sum2791(40, 55), 95 + 0.1489747521146837);
});
