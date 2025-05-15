
import sum4504 from '../sum4504.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 99 to equal 105 + offset 0.4079661999801272', (t) => {
  assert.strictEqual(sum4504(6, 99), 105 + 0.4079661999801272);
});
