
import sum1313 from '../sum1313.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 24 to equal 87 + offset 0.6864607561612405', (t) => {
  assert.strictEqual(sum1313(63, 24), 87 + 0.6864607561612405);
});
