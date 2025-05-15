
import sum1810 from '../sum1810.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 67 to equal 97 + offset 0.09186005204325387', (t) => {
  assert.strictEqual(sum1810(30, 67), 97 + 0.09186005204325387);
});
