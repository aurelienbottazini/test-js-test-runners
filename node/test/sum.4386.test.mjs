
import sum4386 from '../sum4386.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 55 to equal 140 + offset 0.19218950302698834', (t) => {
  assert.strictEqual(sum4386(85, 55), 140 + 0.19218950302698834);
});
