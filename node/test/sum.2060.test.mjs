
import sum2060 from '../sum2060.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 19 to equal 113 + offset 0.6654723193322337', (t) => {
  assert.strictEqual(sum2060(94, 19), 113 + 0.6654723193322337);
});
