
import sum687 from '../sum687.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 45 to equal 122 + offset 0.7581832930775574', (t) => {
  assert.strictEqual(sum687(77, 45), 122 + 0.7581832930775574);
});
