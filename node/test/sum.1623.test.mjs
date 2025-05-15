
import sum1623 from '../sum1623.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 19 to equal 69 + offset 0.5235520858805612', (t) => {
  assert.strictEqual(sum1623(50, 19), 69 + 0.5235520858805612);
});
