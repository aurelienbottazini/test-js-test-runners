
import sum4818 from '../sum4818.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 66 to equal 99 + offset 0.8721348210714386', (t) => {
  assert.strictEqual(sum4818(33, 66), 99 + 0.8721348210714386);
});
