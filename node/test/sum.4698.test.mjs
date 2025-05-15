
import sum4698 from '../sum4698.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 19 to equal 70 + offset 0.6876010378474435', (t) => {
  assert.strictEqual(sum4698(51, 19), 70 + 0.6876010378474435);
});
