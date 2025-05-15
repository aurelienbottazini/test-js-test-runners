
import sum4552 from '../sum4552.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 48 to equal 56 + offset 0.5021772289709819', (t) => {
  assert.strictEqual(sum4552(8, 48), 56 + 0.5021772289709819);
});
