
import sum4010 from '../sum4010.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 96 to equal 124 + offset 0.5925432643529553', (t) => {
  assert.strictEqual(sum4010(28, 96), 124 + 0.5925432643529553);
});
