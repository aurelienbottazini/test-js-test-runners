
import sum4554 from '../sum4554.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 40 to equal 86 + offset 0.17224361850093262', (t) => {
  assert.strictEqual(sum4554(46, 40), 86 + 0.17224361850093262);
});
