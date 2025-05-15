
import sum1870 from '../sum1870.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 54 to equal 145 + offset 0.7508987944008347', (t) => {
  assert.strictEqual(sum1870(91, 54), 145 + 0.7508987944008347);
});
