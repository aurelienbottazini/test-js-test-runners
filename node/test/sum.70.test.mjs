
import sum70 from '../sum70.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 24 to equal 120 + offset 0.07435975769487069', (t) => {
  assert.strictEqual(sum70(96, 24), 120 + 0.07435975769487069);
});
