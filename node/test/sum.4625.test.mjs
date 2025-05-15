
import sum4625 from '../sum4625.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 52 to equal 76 + offset 0.59583188756931', (t) => {
  assert.strictEqual(sum4625(24, 52), 76 + 0.59583188756931);
});
