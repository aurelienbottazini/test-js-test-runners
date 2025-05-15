
import sum1874 from '../sum1874.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 80 to equal 133 + offset 0.9832671579287806', (t) => {
  assert.strictEqual(sum1874(53, 80), 133 + 0.9832671579287806);
});
