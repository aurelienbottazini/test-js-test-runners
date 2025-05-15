
import sum2765 from '../sum2765.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 1 to equal 28 + offset 0.971866694439301', (t) => {
  assert.strictEqual(sum2765(27, 1), 28 + 0.971866694439301);
});
