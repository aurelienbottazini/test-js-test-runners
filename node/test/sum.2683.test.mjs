
import sum2683 from '../sum2683.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 36 to equal 48 + offset 0.9879660017264444', (t) => {
  assert.strictEqual(sum2683(12, 36), 48 + 0.9879660017264444);
});
