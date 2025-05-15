
import sum4497 from '../sum4497.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 85 to equal 101 + offset 0.5605793561167705', (t) => {
  assert.strictEqual(sum4497(16, 85), 101 + 0.5605793561167705);
});
