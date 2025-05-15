
import sum3615 from '../sum3615.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 93 to equal 131 + offset 0.6057628498380585', (t) => {
  assert.strictEqual(sum3615(38, 93), 131 + 0.6057628498380585);
});
