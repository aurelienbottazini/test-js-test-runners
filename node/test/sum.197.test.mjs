
import sum197 from '../sum197.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 76 to equal 99 + offset 0.5990149833185148', (t) => {
  assert.strictEqual(sum197(23, 76), 99 + 0.5990149833185148);
});
