
import sum1878 from '../sum1878.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 23 to equal 75 + offset 0.9821082687442692', (t) => {
  assert.strictEqual(sum1878(52, 23), 75 + 0.9821082687442692);
});
