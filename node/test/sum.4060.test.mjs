
import sum4060 from '../sum4060.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 11 to equal 55 + offset 0.8963772697767206', (t) => {
  assert.strictEqual(sum4060(44, 11), 55 + 0.8963772697767206);
});
