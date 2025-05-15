
import sum1167 from '../sum1167.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 89 to equal 184 + offset 0.2316510876992387', (t) => {
  assert.strictEqual(sum1167(95, 89), 184 + 0.2316510876992387);
});
