
import sum4334 from '../sum4334.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 1 to equal 58 + offset 0.46789954658271105', (t) => {
  assert.strictEqual(sum4334(57, 1), 58 + 0.46789954658271105);
});
