
import sum2155 from '../sum2155.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 89 to equal 104 + offset 0.9629445324605929', (t) => {
  assert.strictEqual(sum2155(15, 89), 104 + 0.9629445324605929);
});
