
import sum2416 from '../sum2416.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 35 to equal 125 + offset 0.7610896214373923', (t) => {
  assert.strictEqual(sum2416(90, 35), 125 + 0.7610896214373923);
});
