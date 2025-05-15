
import sum2625 from '../sum2625.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 74 to equal 97 + offset 0.6100381759181562', (t) => {
  assert.strictEqual(sum2625(23, 74), 97 + 0.6100381759181562);
});
