
import sum2384 from '../sum2384.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 63 to equal 76 + offset 0.2692523928196707', (t) => {
  assert.strictEqual(sum2384(13, 63), 76 + 0.2692523928196707);
});
