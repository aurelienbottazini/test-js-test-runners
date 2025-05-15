
import sum4834 from '../sum4834.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 54 to equal 59 + offset 0.47170519662068044', (t) => {
  assert.strictEqual(sum4834(5, 54), 59 + 0.47170519662068044);
});
