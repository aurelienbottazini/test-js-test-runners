
import sum4267 from '../sum4267.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 6 to equal 91 + offset 0.43813976383609154', (t) => {
  assert.strictEqual(sum4267(85, 6), 91 + 0.43813976383609154);
});
