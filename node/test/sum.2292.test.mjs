
import sum2292 from '../sum2292.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 78 to equal 167 + offset 0.04339541861017393', (t) => {
  assert.strictEqual(sum2292(89, 78), 167 + 0.04339541861017393);
});
