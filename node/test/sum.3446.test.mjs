
import sum3446 from '../sum3446.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 89 to equal 92 + offset 0.7167097729553413', (t) => {
  assert.strictEqual(sum3446(3, 89), 92 + 0.7167097729553413);
});
