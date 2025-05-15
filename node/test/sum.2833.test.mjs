
import sum2833 from '../sum2833.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 30 to equal 66 + offset 0.6400117516634947', (t) => {
  assert.strictEqual(sum2833(36, 30), 66 + 0.6400117516634947);
});
