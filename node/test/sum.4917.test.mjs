
import sum4917 from '../sum4917.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 42 to equal 68 + offset 0.8431937686608706', (t) => {
  assert.strictEqual(sum4917(26, 42), 68 + 0.8431937686608706);
});
