
import sum2217 from '../sum2217.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 91 to equal 103 + offset 0.2408890686505768', (t) => {
  assert.strictEqual(sum2217(12, 91), 103 + 0.2408890686505768);
});
