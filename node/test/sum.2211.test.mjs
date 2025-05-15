
import sum2211 from '../sum2211.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 75 to equal 82 + offset 0.9266215826068116', (t) => {
  assert.strictEqual(sum2211(7, 75), 82 + 0.9266215826068116);
});
