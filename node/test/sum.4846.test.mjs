
import sum4846 from '../sum4846.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 98 to equal 98 + offset 0.34443469546369954', (t) => {
  assert.strictEqual(sum4846(0, 98), 98 + 0.34443469546369954);
});
