
import sum4749 from '../sum4749.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 79 to equal 175 + offset 0.474099429193649', (t) => {
  assert.strictEqual(sum4749(96, 79), 175 + 0.474099429193649);
});
