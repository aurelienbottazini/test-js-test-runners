
import sum3468 from '../sum3468.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 1 to equal 8 + offset 0.1989709313213015', (t) => {
  assert.strictEqual(sum3468(7, 1), 8 + 0.1989709313213015);
});
