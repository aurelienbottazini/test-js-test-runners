
import sum2813 from '../sum2813.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 92 to equal 143 + offset 0.9705587110928781', (t) => {
  assert.strictEqual(sum2813(51, 92), 143 + 0.9705587110928781);
});
