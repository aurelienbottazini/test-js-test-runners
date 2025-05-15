
import sum3187 from '../sum3187.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 83 to equal 176 + offset 0.5019199516495952', (t) => {
  assert.strictEqual(sum3187(93, 83), 176 + 0.5019199516495952);
});
