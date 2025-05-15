
import sum2782 from '../sum2782.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 27 to equal 120 + offset 0.9610231235791986', (t) => {
  assert.strictEqual(sum2782(93, 27), 120 + 0.9610231235791986);
});
