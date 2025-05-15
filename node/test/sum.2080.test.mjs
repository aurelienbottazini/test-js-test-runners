
import sum2080 from '../sum2080.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 66 to equal 130 + offset 0.31478409361090465', (t) => {
  assert.strictEqual(sum2080(64, 66), 130 + 0.31478409361090465);
});
