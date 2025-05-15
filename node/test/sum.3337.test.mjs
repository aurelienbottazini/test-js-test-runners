
import sum3337 from '../sum3337.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 39 to equal 113 + offset 0.1326698041318637', (t) => {
  assert.strictEqual(sum3337(74, 39), 113 + 0.1326698041318637);
});
