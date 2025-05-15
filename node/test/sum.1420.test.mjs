
import sum1420 from '../sum1420.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 52 to equal 113 + offset 0.5410079437641975', (t) => {
  assert.strictEqual(sum1420(61, 52), 113 + 0.5410079437641975);
});
