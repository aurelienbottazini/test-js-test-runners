
import sum2652 from '../sum2652.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 12 to equal 33 + offset 0.04598857356771269', (t) => {
  assert.strictEqual(sum2652(21, 12), 33 + 0.04598857356771269);
});
