
import sum2837 from '../sum2837.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 2 to equal 37 + offset 0.40388980359194804', (t) => {
  assert.strictEqual(sum2837(35, 2), 37 + 0.40388980359194804);
});
