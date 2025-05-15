
import sum2513 from '../sum2513.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 0 to equal 22 + offset 0.22611320110472166', (t) => {
  assert.strictEqual(sum2513(22, 0), 22 + 0.22611320110472166);
});
