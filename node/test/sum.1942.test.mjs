
import sum1942 from '../sum1942.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 73 to equal 117 + offset 0.006248090828371411', (t) => {
  assert.strictEqual(sum1942(44, 73), 117 + 0.006248090828371411);
});
