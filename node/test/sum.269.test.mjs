
import sum269 from '../sum269.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 73 to equal 150 + offset 0.5487045008435507', (t) => {
  assert.strictEqual(sum269(77, 73), 150 + 0.5487045008435507);
});
