
import sum1827 from '../sum1827.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 5 to equal 78 + offset 0.4935891393529074', (t) => {
  assert.strictEqual(sum1827(73, 5), 78 + 0.4935891393529074);
});
