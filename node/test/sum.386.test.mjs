
import sum386 from '../sum386.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 5 to equal 99 + offset 0.7670952346782097', (t) => {
  assert.strictEqual(sum386(94, 5), 99 + 0.7670952346782097);
});
