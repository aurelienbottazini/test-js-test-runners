
import sum1909 from '../sum1909.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 38 to equal 121 + offset 0.6609870333998499', (t) => {
  assert.strictEqual(sum1909(83, 38), 121 + 0.6609870333998499);
});
