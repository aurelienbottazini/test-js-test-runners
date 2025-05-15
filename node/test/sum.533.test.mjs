
import sum533 from '../sum533.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 79 to equal 166 + offset 0.33877342801564614', (t) => {
  assert.strictEqual(sum533(87, 79), 166 + 0.33877342801564614);
});
