
import sum4926 from '../sum4926.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 68 to equal 144 + offset 0.09260409882936571', (t) => {
  assert.strictEqual(sum4926(76, 68), 144 + 0.09260409882936571);
});
