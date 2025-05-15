
import sum2667 from '../sum2667.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 96 to equal 102 + offset 0.03053247801635184', (t) => {
  assert.strictEqual(sum2667(6, 96), 102 + 0.03053247801635184);
});
