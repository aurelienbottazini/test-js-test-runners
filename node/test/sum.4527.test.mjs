
import sum4527 from '../sum4527.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 91 to equal 171 + offset 0.6400311625420305', (t) => {
  assert.strictEqual(sum4527(80, 91), 171 + 0.6400311625420305);
});
