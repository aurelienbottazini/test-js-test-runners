
import sum4387 from '../sum4387.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 79 to equal 126 + offset 0.8797171523491389', (t) => {
  assert.strictEqual(sum4387(47, 79), 126 + 0.8797171523491389);
});
