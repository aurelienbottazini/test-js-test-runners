
import sum1301 from '../sum1301.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 34 to equal 105 + offset 0.8579508322830877', (t) => {
  assert.strictEqual(sum1301(71, 34), 105 + 0.8579508322830877);
});
