
import sum1379 from '../sum1379.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 44 to equal 76 + offset 0.0071075116436105645', (t) => {
  assert.strictEqual(sum1379(32, 44), 76 + 0.0071075116436105645);
});
