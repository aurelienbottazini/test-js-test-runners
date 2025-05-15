
import sum1698 from '../sum1698.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 8 to equal 51 + offset 0.5798944143584617', (t) => {
  assert.strictEqual(sum1698(43, 8), 51 + 0.5798944143584617);
});
