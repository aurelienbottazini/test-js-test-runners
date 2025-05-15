
import sum3231 from '../sum3231.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 38 to equal 69 + offset 0.6346589980135977', (t) => {
  assert.strictEqual(sum3231(31, 38), 69 + 0.6346589980135977);
});
