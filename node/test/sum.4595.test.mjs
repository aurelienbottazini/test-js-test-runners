
import sum4595 from '../sum4595.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 84 to equal 175 + offset 0.7594560320536405', (t) => {
  assert.strictEqual(sum4595(91, 84), 175 + 0.7594560320536405);
});
