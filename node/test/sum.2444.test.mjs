
import sum2444 from '../sum2444.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 69 to equal 121 + offset 0.9833223593944188', (t) => {
  assert.strictEqual(sum2444(52, 69), 121 + 0.9833223593944188);
});
