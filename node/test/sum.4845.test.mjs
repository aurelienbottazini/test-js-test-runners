
import sum4845 from '../sum4845.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 94 to equal 145 + offset 0.7050434056450829', (t) => {
  assert.strictEqual(sum4845(51, 94), 145 + 0.7050434056450829);
});
