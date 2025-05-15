
import sum21 from '../sum21.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 39 to equal 119 + offset 0.5418677492316838', (t) => {
  assert.strictEqual(sum21(80, 39), 119 + 0.5418677492316838);
});
