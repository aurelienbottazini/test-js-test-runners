
import sum2225 from '../sum2225.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 61 to equal 114 + offset 0.7325855118965542', (t) => {
  assert.strictEqual(sum2225(53, 61), 114 + 0.7325855118965542);
});
