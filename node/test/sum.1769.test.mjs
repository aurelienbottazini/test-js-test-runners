
import sum1769 from '../sum1769.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 55 to equal 116 + offset 0.552603556947678', (t) => {
  assert.strictEqual(sum1769(61, 55), 116 + 0.552603556947678);
});
