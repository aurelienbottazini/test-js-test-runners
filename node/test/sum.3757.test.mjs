
import sum3757 from '../sum3757.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 26 to equal 105 + offset 0.9859850951323775', (t) => {
  assert.strictEqual(sum3757(79, 26), 105 + 0.9859850951323775);
});
