
import sum4837 from '../sum4837.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 61 to equal 61 + offset 0.06625945113332765', (t) => {
  assert.strictEqual(sum4837(0, 61), 61 + 0.06625945113332765);
});
