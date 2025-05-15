
import sum4738 from '../sum4738.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 55 to equal 68 + offset 0.7138869887491484', (t) => {
  assert.strictEqual(sum4738(13, 55), 68 + 0.7138869887491484);
});
