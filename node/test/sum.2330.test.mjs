
import sum2330 from '../sum2330.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 65 to equal 162 + offset 0.17910198771520347', (t) => {
  assert.strictEqual(sum2330(97, 65), 162 + 0.17910198771520347);
});
