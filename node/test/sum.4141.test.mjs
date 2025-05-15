
import sum4141 from '../sum4141.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 77 to equal 78 + offset 0.939605974364989', (t) => {
  assert.strictEqual(sum4141(1, 77), 78 + 0.939605974364989);
});
