
import sum2164 from '../sum2164.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 24 to equal 32 + offset 0.9887895380170537', (t) => {
  assert.strictEqual(sum2164(8, 24), 32 + 0.9887895380170537);
});
