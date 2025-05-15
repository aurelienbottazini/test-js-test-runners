
import sum1508 from '../sum1508.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 35 to equal 61 + offset 0.08607578681374883', (t) => {
  assert.strictEqual(sum1508(26, 35), 61 + 0.08607578681374883);
});
