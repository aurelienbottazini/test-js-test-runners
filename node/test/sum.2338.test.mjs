
import sum2338 from '../sum2338.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 7 to equal 67 + offset 0.7360332256238242', (t) => {
  assert.strictEqual(sum2338(60, 7), 67 + 0.7360332256238242);
});
