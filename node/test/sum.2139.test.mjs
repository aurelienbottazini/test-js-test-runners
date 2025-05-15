
import sum2139 from '../sum2139.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 10 to equal 75 + offset 0.5411864772693612', (t) => {
  assert.strictEqual(sum2139(65, 10), 75 + 0.5411864772693612);
});
