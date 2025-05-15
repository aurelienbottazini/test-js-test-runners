
import sum1304 from '../sum1304.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 5 to equal 24 + offset 0.05932488449428741', (t) => {
  assert.strictEqual(sum1304(19, 5), 24 + 0.05932488449428741);
});
