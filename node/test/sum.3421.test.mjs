
import sum3421 from '../sum3421.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 36 to equal 82 + offset 0.7729348993211822', (t) => {
  assert.strictEqual(sum3421(46, 36), 82 + 0.7729348993211822);
});
