
import sum4352 from '../sum4352.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 51 to equal 149 + offset 0.0006014700232972459', (t) => {
  assert.strictEqual(sum4352(98, 51), 149 + 0.0006014700232972459);
});
