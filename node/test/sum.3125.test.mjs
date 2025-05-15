
import sum3125 from '../sum3125.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 35 to equal 119 + offset 0.6324769472343615', (t) => {
  assert.strictEqual(sum3125(84, 35), 119 + 0.6324769472343615);
});
