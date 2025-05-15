
import sum2238 from '../sum2238.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 51 to equal 103 + offset 0.7263706622677656', (t) => {
  assert.strictEqual(sum2238(52, 51), 103 + 0.7263706622677656);
});
