
import sum1180 from '../sum1180.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 38 to equal 106 + offset 0.8409596708700743', (t) => {
  assert.strictEqual(sum1180(68, 38), 106 + 0.8409596708700743);
});
