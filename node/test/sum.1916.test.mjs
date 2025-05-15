
import sum1916 from '../sum1916.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 66 to equal 91 + offset 0.8142745763483951', (t) => {
  assert.strictEqual(sum1916(25, 66), 91 + 0.8142745763483951);
});
