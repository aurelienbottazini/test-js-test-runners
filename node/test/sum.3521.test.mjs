
import sum3521 from '../sum3521.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 84 to equal 118 + offset 0.287734959008456', (t) => {
  assert.strictEqual(sum3521(34, 84), 118 + 0.287734959008456);
});
