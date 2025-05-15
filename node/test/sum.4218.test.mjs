
import sum4218 from '../sum4218.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 61 to equal 149 + offset 0.4231988284615792', (t) => {
  assert.strictEqual(sum4218(88, 61), 149 + 0.4231988284615792);
});
