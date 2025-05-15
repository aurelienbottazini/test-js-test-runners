
import sum2478 from '../sum2478.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 27 to equal 95 + offset 0.7767139893185538', (t) => {
  assert.strictEqual(sum2478(68, 27), 95 + 0.7767139893185538);
});
