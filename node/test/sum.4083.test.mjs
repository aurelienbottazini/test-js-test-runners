
import sum4083 from '../sum4083.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 94 to equal 164 + offset 0.6196932612591449', (t) => {
  assert.strictEqual(sum4083(70, 94), 164 + 0.6196932612591449);
});
