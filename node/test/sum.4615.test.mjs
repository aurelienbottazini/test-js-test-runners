
import sum4615 from '../sum4615.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 54 to equal 104 + offset 0.4569417832851079', (t) => {
  assert.strictEqual(sum4615(50, 54), 104 + 0.4569417832851079);
});
