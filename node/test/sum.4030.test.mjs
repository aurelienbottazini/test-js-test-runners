
import sum4030 from '../sum4030.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 64 to equal 154 + offset 0.7618126346659261', (t) => {
  assert.strictEqual(sum4030(90, 64), 154 + 0.7618126346659261);
});
