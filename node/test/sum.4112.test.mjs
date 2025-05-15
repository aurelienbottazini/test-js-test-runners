
import sum4112 from '../sum4112.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 21 to equal 109 + offset 0.6448071536971295', (t) => {
  assert.strictEqual(sum4112(88, 21), 109 + 0.6448071536971295);
});
