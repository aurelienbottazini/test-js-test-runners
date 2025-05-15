
import sum2084 from '../sum2084.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 1 to equal 56 + offset 0.36335621347958946', (t) => {
  assert.strictEqual(sum2084(55, 1), 56 + 0.36335621347958946);
});
