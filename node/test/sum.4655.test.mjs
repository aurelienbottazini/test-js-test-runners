
import sum4655 from '../sum4655.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 91 to equal 137 + offset 0.9719441411387632', (t) => {
  assert.strictEqual(sum4655(46, 91), 137 + 0.9719441411387632);
});
