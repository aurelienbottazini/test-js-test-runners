
import sum3467 from '../sum3467.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 99 to equal 163 + offset 0.9959847498781838', (t) => {
  assert.strictEqual(sum3467(64, 99), 163 + 0.9959847498781838);
});
