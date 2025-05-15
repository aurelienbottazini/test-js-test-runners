
import sum2744 from '../sum2744.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 75 to equal 108 + offset 0.7392592629524878', (t) => {
  assert.strictEqual(sum2744(33, 75), 108 + 0.7392592629524878);
});
