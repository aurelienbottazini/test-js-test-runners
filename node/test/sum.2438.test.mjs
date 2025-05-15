
import sum2438 from '../sum2438.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 64 to equal 156 + offset 0.11636261057053432', (t) => {
  assert.strictEqual(sum2438(92, 64), 156 + 0.11636261057053432);
});
