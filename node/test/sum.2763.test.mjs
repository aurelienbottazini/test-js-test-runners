
import sum2763 from '../sum2763.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 27 to equal 84 + offset 0.6968603615438198', (t) => {
  assert.strictEqual(sum2763(57, 27), 84 + 0.6968603615438198);
});
