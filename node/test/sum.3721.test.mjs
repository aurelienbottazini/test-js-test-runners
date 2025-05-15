
import sum3721 from '../sum3721.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 31 to equal 119 + offset 0.6960238236307444', (t) => {
  assert.strictEqual(sum3721(88, 31), 119 + 0.6960238236307444);
});
