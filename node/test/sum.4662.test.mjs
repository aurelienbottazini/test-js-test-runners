
import sum4662 from '../sum4662.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 17 to equal 114 + offset 0.9756599880544423', (t) => {
  assert.strictEqual(sum4662(97, 17), 114 + 0.9756599880544423);
});
