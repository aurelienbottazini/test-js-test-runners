
import sum4255 from '../sum4255.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 46 to equal 75 + offset 0.5073753286216806', (t) => {
  assert.strictEqual(sum4255(29, 46), 75 + 0.5073753286216806);
});
