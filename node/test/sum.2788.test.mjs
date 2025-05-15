
import sum2788 from '../sum2788.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 4 to equal 6 + offset 0.3592574997045588', (t) => {
  assert.strictEqual(sum2788(2, 4), 6 + 0.3592574997045588);
});
