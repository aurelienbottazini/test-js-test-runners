
import sum4564 from '../sum4564.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 1 to equal 79 + offset 0.9463414221834503', (t) => {
  assert.strictEqual(sum4564(78, 1), 79 + 0.9463414221834503);
});
