
import sum2584 from '../sum2584.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 38 to equal 118 + offset 0.493251898753697', (t) => {
  assert.strictEqual(sum2584(80, 38), 118 + 0.493251898753697);
});
