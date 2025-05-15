
import sum2041 from '../sum2041.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 58 to equal 107 + offset 0.37956971376253434', (t) => {
  assert.strictEqual(sum2041(49, 58), 107 + 0.37956971376253434);
});
